const totalGeneracionesInput = document.getElementById("totalGeneraciones");

const initialBearsInput = document.getElementById("individuos");
const dataBase = [];

function executeOrder() {
    //+1 para generar la información de la proxima generación
    const totalGeneraciones = parseInt(totalGeneracionesInput.value) + 1;
    createDataStructure(totalGeneraciones);
    createInitialBears();

    let i = 0;

    //sin ese -1 se daña
    while (i < totalGeneraciones - 1) {
        dataBase[i + 1].bears = ciclo(dataBase[i].bears, i)
        i++;
    }

    createGrafica();
    dataBase.length = 0;
}

function createDataStructure(totalGeneraciones) {
    class generacionData {
        constructor() {
            this.bears = [];
            this.bearsVivos;
            this.bearsMuertos;
            this.bearsBlancos;
            this.bearsNegros;
            this.bearsMacho;
            this.bearsHembra;
            this.bearsHijos;
        }
    }

    for (let i = 1; i <= totalGeneraciones; i++) {
        dataBase.push(new generacionData());
    }
}

class bear {
    constructor(color) {
        this.yearsLife = ((Math.round(Math.random() * 4 + 3)) * 5);
        this.genero = aleatory(0.50); // 1 = macho | 0 = hembra
        this.isLife = aleatory(0.50); // 1 = vivo | 0 = muerto
        this.color = color !== undefined ? color : aleatory(0.05);  // 1 = blanco | 0 = negro
        this.comidaCount = 2;

        // use 1 y 0, ya que ocupa menos espacio que un String
        function aleatory(percentage) {
            const probability = Math.round(Math.random() * 100) / 100
            return (probability <= percentage) ? 1 : 0;
        }
    }
}

function createInitialBears() {
    const initialBears = parseInt(initialBearsInput.value);

    for (let i = 0; i <= initialBears; i++) {
        dataBase[0].bears.push(new bear())
    }
}


function ciclo(bearsGeneracion, i) {

    let bearsVivos = [];
    let bearsMuertos = [];
    let hijos = [];

    bearsGeneracion.forEach(bear => {
        setIsLife(bear)
        if (bear.isLife == 1) {
            bear.yearsLife -= 5;

            bear.comidaCount += iscaza(bear.color)
            bearsVivos.push(bear)
        } else {
            bearsMuertos.push(0);
        }
    });

    machos = bearsVivos.bearsMacho = bearsVivos
        .filter(element => element.genero === 1)
        .map(element => element.color);

    hembras = bearsVivos.bearsHembra = bearsVivos
        .filter(element => element.genero === 0)
        .map(element => element.color);

    createHijos(hijos)

    dataBase[i].bearsVivos = bearsVivos.length;
    dataBase[i].bearsMuertos = bearsMuertos.length;

    dataBase[i].bearsBlancos = bearsVivos.filter(element => element.color == 1).length;
    dataBase[i].bearsNegros = bearsVivos.filter(element => element.color == 0).length;

    dataBase[i].bearsMacho = machos.length;
    dataBase[i].bearsHembra = hembras.length;

    dataBase[i].bearsHijos = hijos.length;

    return [...bearsVivos, ...hijos]
}

/*tuve que pasar el objeto completo, ya que asignar el valor directamente a "oso.isLife = fuction()".
Tendria que comtemplar el caso en el que isLife sea 0 desde el incio y si es así retonar 0 y si no 1 */
function setIsLife(bear) {
    if (bear.yearsLife <= 0 || bear.comidaCount <= 0) {
        return bear.isLife = 0;
    }
}

function iscaza(color) {
    let probabilitycaza = (color == 1) ? Math.round(Math.random()) : Math.round((Math.random() * (1 - 0.1) + 0.1) * 10) / 10;
    return (probabilitycaza == 1) ? 0 : -1;
}

function createHijos(hijos) {

    function makeHijo(color) {
        hijos.push(new bear(color), new bear(color));
    }

    const calculoHijos = machos.length - hembras.length;

    /*esto significa que si hay mayor numero de hembras entonces estas,
    seran embarazadas por los machos. Por el contrario a los machos ser 
    mas solo podran embarzar a z numero de hembras*/
    const numeroHijos = (calculoHijos <= 0) ? machos.length : hembras.length;

    for (let i = 0; i <= numeroHijos - 1; i++) {
        const hembraColor = hembras[i];
        const machoColor = machos[i];
        const probabilityMutacion = Math.round(Math.random() * 100) / 100;

        //ley de mendel
        if (machoColor == hembraColor) {
            (machoColor == 1) ? makeHijo(1) : makeHijo(0);
        } else {
            (0.50 < probabilityMutacion) ? makeHijo(1) : makeHijo(0);
        }
    }

}

