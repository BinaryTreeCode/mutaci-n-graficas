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
    }
}
function array_de_arrays_de_arrays() {
    i = 1;
    veses = parseInt(VESES.value);
    while (i <= veses) { 
        array = new ADA();
        base_de_datos.push(array);
        i ++;
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

function make() {
    array_de_arrays_de_arrays();
    individuos_iniciales();
    console.log("generate");
}


var largoo1, ouput_arrayy2;

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

var arrayC;
var arrayM;

function sobrevivientes (largoo, input_array, ouput_array) {
    console.log(input_array);
    i = i-i;
    while (i <= largoo) {

        if (input_array [i].estado === "vivo") 
    {
        ouput_array.push(input_array[i])
        if (input_array [i].color === "blanco") {
            arrayC = base_de_datos[a].mutantes;
            arrayC.push(input_array[i]);
        } else {
            
        }
    }  
    else 
    {
        arrayM = base_de_datos[a].muertes;
        arrayM.push(input_array[i]);
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

function ciclo (largoo, input_array, array_1ouput_2input, ouput_array2) {
    i = i-i;
    estado(largoo, input_array)
    mutación(largoo, input_array)
    sobrevivientes (largoo, input_array, array_1ouput_2input)
    largoo2 = array_1ouput_2input.length-1;
    hijos1(largoo2,array_1ouput_2input, ouput_array2)

    largoo1 = ouput_array2.length-1;
    ouput_arrayy2 = ouput_array2;
    M = 25;
}

function ciclo2 (generacion, hijos_generacion) {
    estado(largoo1, ouput_arrayy2)
    mutación(largoo1, ouput_arrayy2)
    sobrevivientes (largoo1, ouput_arrayy2, generacion)
    largoo2 = generacion.length-1;
    hijos1(largoo2,generacion, hijos_generacion)

    largoo1 = hijos_generacion.length-1;
    ouput_arrayy2 = hijos_generacion;
    if (M < 70) {
        M = M + 5;
        console.log("suma +5"+ "m =" + M);
    } else {
        
    }
    
}

i = 0;
M = 0;
a = 0;
var generaciones;
function  osos() {
    make()
    i = 0
    M = 0
    
    largo = individuos.length-1;
    largo_final = base_de_datos.length-1;
    generacion1 = base_de_datos[0].generacion;
    hijos_generacion1 = base_de_datos[0].hijos;

    ciclo (largo, individuos, generacion1, hijos_generacion1)

    a = 0
    while (a <= largo_final) {
        console.log(a);
        ciclo2 (base_de_datos[a].generacion, base_de_datos[a].hijos)
        a++;  
    }
    graficar()
}

function etiquetas() {
    nombres()
    nuemero_de_muertes()
    nuemero_de_mutantes()
    nuemero_de_vivos()
}

var etiqueta_generación = [];
function nombres(){
    i = 1;
    IDGenración = parseInt(VESES.value);
    while (i <= IDGenración) {
        etiqueta_generación.push(i);
        i++;
        console.log("i = " + i +" " + etiqueta_generación);
    }
}

var etiqueta_muerte = [];
function nuemero_de_muertes() {
    i = 0;
    while (i <= veses-1) {
        NDM = base_de_datos[i].muertes.length // (NDM) Nuemero_De_Muertes 
        etiqueta_muerte.push(NDM);
        i++;
    } 
}

var etiqueta_mutación = [];
function nuemero_de_mutantes() {
    i = 0;
    while (i <= veses-1) {
        NDMU = base_de_datos[i].mutantes.length // (NDMU) Nuemero_De_MUtantes 
        etiqueta_mutación.push(NDMU);
        i++;
    } 
}

var etiqueta_vivo = [];
function nuemero_de_vivos() {
    i = 0;
    while (i <= veses-1) {
        NDV = base_de_datos[i].generacion.length // (NDV) Nuemero_De_Vivos
        etiqueta_vivo.push(NDV);
        i++;
    } 
}
var colorLife = "rgb(154, 205, 56)";
var colorMud = "rgb(154, 205, 56)";
var color_DEHT = "#FA6484";

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
            data: etiqueta_muerte,
            fill: true,
        }
    ]
}

function grafica() {
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