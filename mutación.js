// ¡MUY IMPORTANTE HACER UNA GRAFICA MAS DE NATALIDA!

//***mejorar la nomenclatura la que se nombran las variables.
//***Pasar las variables a let o const respectivamente.
//***Analizar función.
//***Cambiar el while.

const totalGeneracionesInput = document.getElementById("totalGeneraciones"); 
//totalGeneracionesInput  = generaciones a generar

const initialOsosInput = document.getElementById("individuos");

const dataBase = []; //*const
let totalGeneraciones; //*scope

//**analizar estructura de la clase
//IMPORTANTE
class dataGeneracion   { 
    constructor() {
        this.osos = []; /*hacer un toltal de todos los osos para hacer debugging*/
        this.ososBlancos = [];
        this.ososNegros = []
        this.ososHijos = [];
        this.ososMuertos = [];
        this.ososMacho = [];
        this.ososHembra = [];
    }
}


//**mejorar
//cear arrays con la clase dataGeneracion   
function createDataStructure() {
    i = a; //*que es 'a'
    totalGeneraciones = parseInt(totalGeneracionesInput.value); //*totalGeneracionesInput
    while (i <= totalGeneraciones) { //*for?
        dataStructure = new dataGeneracion(); 
        dataBase.push(dataStructure); //*best method?
        i++;
    }
}

const ososGeneracion0 = []

//cear ososIniciales con la clase oso 
function ososIniciales() {
    i = 1;
    var initialOsos = parseInt(initialOsosInput.value);
    while (i <= initialOsos) {
        let osoStats = new oso(true);
        ososGeneracion0.push(osoStats)
        i++;
    }
}

//***cambiar todos los strings de las clases por 1 y 0 para mejorar el rendimiento

class oso { //**ver opciones de Math.floor((Math.random)) y hacer función
    constructor(color) {
        this.probabilityMuerte = Math.floor((Math.random() * 100) + 1); 
        this.probabilityMutacion = Math.floor((Math.random() * 100) + 1);
        this.yearsLife = Math.floor((Math.random() * 35) + 1);
        setYearsLife(this.yearsLife);
        // this.yearsLife = años(this.yearsLife); is NAN
        if (Math.floor((Math.random() * 2) + 1) == 1) {
            this.genero = "macho";
        } else {
            this.genero = "hembra";
        }
        this.isLife = true;
        this.comidaCount = 2;
        this.color = color;
    }
}


//determina años del oso por medio del siguiente algortimo y su variable aleatoria vida 
function setYearsLife(lifeCount) { //**analizar función
    if (lifeCount < 15) {
        lifeCount = 15;
    }
    else {
        if (lifeCount > 30) {
            if ((Math.floor((Math.random() * 100) + 1)) > 50) {
                lifeCount = lifeCount;
            }   
            else {
                lifeCount = 30;
            }
        }
        if (lifeCount < 15) {
            if ((Math.floor((Math.random() * 100) + 1)) < 50) {
                lifeCount = 15;
            }
            else {
                lifeCount = 20;
            }
        }
        //*corregir error
        //ERROR porque osos deben quedar en multiplos de 5
        // y quedan en -1, 3, 17; 

        // console.log("before" + vida); 
        lifeString = String(lifeCount); //codigo para evitar errores al quitar de 5 en 5
        lifeStringN1 = lifeString.charAt(1);
        lifeStringN2 = lifeString.charAt(0);
        if (lifeStringN1 < 5) {
            lifeCount = parseInt(lifeStringN1 + "0");
        }
        else {
            lifeCount = parseInt(lifeStringN2 + "5");
        }
        // console.log("after" + vida); // funciona bien
    }
}



//determina si el oso esta vivo o muerto por medio del siguiente algortimo 
//y su variable aleatoria muerte 
function setIsLife(length, osos) { 
    i = i - i; 
    while (i <= length) {
        if (osos[i].probabilityMuerte >= 50) {
            osos[i].isLife = "vivo" //*1
        }
        else {
            osos[i].isLife = "muerto" //*0
        }
        i++;
    }
}

//determina si el oso va a mutar por medio del siguiente algortimo 
//y su variable aleatoria mutación 
function ismutante(length, osos) {
    i = i - i;
    while (i <= length) {
        if (osos[i].color == "negro" || osos[i].color == true) {
            if (osos[0 + i].isLife === "vivo" && osos[0 + i].probabilityMutacion <= 20) {
                osos[i].color = "blanco"
            }
            else {
                osos[i].color = "negro"
            }
        }
        else {

        }
        i++;
    }
}

