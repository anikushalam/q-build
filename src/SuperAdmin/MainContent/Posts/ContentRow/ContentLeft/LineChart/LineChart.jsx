import React from "react";
import style from "./LineChart.module.css";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

function LineChart() {
  ChartJS.register(...registerables);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "June 2022",
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        fill: true,

        borderColor: "#420789",
        background:
          "linear-gradient(154.12deg, rgba(211, 185, 241, 0.5) 35.34%, rgba(211, 186, 242, 0) 84.99%)",
      },
    ],
  };
  return (
    <div className={style.linechart}>
      {/* <div className={style.top}>
        <h6>User Joined</h6>
        <p>June 2022</p>
        <h6>grth</h6>
      </div> */}
      <Line
        options={{ maintainAspectRatio: false, responsive: true }}
        data={data}
      />
    </div>
  );
}

export default LineChart;
