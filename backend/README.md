# SWE 250P LAB A - Backend

## 1. Testing Environment

The following environment was used to develop and test the web server code for this assignment:

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
    * Browser was used to access the web server via `http://localhost`

---

## 2. Description of the Web Server Code

### Practice M2
1. A basic "Hello World" server response.
2. A weather-based API (Open-Meteo) used instead of a time API due to service unavailability.

The server responds with plain text content returned directly to the browser.

---

## 3. Testing Methodology

### Practice M2
1. In package.json, change "start": "node server_time.js" to "start": "node server.js", first to check original style
2. Then run npm start
3. Go to Chrome and use the link http://localhost to check
4. In package.json, change back to node server_time.js and run npm start
5. Go to Chrome and use the link http://localhost to check
---

## 4. Cross-User Considerations

### Practice M2
1. I tested the web server locally using a modern web browser by accessing the page through localhost.
2. Since the server returns plain text using standard HTTP, it should work across all major browsers and operating systems.
3. I also verified that the response loads correctly without errors and displays expected content.

---

## 5. Source Code Submission

The complete source code of the web server is included as part of the assignment submission.
