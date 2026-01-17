"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const ServerInfo_1 = require("./ServerInfo"); // 先保留，不影响跑通
const Contacts = __importStar(require("./contacts"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../../client/dist")));
app.use(function (inRequest, inResponse, inNext) {
    inResponse.header("Access-Control-Allow-Origin", "*");
    inResponse.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    inResponse.header("Access-Control-Allow-Headers", "Content-Type");
    inNext();
});
const fakeMailboxes = [{ name: "INBOX", path: "INBOX" }];
const fakeMessages = {
    INBOX: [
        {
            id: 1,
            from: "demo@mailbag.local",
            subject: "Hello MailBag (stubbed)",
            date: new Date().toISOString()
        }
    ]
};
const fakeBodies = {
    "INBOX:1": "This is a stub message body. Your server is running on port 8080."
};
app.get("/mailboxes", async (_req, res) => {
    res.json(fakeMailboxes);
});
app.get("/mailboxes/:mailbox", async (req, res) => {
    var _a;
    res.json((_a = fakeMessages[req.params.mailbox]) !== null && _a !== void 0 ? _a : []);
});
app.get("/messages/:mailbox/:id", async (req, res) => {
    var _a;
    const key = `${req.params.mailbox}:${parseInt(req.params.id, 10)}`;
    res.send((_a = fakeBodies[key]) !== null && _a !== void 0 ? _a : "");
});
app.delete("/messages/:mailbox/:id", async (_req, res) => {
    // stub: 直接 ok
    res.send("ok");
});
app.post("/messages", async (_req, res) => {
    // stub: 直接 ok（不真正发邮件）
    res.send("ok");
});
/** ---------- Contacts: 仍走你的 NeDB ---------- **/
app.get("/contacts", async (_req, res) => {
    try {
        const contactsWorker = new Contacts.Worker(ServerInfo_1.serverInfo);
        const contacts = await contactsWorker.listContacts();
        res.json(contacts);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("error");
    }
});
app.post("/contacts", async (req, res) => {
    try {
        const contactsWorker = new Contacts.Worker(ServerInfo_1.serverInfo);
        await contactsWorker.addContact(req.body);
        res.send("ok");
    }
    catch (e) {
        console.log(e);
        res.status(500).send("error");
    }
});
app.delete("/contacts/:id", async (req, res) => {
    try {
        const contactsWorker = new Contacts.Worker(ServerInfo_1.serverInfo);
        await contactsWorker.deleteContact(req.params.id);
        res.send("ok");
    }
    catch (e) {
        console.log(e);
        res.status(500).send("error");
    }
});
app.listen(8080, () => {
    console.log("MailBag server listening on port 8080");
});
