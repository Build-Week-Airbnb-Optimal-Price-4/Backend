const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("../auth/auth-router.js");
const listingRouter = require("../listings/listings-router.js");
const authenticate = require("../auth/restricted-middleware.js");

const server = express();

const sessionConfig = {
  name: "sid",
  secret: "bugs",
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false
  },
  httpOnly: true,
  resave: false,
  saveUninitialized: false
};

const corsOptions = {
  origin: 'http://localhost:3000'
}

server.use(express.json());
server.use(session(sessionConfig));
server.use(cors(corsOptions))

server.get('/', (req,res) => {
  res.send('working')
})

server.use("/api/auth", authRouter);

server.use("/api/listings", authenticate, listingRouter);

module.exports = server;
