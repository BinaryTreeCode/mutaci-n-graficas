var VESES = document.getElementById("veses")
var individuos_iniciales = document.getElementById("individuos");

var boton = document.getElementById("btn");
boton.addEventListener("click", osos, true);

var boton_make = document.getElementById("make");
boton_make.addEventListener("click", make, true)

function make() {
    generaciones_e_hijos()
    individuos_iniciales()
}

class generacion {
    constructor() {
        generacion2 = []
    }
}

class hijos {
    constructor() {
        hijos2 = []
    }
}

function generaciones_e_hijos() {
    i = i-i;
    var veses = parseInt(VESES.value);
    while (i <= veses) { 
        var generacion2 = new generacion();
        generaciones.push(generacion2);

        var hijos2 = new hijos();
        hijos_generacion.push(hijos2);
        i ++;
    }
    }

function individuos_iniciales() {
    i = i-i;
    var numero = parseInt(individuos_iniciales.value);
    while (i <= numero) {
        oso1 = new oso;
        individuos.push(oso1) 
        i ++;
        }
        }

var individuos = [
]

var generaciones = [
]

var hijos_generacion = [
]

var generacion1 = [];
var hijos_generacion1 = [];

var largoo1 = true;
var ouput_arrayy2 = true;

function ciclo (largoo, input_array, array_1ouput_2input, ouput_array2) {
    i = i-i;
    estado(largoo, input_array)
    mutación(largoo, input_array)
    sobrevivientes (largoo, input_array, array_1ouput_2input)
    largoo2 = array_1ouput_2input.length-1;
    hijos1(largoo2,array_1ouput_2input, ouput_array2)

    largoo1 = ouput_array2.length-1;
    ouput_arrayy2 = ouput_array2;
    M = 10;
}

function ciclo2 (generacion, hijos_generacion) {
    estado(largoo1, ouput_arrayy2)
    mutación(largoo1, ouput_arrayy2)
    sobrevivientes (largoo1, ouput_arrayy2, generacion)
    largoo2 = generacion.length-1;
    hijos1(largoo2,generacion, hijos_generacion)

    largoo1 = hijos_generacion.length-1;
    ouput_arrayy2 = hijos_generacion;
    M = M + 10;
}

function estado(largoo, input_array) {
    i = i-i;
    while (i <= largoo) {
        if (input_array [0+i].muerte >= 50) 
    {
        input_array [0+i].estado = "vivo"
    }  
    else 
    {
        input_array [0+i].estado = "muerto"
    }
    
    i ++;
    } 
}
function mutación(largoo, input_array) {
    i = i-i;
while (i <= largoo) {

    if (input_array [0+i].estado === "vivo" && input_array [0+i].mutación <= 20) 
    {
        input_array [0+i].color = "blanco"
    } 
    else 
    {
        input_array [0+i].color = "negro"
    }
    i ++;
}   
}

function sobrevivientes (largoo, input_array, ouput_array) {
    i = i-i;
    while (i <= largoo) {

        if (input_array [0+i].estado === "vivo") 
    {
        ouput_array.push(input_array[0+i])
    }  
    else 
    {

    }  
    i ++;
    }
}

N = 0;
function hijos1(largoo,input_array, ouput_array) {
    i = i-i;
    while (i <= largoo) {
        if (input_array[0+i].color === "blanco")
        {
            hijoB= new oso(M);
            ouput_array.push(hijoB)  
            hijoB= new oso(M);
            ouput_array.push(hijoB) 
        } 
        else {
            hijoN= new oso(N);
            ouput_array.push(hijoN);  
            hijoN= new oso(N);
            ouput_array.push(hijoN);
        }
        i ++;
        }
}

class oso {
    constructor(m) {
        this.muerte = Math.floor((Math.random() * 100) + 1+m);
        this.mutación = Math.floor((Math.random() * 100) + 1-m);
        this.estado = true;
        this.color = true;
    }
}

i = 0;
M = 0;
a = 0;
function  osos() {
    largo = individuos.length-1;
    largo_final = generaciones.length-1;

    ciclo (largo, individuos, generacion1, hijos_generacion1)

    while (a <= largo_final) {
        ciclo2 (generaciones [0+a], hijos_generacion[0+a])
        console.log(a);
        a++  
    }
}

// var txt_1 = document.querySelector('input1');
// // var txt_2 = document.querySelector('input2');
// // var txt_3 = document.querySelector('input3');
// // var txt_4 = document.querySelector('input4');
// // var txt_5 = document.querySelector('input5');
// // var txt_6 = document.querySelector('input6');
// // var txt_7 = document.querySelector('input7');
// // var txt_8 = document.querySelector('input8');
// // var txt_9 = document.querySelector('input9');
// // var txt_10 = document.querySelector('input10');

// function printt ()
// {
//     i = 1;
//     largo1 = generacion1.length-1;
//     while (i <= largo1) {
//         b =  generacion1[0].color;
//         var txt_1 = document.querySelector('input1');
//         txt_1.textContent. = b + " " + a;
//         i ++;
//     }
// }



