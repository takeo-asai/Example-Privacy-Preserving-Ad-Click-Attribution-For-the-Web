const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");

app.use(express.static("public"));

const attr_url = ".well-known/ad-click-attribution"; // DO NOT Edit

// redirect to lp.merchant.com/lp.html
app.get("/redirect", (_, res) => {
  res.writeHead(302, { Location: "https://lp.merchant.com/lp.html" });
  res.end();
});

app.post(`/${attr_url}/:id/:value`, (req, res) => {
  console.log(req.hostname, "/receive conversion,", JSON.stringify(req.params));
  res.sendFile(__dirname + "/1x1.png");
});
app.get(`/${attr_url}/:id`, (_, res) => res.sendFile(__dirname + "/1x1.png"));
app.get("/notify_conversion/:id", (req, res) => {
  res.writeHead(302, {
    Location: `https://${req.hostname}/${attr_url}/${req.params.id}`
  });
  res.end();
});

// https
const options = {
  key: fs.readFileSync("./orekey.pem"),
  cert: fs.readFileSync("./orecert.pem")
};
const port = 443;
https
  .createServer(options, app)
  .listen(port, () => console.log(`Listening on port ${port}`));
