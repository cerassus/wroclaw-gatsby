import React from "react"
import { Bar, Line, Pie } from "react-chartjs-2"
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontColor = "#FFF";
defaults.global.defaultFontFamily = "Spartan, sans-serif";


const Chart = ({ chart_labels, chart_data }) => {
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value, index, values) {
              return value / 1000 + " k"
            },
          },
        },
      ],
    },
    legend: {
      display: true,
      labels: {
        boxWidth: 0,
        fontSize: 14,
      },
    },
  }
  const data = {
    labels: chart_labels,
    datasets: [
      {
        label: "Residents Population",
        fill: "origin",
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "round",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data,
      },
    ],
  }
  return <Line data={data} options={options}/>
}

export default Chart