// var focas = 5000; //debido a la dificultad de la caza no puse un limite de focas
//determina si la caza de un oso va hacer extiosa por medio del siguiente  
//algortimo y su pelaje siendo el blanco el mas apto
function iscaza(length, osos) {
    i = i - i;
    // focas = input_array.length;
    while (i < length) {
        cazador = osos[i];      
        if (cazador.color == "blanco") {
            probabilitycaza = Math.floor((Math.random() * 2) + 1);
        }
        else {
            probabilitycaza = Math.floor((Math.random() * 10) + 1);
        }
        if (probabilitycaza == 1) {
            // focas--;
            cazador.comidaCount += 1;
            // console.log("caza exitosa");
        }
        i++;
    }
}

var arrayM; //arrayM array para registrar las muertes;
//determina si el oso esta vivo o muerto por medio del siguiente algortimo 
function getOsosVivos(length, osos, ososVivos) {
    // console.log(input_array);
    i = i - i;
    while (i <= length) {
        if (osos[i].yearsLife <= 0) { //|| input_array[i].comidaCount <= 0
            osos[i].isLife = "muerto"
            // console.log(a + " muerte natural");
        }
        else if (osos[i].comidaCount <= 0) {
            osos[i].isLife = "muerto"
            // console.log(a + " muerte por hambre");
        }
        else if (osos[i].isLife == "muerto") {
            // console.log(a + " muerte");
        }
        i++;
    }

    i = i - i;
    while (i <= length) {
        if (osos[i].isLife == "vivo") {
            ososVivos.push(osos[i]) //los sobrevivientes
        }
        else {
            arrayM = dataBase[a].ososMuertos;
            arrayM.push(osos[i].isLife);
        }
        i++;
    }
}

//simula la reprodución por medio de las leyes de Mendel
function createHijos(hijos) {
    i = i - i;

    //calculoHijos calcula el numero de hijos que se van a crear
    //en base al numero de machos y hembras
    calculoHijos = machos.length - hembras.length;

    if (calculoHijos <= 0) {
        numeroHijos = machos.length;
    } else {
        numeroHijos = hembras.length;
    }
    while (i <= numeroHijos - 1) {
        macho = machos[i];
        hembra = hembras[i];
        probabilityMutacion = Math.floor((Math.random() * 100) + 1)

        if (macho.color == hembra.color) {
            if (macho.color == "blanco" && 20 <= probabilityMutacion) {
                hijoBlanco = new oso("blanco");
                hijos.push(hijoBlanco)
                hijoBlanco = new oso("blanco");
                hijos.push(hijoBlanco)
            } else if (macho.color == "negro" && 20 <= probabilityMutacion) {
                hijoNegro = new oso("negro");
                hijos.push(hijoNegro);
                hijoNegro = new oso("negro");
                hijos.push(hijoNegro);
            }
        } else {
            if (50 < probabilityMutacion) {
                hijoBlanco = new oso("blanco");
                hijos.push(hijoBlanco)
                hijoBlanco = new oso("blanco");
                hijos.push(hijoBlanco)
            }
            else {
                hijoNegro = new oso("negro", 0);
                hijos.push(hijoNegro);
                hijoNegro = new oso("negro", 0);
                hijos.push(hijoNegro);
            }
        }
        i++;
    }
}

var largoo1, ouput_arrayy2;


//ciclo de la primera genración con los individuos puestos por el usuario
function ciclo0(length, osos, ososVivos, ososHijos) {
    i = i - i;
    setIsLife(length, osos)
    ismutante(length, osos)

    osos.forEach(element => {
        element.yearsLife -= 5;
        element.comidaCount -= 1;
    });
    iscaza(length, osos)

    getOsosVivos(length, osos, ososVivos)
    lengthOsosVivos = ososVivos.length - 1;

    machos = dataBase[0].ososMacho = ososVivos.filter(element => element.genero === "macho");
    hembras = dataBase[0].ososHembra = ososVivos.filter(element => element.genero === "hembra");

    createHijos(ososHijos)

    largoo1 = ososHijos.length - 1;
    ouput_arrayy2 = ososHijos;
}

