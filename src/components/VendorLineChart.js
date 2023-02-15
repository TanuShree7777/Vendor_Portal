import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const data = {
  labels: ["100", "150", "200", "250", "300", "350", "400"],

  datasets: [
    {
      label: "My First datasasdasdet",
      fill: false,
      lineTension: 0.7,
      // backgroundColor: "rgba(75,192,192,0.4)",

      borderColor: "rgb(180,180,180",
      // borderColor: "rgb(60,60,60",
      // borderCapStyle: "butt",
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: "miter",
      // pointBorderColor: "rgba(75,192,192,6)",
      // pointBackgroundColor: "#fff",
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: "rgba(75,192,192,1)",
      // pointHoverBorderColor: "rgba(220,220,220,1)",
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      data: [0, 0.5, 0.8, 0.9, 5]
    }
  ]
};

export const optionss = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
        x: {
          ticks: {
            padding: 0
          }
        },
        xAxes: [
          {
            gridLines: {
                display: false
              },
            ticks: {
              padding: 10,
              display:false
            },  
          
          }
        ],
    
        yAxes: [
          {
            // stacked: true,
            gridLines: {
                display: false
              },
            ticks: {
              display: false
            },
            tooltips: {
              display: false
            }
    
            // ticks: {
            //   beginAtZero: true,
            //   // Return an empty string to draw the tick line but hide the tick label
            //   // Return `null` or `undefined` to hide the tick line entirely
            //   userCallback(value) {
            //     // Convert the number to a string and splite the string every 3 charaters from the end
            //     value = value.toString();
            //     value = value.split(/(?=(?:...)*$)/);
    
            //     // Convert the array to a string and format the output
            //     value = value.join(".");
            //     return `Rp.${value}`;
            //   }
            // }
          }
        ]
      }
  };

//const myRef = React.createRef();
const lineOptions = {
  // onClick: (e, element) => {
  //   if (element.length > 0) {
  //     var ind = element[0]._index;
  //     alert(ind);
  //   }
  // },

  scales: {
    x: {
      ticks: {
        padding: 0
      }
    },
    xAxes: [
      {
        gridLines: {
            display: false
          },
        ticks: {
          padding: 10,
          display:false
        },  
      
      }
    ],

    yAxes: [
      {
        // stacked: true,
        gridLines: {
            display: false
          },
        ticks: {
          display: false
        },
        tooltips: {
          display: false
        }

        // ticks: {
        //   beginAtZero: true,
        //   // Return an empty string to draw the tick line but hide the tick label
        //   // Return `null` or `undefined` to hide the tick line entirely
        //   userCallback(value) {
        //     // Convert the number to a string and splite the string every 3 charaters from the end
        //     value = value.toString();
        //     value = value.split(/(?=(?:...)*$)/);

        //     // Convert the array to a string and format the output
        //     value = value.join(".");
        //     return `Rp.${value}`;
        //   }
        // }
      }
    ]
  }
  // legend: {
  //   display: false
  // },
  // tooltips: {
  //   enabled: false
  // }
};

export function VendorLineChart(){
      const styles = {
        width:"400px",
        margin:"20px",
        fontFamily: "sans-serif",
        textAlign: "center"
      };
  return (
    <div style={styles}>
    <Line  options={optionss} data={data} />
  </div>
  )
}








