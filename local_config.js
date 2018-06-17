// ----------------------------
// Configurazione Locale
// ----------------------------
var cfg = require("./cfg").mysql;
var config =
    {
        ws_version: 'Versione: 1',
        ws_port: 8080,
		ws_guid: '094C4271-7FB0-4070-985E-26EC39EBACF5',
        connection:
        {
            host: cfg.connection.host,
            user: cfg.connection.user,
            password: cfg.connection.password,
            database: cfg.connection.database
        }
    };

/**
 * Consente di inizializzare le variabili di configurazione (locali) del web service.
 * @return La configurazione corrente.
 * @public
 */

module.exports = config;
