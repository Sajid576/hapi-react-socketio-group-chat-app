"use strict";

require("dotenv").config();

module.exports = {
  ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,

  // API base URL
  API_BASE_URL: process.env.API_BASE_URL,
  //SOCKET
  SOCKET_PORT: process.env.SOCKET_PORT,
};
