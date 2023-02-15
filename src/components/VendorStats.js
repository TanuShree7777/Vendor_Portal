import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const VendorStats = () => {
  const data = {
    labels: ["Active Vendors", "Inactive Vendors"],
    datasets: [
      {
        label: "Vendors",
        data: [30, 70],
        backgroundColor: ["#D1DEFF", "#2C5DDC"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div style={{ width: "200px" }}>
      <Doughnut data={data} />;
    </div>
  );
};
