import React from "react";
import style from "./BarChart.module.css";
import { Chart as ChartJS, registerables } from "chart.js";

import { Bar } from "react-chartjs-2";

function BarChart() {
  ChartJS.register(...registerables);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "June 2022",
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        fill: true,

        borderColor: "#420789",
        // background: ["#1DCB02", "#FFA51F", "#826AF9", "#FF4D8D", "#2CD9C5"],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
      },
    ],
  };
  return (
    <div className={style.barchart}>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
