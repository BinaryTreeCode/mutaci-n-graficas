const totalGeneracionesInput = document.getElementById("totalGeneraciones");

const initialBearsInput = document.getElementById("individuos");
const dataBase = [];


class generacionData {
    constructor() {
        this.bears = []; /*hacer un toltal de todos los bears para hacer debugging*/
        this.bearsVivos;
        this.bearsMuertos;
        this.bearsBlancos;
        this.bearsNegros;
        this.bearsMacho;
        this.bearsHembra;
        this.bearsHijos;
    }
}

class bear {
    constructor(color) {
        this.yearsLife = ((Math.round(Math.random() * 4 + 3)) * 5);
        this.genero = aleatory(0.50); // 1 = macho | 0 = hembra
        this.isLife = aleatory(0.50); // 1 = vivo | 0 = muerto
        this.color = color || aleatory(0.50) // 1 = blanco | 0 = negro
        this.comidaCount = 2;

        function aleatory(percentage) {
            let probability = Math.round(Math.random() * 100) / 100
            return (probability <= percentage) ? 1 : 0;
        }
    }
}

//determina si el bear esta vivo o muerto por medio del siguiente algortimo 
//y su variable aleatoria muerte 

function setIsLife(bear) {
    if (bear.yearsLife <= 0 || bear.comidaCount <= 0) {
        return bear.isLife = 0;
    }
}

//determina si la caza de un bear va hacer extiosa por medio del siguiente  
//algortimo y su pelaje siendo el blanco el mas apto

function iscaza(color) {
    let probabilitycaza = (color == 1) ? Math.round(Math.random()) : Math.round(Math.random() * (1 - 0.1) + 0.1 * 10) / 10
    return (probabilitycaza == 1) ? 0 : -1;
} 

function createHijos(hijos) {

    function makeHijo(color) {
        hijos.push(new bear(color), new bear(color));
    }

    //calculoHijos calcula el numero de hijos que se van a crear
    //en base al numero de machos y hembras
    const calculoHijos = machos.length - hembras.length;

    const numeroHijos = (calculoHijos <= 0) ? machos.length : hembras.length;

    for (let i = 0; i <= numeroHijos - 1; i++) {
        const hembraColor = hembras[i];
        const machoColor = machos[i];
        const probabilityMutacion = Math.round(Math.random() * 100) / 100;
    
        if (machoColor == hembraColor) {
            (machoColor == 1) ? makeHijo(1) : makeHijo(0);
        } else {
            (0.50 < probabilityMutacion) ? makeHijo(1) : makeHijo(0);
        }
    }
    
}

//ciclo de la primera genración con los individuos puestos por el usuario

function ciclo(generacionBears, i) { 

    let bearsVivos = [];
    let bearsMuertos = [];
    let hijos = [];

    generacionBears.forEach(bear => {
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


//ejecuta todo el programa
function Crear_Bears() {
    const totalGeneraciones = parseInt(totalGeneracionesInput.value) + 1;
    createDataStructure(totalGeneraciones);
    createInitialBears();

    let i = 0;
    while (i < totalGeneraciones - 1) {
        dataBase[i+1].bears = ciclo(dataBase[i].bears, i)
        i++;
    }

    graficar();
}

//**mejorar
//cear arrays con la clase dataGeneracion   
function createDataStructure(totalGeneraciones) {
    for (let i = 1; i <= totalGeneraciones; i++) {
        dataBase.push(new generacionData ());
    }
}

//cear bearsIniciales con la clase bear 
function createInitialBears() {
    const initialBears = parseInt(initialBearsInput.value);
    
    for (let i = 0; i <= initialBears; i++) {
        dataBase[0].bears.push(new bear())
    }
}


//mapea los datos para la grafica
function getLabels() {
    getGeneracionLabel()

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


//crea la grafica con dataset
function grafica() {
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
                label: 'Muertes',
                backgroundColor: colors.muerto,
                borderColor: colors.muerto,
                data: labelMuerto,
                fill: true,
            },  {
                label: 'polares',
                fill: false,
                backgroundColor: colors.mutante,
                borderColor: colors.mutante,
                borderDash: [5, 5],
                data: labelBlanco,
            }, {
                label: 'pardos',
                fill: false,
                backgroundColor: colors.negro,
                borderColor: colors.negro,
                data: labelNegro,
            },{
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
            }, 
            {
                label: 'natalidad',
                backgroundColor: "rgb(252, 235, 243)",
                borderColor: "rgb(211, 0, 91)",
                data: labelHijos,
                fill: true,
            }
        ]
    }

    const ctx = document.getElementById('grafica');
    const myChart = new Chart(ctx, {
        type: 'line',
        data:
            dataset,
        options: {
            // interactive: true,
            // animation: true,
            // responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
    });
}

function graficar() {
    getLabels()
    grafica()
}

console.log(Crear_Bears()); 
