import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }) => {
  return (
    <div className="card flex-grow-1 ">
      <div className="card-body">
        <h5 className="card-title">Traffic this week</h5>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
