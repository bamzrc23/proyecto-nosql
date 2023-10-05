const express = require('express');
const cors = require('cors');
// const { auth } = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.json())
  app.use(cors({
    exposedHeaders: 'Authorization'
  }));
  // app.use(auth);
};