const http = require('http');
const app = require("../src/app");
const verifyPort = require("../utils/checkPort");

const port = verifyPort(process.env.PORT || 3000 );
const server = http.createServer(app);
server.listen(port);
console.log('API rodando na porta '+port)

