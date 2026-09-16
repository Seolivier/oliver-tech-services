const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('../src/routes/contact');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Oliver Tech Services API is running');
});

app.use('/api/contact', contactRoutes);

module.exports = app;
module.exports.handler = serverless(app);


