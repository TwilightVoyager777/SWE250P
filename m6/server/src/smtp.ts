// import Mail from "nodemailer/lib/mailer"
// import * as nodemailer from "nodemailer";
// import { SendMailOptions, SentMessageInfo} from "nodemailer";
// import type {IServerInfo} from "./ServerInfo";
// const nodemailer = require("nodemailer");
//
// // @ts-ignore
// export class Worker {
//     private serverInfo: IServerInfo;
//
//     constructor(inServerInfo: IServerInfo) {
//         this.serverInfo = inServerInfo;
//     }
//
//     public async sendMessage(inMessage: any): Promise<void> {
//
//         const transport = nodemailer.createTransport(
//             this.serverInfo.smtp
//         );
//
//         await transport.sendMail({
//             from: inMessage.from,
//             to: inMessage.to,
//             subject: inMessage.subject,
//             text: inMessage.message
//         });
//
//     }
// }

import nodemailer from "nodemailer";
import type { IServerInfo } from "./ServerInfo";

export class Worker {

    private serverInfo: IServerInfo;

    constructor(inServerInfo: IServerInfo) {
        this.serverInfo = inServerInfo;
    }

    public async sendMessage(inMessage: any): Promise<void> {

        const transport = nodemailer.createTransport(
            this.serverInfo.smtp
        );

        await transport.sendMail({
            from: inMessage.from,
            to: inMessage.to,
            subject: inMessage.subject,
            text: inMessage.message
        });

    }

}
