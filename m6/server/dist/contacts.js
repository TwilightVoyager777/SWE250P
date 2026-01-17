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
const path = __importStar(require("path"));
const Datastore = require("@seald-io/nedb");
class Worker {
    constructor(_inServerInfo) {
        this.db = new Datastore({
            filename: path.join(__dirname, "contacts.db"),
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
