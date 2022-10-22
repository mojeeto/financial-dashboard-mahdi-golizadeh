import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const getDoller = (value: number | string) => {
  if (typeof value !== "number") {
    return "$" + value;
  }
  if (value > 1000) {
    const newValue = value / 1000;
    return "$" + newValue + "K";
  }
  return "$1K";
};

export const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        title: (_) => "",
        label: (tooltipItem) => getDoller(tooltipItem.formattedValue),
      },
      boxHeight: 0,
      boxWidth: 0,
      boxPadding: 0,
      backgroundColor: "#FFFFFF",
      borderColor: "#F2F4F3",
      bodyColor: "#000000",
      bodyFont: {
        weight: "bold",
      },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (tickValue) => getDoller(tickValue),
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
];

export const data: ChartData<"bar", number[]> = {
  labels,
  datasets: [
    {
      data: [
        15000, 12500, 22500, 17500, 10000, 20000, 17500, 19500, 20000, 12500,
      ],
      backgroundColor: "#D4DEDB",
      borderRadius: 15,
      hoverBackgroundColor: "#08C282",
    },
  ],
};

const ChartBar: React.FC = () => {
  return <Bar data={data} options={options} />;
};

export default ChartBar;
