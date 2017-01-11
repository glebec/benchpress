/* global _ Benchmark chartModule uiModule mergeSort bubbleSort */
/* eslint-disable id-length */

const benchModule = (function () {

  // modify these constants to test different array sizes (in powers of 2)

  const LOWER_EXPONENT = 7;
  const HIGHER_EXPONENT = 14;

  const randomArr = (size) => _.times(size, () => Math.random());
  const numerically = (n1, n2) => n1 - n2;

  const makeOptions = numItems => algoName => ({
    id: numItems,
    maxTime: 1,
    onComplete: event => {
      const msPerOp = (1e3 / event.target.hz).toFixed(4);
      chartModule.addPoint(algoName, +event.target.id, +msPerOp);
      uiModule.addStatRow({
        numItems,
        algoName,
        msPerOp,
        rme: event.target.stats.rme.toFixed(2),
        samples: event.target.stats.sample.length
      });
    }
  });

  const suite = new Benchmark.Suite();

  for (let i = LOWER_EXPONENT; i <= HIGHER_EXPONENT; i++) {

    const numItems = Math.pow(2, i);

    const fixedSizeMakeOptions = makeOptions(numItems);

    suite
    .add(`${numItems} elements: native sort`, () => {
      randomArr(numItems).sort(numerically);
    }, fixedSizeMakeOptions('native'))
    .add(`${numItems} elements: your mergeSort`, () => {
      mergeSort(randomArr(numItems));
    }, fixedSizeMakeOptions('merge'))
    .add(`${numItems} elements: your bubbleSort`, () => {
      bubbleSort(randomArr(numItems));
    }, fixedSizeMakeOptions('bubble'));

  }

  suite
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    uiModule.stopLoading();
  })
  .run({
    async: true
  });

}());
