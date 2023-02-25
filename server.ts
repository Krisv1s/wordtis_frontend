/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const url = require('url');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();

const apiProxy = proxy('https://844a-91-238-229-250.eu.ngrok.io/api', {
  proxyReqPathResolver: (req) => url.parse(req.baseUrl).path,
});

app.use('/api/*', apiProxy);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
