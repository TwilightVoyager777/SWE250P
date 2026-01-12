// require("http").createServer((inRequest, inResponse) => {
//     const requestModule = require("request");
//     requestModule(
//         "http://worldtimeapi.org/api/timezone/America/New_York",
//         function (inErr, inResp, inBody) {
//             inResponse.end(
//                 `Hello from my first Node Web server time: ${inBody}`,
//             );
//         }
//     );
// }).listen(80);

//timezone down, use weather api
require("http").createServer((inRequest, inResponse) => {
    const requestModule = require("request");
    requestModule(
        "https://api.open-meteo.com/v1/forecast?latitude=33.6846&longitude=-117.8265&current_weather=true",
        function (inErr, inResp, inBody) {
            inResponse.setHeader("Content-Type", "text/plain; charset=utf-8");
            inResponse.end(
                `Hello from my first Node Web server weather: ${inBody}`,
            );
        }
    );
}).listen(80);