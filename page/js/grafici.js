var indirizzo ='http://127.0.0.1';
var porta = '8080';
var stazTrento = 'T0135';
var stazRovereto = 'T0147';
 
//PIOGGIA TRENTO
$.get( indirizzo+":"+porta+"/pioggia/"+stazTrento, (dati) => {
    var chartData = [];
    for (var i = 0; i < dati.length; i++) {
        let d = new Date(dati[i].data);
        d.setHours(d.getHours());
        let data = AmCharts.formatDate(new Date(d), "DD/MM/YYYY JJ:NN:SS");
        let piog = dati[i].mm;
        chartData.push({
            date: d,
            value: piog,
            media: 0
        });
    }
    chartData.sort((a, b) => { if (a.date >= b.date) return 1; if (a.date <= b.date) return -1; return 0 });

    AmCharts.makeChart("pioggiaTrento", {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "dataProvider": chartData,
        "valueAxes": [{
            "axisAlpha": 0.1
        }],

        "graphs": [{
            "balloonText": "[[title]]: [[value]]",
            "lineThickness": 2,
            "title": "mm",
            "valueField": "value"
        }],
        "zoomOutButtonRollOverAlpha": 0.15,
        "chartCursor": {
            "categoryBalloonDateFormat": "DD/MM/YY JJ:NN",
            "cursorPosition": "mouse",
            "showNextAvailable": true
        },
        "autoMarginOffset": 5,
        "columnWidth": 1,
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "mm",
            "parseDates": true
        },
        "export": {
            "enabled": true
        }
    });
});
//TEMPERATURA TRENTO
$.get(indirizzo+":"+porta+"/temperatura/"+stazTrento, (dati) => {
    var chartData = [];
    for (var i = 0; i < dati.length; i++) {
        let d = new Date(dati[i].data);
        d.setHours(d.getHours());
        let data = AmCharts.formatDate(new Date(d), "DD/MM/YYYY JJ:NN:SS");
        let piog = dati[i].temperatura;
        chartData.push({
            date: d,
            value: piog,
            media: 0
        });
    }
    chartData.sort((a, b) => { if (a.date >= b.date) return 1; if (a.date <= b.date) return -1; return 0 });

    AmCharts.makeChart("temperaturaTrento", {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "dataProvider": chartData,
        "valueAxes": [{
            "axisAlpha": 0.1
        }],

        "graphs": [{
            "balloonText": "[[title]]: [[value]]",
            "lineThickness": 2,
            "title": "temperatura",
            "valueField": "value"
        }],
        "zoomOutButtonRollOverAlpha": 0.15,
        "chartCursor": {
            "categoryBalloonDateFormat": "DD/MM/YY JJ:NN",
            "cursorPosition": "mouse",
            "showNextAvailable": true
        },
        "autoMarginOffset": 5,
        "columnWidth": 1,
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "mm",
            "parseDates": true
        },
        "export": {
            "enabled": true
        }
    });
});
//VENTO TRENTO
$.get(indirizzo+":"+porta+"/vento/"+stazTrento, (dati) => {
    var chartData = [];
    for (var i = 0; i < dati.length; i++) {
        let d = new Date(dati[i].data);
        d.setHours(d.getHours());
        let data = AmCharts.formatDate(new Date(d), "DD/MM/YYYY JJ:NN:SS");
        let vento = dati[i].vento;
        chartData.push({
            date: d,
            value: vento,
            media: 0
        });
    }
    chartData.sort((a, b) => { if (a.date >= b.date) return 1; if (a.date <= b.date) return -1; return 0 });

    AmCharts.makeChart("ventoTrento", {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "dataProvider": chartData,
        "valueAxes": [{
            "axisAlpha": 0.1
        }],

        "graphs": [{
            "balloonText": "[[title]]: [[value]]",
            "lineThickness": 2,
            "title": "vento",
            "valueField": "value"
        }],
        "zoomOutButtonRollOverAlpha": 0.15,
        "chartCursor": {
            "categoryBalloonDateFormat": "DD/MM/YY JJ:NN",
            "cursorPosition": "mouse",
            "showNextAvailable": true
        },
        "autoMarginOffset": 5,
        "columnWidth": 1,
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "mm",
            "parseDates": true
        },
        "export": {
            "enabled": true
        }
    });
});

