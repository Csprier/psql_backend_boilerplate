const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 3000;

const initdb = require('./initdb');
const { errors } = require('pg-promise');

// app.use(cors());
app.use(
    bodyParser.json({
        type: [
        'application/json',
        'application/csp-report',
        'application/reports+json',
        ],
    })
);

// const getGreeting = require('./routes/hello.routes');
// app.use(getGreeting);

app.get('/greeting', (req, res) => {
	console.log(res);
	return res.json(res);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    initdb();
});
