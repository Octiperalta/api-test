// Se instancia el servidor
const expressServer = require("./server/expressServer");
const config = require("../config");

const startServer = async () => {
  const server = new expressServer();
  console.log("Express loaded");

  server.start();
  console.log("╒══════════════════════════════════════════╕");
  console.log(`│ Server running on http://localhost:${config.port}/ │`);
  console.log("╘══════════════════════════════════════════╛");
};

module.exports = startServer;
