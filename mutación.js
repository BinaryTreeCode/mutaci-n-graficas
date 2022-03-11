var VESES = document.getElementById("veses");
//VESES  = generaciones a generar
var input_individuos_iniciales = document.getElementById("individuos");

var boton = document.getElementById("btn");
boton.addEventListener("click", Crear_osos, true);

var base_de_datos = [];
var veses;

//IMPORTANTE
class ADA { //array_de_arrays (ADA) 
    constructor() {
        this.generacion = []; /*hacer este como un toltal*/
        this.osos_blancos = [];
        this.osos_negros = []
        this.hijos = [];
        this.muertes = [];
        this.mutantes = []; /*quitar esto dejar blancos*/
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
        oso1 = new oso(true);
        individuos.push(oso1)
        i++;
    }
}

class oso {
    constructor(color) {
        this.muerte = Math.floor((Math.random() * 100) + 1);
        this.mutación = Math.floor((Math.random() * 100) + 1);
        this.vida = Math.floor((Math.random() * 35) + 1);
        años(this.vida);
        if (Math.floor((Math.random() * 2) + 1) == 1) {
            this.genero = "macho";
        } else {
            this.genero = "hembra";
        }
        this.estado = true;
        this.comida = 2;
        this.color = color;
    }
}

function años(vida) {
    if (vida < 15) {
        vida = 15;
    }
    else {
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
        if (input_array[i].muerte >= 50) {
            input_array[i].estado = "vivo"
        }
        else {
            input_array[i].estado = "muerto"
        }
        i++;
    }
}

// var arrayMT;
function mutación(largoo, input_array) {
    i = i - i;
    while (i <= largoo) {
        if (input_array[i].color == "negro" || input_array[i].color == true) {
            if (input_array[0 + i].estado === "vivo" && input_array[0 + i].mutación <= 20) {
                input_array[i].color = "blanco"
                // arrayMT = base_de_datos[a].mutantes;
                // arrayMT.push(input_array[i]);
            }
            else {
                input_array[i].color = "negro"
            }
        }
        else {

        }
        i++;
    }
}

function caza(largoo, input_array) {
    i = i - i;
    focas = input_array.length;
    while (i < largoo) { //&& focas > 0
        cazador = input_array[i];
        if (cazador.color == "blanco") {
            probalidad = Math.floor((Math.random() * 2) + 1);
        }
        else {
            probalidad = Math.floor((Math.random() * 10) + 1);
        }
        if (probalidad == 1) {
            // focas--;
            cazador.comida += 2;
            // console.log("caza exitosa");
        }
        i++;
    }
}

var arrayM;
function sobrevivientes(largoo, input_array, ouput_array) {
    // console.log(input_array);
    i = i - i;
    while (i <= largoo) {
        if (input_array[i].vida <= 0) { //|| input_array[i].comida <= 0
            input_array[i].estado = "muerto"
            // console.log(a + " muerte natural");
        }
        else if (input_array[i].comida <= 0) {
            input_array[i].estado = "muerto"
            // console.log(a + " muerte hambre");
        }
        else if (input_array[i].estado == "muerto") {
            // console.log(a + " muerte");
        }
        else if (input_array[i].estado == "muerto" && input_array[i].color == "blanco" && input_array[i].vida <= 0) {
            console.log(a + " muerte");
        }
        i++;
    }

    i = i - i;
    while (i <= largoo) {
        if (input_array[i].estado == "vivo") {
            ouput_array.push(input_array[i])
            // if (input_array[i].color == "blanco") {
            // }
        }
        else {
            arrayM = base_de_datos[a].muertes;
            arrayM.push(input_array[i]);
        }
        i++;
    }
}

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
                hijoB = new oso("blanco");
                ouput_array.push(hijoB)
                hijoB = new oso("blanco");
                ouput_array.push(hijoB)
            } else if (macho.color == "negro" && 20 <= aleatoriedad) {
                hijoN = new oso("negro");
                ouput_array.push(hijoN);
                hijoN = new oso("negro");
                ouput_array.push(hijoN);
            }
        } else {
            if (50 < aleatoriedad) {
                hijoB = new oso("blanco");
                ouput_array.push(hijoB)
                hijoB = new oso("blanco");
                ouput_array.push(hijoB)
            }
            else {
                hijoN = new oso("negro", 0);
                ouput_array.push(hijoN);
                hijoN = new oso("negro", 0);
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
        element.vida -= 5;
        element.comida -= 1;
    });
    caza(largoo, input_array)

    sobrevivientes(largoo, input_array, array_1ouput_2input)
    largoo2 = array_1ouput_2input.length - 1;

    machos = base_de_datos[0].machos = array_1ouput_2input.filter(element => element.genero === "macho");
    hembras = base_de_datos[0].hembras = array_1ouput_2input.filter(element => element.genero === "hembra");

    hijos1(ouput_array2)

    largoo1 = ouput_array2.length - 1;
    ouput_arrayy2 = ouput_array2;
    generación1 = array_1ouput_2input;
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
        element.vida -= 5;
        element.comida -= 1;

        if (element.vida <= 0) {
            element.estado = "muerto"
        }
    });

    caza(largoo1, ouput_arrayy2)

    sobrevivientes(largoo1, ouput_arrayy2, generacion)

    base_de_datos[a - 1].generacion.forEach(element => {
        generacion.push(element)
    });


    //HA AQUI
    largoo2 = generacion.length - 1;

    machos = base_de_datos[a].machos = generacion.filter(element => element.genero === "macho");
    hembras = base_de_datos[a].hembras = generacion.filter(element => element.genero === "hembra");

    hijos1(hijos_generacion)

    largoo1 = hijos_generacion.length - 1;
    ouput_arrayy2 = hijos_generacion;
}

