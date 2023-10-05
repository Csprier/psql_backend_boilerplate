const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 3000;

const initdb = require('./initdb');

app.use(function (req, res, next) {
    res.set("Content-Security-Policy", "font-src 'self' data:;");
    next();
});

app.use(cors());
app.use(
    bodyParser.json({
        type: [
        'application/json',
        'application/csp-report',
        'application/reports+json',
        ],
    })
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    initdb();
});
