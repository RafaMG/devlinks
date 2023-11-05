const liveServer = require('live-server');

const params = {
  port: 3000,
  root: "./src/",
  file: "index.html",
 };

liveServer.start(params);

