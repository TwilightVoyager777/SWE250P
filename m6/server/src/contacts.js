"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
// import Datastore from "nedb";
// import type {IServerInfo} from "./ServerInfo";
// export interface IContact {
//     _id?: string;
//     name: string;
//     email: string;
// }
// export class Worker {
//     private db: Datastore;
//
//     constructor(inServerInfo: IServerInfo) {
//
//         this.db = new Datastore({
//             filename: "contacts.db",
//             autoload: true
//         });
//
//     }
//     public async listContacts(): Promise<IContact[]> {
//
//         return new Promise((inResolve, inReject) => {
//
//             this.db.find({}, (inError: Error | null, inDocs: IContact[]) => {
//
//                 if (inError) {
//                     inReject(inError);
//                 } else {
//                     inResolve(inDocs);
//                 }
//
//             });
//
//         });
//
//     }
//     public async addContact(inContact: IContact): Promise<void> {
//
//         return new Promise((inResolve, inReject) => {
//
//             this.db.insert(inContact, (inError: Error | null) => {
//
//                 if (inError) {
//                     inReject(inError);
//                 } else {
//                     inResolve();
//                 }
//
//             });
//
//         });
//
//     }
//     public async deleteContact(inID: string): Promise<void> {
//
//         return new Promise((inResolve, inReject) => {
//
//             this.db.remove(
//                 { _id : inID },
//                 {},
//                 (inError: Error | null) => {
//
//                     if (inError) {
//                         inReject(inError);
//                     } else {
//                         inResolve();
//                     }
//
//                 }
//             );
//
//         });
//
//     }
//
// }
const nedb_1 = __importDefault(require("nedb"));
class Worker {
    constructor(inServerInfo) {
        this.db = new nedb_1.default({
            filename: "contacts.db",
            autoload: true
        });
    }
    async listContacts() {
        return new Promise((inResolve, inReject) => {
            this.db.find({}, (inError, inDocs) => {
                if (inError) {
                    inReject(inError);
                }
                else {
                    inResolve(inDocs);
                }
            });
        });
    }
    async addContact(inContact) {
        return new Promise((inResolve, inReject) => {
            this.db.insert(inContact, (inError) => {
                if (inError) {
                    inReject(inError);
                }
                else {
                    inResolve();
                }
            });
        });
    }
    async deleteContact(inID) {
        return new Promise((inResolve, inReject) => {
            this.db.remove({ _id: inID }, {}, (inError) => {
                if (inError) {
                    inReject(inError);
                }
                else {
                    inResolve();
                }
            });
        });
    }
}
exports.Worker = Worker;
