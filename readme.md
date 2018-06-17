# Creare il database
```
create database meteo;
create table pioggia(id_stazione varchar(6) ,data datetime, mm int);
create table temperatura(id_stazione varchar(6),data datetime,temperatura float);
create table vento(id_stazione varchar(6),data datetime,vento  float,direzione int);
create table stazioni(id_stazione varchar(6),nome varchar(64),elevazione int,latitudine double,longitudine double);
```

## Modalità d'utilizzo primo avvio:
- creare le tabelle su un database "meteo" (vedi file cfg)
- avviare l'app (con node) 'schema_stazioni.js' che andrà ad inserire le stazioni nel database (basta avviarla una sola volta) 
```
node schema_stazioni.js
```

## Successivamente:
- avviare l'app (con node) 'app.js' che andrà ad inserire i dati di temperatura, vento e precipitazioni all'interno del database aggiornandolo in automatico ad intervalli regolari e lasciarla andare l'app 
```
node app.js
```
- avviare l'app (con node) 'web_page.js' e 'web-service.js' che andranno risperrivamente a fornire le pagine (home e grafici) e i web services richiesti per far funazionare l'applicazione. Rispettivamnete sulla **porta 6300 (pagine) e 8080 (ws)** e lasciare andare l'app 
```
node web_page.js
node web-service.js
```

Il tutto funziona in locale (localhost).
Cambiare ip, nome utente, password o tutto il necessario sul file di configurazione **cfg**