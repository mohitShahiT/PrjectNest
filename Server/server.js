const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });
const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const { default: mongoose } = require("mongoose");

const httpSever = http.createServer(app);
const io = new Server(httpSever, {
  cors: true,
});

io.on("connection", (socket) => {
  console.log(socket);
});

const mongoLocalURI = process.env.MONGO_LOCAL_URI;
mongoose
  .connect(mongoLocalURI)
  .then(() => {
    console.log("connected to the database...");
  })
  .catch((err) => {
    console.log("database connection faled...", err);
  });

const PORT = process.env.PORT || 3000;
httpSever.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
