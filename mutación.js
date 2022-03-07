var VESES = document.getElementById("veses");
//VESES  = generaciones a generar
var input_individuos_iniciales = document.getElementById("individuos");

var boton = document.getElementById("btn");
boton.addEventListener("click", osos, true);

var base_de_datos = [];
var veses;
class ADA { //array_de_arrays (ADA) 
    constructor() {
        this.generacion = [];
        this.hijos = [];
        this.muertes = [];
        this.mutantes = [];
        this.machos = [];
        this.hembras = [];
    }
}
function array_de_arrays_de_arrays() {
    i = a;
    veses = parseInt(VESES.value);
    while (i <= veses) {
        array = new ADA();
        base_de_datos.push(array);
        i++;
    }
}

var oso1;
var individuos = [];
function individuos_iniciales() {
    i = 1;
    var numero = parseInt(input_individuos_iniciales.value);
    while (i <= numero) {
        oso1 = new oso(0);
        individuos.push(oso1)
        i++;
    }
}

comida = 0;
class oso {
    constructor(m) {
        this.muerte = Math.floor((Math.random() * 100) + 1 + m);
        this.mutación = Math.floor((Math.random() * 100) + 1 - m);
        this.vida = Math.floor((Math.random() * 35) + 1);
        vida();
        if (Math.floor((Math.random() * 2) + 1) == 1) {
            this.genero = "macho";
        } else {
            this.genero = "hembra";
        }
        this.estado = true;
        this.comida = 0;
        this.color = true;
    }
}

function vida() {
    if (vida > 30) {
        if ((Math.floor((Math.random() * 100) + 1)) > 50) {
            vida = vida;
        }
        else {
            vida = 30;
        }
    }
    if (vida < 15) {
        if ((Math.floor((Math.random() * 100) + 1)) < 50) {
            vida = 15;
        }
        else {
            vida = 20;
        }
    }
}
function envejecer(array) {
    array.forEach(element => {
        element.vida -= 10;
    });
}

function make() {
    array_de_arrays_de_arrays();
    individuos_iniciales();
    console.log("generate");
}


var largoo1, ouput_arrayy2;

function estado(largoo, input_array) {
    i = i - i;
    while (i <= largoo) {
        if (input_array[0 + i].muerte >= 50) {
            input_array[0 + i].estado = "vivo"
        }
        else {
            input_array[0 + i].estado = "muerto"
        }

        i++;
    }
}

function mutación(largoo, input_array) {
    i = i - i;
    while (i <= largoo) {

        if (input_array[0 + i].estado === "vivo" && input_array[0 + i].mutación <= 20) {
            input_array[0 + i].color = "blanco"
            input_array[0 + i].comida = Math.floor((Math.random() * 2) + 1);
        }
        else {
            input_array[0 + i].color = "negro"
            input_array[0 + i].comida = Math.floor((Math.random() * 10) + 1);
        }
        i++;
    }
}

var arrayC;
var arrayM;

function sobrevivientes(largoo, input_array, ouput_array) {
    console.log(input_array);
    i = i - i;
    while (i <= largoo) {

        if (input_array[i].estado === "vivo") {
            ouput_array.push(input_array[i])
            if (input_array[i].color === "blanco") {
                arrayC = base_de_datos[a].mutantes;
                arrayC.push(input_array[i]);
            } else {

            }
        }
        else {
            arrayM = base_de_datos[a].muertes;
            arrayM.push(input_array[i]);
        }
        i++;
    }
}


N = 25;
function hijos1(ouput_array) {
    i = i - i;

    Nhijos_cal = machos.length - hembras.length;

    if (Nhijos_cal <= 0) {
        Nhijos = machos.length;
    } else {
        Nhijos = hembras.length;
    }
    while (i <= Nhijos - 1) {
        macho = machos[i];
        hembra = hembras[i];
        aleatoriedad = Math.floor((Math.random() * 100) + 1)

        if (macho.color == hembra.color) {
            if (macho.color == "blanco" && 20 <= aleatoriedad) {
                hijoB = new oso(M);
                ouput_array.push(hijoB)
                hijoB = new oso(M);
                ouput_array.push(hijoB)
            } else if (macho.color == "negro" && 20 <= aleatoriedad) {
                hijoN = new oso(N);
                ouput_array.push(hijoN);
                hijoN = new oso(N);
                ouput_array.push(hijoN);
            }
        } else {
            if (50 < aleatoriedad) {
                hijoB = new oso(M);
                ouput_array.push(hijoB)
                hijoB = new oso(M);
                ouput_array.push(hijoB)
            }
            else {
                hijoN = new oso(N);
                ouput_array.push(hijoN);
                hijoN = new oso(N);
                ouput_array.push(hijoN);
            }
        }
        i++;
    }
}

