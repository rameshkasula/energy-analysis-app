"use client"; // This directive ensures the component runs only on the client side

import dynamic from "next/dynamic";

// Dynamically import the ApexCharts component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = () => {
  const series = [
    {
      name: "Sales",
      data: [10, 20, 15, 30, 25],
    },
    {
      name: "Amount",
      data: [10, 20, 15, 30, 25].map((value) => value * 2),
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: true,
        tools: {
          download: true, // Only show the download option
          zoom: false,
          pan: false,
          reset: false,
          selection: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
      colors: ["#808080", "#FFA500"], // Gray for first 3 points, orange for next 2
    },
    markers: {
      size: 6,
      colors: ["#808080", "#808080", "#808080", "#FFA500", "#FFA500"], // Different colors for each marker
      // strokeColors: ["#000000", "#000000", "#000000", "#000000", "#000000"], // Optional stroke color for each marker
      hover: {
        size: 8, // Size on hover
      },
    },
    xaxis: {
      categories: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
    },
    annotations: {
      xaxis: [
        {
          x: "Point 4",
          borderColor: "#FFA500",
          label: {
            style: {
              color: "#fff",
              background: "#FFA500",
            },
            text: "current date",
          },
        },
      ],
    },

    grid: {
      // row: {
      //   colors: ["#F44336", "#E91E63", "#9C27B0"],
      // },
      // column: {
      //   colors: ["#F44336", "#E91E63", "#9C27B0"],
      // },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
