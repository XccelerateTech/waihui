const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    console.log(`Received request for /`);
    res.send(`Received request for / \nPlease try /message use 'post' method`);
})

app.post('/message', function (req, res) {
    console.log(req);
    res.send(`Post received`);
})

app.listen(8000, 'localhost');