const tableBodyElem = document.querySelector('#stats tbody');

function addStatRow (stats) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${stats.numItems}</td>
    <td>${stats.algorithm}</td>
    <td>${stats.msPerOp}</td>
    <td>&#177;${stats.rme}%</td>
    <td>${stats.samples}</td>
  `;

  tableBodyElem.appendChild(row);
}
