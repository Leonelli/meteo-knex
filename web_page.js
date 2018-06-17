var cfg = require("./cfg").mysql;
var site_dir = require("./cfg").site_dir;
var knex = require("knex")(cfg);
//express
var express = require('express');
var app = express();
//var router = express.Router();
var porta = require("./cfg").porta_wpage;
var cors = require("cors");

app.use(express.static(site_dir));
app.use(cors());


app.listen(porta, function () {
    console.log("Progetto METEO - REST WebServer http://localhost:%s", porta);
    console.log("Start at:  " + Date());
    console.log("*******************************************************************************************")
});
//indirizza all'index
app.get('/', function (req, res) {
    res.redirect('index.html');
});