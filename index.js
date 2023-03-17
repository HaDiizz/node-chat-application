require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { ExpressPeerServer } = require("peer")
const http = require("http")
const { Server } = require("socket.io");
const SocketServer = require("./socketServer");
const compression = require("compression")

const corsOptions = {
  origin: 'https://hello-311.netlify.app',
  credentials: true
};
const app = express()
app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser())
// app.use(compression({
//   level: 6,
//   threshold: 100 * 1000,
//   filter: (req, res) => {
//     if (req.headers['x-no-compression']) {
//       return false
//     }
//     return compression.filter(req, res)
//   }
// }))
app.use(compression())
const server = http.createServer(app)

app.get('/', (req, res) => {
  const payload = "Something Faster is Compressionsza"
  res.send(payload.repeat(10000))
})

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/'
  });

peerServer.on('connection', (client) => {
  console.log(`id: ${client.id}`)
  });

  const io = new Server(server, {
    cors: {
      origin: "https://hello-311.netlify.app",
      credentials: true,
    },
  });
  
  io.on("connection", (socket) => {
    SocketServer(socket);
  });

app.use("/api", require("./routes/auth.route"));
const URI = process.env.MONGODB_URL;
mongoose.set('strictQuery', false);
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

const port = process.env.PORT || 5000
server.listen(port , () => {
    console.log("Server is running at port", port);
})
