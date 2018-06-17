var STAZIONE1="T0135"; //trento
var STAZIONE2 ="T0147"; //rovereto
module.exports = 
{
    pg:
    {
        client: "pg",
        connection: 
        {
            host : '192.168.6.52',
            user : 'root',
            password : 'cisco',
            database : 'knex'
        },
    },
    sqlite:
    {
        client: "sqlite3",
        connection:
        {
            filename: "./book.sqlite"
        },
        debug: false
    },
    mysql:
    {
        client: "mysql",
        connection:
        {
           host: '127.0.0.1',//'192.168.6.52',
            user: 'root',
            password:'root',//'cisco',
            database: 'meteo'        
        },
        debug: false
    },
    web:
    {
        //Stazione1:STAZIONE1,
        Stazione:STAZIONE2,
        Url:"http://dati.meteotrentino.it/service.asmx/ultimiDatiStazione?codice="+STAZIONE2,
        NomeFile:"datiRovereto.xml"
    },
    StazioneTrento:
    {
        Stazione:STAZIONE1,
        Url:"http://dati.meteotrentino.it/service.asmx/ultimiDatiStazione?codice="+STAZIONE1,
        NomeFile:"datiTrento.xml"
    },    
    stazioni:
    {
        Url:"http://dati.meteotrentino.it/service.asmx/listaStazioni",
        NomeFile:"stazioni.xml"
    },
    porta_wserver:"8080",
    path:"xml/",
    help_dir:"help",
    site_dir:"page",
    porta_wpage:'6300'
};