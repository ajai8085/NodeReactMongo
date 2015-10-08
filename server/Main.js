var Express = require("express");


var app= new Express();

app.get('/', function (req,res) {
    res.render('./../app/index.ejs', {});
}).listen(7777);