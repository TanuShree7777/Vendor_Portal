import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


//const myRef = React.createRef();



export const CustomChart = () => {

    const data = {
       labels: [100, 200, 300, 800],
      
        datasets: [
          {
            label: "My First dataset",
            fill: false,   
           data: [150, 200, 300, 400]
          }
        ]
      };

      const lineOptions = {
        scales: {
            x: {
                grid:{
                    display:false
                }
            },
            y: {
                grid:{
                    display:false
                },
                ticks: {
                display:false}
            }
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      };
      

      const styles = {
        width:"400px",
        margin:"20px",
        fontFamily: "sans-serif",
        textAlign: "center"
      };

    return (<>
      <div style={styles}>
    <Line data={data} options={lineOptions} />
  </div>
    </>)
}


