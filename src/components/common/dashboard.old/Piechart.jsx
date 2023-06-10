import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Task', 'Hours per Day'],
  ['Marketing', 5],
  ['Planning', 2],
  ['Production', 2],
  ['Design', 2],

];

export const options = {
  title: 'Overall Department Status',
  chartArea: { left: 50, width: '100%', height: '100%' },

};

function Piechart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="400px"
      height="400px"
    />
  );
}
export default Piechart;
