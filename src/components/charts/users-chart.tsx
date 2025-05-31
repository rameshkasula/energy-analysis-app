import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WeeklyActiveUsersChart = ({ weeklyActiveUsersData }: any) => {
  const options = {
    chart: {
      id: "weekly-active-users",
      type: "line",
    },
    xaxis: {
      categories: weeklyActiveUsersData.map(
        (week) => `${week.startDate} - ${week.endDate}`
      ),
      title: {
        text: "Weeks",
      },
    },
    yaxis: {
      title: {
        text: "Total Active Users",
      },
    },
    title: {
      text: "Weekly Active Users Overview",
    },
  };

  const series = [
    {
      name: "Active Users",
      data: weeklyActiveUsersData.map((week) => week.totalActiveUsers),
    },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default WeeklyActiveUsersChart;
