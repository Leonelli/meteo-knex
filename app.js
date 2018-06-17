var cfg = require("./cfg").mysql;
var web = require("./cfg").web;
var StazioneTrento = require("./cfg").StazioneTrento;
var path = require("./cfg").path;
var screen = require("./screen");
var knex = require("knex")(cfg);
var http = require('http');
var fs = require('fs');
var Treeize = require("treeize");
const csv = require('csvtojson')
const csvFilePath = web.NomeFile;
var fastXmlParser = require('fast-xml-parser');
var Promise = require('bluebird');
var cron = require('node-cron');


//inserisce i valori della temperatura nel database
function inserisciTemperatura(obj, dati) {
	//console.log("stazione " +obj.Stazione);
	dati.temperature.temperatura_aria.forEach(function (element) {
		knex('temperatura')
			.where("id_stazione", obj.Stazione)
			.andWhere("data", element.data)
			//.andWhere("temperatura", element.temperatura)
			.del()
			//.then(() => {
			.then(function (count) {
				//screen.write(count);
				//screen.write("temp: " + element.temperatura);
				knex('temperatura')
					.returning('id')
					.insert({ id_stazione: obj.Stazione, data: element.data, temperatura: element.temperatura })
					.then(
					(id) => {
					}).finally(function () {
						//knex.destroy();
					});
			});
	});
}

//inserisce i valori delle piogge nel database
function inserisciPioggia(obj, dati) {
	//console.log("stazione " +obj.Stazione);

	dati.precipitazioni.precipitazione.forEach(function (element) {
		knex('pioggia')
			.where("id_stazione", obj.Stazione)
			.andWhere("data", element.data)
			.andWhere("mm", element.pioggia)
			.del()
			.then(() => {
				knex('pioggia')
					.returning('id')
					.insert({ id_stazione: obj.Stazione, data: element.data, mm: element.pioggia })
					.then(
					(id) => {
					}).finally(function () {
						//knex.destroy();
					});
			});
	});
}

//inserisce il valore del vento nel database
function inserisciVento(obj, dati) {
	//console.log("stazione " +obj.Stazione);
	dati.venti.vento_al_suolo.forEach(function (element) {
		knex('vento')
			.where('id_stazione', obj.Stazione)
			.andWhere('data', element.data)
			//.andWhere('vento', element.v)
			.andWhere('direzione', element.d)
			.del()
			.then(function (count) {
				knex('vento')
					.returning('id')
					.insert({ id_stazione: obj.Stazione, data: element.data, vento: element.v, direzione: element.d })
					.then(
					(id) => {
					}).finally(function () {
						//knex.destroy();
					});
			});
	});
}


//legge il file xml
function leggixml(obj) {
	fs2 = require('fs')
	fs2.readFile(path + obj.NomeFile, 'utf8', function (err, data) {
		if (err) {
			return console.log(err);
		}
		dati = fastXmlParser.parse(data).datiOggi;
		inserisciPioggia(obj, dati);
		inserisciVento(obj, dati);
		inserisciTemperatura(obj, dati);
	});
}

//scarica i dati nella cartella 'xml' in formato xml delle stazioni
function ScaricaDati(obj) {
	var request = http.get(obj.Url, function (response) {
		if (response.statusCode === 200) {
			var file = fs.createWriteStream(path + obj.NomeFile);
			response.pipe(file);
			response.on('end', function () {
				leggixml(obj);
			});
		}
		else {
			screen.write("Controlla l'URL. 404 Page not found")
			abort();
		}
		// Add timeout.
		request.setTimeout(12000, function () {
			request.abort();
			screen.write("Error!");
		});

	});
}


//schedula l'aggiornamento dei dati all'interno del database
cron.schedule('00,05,10,15,20,25,30,35,40,45,50,55 * * * *', function () {
	ScaricaDati(StazioneTrento);
	console.log('Aggiorno dati stazione Trento ora: ' + new Date());
});

cron.schedule('02,07,12,17,22,27,32,37,42,47,52,57 * * * *', function () {
	ScaricaDati(web);
	console.log('Aggiorno dati stazione Rovereto ora: ' + new Date());
});

