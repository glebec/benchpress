/* global Chart */
/* eslint-disable id-length */

const chartModule = (function () {

  const nativePoints = [];
  const mergePoints = [];
  const bubblePoints = [];

  const chart = new Chart(document.getElementById('chart'), {
    type: 'line',
    data: {
      datasets: [{
        label: 'Native sort',
        data: nativePoints,
        borderColor: 'rgba(0, 0, 0, 0.8)',
        fill: false
      }, {
        label: 'Your mergeSort',
        data: mergePoints,
        borderColor: 'rgba(0, 0, 200, 0.8)',
        fill: false
      }, {
        label: 'Your bubbleSort',
        data: bubblePoints,
        borderColor: 'rgba(200, 0, 0, 0.8)',
        fill: false
      }]
    },
    options: {
      animation: {
        duration: 250,
      },
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: 'Elements in Array'
          }
        }],
        yAxes: [{
          type: 'linear',
          position: 'left',
          scaleLabel: {
            display: true,
            labelString: 'Milliseconds per sort'
          }
        }]
      }
    }
  });

  const addPoint = (algoName, x, y) => {
    const point = { x, y };
    switch (algoName) {
      case 'native': nativePoints.push(point); break;
      case 'merge': mergePoints.push(point); break;
      case 'bubble': bubblePoints.push(point); break;
      default: throw Error('unexpected algo name', algoName);
    }
    chart.update();
  };

  return {
    addPoint
  };

}());
