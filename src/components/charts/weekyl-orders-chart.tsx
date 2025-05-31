/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WeeklyOrdersChart = ({ weeklyOrdersData }: any) => {
  const options = {
    chart: {
      id: "weekly-orders",
      type: "line",
    },
    xaxis: {
      categories: weeklyOrdersData.map(
        (week: any) => `${week.startDate} - ${week.endDate}`
      ),
      title: {
        text: "Weeks",
      },
    },
    yaxis: {
      title: {
        text: "Total Orders",
      },
    },
    title: {
      text: "Weekly Orders Overview",
    },
  };

  const series = [
    {
      name: "Orders",
      data: weeklyOrdersData.map((week: any) => week.totalOrders),
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default WeeklyOrdersChart;
