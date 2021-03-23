'use strict';

const liveServer = require('live-server');

(async () => {
  //const ip = await internalIp.v4();
  // See https://www.npmjs.com/package/live-server#usage-from-node
  const params = {
    host: 'localhost',
    port: 1234,
    root: './example',
    file: 'index.html',
    path: '/#/home',
    logLevel: 0,
  };
  liveServer.start(params);
})();
