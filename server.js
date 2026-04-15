"use strict";

var express = require("express");
var path    = require("path");

var app  = express();
var PORT = process.env.PORT || 3000;

app.get("/", function (_req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(
    "<!DOCTYPE html>" +
    "<html lang=\"th\">" +
    "<head>" +
    "<meta charset=\"UTF-8\">" +
    "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">" +
    "<title>กฤษดา Bot</title>" +
    "<style>" +
    "*{margin:0;padding:0;box-sizing:border-box}" +
    "body{font-family:'Segoe UI',sans-serif;background:#1a1a2e;color:#e0e0e0;" +
    "min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center}" +
    ".wrap{max-width:520px;padding:40px 24px}" +
    ".pill{display:inline-block;background:#2ecc71;color:#fff;font-size:12px;" +
    "font-weight:700;padding:4px 14px;border-radius:20px;margin-bottom:18px;letter-spacing:1px}" +
    "h1{font-size:56px;color:#5865f2;margin-bottom:8px}" +
    ".sub{color:#888;font-size:16px;margin-bottom:34px}" +
    ".grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:32px;text-align:left}" +
    ".card{background:#16213e;border-radius:10px;padding:16px;border:1px solid #2a2a4a}" +
    ".card h3{color:#5865f2;font-size:13px;margin-bottom:4px}" +
    ".card p{color:#aaa;font-size:13px}" +
    ".btn{display:inline-block;padding:13px 36px;background:#5865f2;color:#fff;" +
    "text-decoration:none;border-radius:8px;font-weight:700;font-size:15px}" +
    ".btn:hover{background:#4752c4}" +
    ".foot{margin-top:22px;font-size:12px;color:#555}" +
    ".foot span{color:#2ecc71}" +
    "</style>" +
    "</head>" +
    "<body>" +
    "<div class=\"wrap\">" +
    "<div class=\"pill\">\u25cf ONLINE</div>" +
    "<h1>\u0e01\u0e24\u0e29\u0e14\u0e32</h1>" +
    "<p class=\"sub\">Discord Bot \u00b7 \u0e01\u0e27\u0e19\u0e15\u0e35\u0e19\u0e41\u0e15\u0e48\u0e09\u0e25\u0e32\u0e14</p>" +
    "<div class=\"grid\">" +
    "<div class=\"card\"><h3>Dual AI</h3><p>GPT-4o + Claude fallback</p></div>" +
    "<div class=\"card\"><h3>Smart Chat</h3><p>Memory + Learning system</p></div>" +
    "<div class=\"card\"><h3>Image Vision</h3><p>Describes images in Thai</p></div>" +
    "<div class=\"card\"><h3>Thai Personality</h3><p>Talks like a real friend</p></div>" +
    "</div>" +
    "<a href=\"/dashboard\" class=\"btn\">Open Dashboard</a>" +
    "<p class=\"foot\">Bot status: <span>Running</span></p>" +
    "</div>" +
    "</body>" +
    "</html>"
  );
});

app.get("/ping", function (_req, res) {
  res.send("OK");
});

app.listen(PORT, "0.0.0.0", function () {
  console.log("กฤษดา Bot web server running on port " + PORT);

  process.env.PORT = "9001";
  var distPath = path.join(__dirname, "artifacts/api-server/dist/index.mjs");
  import(distPath).catch(function (err) {
    console.error("Bot failed to start:", err.message);
  });
});
