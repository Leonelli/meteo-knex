var indirizzo = 'http://127.0.0.1';
var porta = '8080';
var stazTrento = 'T0135';
var stazRovereto = 'T0147';

//FUNZIONI CHE STAMPANO NELL'INDEX I DATI DI TEMPERATURA VENTO PIOGGIA E DATA DELLE STAZIONI PRESE IN ESAME

//aggingere id nella chiamata
$(document).ready(function () {
    console.log("temperatura");
    //TEMPERATURA TRENTO 
    $.get(indirizzo+":"+porta+"/temperatura/"+stazTrento, (dati) => {
        tmp = dati[dati.length - 1];
        console.log("temperatura a trento: " + tmp.temperatura);
        temperatura = tmp.temperatura;
        console.log(temperatura);
        $(".temperaturaTN").prepend(temperatura + " °C");
    });
    console.log("pioggia");
    //PIOGGIA  TRENTO
    $.get(indirizzo+":"+porta+"/pioggia/"+stazTrento, (dati) => {
        tmp = dati[dati.length - 1];
        pioggia = tmp.mm;
        console.log(pioggia);
        $(".pioggiaTN").prepend(pioggia + " mm");
    });
    console.log("vento");
    //VENTO TRENTO 
    $.get(indirizzo+":"+porta+"/vento/"+stazTrento, (dati) => {
        tmp = dati[dati.length - 1];
        vento = tmp.vento;
        console.log(vento);
        $(".ventoTN").prepend(vento + " km/h");
    });
    //DATA TRENTO
    $.get(indirizzo+":"+porta+"/temperatura/"+stazTrento, (dati) => {
        tmp = dati[dati.length - 1];
        dataora = tmp.data;
        d = new Date(dataora).toString();
        console.log("data");
        console.log((d.split(" ", 4)));
        d = d.split(" ", 5).toString();
        for (var i = 0; i < 6; i++) {
            d = d.replace(",", " ");
        }
        $(".dataTN").prepend(d);
    });
});

//ROVERETO
$(document).ready(function () {
    console.log("temperatura");
    //TEMPERATURA ROVERETO
    $.get(indirizzo+":"+porta+"/temperatura/"+stazRovereto, (dati) => {
        tmp = dati[dati.length - 1];
        temperatura = tmp.temperatura;
        console.log(temperatura);
        $(".temperaturaRV").prepend(temperatura + " °C");
    });
    console.log("pioggia");
    //PIOGGIA ROVERETO
    $.get( indirizzo+":"+porta+"/pioggia/"+stazRovereto, (dati) => {
        tmp = dati[dati.length - 1];
        pioggia = tmp.mm;
        console.log(pioggia);
        $(".pioggiaRV").prepend(pioggia + " mm");
    });
    console.log("vento");
    //VENTO ROVERETO
    $.get(indirizzo+":"+porta+"/vento/"+stazRovereto, (dati) => {
        tmp = dati[dati.length - 1];
        vento = tmp.vento;
        console.log(vento);
        $(".ventoRV").prepend(vento + " km/h"); //NON STAMPA LE IMMAGINI
    });
    //DATA ROVERETO
    $.get(indirizzo+":"+porta+"/temperatura/"+stazRovereto, (dati) => {
        tmp = dati[dati.length - 1];
        dataora = tmp.data;
        d = new Date(dataora).toString();
        console.log("data");
        console.log((d.split(" ", 4)));
        d = d.split(" ", 5).toString();
        for (var i = 0; i < 6; i++) {
            d = d.replace(",", " ");
        }
        $(".dataRV").prepend(d);
    });
});