var cfg = require("./cfg").mysql;
var path = require("./cfg").path;
var stazioni = require("./cfg").stazioni;
var screen = require("./screen");
var knex = require("knex")(cfg);
var http = require('http');
var fs = require('fs');
var fastXmlParser = require('fast-xml-parser');
var dati;
var Promise = require('bluebird');


//crea schema con knex
knex.schema.createTable('stazioni', function (table) {
    table.string('id_stazione', 6).primary();
    table.string('nome', 64);
    table.integer('elevazione', 11);
    table.float('latitudine');
    table.float('longitudine');
});


function dbStazioni(dati) {
	knex.schema.createTable('stazioni', function (table) {
		table.string('id_stazione', 6);//.primary();
		table.string('nome', 64);
		table.integer('elevazione', 11);
		table.float('latitudine');
		table.float('longitudine');
	}).then(() => {
		dati.forEach(function (element) {
			if (element.codice) {
				knex('stazioni')
					.returning('id')
					.insert({ id_stazione: element.codice, nome: element.nome, elevazione: element.quota, latitudine: element.latitudine, longitudine: element.longitudine })
					.then(
					(id) => {
					}).finally(function () {
						knex.destroy();
					});
			}
		});
	});
}

//popola il database
function InserisciStazioni(dati) {
	dati.forEach(function (element) {
		knex('stazioni').where('id_stazione', element.codice).del()
			.then(() => {
				knex('stazioni')
					.returning('id')
					.insert({ id_stazione: element.codice, nome: element.nome, elevazione: element.quota, latitudine: element.latitudine, longitudine: element.longitudine })
					.then(
					(id) => {
					}).finally(function () {
						//knex.destroy();
					});
				//});
			});
	});
}
//scarica i dati dall'xml e li inserisce nel database popolandolo con le stazioni
function ScaricaDati(obj) {
	var request = http.get(obj.Url, function (response) {
		if (response.statusCode === 200) {
			var file = fs.createWriteStream(path + obj.NomeFile);
			response.pipe(file);
			response.on('end', function () {
                //leggicsv(obj);
                fs2 = require('fs')
                fs2.readFile(path+obj.NomeFile, 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    dati = fastXmlParser.parse(data).ArrayOfAnagrafica.anagrafica;
                    InserisciStazioni(dati);
                });
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

ScaricaDati(stazioni);