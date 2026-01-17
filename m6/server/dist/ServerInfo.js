"use strict";
// const path = require('path');
// const fs = require('fs');
// export interface IServerInfo {
//     imap: {
//         host: string;
//         port: number;
//         secure: boolean;
//         auth: {
//             user: string;
//             pass: string;
//         };
//     };
//     smtp: {
//         host: string;
//         port: number;
//         secure: boolean;
//         auth: {
//             user: string;
//             pass: string;
//         };
//     };
// }
// export let serverInfo: IServerInfo;
//
// const rawInfo: string = fs.readFileSync(path.join(__dirname, './serverInfo.json'));
// serverInfo = JSON.parse(rawInfo);
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInfo = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.serverInfo = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, "../serverInfo.json"), "utf8"));
