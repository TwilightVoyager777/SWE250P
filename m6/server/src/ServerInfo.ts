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

import fs from "fs";
import path from "path";

export interface IServerInfo {
    imap: {
        host: string;
        port: number;
        secure: boolean;
        auth: {
            user: string;
            pass: string;
        };
    };
    smtp: {
        host: string;
        port: number;
        secure: boolean;
        auth: {
            user: string;
            pass: string;
        };
    };
}

export const serverInfo: IServerInfo = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../serverInfo.json"), "utf8")
);
