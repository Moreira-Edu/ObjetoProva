/**
 *
 * @param {array} column
 * @param {array} rows
 * @param {string} chartType
 * @param {string} elId
 * @param {object} option
 */
export function drawChart(columns, rows, chartType, elId, option) {
  const chart = new google.visualization[chartType](
    document.getElementById(elId)
  );
  const data = new google.visualization.DataTable();
  columns.forEach((column) => data.addColumn(column[0], column[1]));
  data.addRows(rows);
  const options = option && { ...option };

  chart.draw(data, options);
}