i = 0;
a = 0;
var generaciones;
var array_secreto = [];

function Crear_osos() {
    a = 1; //a es la variable iterativa que se usa para el ciclo, sabiendo que ciclo
    //son todos los ciclos despues del ciclo inicial "ciclo1". 
    make()
    i = 0

    largo = individuos.length - 1;
    largo_final = base_de_datos.length - 1;
    generacion1 = base_de_datos[0].generacion;
    hijos_generacion1 = base_de_datos[0].hijos;
    mutantes1 = base_de_datos[0].mutantes;
    muertes1 = base_de_datos[0].muertes;

    ciclo1(largo, individuos, generacion1, hijos_generacion1)

    a = a;
    while (a <= largo_final) {
        ciclo(base_de_datos[a].generacion, base_de_datos[a].hijos)
        a++;
    }

    i = 0;
    e = 0;

    while (i <= largo_final) {
        array1 = base_de_datos[i].generacion;
        array2 = base_de_datos[i].osos_blancos;
        while (e < array1.length) {
            individuo = array1[e].color;
            if (individuo == "blanco") {
                array2.push(individuo)
            }
            e++;
        }
        e = 0;
        i++;
    }

    i = 0;
    e = 0;
    while (i <= largo_final) {
        array1 = base_de_datos[i].generacion;
        array2 = base_de_datos[i].osos_negros;
        while (e < array1.length) {
            individuo = array1[e].color;
            if (individuo == "negro") {
                array2.push(individuo)
            }
            e++;
        }
        e = 0;
        i++;
    }
    graficar();
}

// function mapeo(arrayX, condicion) {
//     while (i <= largo_final) {        
//         array1 = base_de_datos[i].generacion;
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


var etiqueta_muerto = [], etiqueta_vivo = [], etiqueta_macho = [], etiqueta_hembra = [], etiqueta_mutación = [], etiqueta_sobreviviente = [];
function etiquetas() {
    nombres()
    etiqueta_muerto = base_de_datos.map(element => element.muertes.length);
    etiqueta_vivo = base_de_datos.map(element => element.generacion.length);
    etiqueta_macho = base_de_datos.map(element => element.machos.length);
    etiqueta_hembra = base_de_datos.map(element => element.hembras.length);
    etiqueta_blanco = base_de_datos.map(element => element.osos_blancos.length);
    etiqueta_negro = base_de_datos.map(element => element.osos_negros.length);
}

var etiqueta_generación = [];
function nombres() {
    i = 1;
    IDGenración = parseInt(VESES.value);
    while (i <= IDGenración) {
        etiqueta_generación.push(i);
        i++;
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
var color_negro = "#7E4231";


function grafica() {
    const labels = etiqueta_generación;
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


