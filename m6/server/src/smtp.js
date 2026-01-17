"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class Worker {
    constructor(inServerInfo) {
        this.serverInfo = inServerInfo;
    }
    async sendMessage(inMessage) {
        const transport = nodemailer_1.default.createTransport(this.serverInfo.smtp);
        await transport.sendMail({
            from: inMessage.from,
            to: inMessage.to,
            subject: inMessage.subject,
            text: inMessage.message
        });
    }
}
exports.Worker = Worker;
