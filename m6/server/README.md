# MailBag Server — Testing Environment and Design Description

## 1. Testing Environment

The MailBag server was developed and tested in the following environment:

* **Programming Language & Runtime**
    * Node.js version: v23.3.0
    * npm version: 10.9.0
* **Operating System**
    * macOS (Tahoe 26.2)
* **Computer Architecture**
    * ARM64 (Apple M-series processor)
* **Web Browser Used for Testing**
    * Google Chrome
    * Version: 143.0.7499.193
* **Libraries and Tools**:

    * Express (REST server framework)
    * Nodemailer (SMTP email sending)
    * emailjs-imap-client (IMAP email access)
    * mailparser (email body parsing)
    * NeDB (lightweight local NoSQL database)

The server was run locally using Node.js, and all REST endpoints were accessed through a web browser or command-line tools.

---

## 2. How the Code Was Tested

The MailBag server exposes a set of REST endpoints implemented using Express. Testing was performed by manually invoking these endpoints and verifying the returned results.

The testing process included:

1. **Starting the server**
    * npm install
    * pip install -r requirements.txt
    * The server was started using Node.js after compiling or running the TypeScript code.
    * Console output was checked to confirm that the server was listening successfully.

2. **Testing REST endpoints**

    * HTTP requests were sent to the server using tools such as a web browser or `curl`.
    * The following functionality was tested:

        * Listing mailboxes via IMAP
        * Listing messages in a mailbox
        * Retrieving the body of a specific message
        * Deleting a message
        * Sending a message using SMTP
        * Adding, listing, and deleting contacts stored in NeDB

3. **Verifying results**

    * JSON responses returned by the server were inspected to ensure correctness.
    * For operations such as sending or deleting messages, the expected side effects (email sent or removed) were verified.

This approach ensured that each REST endpoint behaved as expected and that the server components (SMTP, IMAP, and contacts management) worked together correctly.

---

## 3. How REST Helps the Web Application

REST plays a central role in the design of the MailBag web application.

By using REST:

* The server exposes clear and well-defined endpoints that represent specific operations (such as listing mailboxes or sending messages).
* Each operation is accessed using standard HTTP methods such as GET, POST, and DELETE.
* Data is exchanged using JSON, which is simple to generate, transmit, and parse.

REST allows the MailBag client and server to be **loosely coupled**. The client does not need to know how email access or storage is implemented internally. It only needs to send HTTP requests to the appropriate endpoints.

This separation makes the application easier to understand, easier to test, and easier to extend. Different clients (for example, a browser-based client or another application) can interact with the same server without requiring changes to the server’s internal logic.
