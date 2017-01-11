/* global _ Benchmark addPoint mergeSort bubbleSort addStatRow */
/* eslint-disable id-length */

const randomArr = (size) => _.times(size, () => Math.random());
const numerically = (n1, n2) => n1 - n2;

const makeOptions = numItems => algoName => ({
  id: numItems,
  maxTime: 1,
  onComplete: event => {
    const msPerOp = (1e3 / event.target.hz).toFixed(4);
    addPoint(algoName, +event.target.id, +msPerOp);
    addStatRow({
      numItems,
      algorithm: algoName,
      msPerOp,
      rme: event.target.stats.rme.toFixed(2),
      samples: event.target.stats.sample.length
    });
  }
});

const suite = new Benchmark.Suite();

for (let i = 7; i <= 14; i++) {

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
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({
  async: true
});
