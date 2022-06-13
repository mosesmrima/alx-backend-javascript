import { router } from './routes';
const express = require('express');
const path = process.argv[2];

const server = express();
server.use('/', router);

export default server;
export { path };
server.listen(1245);
