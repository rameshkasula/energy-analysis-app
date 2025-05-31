/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WeeklyRatingsChart = ({ weeklyRatingsData }: any) => {
  const options = {
    chart: {
      id: "weekly-ratings",
      type: "line",
    },
    xaxis: {
      categories: weeklyRatingsData.map(
        (week: any) => `${week.startDate} - ${week.endDate}`
      ),
      title: {
        text: "Weeks",
      },
    },
    yaxis: {
      title: {
        text: "Counts",
      },
    },
    title: {
      text: "Weekly Ratings Overview",
    },
  };

  const series = [
    {
      name: "Positive Ratings",
      data: weeklyRatingsData.map((week) => week.positiveCount),
    },
    {
      name: "Negative Ratings",
      data: weeklyRatingsData.map((week) => week.negativeCount),
    },
    {
      name: "Average Ratings",
      data: weeklyRatingsData.map((week) => week.averageCount),
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default WeeklyRatingsChart;
