var express = require('express');
var path = require('path');

// 创建app应用
var app = express();

app.use('/', function (req, res, next) {
	res.sendFile(path.join(__dirname, req.url))
});

app.listen(4000, function() {
	console.log(4000);
});