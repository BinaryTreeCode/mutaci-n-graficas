// Generar un array de objetos de prueba
const generateObjects = (numObjects) => {
    const objects = [];
    for (let i = 0; i < numObjects; i++) {
        objects.push({
            probabilityMuerte: Math.floor(Math.random() * 100),
            probabilityMutacion: Math.floor(Math.random() * 100),
            yearsLife: Math.floor(Math.random() * 20),
            genero: "macho",
            isLife: "vivo",
            comidaCount: Math.floor(Math.random() * 10),
            color: "negro"
        });
    }
    return objects;
};

// Función para medir el tiempo de ejecución
const measureTime = (func, label) => {
    const start = performance.now();
    func();
    const end = performance.now();
    console.log(`${label}: ${end - start}ms`);
};

// Array con objetos de prueba
const numObjects = 500000; // Ajusta el número de objetos para tu prueba
const testArray = generateObjects(numObjects);

// Benchmark forEach
const benchmarkForEach = () => {
    const copiedArray = [];
    testArray.forEach(obj => {
        const newObj = {
            probabilityMuerte: obj.probabilityMuerte,
            probabilityMutacion: obj.probabilityMutacion,
            yearsLife: obj.yearsLife,
            genero: obj.genero,
            isLife: obj.isLife,
            comidaCount: obj.comidaCount,
            color: obj.color
        };
        copiedArray.push(newObj);
    });
};

// Benchmark for...in dentro de forEach
const benchmarkForIn = () => {
    const copiedArray = [];
    testArray.forEach(obj => {
        const newObj = {};
        for (const key in obj) {
                newObj[key] = obj[key];
        }
        copiedArray.push(newObj);
    });
};

// Ejecutar y medir los benchmarks
measureTime(benchmarkForEach, 'forEach');
measureTime(benchmarkForIn, 'for...in dentro de forEach');
