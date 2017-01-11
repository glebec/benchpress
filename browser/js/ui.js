
const uiModule = (function () {

  const tableBodyElem = document.querySelector('#stats tbody');
  const loadingDiv = document.querySelector('#loading');

  function addStatRow (stats) {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${stats.numItems}</td>
      <td>${stats.algoName}</td>
      <td>${stats.msPerOp}</td>
      <td>&#177;${stats.rme}%</td>
      <td>${stats.samples}</td>
    `;

    tableBodyElem.appendChild(row);
  }

  function stopLoading () {
    loadingDiv.innerHTML = '';
  }

  return {
    addStatRow,
    stopLoading
  };

}());
