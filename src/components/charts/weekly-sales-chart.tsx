/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WeeklySalesChart = ({ weeklySalesData }: any) => {
  const options = {
    chart: {
      id: "weekly-sales",
      type: "line",
    },
    xaxis: {
      categories: weeklySalesData.map(
        (week: any) => `${week.startDate} - ${week.endDate}`
      ),
      title: {
        text: "Weeks",
      },
    },
    yaxis: {
      title: {
        text: "Total Sales",
      },
    },
    title: {
      text: "Weekly Sales Overview",
    },
  };

  const series = [
    {
      name: "Sales",
      data: weeklySalesData.map((week) => week.totalSales),
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default WeeklySalesChart;