// grafica
function createGrafica() {
    getLabels()
    setGrafica()
}

function getLabels() {

    labelVivo = getEtiqueta("bearsVivos");
    labelMuerto = getEtiqueta("bearsMuertos");

    labelBlanco = getEtiqueta("bearsBlancos");
    labelNegro = getEtiqueta("bearsNegros");

    labelMacho = getEtiqueta("bearsMacho");
    labelEmbra = getEtiqueta("bearsHembra");

    labelHijos = getEtiqueta("bearsHijos");

    function getEtiqueta(bears) {
        return dataBase.map(element => element[bears]);
    }
}

function getGeneracionLabel() {
    const generacionIds = [];
    let i = 1;
    while (i <= parseInt(totalGeneracionesInput.value)) {
        generacionIds.push(i);
        i++;
    }
    return generacionIds;
}


let myChart;
function setGrafica() {
    Chart.defaults.color = '#000000';
    Chart.defaults.font.size = 17;

    const colors = {
        vivo: 'rgb(154, 205, 56)',
        polar: 'rgb(154, 205, 56)',
        negro: '#7E4231',
        macho: '#5d9b9b',
        hembra: '#ea899a',
        mutante: 'rgb(154, 205, 56)',
        muerto: '#FA6484',
    }

    const dataset = {
        labels: generacionLabel = getGeneracionLabel(),
        datasets: [
            {
                label: 'poblacional total',
                fill: false,
                backgroundColor: colors.vivo,
                borderColor: colors.vivo,
                data: labelVivo,
            }, {
                label: 'polares',
                fill: false,
                backgroundColor: "rgb(255, 255, 255)",
                borderColor: "rgb(173, 216, 230)",
                // borderDash: [5, 5],
                data: labelBlanco,
            }, {
                label: 'pardos',
                fill: false,
                backgroundColor: colors.negro,
                borderColor: colors.negro,
                data: labelNegro,
            }, {
                label: 'machos',
                backgroundColor: colors.macho,
                borderColor: colors.macho,
                data: labelMacho,
                fill: false,
            }, {
                label: 'hembras',
                backgroundColor: colors.hembra,
                borderColor: colors.hembra,
                data: labelEmbra,
                fill: false,
            }, {
                label: 'Muertes',
                backgroundColor: colors.muerto,
                borderWidth: 2,
                borderColor: "rgb(0, 0, 0)",
                pointBorderColor: "rgb(0, 0, 0)",
                data: labelMuerto,
                fill: true,
            },
            {
                label: 'natalidad',
                backgroundColor: "rgb(252, 235, 243)",
                borderColor: "rgb(211, 0, 91)",
                borderWidth: 2.2,
                pointBackgroundColor: "rgb(211, 0, 91)",
                data: labelHijos,
                fill: true,
            },
        ]
    }

    const ctx = document.getElementById('grafica');

    //No he podido dar una animación a la grafica
    // const totalDuration = 600 * generacionLabel.length;
    // const delayBetweenPoints = totalDuration / generacionLabel.length;
    // const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    // const animation = {
    //     x: {
    //         type: 'number',
    //         easing: 'linear',
    //         duration: delayBetweenPoints,
    //         from: NaN, // the point is initially skipped
    //         delay(ctx) {
    //             if (ctx.type !== 'data' || ctx.xStarted) {
    //                 return 0;
    //             }
    //             ctx.xStarted = true;
    //             return ctx.index * delayBetweenPoints;
    //         }
    //     },
    //     y: {
    //         type: 'number',
    //         easing: 'linear',
    //         duration: delayBetweenPoints,
    //         from: previousY,
    //         delay(ctx) {
    //             if (ctx.type !== 'data' || ctx.yStarted) {
    //                 return 0;
    //             }
    //             ctx.yStarted = true;
    //             return ctx.index * delayBetweenPoints;
    //         }
    //     }
    // };

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: dataset,
        options: {
            //animation,
            interaction: {
                intersect: true
            },
            plugins: {
                legend: true
            },
            // scales: {
            //     x: {
            //         type: 'linear'
            //     }
            // }
        }
    });
}