function ciclo1(largoo, input_array, array_1ouput_2input, ouput_array2) {
    i = i - i;
    estado(largoo, input_array)
    mutación(largoo, input_array)

    input_array.forEach(element => {
        element.vida -= 10;
    });

    // hay problema proque inician con muy poquita vida.

    sobrevivientes(largoo, input_array, array_1ouput_2input)
    largoo2 = array_1ouput_2input.length - 1;

    machos = base_de_datos[0].machos = input_array.filter(element => element.genero === "macho");
    hembras = base_de_datos[0].hembras = input_array.filter(element => element.genero === "hembra");

    hijos1(ouput_array2)

    largoo1 = ouput_array2.length - 1;
    ouput_arrayy2 = ouput_array2;
    M = 25;
}

function ciclo(generacion, hijos_generacion) {
    // revisar codigo no nesario en el ciclo de aqui
    estado(largoo1, ouput_arrayy2)
    mutación(largoo1, ouput_arrayy2)

    ouput_arrayy2.forEach(element => {
        text = String(element.vida);
        text_id = text.charAt(1);
        textF = text.charAt(0);
        if (text_id < 5) {
            element.vida = parseInt(textF + "0");
        }
        element.vida -= 10;
        if (element.vida <= 0) {
            element.estado = "muerto"
        }
    });
    sobrevivientes(largoo1, ouput_arrayy2, generacion)

    //HA AQUI

    largoo2 = generacion.length - 1;

    // hay problema proque llegan muertos a aca.
    base_de_datos[a].machos = generacion.filter(element => element.genero === "macho");
    base_de_datos[a].hembras = generacion.filter(element => element.genero === "hembra");

    hijos1(hijos_generacion)

    largoo1 = hijos_generacion.length - 1;
    ouput_arrayy2 = hijos_generacion;
    if (M < 70) {
        M = M + 5;
        console.log("suma +5" + "m =" + M);
    }
}

i = 0;
M = 0;
a = 0;
var generaciones;
function osos() {
    a = 1; //a es la variable iterativa que se usa para el ciclo, sabiendo que cilo
    //son todos los ciclos despues del ciclo inicial "ciclo1". 
    make()
    i = 0
    M = 0

    largo = individuos.length - 1;
    largo_final = base_de_datos.length - 1;
    generacion1 = base_de_datos[0].generacion;
    hijos_generacion1 = base_de_datos[0].hijos;

    ciclo1(largo, individuos, generacion1, hijos_generacion1)

    a = a;
    while (a <= largo_final) {
        console.log(a);
        ciclo(base_de_datos[a].generacion, base_de_datos[a].hijos)
        a++;
    }
    graficar()
}

var etiqueta_muerto = [], etiqueta_vivo = [], etiqueta_macho = [], etiqueta_hembra = [], etiqueta_mutación = [], etiqueta_sobreviviente = [];
function etiquetas() {
    nombres()
    etiqueta_muerto = base_de_datos.map(element => element.muertes.length);
    etiqueta_vivo = base_de_datos.map(element => element.generacion.length);
    etiqueta_macho = base_de_datos.map(element => element.machos.length);
    etiqueta_hembra = base_de_datos.map(element => element.hembras.length);
    etiqueta_mutación = base_de_datos.map(element => element.mutantes.length);
}

var etiqueta_generación = [];
function nombres() {
    i = 1;
    IDGenración = parseInt(VESES.value);
    while (i <= IDGenración) {
        etiqueta_generación.push(i);
        i++;
        console.log(`i = ${i} ${etiqueta_generación}`);
    }
}


// IMPROTANTE VERIFICAR SI LA MECANICA DE AÑOS SI FUCIONA BIEN, HAY UN ERROR EN LA GENERACIÓN 1
// var etiqueta_repetido = [];
// function nuemero_de_repetidos() {
//     i = 0;
//     while (i <= veses - 1) {
//         NDR = base_de_datos[i].generacion.length // (NDR) Nuemero_De_Muertes 
//         etiqueta_repetido.push(NDR);
//         i++;
//     }
// }


var colorLife = "rgb(154, 205, 56)";
var colorMud = "rgb(154, 205, 56)";
var color_DEHT = "#FA6484";
var color_hembra = "#ea899a";
var color_macho = "#5d9b9b";


function grafica() {
    const labels = etiqueta_generación;
    const dataset = {
        labels: etiqueta_generación,
        datasets: [
            {
                label: 'crecimiento poblacional',
                fill: false,
                backgroundColor: colorLife,
                borderColor: colorLife,
                data: etiqueta_vivo,
            }, {
                label: 'mutantes',
                fill: false,
                backgroundColor: colorMud,
                borderColor: colorMud,
                borderDash: [5, 5],
                data: etiqueta_mutación,
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
            interactive: true,
            animation: true,
            responsive: true,
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
