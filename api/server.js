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

const whitelist = ['http://localhost:3000', 'https://opti.netlify.com']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

server.use(express.json());
server.use(session(sessionConfig));
server.use(cors(corsOptions))

server.get('/', (req,res) => {
  res.status(200).json([
    {
      method: "post",
      endpoint: "/api/auth/login",
      description: "login",
      body: 'email and password'
    },
    {
      method: "post",
      endpoint: "/api/auth/register",
      description: "register",
      body: 'email and password'
    },
    {
      method: "get",
      endpoint: "/api/auth/logout",
      description: "logout",
      body: 'no body'
    },
    {
      method: "post",
      endpoint: "/api/listings",
      description: "add listing",
      body: 'listing_url, city, room_type, minimum_nights, user_id'
    },
    {
      method: "put",
      endpoint: "/api/listings",
      description: "edit listing",
      body: 'at least one of: listing_url, city, room_type, minimum_nights'
    },
    {
      method: "delete",
      endpoint: "/api/listings/:listingId",
      description: "remove listing",
      body: 'no body'
    },
    {
      method: "get",
      endpoint: "/api/listings/:userId",
      description: "get user listings",
      body: 'no body'
    },
  ])
})

server.use("/api/auth", authRouter);

server.use("/api/listings", authenticate, listingRouter);

module.exports = server;
