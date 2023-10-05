const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db'); // import psql config

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes and API Endpoints below

app.listen(port, () => {
    console.log('GOOOOOD EVENING NIGHT CITY! The server is live!');
});