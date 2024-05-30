/* eslint-disable no-unused-vars */
const sizes = [100, 1000, 10000, 100000];

async function run() {
  const counts = {
    forOf: {},
    forEach: {},
    forLoopCached: {},
    forLoop: {},
    whileLoop: {},
    doWhileLoop: {},
  };

  const trialCount = 10;

  for (const size of sizes) {
    // Crear un array de objetos
    const arr = Array.from({ length: size }, (_, index) => ({ id: index, value: Math.random() }));
    counts.forOf[size] = 0;
    counts.forEach[size] = 0;
    counts.forLoop[size] = 0;
    counts.forLoopCached[size] = 0;
    counts.whileLoop[size] = 0;
    counts.doWhileLoop[size] = 0;

    for (const _trial of Array(trialCount).keys()) {
      let startTime = Date.now();
      for (const elem of arr) {
        elem.value = elem.value > 0.5;
      }
      let ms = Date.now() - startTime;
      counts.forOf[size] += ms;

      startTime = Date.now();
      arr.forEach((elem) => {
        elem.value = elem.value > 0.5;
      });
      ms = Date.now() - startTime;
      counts.forEach[size] += ms;

      startTime = Date.now();
      for (let index = 0; index < arr.length; index++) {
        arr[index].value = arr[index].value > 0.5;
      }
      ms = Date.now() - startTime;
      counts.forLoop[size] += ms;

      startTime = Date.now();
      for (let index = 0, len = arr.length; index < len; index++) {
        arr[index].value = arr[index].value > 0.5;
      }
      ms = Date.now() - startTime;
      counts.forLoopCached[size] += ms;

      startTime = Date.now();
      let whileIndex = 0;
      while (whileIndex < arr.length) {
        arr[whileIndex].value = arr[whileIndex].value > 0.5;
        whileIndex++;
      }
      ms = Date.now() - startTime;
      counts.whileLoop[size] += ms;

      startTime = Date.now();
      let doWhileIndex = 0;
      do {
        arr[doWhileIndex].value = arr[doWhileIndex].value > 0.5;
        doWhileIndex++;
      } while (doWhileIndex < arr.length);
      ms = Date.now() - startTime;
      counts.doWhileLoop[size] += ms;
    }

    Object.keys(counts).forEach((loopType) => {
      counts[loopType][size] = counts[loopType][size] / trialCount; // calcular promedio
    });
  }

  console.table(counts);

  return counts;
}

run()
  .then(() => {
    console.log('done');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
