var VESES = document.getElementById("veses")
var input_individuos_iniciales = document.getElementById("individuos");

var boton = document.getElementById("btn");
boton.addEventListener("click", osos, true);

var boton_make = document.getElementById("make");
boton_make.addEventListener("click", make, true)

function make() {
    generaciones_e_hijos();
    individuos_iniciales();
}

class generacion {
    constructor(numero) {
        this.generacion2 = [];
        this.nombre = "geración " + numero;
    }
}

class hijos {
    constructor(numero) {
        this.hijos2 = [];
        this.nombre = "hijos " + numero;
    }
}

var muertes = [];
class muertos {
    constructor() {
        this.muerte = [];
    }
}


var generacion2, hijos2, muerte, veses;
function generaciones_e_hijos() {
    i = 1;
    veses = parseInt(VESES.value);
    while (i <= veses) { 
        generacion2 = new generacion(i);
        generaciones.push(generacion2);

        hijos2 = new hijos(i);
        hijos_generacion.push(hijos2);
        
        muerte = new muertos();
        muertes.push(muerte);
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

var oso1;
function individuos_iniciales() {
    i = 1;
    var numero = parseInt(input_individuos_iniciales.value);
    while (i <= numero) {
        oso1 = new oso(0);
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

function ciclo2 (generacion, hijos_generacion) {
    estado(largoo1, ouput_arrayy2)
    mutación(largoo1, ouput_arrayy2)
    sobrevivientes (largoo1, ouput_arrayy2, generacion)
    largoo2 = generacion.length-1;
    hijos1(largoo2,generacion, hijos_generacion)

    largoo1 = hijos_generacion.length-1;
    ouput_arrayy2 = hijos_generacion;
    if (M < 70) {
        M = M + 1;
    } else {
        
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

var array;
function sobrevivientes (largoo, input_array, ouput_array) {
    i = i-i;
    while (i <= largoo) {

        if (input_array [0+i].estado === "vivo") 
    {
        ouput_array.push(input_array[0+i])
    }  
    else 
    {
        if (muertes.length <= veses) {
            array = muertes[i]
            array.push(input_array[i])
        } else {

        }
    }  
    i ++;
    }
}

N = 25;
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



i = 0;
M = 0;
a = 0;
function  osos() {
    largo = individuos.length-1;
    largo_final = generaciones.length-1;
    generacion1 = generaciones[0].generacion2;
    hijos_generacion1 = hijos_generacion[0].hijos2;

    ciclo (largo, individuos, generacion1, hijos_generacion1)

    while (a <= largo_final) {
        ciclo2 (generaciones[a].generacion2, hijos_generacion[a].hijos2)
        console.log(a);
        a++  
    }
}

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

var etiquetas = [];
function nombres(){
    generaciones.forEach(function(element) {
        var etiqueta = element.nombre;
        etiquetas.push(etiqueta);
    });

}


function graficar() {
    var ctx = document.getElementById('grafica').getContext('2d');
    var myChartBar = new Chart(ctx, {
    type: 'line',
    data: {
        labels: etiquetas,
        datasets: [{
            label: 'generaciones',
            data: [5, 7, 13, 13, 5, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(10, 200, 100, 0.5)',
                'rgba(255, 243, 1 , 0.5)',
                'rgba(1, 32, 255, 0.5)',
                'rgba(75, 0, 192, 0.5)',
                'rgba(10, 200, 1, 0.5)',
                'rgba(199, 24, 24, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(10, 200, 100, 0.5)',
                'rgba(255, 243, 1 , 0.5)',
                'rgba(1, 32, 255, 0.5)',
                'rgba(75, 0, 192, 0.5)',
                'rgba(10, 200, 1, 0.5)',
                'rgba(199, 24, 24, 0.5)',
            ],
            borderColor: [
                'rgba(25, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
