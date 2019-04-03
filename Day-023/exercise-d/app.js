const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    let reqArr = req.body.arr;
    let result = reqArr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })
    console.log(result);
    res.send(`Result: ${result}`);
})

app.listen(8000);