//ROVERETO
  //PIOGGIA ROVERETO
  $.get(indirizzo+":"+porta+"/pioggia/"+stazRovereto, (dati) => {
    var chartData = [];
    for (var i = 0; i < dati.length; i++) {
        let d = new Date(dati[i].data);
        d.setHours(d.getHours());
        let data = AmCharts.formatDate(new Date(d), "DD/MM/YYYY JJ:NN:SS");
        let piog = dati[i].mm;
        chartData.push({
            date: d,
            value: piog,
            media: 0
        });
    }
    chartData.sort((a, b) => { if (a.date >= b.date) return 1; if (a.date <= b.date) return -1; return 0 });

    AmCharts.makeChart("pioggiaRovereto", {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "dataProvider": chartData,
        "valueAxes": [{
            "axisAlpha": 0.1
        }],

        "graphs": [{
            "balloonText": "[[title]]: [[value]]",
            "lineThickness": 2,
            "title": "mm",
            "valueField": "value"
        }],
        "zoomOutButtonRollOverAlpha": 0.15,
        "chartCursor": {
            "categoryBalloonDateFormat": "DD/MM/YY JJ:NN",
            "cursorPosition": "mouse",
            "showNextAvailable": true
        },
        "autoMarginOffset": 5,
        "columnWidth": 1,
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "mm",
            "parseDates": true
        },
        "export": {
            "enabled": true
        }
    });
});
//TEMPERATURA ROVERETO
$.get(indirizzo+":"+porta+"/temperatura/"+stazRovereto, (dati) => {
    var chartData = [];
    for (var i = 0; i < dati.length; i++) {
        let d = new Date(dati[i].data);
        d.setHours(d.getHours());
        let data = AmCharts.formatDate(new Date(d), "DD/MM/YYYY JJ:NN:SS");
        let piog = dati[i].temperatura;
        chartData.push({
            date: d,
            value: piog,
            media: 0
        });
    }
    chartData.sort((a, b) => { if (a.date >= b.date) return 1; if (a.date <= b.date) return -1; return 0 });

    AmCharts.makeChart("temperaturaRovereto", {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "dataProvider": chartData,
        "valueAxes": [{
            "axisAlpha": 0.1
        }],

        "graphs": [{
            "balloonText": "[[title]]: [[value]]",
            "lineThickness": 2,
            "title": "temperatura",
            "valueField": "value"
        }],
        "zoomOutButtonRollOverAlpha": 0.15,
        "chartCursor": {
            "categoryBalloonDateFormat": "DD/MM/YY JJ:NN",
            "cursorPosition": "mouse",
            "showNextAvailable": true
        },
        "autoMarginOffset": 5,
        "columnWidth": 1,
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "mm",
            "parseDates": true
        },
        "export": {
            "enabled": true
        }
    });
});
//VENTO ROVERETO
$.get(indirizzo+":"+porta+"/vento/"+stazRovereto, (dati) => {
    var chartData = [];
    for (var i = 0; i < dati.length; i++) {
        let d = new Date(dati[i].data);
        d.setHours(d.getHours());
        let data = AmCharts.formatDate(new Date(d), "DD/MM/YYYY JJ:NN:SS");
        let vento = dati[i].vento;
        chartData.push({
            date: d,
            value: vento,
            media: 0
        });
    }
    chartData.sort((a, b) => { if (a.date >= b.date) return 1; if (a.date <= b.date) return -1; return 0 });

    AmCharts.makeChart("ventoRovereto", {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "dataProvider": chartData,
        "valueAxes": [{
            "axisAlpha": 0.1
        }],

        "graphs": [{
            "balloonText": "[[title]]: [[value]]",
            "lineThickness": 2,
            "title": "vento",
            "valueField": "value"
        }],
        "zoomOutButtonRollOverAlpha": 0.15,
        "chartCursor": {
            "categoryBalloonDateFormat": "DD/MM/YY JJ:NN",
            "cursorPosition": "mouse",
            "showNextAvailable": true
        },
        "autoMarginOffset": 5,
        "columnWidth": 1,
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "mm",
            "parseDates": true
        },
        "export": {
            "enabled": true
        }
    });
});
