var mysql = require('mysql');

var config = require('./local_config.js');		// inizializza la variabile "config"

exports.log = function log(msg) {
    console.log('');
    console.log(' ----- ' + new Date().toLocaleString() + ' ----- ');
    console.log(msg);
    console.log('');
}

exports.eseguiQuery = function eseguiQuery(res, sQuery, aParam) {

    // for debug -----------------------------
    this.log('Request: SQL -- ' + sQuery);
    // for debug -----------------------------
    
	connection = mysql.createConnection(config.connection);
    connection.connect();
    connection.query(sQuery, aParam, function (err, rows, fields) {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(' >>>>> ' + err)
            res.json('{}');
        }
    });
    connection.end();
}
