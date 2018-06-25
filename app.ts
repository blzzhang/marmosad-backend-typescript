import express = require('express');
var app = express();
import http = require('http');
var http = new http().Server(app);

import path = require('path'); //was const var
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    console.log('serving files');
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/playerLimit', function (req, res) {
    console.log(board.isLimitReached());
    res.send(JSON.stringify({isLimitReached: board.isLimitReached()}));
})

http.listen(8081, function () {
    console.log('listening on *: 8081');
});

var board = require('./src/board');
console.log(board.initInstance(http));