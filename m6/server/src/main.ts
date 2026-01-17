// import path from "path";
//
// import express, {
//     Express,
//     NextFunction,
//     Request,
//     Response
// } from "express";
//
// import { serverInfo } from "./ServerInfo";
//
// import * as IMAP from "./IMAP";
// import * as SMTP from "./SMTP";
// import * as Contacts from "./Contacts";
//
// import { IContact } from "./Contacts";
//
//
// const app = express();
//
// app.use(express.json());
//
// app.use("/", express.static(path.join(__dirname, "../../client/dist")));
//
// app.use(function (inRequest: Request, inResponse: Response, inNext: NextFunction) {
//
//     inResponse.header("Access-Control-Allow-Origin", "*");
//     inResponse.header(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, OPTIONS"
//     );
//     inResponse.header(
//         "Access-Control-Allow-Headers",
//         "Content-Type"
//     );
//
//     inNext();
//
// });
// app.get("/mailboxes",
//     async (inRequest: Request, inResponse: Response) => {
//         try {
//             const imapWorker: IMAP.Worker = new IMAP.Worker(serverInfo);
//             const mailboxes: IMAP.IMailbox[] = await imapWorker.listMailboxes();
//             inResponse.json(mailboxes);
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
// app.get("/mailboxes/:mailbox",
//     async (inRequest: Request, inResponse: Response) => {
//         try {
//             const imapWorker: IMAP.Worker =
//                 new IMAP.Worker(serverInfo);
//             const messages: IMAP.IMessage[] =
//                 await imapWorker.listMessages(
//                     inRequest.params.mailbox
//                 );
//             inResponse.json(messages);
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
//
//
// app.get("/messages/:mailbox/:id",
//     async (
//         inRequest: Request<{ mailbox: string; id: string }>,
//         inResponse: Response
//     ) => {
//         try {
//             const imapWorker: IMAP.Worker =
//                 new IMAP.Worker(serverInfo);
//
//             const messageBody: string =
//                 await imapWorker.getMessageBody({
//                     mailbox : inRequest.params.mailbox,
//                     id : parseInt(inRequest.params.id, 10)
//                 });
//
//             inResponse.send(messageBody);
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
//
//
// app.delete("/messages/:mailbox/:id",
//     async (
//         inRequest: Request<{ mailbox: string; id: string }>,
//         inResponse: Response
//     ) => {
//         try {
//             const imapWorker: IMAP.Worker =
//                 new IMAP.Worker(serverInfo);
//
//             await imapWorker.deleteMessage({
//                 mailbox : inRequest.params.mailbox,
//                 id : parseInt(inRequest.params.id, 10)
//             });
//
//             inResponse.send("ok");
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
//
//
// app.post("/messages",
//     async (inRequest: Request, inResponse: Response) => {
//         try {
//             const smtpWorker: SMTP.Worker =
//                 new SMTP.Worker(serverInfo);
//
//             await smtpWorker.sendMessage(inRequest.body);
//
//             inResponse.send("ok");
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
//
//
// app.get("/contacts",
//     async (inRequest: Request, inResponse: Response) => {
//         try {
//             const contactsWorker: Contacts.Worker =
//                 new Contacts.Worker(serverInfo);
//
//             const contacts: IContact[] =
//                 await contactsWorker.listContacts();
//
//             inResponse.json(contacts);
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
//
//
// app.post("/contacts",
//     async (inRequest: Request, inResponse: Response) => {
//         try {
//             const contactsWorker: Contacts.Worker =
//                 new Contacts.Worker(serverInfo);
//
//             const contact: IContact = await contactsWorker.addContact(inRequest.body);
//
//             inResponse.json(contact);
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
//
// app.delete("/contacts/:id",
//     async (inRequest: Request, inResponse: Response) => {
//         try {
//             const contactsWorker: Contacts.Worker =
//                 new Contacts.Worker();
//
//             await contactsWorker.deleteContact(inRequest.params.id);
//
//             inResponse.send("ok");
//         } catch (inError) {
//             inResponse.send("error");
//         }
//     }
// );
//
//
//
//
//
import path from "path";
import express, { Request, Response, NextFunction } from "express";

import { serverInfo } from "./ServerInfo";
import * as Contacts from "./contacts";
import type { IContact } from "./contacts";

const app = express();
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../../client/dist")));

app.use(function (inRequest: Request, inResponse: Response, inNext: NextFunction) {
    inResponse.header("Access-Control-Allow-Origin", "*");
    inResponse.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    inResponse.header("Access-Control-Allow-Headers", "Content-Type");
    inNext();
});


type IMailbox = { name: string; path: string };
type IMessage = { id: number; from: string; subject: string; date: string };

const fakeMailboxes: IMailbox[] = [{ name: "INBOX", path: "INBOX" }];
const fakeMessages: Record<string, IMessage[]> = {
    INBOX: [
        {
            id: 1,
            from: "demo@mailbag.local",
            subject: "Hello MailBag (stubbed)",
            date: new Date().toISOString()
        }
    ]
};
const fakeBodies: Record<string, string> = {
    "INBOX:1": "This is a stub message body. Your server is running on port 8080."
};

app.get("/mailboxes", async (_req: Request, res: Response) => {
    res.json(fakeMailboxes);
});

app.get("/mailboxes/:mailbox", async (req: Request<{ mailbox: string }>, res: Response) => {
    res.json(fakeMessages[req.params.mailbox] ?? []);
});

app.get(
    "/messages/:mailbox/:id",
    async (req: Request<{ mailbox: string; id: string }>, res: Response) => {
        const key = `${req.params.mailbox}:${parseInt(req.params.id, 10)}`;
        res.send(fakeBodies[key] ?? "");
    }
);

app.delete(
    "/messages/:mailbox/:id",
    async (_req: Request<{ mailbox: string; id: string }>, res: Response) => {
        res.send("ok");
    }
);

app.post("/messages", async (_req: Request, res: Response) => {
    res.send("ok");
});



app.get("/contacts", async (_req: Request, res: Response) => {
    try {
        const contactsWorker = new Contacts.Worker(serverInfo);
        const contacts: IContact[] = await contactsWorker.listContacts();
        res.json(contacts);
    } catch (e) {
        console.log(e);
        res.status(500).send("error");
    }
});

app.post("/contacts", async (req: Request, res: Response) => {
    try {
        const contactsWorker = new Contacts.Worker(serverInfo);
        await contactsWorker.addContact(req.body);
        res.send("ok");
    } catch (e) {
        console.log(e);
        res.status(500).send("error");
    }
});

app.delete("/contacts/:id", async (req: Request<{ id: string }>, res: Response) => {
    try {
        const contactsWorker = new Contacts.Worker(serverInfo);
        await contactsWorker.deleteContact(req.params.id);
        res.send("ok");
    } catch (e) {
        console.log(e);
        res.status(500).send("error");
    }
});

app.listen(8080, () => {
    console.log("MailBag server listening on port 8080");
});
