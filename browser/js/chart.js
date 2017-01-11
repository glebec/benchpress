/* global Chart */
/* eslint-disable id-length */

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
      duration: 250
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

function addNativePoint (x, y) {
  nativePoints.push({ x, y });
  chart.update();
}

function addMergePoint (x, y) {
  mergePoints.push({ x, y });
  chart.update();
}

function addBubblePoint (x, y) {
  bubblePoints.push({ x, y });
  chart.update();
}
