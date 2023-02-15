import React from "react";
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


export const VendorTopSkills = () => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
      
    },
  };

//   const labels = ["Python", "C++", "Java Script", "Kodin", "Java"];

  const data = {
    labels: ["Python", "C++", "Java Script", "Kodin", "Java"],
    datasets: [
      {
        label: "# of Votes",
        data: [25, 20, 15, 10, 5],
        borderWidth: 1,
        backgroundColor: "#2C5DDC",
      },
    ],
  };

  return (
    <div style={{ width: "500px" }}>
      <MDBContainer>
        <Bar options={options} data={data} />;
      </MDBContainer>
    </div>
  );
};
