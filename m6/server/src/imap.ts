const ImapClient = require("emailjs-imap-client");
import {ParsedMail} from "mailparser";
import {simpleParser} from "mailparser";
import {IServerInfo} from "./ServerInfo";

export interface ICallOptions {
    name: string;
    path: string;
}

export interface IMessage {
    id: number;
    from: string;
    subject: string, body? :string;
    date: string;
}

export interface IMailbox { name: string, path : string }

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export class Worker {
    private serverInfo: IServerInfo;

    constructor(inServerInfo: IServerInfo) {
        this.serverInfo = inServerInfo;
    }
    private async connectToServer(): Promise<any> {

        const client: any =
            new ImapClient.default(
                this.serverInfo.imap.host,
                this.serverInfo.imap.port,
                {auth:this.serverInfo.imap.auth}
            );
        client.logLever = client.LOG_LEVEL_NONE;
        client.onerror = (inError: Error) => {
            console.log(
                "IMAP.Worker.listMailboxes(): Concection error",
                inError
            );
        };
        await client.connect();
        return client;

    }

    public async listMailboxes(): Promise<IMailbox[]> {

        const client = await this.connectToServer();

        const mailboxes: IMailbox[] = [];

        const boxes = await client.listMailboxes();

        for (const box of boxes.children) {
            mailboxes.push({
                name: box.name,
                path: box.path
            });
        }

        await client.logout();

        return mailboxes;

    }
    public async listMessages(inMailbox: string): Promise<IMessage[]> {

        const client = await this.connectToServer();

        const messages: IMessage[] = [];

        const box = await client.selectMailbox(inMailbox);

        const ids = box.messages.total;

        const list = await client.listMessages(
            inMailbox,
            "1:" + ids,
            [ "uid", "envelope" ]
        );

        for (const message of list) {
            messages.push({
                id: message.uid,
                from: message.envelope.from[0].address,
                subject: message.envelope.subject,
                date: message.envelope.date
            });
        }

        await client.logout();

        return messages;

    }
    public async getMessageBody(inOptions: {
        mailbox: string;
        id: number;
    }): Promise<string> {

        const client = await this.connectToServer();

        const messages = await client.listMessages(
            inOptions.mailbox,
            inOptions.id.toString(),
            [ "body[]" ]
        );

        const parsed = await simpleParser(
            messages[0]["body[]"]
        );

        await client.logout();

        return parsed.text || "";

    }
    public async deleteMessage(inOptions: {
        mailbox: string;
        id: number;
    }): Promise<void> {

        const client = await this.connectToServer();

        await client.deleteMessages(
            inOptions.mailbox,
            [ inOptions.id ]
        );

        await client.logout();

    }

}



