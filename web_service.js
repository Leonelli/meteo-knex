var cfg = require("./cfg").mysql;
var help_dir = require("./cfg").help_dir;
var knex = require("knex")(cfg);
//express
var express = require('express');
var app = express();
var porta = require("./cfg").porta_wserver;
var cors = require("cors");
app.use(express.static(help_dir));
app.use(cors());

/////
var router = express.Router();
var config = require('./local_config.js');		// inizializza la variabile "config"
var lib = require('./lib.js');


app.listen(porta, function () {
    console.log("Progetto METEO - REST WebServer http://localhost:%s", porta);
    console.log("Start at:  " + Date());
    console.log("*******************************************************************************************")
});

//alla porta 8080 vi è la pagina di help con spegati tutti i servizi
app.get('/', function (req, res) {
    res.redirect('help.html');
});

//servizio che mostra i dati delle piogge di tutte le stazioni
app.get('/pioggia', function (req, res) {
    lib.eseguiQuery(res, 'SELECT id_stazione,data,mm FROM pioggia ORDER BY data;');
});

//servizio che mostra tutte le stazioni
app.get('/stazioni', function (req, res) {
    lib.eseguiQuery(res, 'SELECT id_stazione,nome,elevazione,latitudine,longitudine FROM stazioni;');
});

//servizio che mostra i dati delle temperature di tutte le stazioni
app.get('/temperatura', function (req, res) {
    lib.eseguiQuery(res, 'SELECT id_stazione, data, temperatura FROM temperatura ORDER BY data;');
});

//servizio che mostra i dati del vento di tutte le stazioni
app.get('/vento', function (req, res) {
    lib.eseguiQuery(res, 'SELECT id_stazione, data, vento, direzione FROM vento ORDER BY data;');
});

//servizio che mostra i dati delle piogge di una stazione specifica
app.get('/vento/:id_stazione', function (req, res) { 
    lib.eseguiQuery(res, 'SELECT * FROM vento WHERE id_stazione=? ORDER BY data;', req.params.id_stazione);
});

//servizio che mostra i dati delle temperature di una stazione specifica
app.get('/temperatura/:id_stazione', function (req, res) { 
    lib.eseguiQuery(res, 'SELECT * FROM temperatura WHERE id_stazione=? ORDER BY data;', req.params.id_stazione);
});

//servizio che mostra i dati del vento di una stazione specifica
app.get('/pioggia/:id_stazione', function (req, res) { 
    lib.eseguiQuery(res, 'SELECT * FROM pioggia WHERE id_stazione=? ORDER BY data;', req.params.id_stazione);
});