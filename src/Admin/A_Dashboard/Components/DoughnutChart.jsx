import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ data }) => {
  return (
    <div className="card flex-grow-1 ">
      <div className="card-body">
        <h5 className="card-title">Customer</h5>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
