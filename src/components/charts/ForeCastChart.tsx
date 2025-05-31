// components/LineChart.js

import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  // Data for the chart
  const seriesData = [-33, -13, -45, 95, 12, 15, -34, -61, 66, 82, 1, -36];
  const categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const title = "Highlight Last Two Months";

  // Determine colors for each data point
  const getColor = (value: number, index: number) => {
    const lastTwoMonthsIndex = seriesData.length - 2; // Get the index for the last two months

    return index >= lastTwoMonthsIndex ? "#FFA500" : "#0088ee"; // Orange for last two months, blue otherwise
  };

  // Chart configuration
  const state = {
    series: [
      {
        data: seriesData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line" as const,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: title,
        align: "left",
      },
      xaxis: {
        categories: categories,
      },
      stroke: {
        width: 5,
        curve: "monotoneCubic",
      },
      markers: {
        size: 5,
        colors: seriesData.map((value, index) => getColor(value, index)), // Apply colors based on the logic
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default LineChart;
