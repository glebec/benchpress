/* global _ Benchmark addNativePoint addMergePoint addBubblePoint mergeSort bubbleSort addStatRow */
/* eslint-disable id-length */

const randomArr = (size) => _.times(size, () => Math.random());
const numerically = (n1, n2) => n1 - n2;

const suite = new Benchmark.Suite();

for (let i = 7; i <= 14; i++) {

  const numItems = Math.pow(2, i);

  suite
  .add(`${numItems} elements: native sort`, () => {
    randomArr(numItems).sort(numerically);
  }, {
    id: numItems,
    maxTime: 1,
    onComplete: event => {
      const msPerOp = (1e3 / event.target.hz).toFixed(4);
      addNativePoint(+event.target.id, +msPerOp);
      addStatRow({
        numItems,
        algorithm: 'native sort',
        msPerOp,
        rme: event.target.stats.rme.toFixed(2),
        samples: event.target.stats.sample.length
      });
    }
  })
  .add(`${numItems} elements: your mergeSort`, () => {
    mergeSort(randomArr(numItems));
  }, {
    id: numItems,
    maxTime: 1,
    onComplete: event => {
      const msPerOp = (1e3 / event.target.hz).toFixed(4);
      addMergePoint(+event.target.id, +msPerOp);
      addStatRow({
        numItems,
        algorithm: 'merge sort',
        msPerOp,
        rme: event.target.stats.rme.toFixed(2),
        samples: event.target.stats.sample.length
      });
    }
  })
  .add(`${numItems} elements: your bubbleSort`, () => {
    bubbleSort(randomArr(numItems));
  }, {
    id: numItems,
    maxTime: 1,
    onComplete: event => {
      const msPerOp = (1e3 / event.target.hz).toFixed(4);
      addBubblePoint(+event.target.id, +msPerOp);
      addStatRow({
        numItems,
        algorithm: 'bubble sort',
        msPerOp,
        rme: event.target.stats.rme.toFixed(2),
        samples: event.target.stats.sample.length
      });
    }
  });

}

suite
.on('cycle', event => {
  const msPerOp = 1e3 / event.target.hz;
  console.log(String(event.target), event.target.id, `${msPerOp.toFixed(msPerOp < 100 ? 2 : 0)} ms/op`);
})
.on('complete', function () {
  // this.forEach(benchmark => {
  //   console.log(benchmark.hz);
  // });
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({
  async: true
});
