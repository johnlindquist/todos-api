const jsonServer = require('json-server');
const db = require('db.json');
const server = jsonServer.create();
server.use(jsonServer.defaults());

const router = jsonServer.router(db);
server.use(router);

server.listen(3000);
