const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");

const httpSever = http.createServer(app);
const io = new Server(httpSever, {
  cors: true,
});

io.on("connection", (socket) => {
  console.log(socket);
});

const PORT = process.env.PORT || 8000;
httpSever.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
