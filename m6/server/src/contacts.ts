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
import * as path from "path";
const Datastore = require("@seald-io/nedb");

import type { IServerInfo } from "./ServerInfo";

export interface IContact {
    _id?: string;
    name: string;
    email: string;
}

export class Worker {
    private db: any;

    constructor(_inServerInfo: IServerInfo) {
        this.db = new Datastore({
            filename: path.join(__dirname, "contacts.db"),
            autoload: true
        });
    }

    public async listContacts(): Promise<IContact[]> {
        return new Promise((inResolve, inReject) => {
            this.db.find({}, (inError: Error | null, inDocs: IContact[]) => {
                if (inError) {
                    inReject(inError);
                } else {
                    inResolve(inDocs);
                }
            });
        });
    }

    public async addContact(inContact: IContact): Promise<void> {
        return new Promise((inResolve, inReject) => {
            this.db.insert(inContact, (inError: Error | null) => {
                if (inError) {
                    inReject(inError);
                } else {
                    inResolve();
                }
            });
        });
    }

    public async deleteContact(inID: string): Promise<void> {
        return new Promise((inResolve, inReject) => {
            this.db.remove({ _id: inID }, {}, (inError: Error | null) => {
                if (inError) {
                    inReject(inError);
                } else {
                    inResolve();
                }
            });
        });
    }
}