//ciclo del resto de las generaciones
function ciclo(generacion, hijos_generacion) {
    // revisar codigo no nesario en el ciclo de aqui
    setIsLife(largoo1, ouput_arrayy2)
    ismutante(largoo1, ouput_arrayy2)

    //ouput_arrayy2 son los hijos no definidos(sin genero o estado) de la generacion anterior

    ouput_arrayy2.forEach(oso => {
        oso.yearsLife -= 5;
        oso.comidaCount -= 1;

        if (oso.yearsLife <= 0) {
            oso.isLife = "muerto"
        }
    });

    iscaza(largoo1, ouput_arrayy2)

    getOsosVivos(largoo1, ouput_arrayy2, generacion)

    dataBase[a - 1].osos.forEach(element => {
        generacion.push(element)
    });


    //HA AQUI
    lengthOsosVivos = generacion.length - 1;

    machos = dataBase[a].ososMacho = generacion.filter(element => element.genero === "macho");
    hembras = dataBase[a].ososHembra = generacion.filter(element => element.genero === "hembra");

    createHijos(hijos_generacion)

    largoo1 = hijos_generacion.length - 1;
    ouput_arrayy2 = hijos_generacion;
}

i = 0;
a = 0;
var generaciones;
var array_secreto = [];

//ejecuta el programa
function Crear_osos() {
    a = 1; //a es la variable iterativa que se usa para el ciclo, sabiendo que ciclo
    //son todos los ciclos despues del ciclo inicial "ciclo1". 
    createDataStructure();
    ososIniciales();
    i = 0

    largo = ososGeneracion0.length - 1;
    largo_final = dataBase.length - 1;
    generacion1 = dataBase[0].osos;
    hijos_generacion1 = dataBase[0].ososHijos;
    mutantes1 = dataBase[0].mutantes;
    muertes1 = dataBase[0].ososMuertos;

    ciclo0(largo, ososGeneracion0, generacion1, hijos_generacion1)

    a = a;
    while (a <= largo_final) {
        ciclo(dataBase[a].osos, dataBase[a].ososHijos)
        a++;
    }


    // largo = document.getElementById("contenedor");
    // largo.style.margin-bottom = "2rem";
    graficar();
}

// function mapeo(arrayX, condicion) {
//     while (i <= largo_final) {        
//         array1 = base_de_datos[i].osos;
//         array2 = base_de_datos[i].arrayX; //usar eval arraX como variable
//         while (e < array1.length) {
//             individuo = array1[e].color;
//             if (individuo == condicion) {
//                 array2.push(individuo)
//             }
//             e++;
//         }
//         e = 0;
//         i++;
//     }  
// }


//mapea los datos para la grafica
var etiqueta_muerto = [], etiqueta_vivo = [], etiqueta_macho = [], etiqueta_hembra = [], etiqueta_mutación = [], etiqueta_sobreviviente = [];
function etiquetas() {
    nombres()
    etiqueta_muerto = dataBase.map(element => element.ososMuertos.length);
    etiqueta_vivo = dataBase.map(element => element.osos.length);
    etiqueta_macho = dataBase.map(element => element.ososMacho.length);
    etiqueta_hembra = dataBase.map(element => element.ososHembra.length);
    etiqueta_blanco = dataBase.map(element => element.ososBlancos.length);
    etiqueta_negro = dataBase.map(element => element.ososNegros.length);
}

var etiqueta_generación = [];
function nombres() {
    i = 1;
    IDGenración = parseInt(totalGeneracionesInput.value);
    while (i <= IDGenración) {
        etiqueta_generación.push(i);
        i++;
    }
}

//da color a la grafica
var colorLife = "rgb(154, 205, 56)";
var colorMud = "rgb(154, 205, 56)";
var color_DEHT = "#FA6484";
var color_hembra = "#ea899a";
var color_macho = "#5d9b9b";
var color_negro = "#7E4231";


//crea la grafica con dataset
function grafica() {
    const dataset = {
        labels: etiqueta_generación,
        datasets: [
            {
                label: 'crecimiento poblacional total',
                fill: false,
                backgroundColor: colorLife,
                borderColor: colorLife,
                data: etiqueta_vivo,
            }, {
                label: 'polares',
                fill: false,
                backgroundColor: colorMud,
                borderColor: colorMud,
                borderDash: [5, 5],
                data: etiqueta_blanco,
            }, {
                label: 'pardos',
                fill: false,
                backgroundColor: color_negro,
                borderColor: color_negro,
                data: etiqueta_negro,
            }, {
                label: 'Muertes',
                backgroundColor: color_DEHT,
                borderColor: color_DEHT,
                data: etiqueta_muerto,
                fill: true,
            }, {
                label: 'machos',
                backgroundColor: color_macho,
                borderColor: color_macho,
                data: etiqueta_macho,
                fill: false,
            }, {
                label: 'hembras',
                backgroundColor: color_hembra,
                borderColor: color_hembra,
                data: etiqueta_hembra,
                fill: false,
            },
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
            }
        }
    });
}

function graficar() {
    etiquetas()
    grafica()
}