/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import { extendMoment } from "moment-range";

export const ordersData = [
  {
    _id: "2024-07-15",
    orders: 3,
    id: "2024-07-15",
  },
  {
    _id: "2024-07-16",
    orders: 8,
    id: "2024-07-16",
  },
  {
    _id: "2024-07-17",
    orders: 6,
    id: "2024-07-17",
  },
  {
    _id: "2024-07-19",
    orders: 4,
    id: "2024-07-19",
  },
  {
    _id: "2024-07-22",
    orders: 24,
    id: "2024-07-22",
  },
  {
    _id: "2024-07-23",
    orders: 10,
    id: "2024-07-23",
  },
  {
    _id: "2024-07-24",
    orders: 3,
    id: "2024-07-24",
  },
  {
    _id: "2024-07-25",
    orders: 3,
    id: "2024-07-25",
  },
  {
    _id: "2024-07-26",
    orders: 17,
    id: "2024-07-26",
  },
  {
    _id: "2024-07-29",
    orders: 16,
    id: "2024-07-29",
  },
  {
    _id: "2024-07-30",
    orders: 41,
    id: "2024-07-30",
  },
  {
    _id: "2024-07-31",
    orders: 53,
    id: "2024-07-31",
  },
  {
    _id: "2024-08-01",
    orders: 7,
    id: "2024-08-01",
  },
  {
    _id: "2024-08-02",
    orders: 19,
    id: "2024-08-02",
  },
  {
    _id: "2024-08-05",
    orders: 9,
    id: "2024-08-05",
  },
  {
    _id: "2024-08-06",
    orders: 34,
    id: "2024-08-06",
  },
  {
    _id: "2024-08-07",
    orders: 17,
    id: "2024-08-07",
  },
  {
    _id: "2024-08-08",
    orders: 2,
    id: "2024-08-08",
  },
  {
    _id: "2024-08-09",
    orders: 1,
    id: "2024-08-09",
  },
  {
    _id: "2024-08-14",
    orders: 1,
    id: "2024-08-14",
  },
  {
    _id: "2024-08-16",
    orders: 12,
    id: "2024-08-16",
  },
  {
    _id: "2024-08-19",
    orders: 12,
    id: "2024-08-19",
  },
  {
    _id: "2024-08-20",
    orders: 19,
    id: "2024-08-20",
  },
  {
    _id: "2024-08-21",
    orders: 7,
    id: "2024-08-21",
  },
  {
    _id: "2024-08-23",
    orders: 0,
    id: "2024-08-23",
  },
  {
    _id: "2024-08-26",
    orders: 2,
    id: "2024-08-26",
  },
  {
    _id: "2024-08-27",
    orders: 5,
    id: "2024-08-27",
  },
  {
    _id: "2024-08-29",
    orders: 3,
    id: "2024-08-29",
  },
  {
    _id: "2024-08-30",
    orders: 12,
    id: "2024-08-30",
  },
  {
    _id: "2024-09-02",
    orders: 1,
    id: "2024-09-02",
  },
  {
    _id: "2024-09-05",
    orders: 19,
    id: "2024-09-05",
  },
  {
    _id: "2024-09-06",
    orders: 4,
    id: "2024-09-06",
  },
  {
    _id: "2024-09-09",
    orders: 2,
    id: "2024-09-09",
  },
  {
    _id: "2024-09-10",
    orders: 0,
    id: "2024-09-10",
  },
  {
    _id: "2024-09-11",
    orders: 11,
    id: "2024-09-11",
  },
  {
    _id: "2024-09-12",
    orders: 1,
    id: "2024-09-12",
  },
  {
    _id: "2024-09-13",
    orders: 4,
    id: "2024-09-13",
  },
  {
    _id: "2024-09-16",
    orders: 6,
    id: "2024-09-16",
  },
  {
    _id: "2024-09-17",
    orders: 19,
    id: "2024-09-17",
  },
  {
    _id: "2024-09-18",
    orders: 4,
    id: "2024-09-18",
  },
  {
    _id: "2024-09-19",
    orders: 15,
    id: "2024-09-19",
  },
  {
    _id: "2024-09-20",
    orders: 5,
    id: "2024-09-20",
  },
  {
    _id: "2024-09-23",
    orders: 1,
    id: "2024-09-23",
  },
  {
    _id: "2024-09-24",
    orders: 6,
    id: "2024-09-24",
  },
  {
    _id: "2024-09-25",
    orders: 3,
    id: "2024-09-25",
  },
  {
    _id: "2024-09-30",
    orders: 0,
    id: "2024-09-30",
  },
  {
    _id: "2024-10-04",
    orders: 2,
    id: "2024-10-04",
  },
  {
    _id: "2024-10-07",
    orders: 3,
    id: "2024-10-07",
  },
  {
    _id: "2024-10-08",
    orders: 2,
    id: "2024-10-08",
  },
  {
    _id: "2024-10-09",
    orders: 7,
    id: "2024-10-09",
  },
  {
    _id: "2024-10-10",
    orders: 11,
    id: "2024-10-10",
  },
  {
    _id: "2024-10-11",
    orders: 4,
    id: "2024-10-11",
  },
  {
    _id: "2024-10-15",
    orders: 4,
    id: "2024-10-15",
  },
  {
    _id: "2024-10-16",
    orders: 0,
    id: "2024-10-16",
  },
  {
    _id: "2024-10-17",
    orders: 1,
    id: "2024-10-17",
  },
  {
    _id: "2024-10-18",
    orders: 3,
    id: "2024-10-18",
  },
  {
    _id: "2024-10-20",
    orders: 0,
    id: "2024-10-20",
  },
  {
    _id: "2024-10-22",
    orders: 13,
    id: "2024-10-22",
  },
  {
    _id: "2024-10-23",
    orders: 3,
    id: "2024-10-23",
  },
  {
    _id: "2024-10-24",
    orders: 9,
    id: "2024-10-24",
  },
  {
    _id: "2024-10-25",
    orders: 5,
    id: "2024-10-25",
  },
  {
    _id: "2024-10-26",
    orders: 4,
    id: "2024-10-26",
  },
  {
    _id: "2024-10-27",
    orders: 7,
    id: "2024-10-27",
  },
  {
    _id: "2024-10-28",
    orders: 2,
    id: "2024-10-28",
  },
  {
    _id: "2024-10-29",
    orders: 3,
    id: "2024-10-29",
  },
  {
    _id: "2024-11-04",
    orders: 6,
    id: "2024-11-04",
  },
  {
    _id: "2024-11-06",
    orders: 2,
    id: "2024-11-06",
  },
  {
    _id: "2024-11-11",
    orders: 8,
    id: "2024-11-11",
  },
  {
    _id: "2024-11-12",
    orders: 8,
    id: "2024-11-12",
  },
  {
    _id: "2024-11-13",
    orders: 10,
    id: "2024-11-13",
  },
  {
    _id: "2024-11-14",
    orders: 0,
    id: "2024-11-14",
  },
  {
    _id: "2024-11-15",
    orders: 32,
    id: "2024-11-15",
  },
  {
    _id: "2024-11-18",
    orders: 1,
    id: "2024-11-18",
  },
  {
    _id: "2024-11-19",
    orders: 2,
    id: "2024-11-19",
  },
  {
    _id: "2024-11-25",
    orders: 5,
    id: "2024-11-25",
  },
  {
    _id: "2024-11-27",
    orders: 2,
    id: "2024-11-27",
  },
  {
    _id: "2024-11-28",
    orders: 5,
    id: "2024-11-28",
  },
  {
    _id: "2024-11-29",
    orders: 1,
    id: "2024-11-29",
  },
  {
    _id: "2024-12-03",
    orders: 0,
    id: "2024-12-03",
  },
  {
    _id: "2024-12-04",
    orders: 4,
    id: "2024-12-04",
  },
  {
    _id: "2024-12-09",
    orders: 5,
    id: "2024-12-09",
  },
  {
    _id: "2024-12-10",
    orders: 5,
    id: "2024-12-10",
  },
  {
    _id: "2024-12-11",
    orders: 0,
    id: "2024-12-11",
  },
  {
    _id: "2024-12-12",
    orders: 5,
    id: "2024-12-12",
  },
  {
    _id: "2024-12-16",
    orders: 3,
    id: "2024-12-16",
  },
  {
    _id: "2024-12-17",
    orders: 13,
    id: "2024-12-17",
  },
  {
    _id: "2024-12-18",
    orders: 10,
    id: "2024-12-18",
  },
  {
    _id: "2024-12-19",
    orders: 2,
    id: "2024-12-19",
  },
  {
    _id: "2024-12-20",
    orders: 0,
    id: "2024-12-20",
  },
  {
    _id: "2024-12-23",
    orders: 4,
    id: "2024-12-23",
  },
  {
    _id: "2024-12-24",
    orders: 9,
    id: "2024-12-24",
  },
  {
    _id: "2024-12-26",
    orders: 1,
    id: "2024-12-26",
  },
  {
    _id: "2024-12-30",
    orders: 2,
    id: "2024-12-30",
  },
  {
    _id: "2024-12-31",
    orders: 3,
    id: "2024-12-31",
  },
  {
    _id: "2025-01-02",
    orders: 2,
    id: "2025-01-02",
  },
  {
    _id: "2025-01-03",
    orders: 4,
    id: "2025-01-03",
  },
  {
    _id: "2025-01-06",
    orders: 0,
    id: "2025-01-06",
  },
  {
    _id: "2025-01-08",
    orders: 1,
    id: "2025-01-08",
  },
  {
    _id: "2025-01-09",
    orders: 1,
    id: "2025-01-09",
  },
  {
    _id: "2025-01-10",
    orders: 14,
    id: "2025-01-10",
  },
  {
    _id: "2025-01-11",
    orders: 2,
    id: "2025-01-11",
  },
  {
    _id: "2025-01-13",
    orders: 15,
    id: "2025-01-13",
  },
];

export const usersData = [
  {
    _id: "2024-10-15",
    count: 3,
    id: "2024-10-15",
  },
  {
    _id: "2024-10-16",
    count: 3,
    id: "2024-10-16",
  },
  {
    _id: "2024-10-17",
    count: 1,
    id: "2024-10-17",
  },
  {
    _id: "2024-10-18",
    count: 2,
    id: "2024-10-18",
  },
  {
    _id: "2024-10-20",
    count: 1,
    id: "2024-10-20",
  },
  {
    _id: "2024-10-21",
    count: 1,
    id: "2024-10-21",
  },
  {
    _id: "2024-10-22",
    count: 1,
    id: "2024-10-22",
  },
  {
    _id: "2024-10-23",
    count: 3,
    id: "2024-10-23",
  },
  {
    _id: "2024-10-24",
    count: 2,
    id: "2024-10-24",
  },
  {
    _id: "2024-10-25",
    count: 1,
    id: "2024-10-25",
  },
  {
    _id: "2024-10-26",
    count: 1,
    id: "2024-10-26",
  },
  {
    _id: "2024-10-27",
    count: 1,
    id: "2024-10-27",
  },
  {
    _id: "2024-10-28",
    count: 1,
    id: "2024-10-28",
  },
  {
    _id: "2024-10-29",
    count: 3,
    id: "2024-10-29",
  },
  {
    _id: "2024-10-30",
    count: 1,
    id: "2024-10-30",
  },
  {
    _id: "2024-11-04",
    count: 1,
    id: "2024-11-04",
  },
  {
    _id: "2024-11-05",
    count: 1,
    id: "2024-11-05",
  },
  {
    _id: "2024-11-06",
    count: 1,
    id: "2024-11-06",
  },
  {
    _id: "2024-11-07",
    count: 1,
    id: "2024-11-07",
  },
  {
    _id: "2024-11-08",
    count: 1,
    id: "2024-11-08",
  },
  {
    _id: "2024-11-11",
    count: 3,
    id: "2024-11-11",
  },
  {
    _id: "2024-11-12",
    count: 4,
    id: "2024-11-12",
  },
  {
    _id: "2024-11-13",
    count: 2,
    id: "2024-11-13",
  },
  {
    _id: "2024-11-14",
    count: 3,
    id: "2024-11-14",
  },
  {
    _id: "2024-11-15",
    count: 3,
    id: "2024-11-15",
  },
  {
    _id: "2024-11-18",
    count: 3,
    id: "2024-11-18",
  },
  {
    _id: "2024-11-19",
    count: 1,
    id: "2024-11-19",
  },
  {
    _id: "2024-11-20",
    count: 1,
    id: "2024-11-20",
  },
  {
    _id: "2024-11-21",
    count: 1,
    id: "2024-11-21",
  },
  {
    _id: "2024-11-25",
    count: 1,
    id: "2024-11-25",
  },
  {
    _id: "2024-11-27",
    count: 1,
    id: "2024-11-27",
  },
  {
    _id: "2024-11-28",
    count: 1,
    id: "2024-11-28",
  },
  {
    _id: "2024-11-29",
    count: 0,
    id: "2024-11-29",
  },
  {
    _id: "2024-12-03",
    count: 4,
    id: "2024-12-03",
  },
  {
    _id: "2024-12-04",
    count: 3,
    id: "2024-12-04",
  },
  {
    _id: "2024-12-05",
    count: 4,
    id: "2024-12-05",
  },
  {
    _id: "2024-12-06",
    count: 4,
    id: "2024-12-06",
  },
  {
    _id: "2024-12-09",
    count: 4,
    id: "2024-12-09",
  },
  {
    _id: "2024-12-10",
    count: 3,
    id: "2024-12-10",
  },
  {
    _id: "2024-12-11",
    count: 4,
    id: "2024-12-11",
  },
  {
    _id: "2024-12-12",
    count: 4,
    id: "2024-12-12",
  },
  {
    _id: "2024-12-13",
    count: 1,
    id: "2024-12-13",
  },
  {
    _id: "2024-12-16",
    count: 4,
    id: "2024-12-16",
  },
  {
    _id: "2024-12-17",
    count: 2,
    id: "2024-12-17",
  },
  {
    _id: "2024-12-18",
    count: 5,
    id: "2024-12-18",
  },
  {
    _id: "2024-12-19",
    count: 7,
    id: "2024-12-19",
  },
  {
    _id: "2024-12-20",
    count: 3,
    id: "2024-12-20",
  },
  {
    _id: "2024-12-23",
    count: 3,
    id: "2024-12-23",
  },
  {
    _id: "2024-12-24",
    count: 5,
    id: "2024-12-24",
  },
  {
    _id: "2024-12-26",
    count: 2,
    id: "2024-12-26",
  },
  {
    _id: "2024-12-30",
    count: 1,
    id: "2024-12-30",
  },
  {
    _id: "2024-12-31",
    count: 2,
    id: "2024-12-31",
  },
  {
    _id: "2025-01-02",
    count: 3,
    id: "2025-01-02",
  },
  {
    _id: "2025-01-03",
    count: 1,
    id: "2025-01-03",
  },
  {
    _id: "2025-01-06",
    count: 1,
    id: "2025-01-06",
  },
  {
    _id: "2025-01-08",
    count: 1,
    id: "2025-01-08",
  },
  {
    _id: "2025-01-09",
    count: 4,
    id: "2025-01-09",
  },
  {
    _id: "2025-01-10",
    count: 3,
    id: "2025-01-10",
  },
  {
    _id: "2025-01-11",
    count: 2,
    id: "2025-01-11",
  },
  {
    _id: "2025-01-12",
    count: 1,
    id: "2025-01-12",
  },
  {
    _id: "2025-01-13",
    count: 1,
    id: "2025-01-13",
  },
];

export const ratingsData = [
  {
    date: "2024-10-18",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-10-24",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-11-07",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-12",
    ratings: [
      {
        rating: "positiveCount",
        count: 5,
      },
    ],
  },
  {
    date: "2024-11-14",
    ratings: [
      {
        rating: "negativeCount",
        count: 3,
      },
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-11-18",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-19",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-20",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-11-27",
    ratings: [
      {
        rating: "positiveCount",
        count: 3,
      },
    ],
  },
  {
    date: "2024-12-04",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-05",
    ratings: [
      {
        rating: "positiveCount",
        count: 4,
      },
      {
        rating: "negativeCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-09",
    ratings: [
      {
        rating: "positiveCount",
        count: 7,
      },
      {
        rating: "negativeCount",
        count: 6,
      },
      {
        rating: "averageCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-12-10",
    ratings: [
      {
        rating: "negativeCount",
        count: 1,
      },
      {
        rating: "averageCount",
        count: 2,
      },
      {
        rating: "positiveCount",
        count: 4,
      },
    ],
  },
  {
    date: "2024-12-11",
    ratings: [
      {
        rating: "positiveCount",
        count: 9,
      },
      {
        rating: "negativeCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-12",
    ratings: [
      {
        rating: "positiveCount",
        count: 3,
      },
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "negativeCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-16",
    ratings: [
      {
        rating: "positiveCount",
        count: 18,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-17",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-18",
    ratings: [
      {
        rating: "positiveCount",
        count: 5,
      },
    ],
  },
  {
    date: "2024-12-19",
    ratings: [
      {
        rating: "positiveCount",
        count: 18,
      },
      {
        rating: "negativeCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-20",
    ratings: [
      {
        rating: "negativeCount",
        count: 2,
      },
      {
        rating: "positiveCount",
        count: 5,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-23",
    ratings: [
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-24",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
    ],
  },
];

// Function to group sales data by week
export const groupSalesByWeek = (data: any) => {
  const weeklySales: any = {};

  data.forEach((item: any) => {
    const date = moment(item._id);
    const startOfWeek = date.startOf("isoWeek").format("MMM DD YYYY");
    const endOfWeek = date.endOf("isoWeek").format("MMM DD YYYY");

    const weekKey = `${startOfWeek}_${endOfWeek}`;

    if (!weeklySales[weekKey]) {
      weeklySales[weekKey] = {
        startDate: startOfWeek,
        endDate: endOfWeek,
        totalSales: 0,
      };
    }

    weeklySales[weekKey].totalSales += item.sales;
  });

  return Object.values(weeklySales);
};

// const weeklySalesData = groupSalesByWeek(salesData);

// Function to group orders data by week
export const groupOrdersByWeek = (data: any) => {
  const weeklyOrders: any = {};

  data.forEach((item: any) => {
    const date = moment(item._id);
    const startOfWeek = date.startOf("isoWeek").format("YYYY-MM-DD");
    const endOfWeek = date.endOf("isoWeek").format("YYYY-MM-DD");

    const weekKey: any = `${startOfWeek}_${endOfWeek}`;

    if (!weeklyOrders[weekKey]) {
      weeklyOrders[weekKey] = {
        startDate: startOfWeek,
        endDate: endOfWeek,
        totalOrders: 0,
      };
    }

    weeklyOrders[weekKey].totalOrders += item.orders;
  });

  return Object.values(weeklyOrders);
};

// Function to group active users data by week
export const groupActiveUsersByWeek = (data: any) => {
  const weeklyActiveUsers: any = {};

  data.forEach((item: any) => {
    const date = moment(item._id);
    const startOfWeek = date.startOf("isoWeek").format("YYYY-MM-DD");
    const endOfWeek = date.endOf("isoWeek").format("YYYY-MM-DD");

    const weekKey: any = `${startOfWeek}_${endOfWeek}`;

    if (!weeklyActiveUsers[weekKey]) {
      weeklyActiveUsers[weekKey] = {
        startDate: startOfWeek,
        endDate: endOfWeek,
        totalActiveUsers: 0,
      };
    }

    weeklyActiveUsers[weekKey].totalActiveUsers += item.count;
  });

  return Object.values(weeklyActiveUsers);
};

// Function to group ratings data by week
export const groupRatingsByWeek = (
  data: any,
  isPercentage: boolean = false
) => {
  const weeklyRatings: any = {};

  // Check if data is valid (array and not empty)
  if (!Array.isArray(data) || data.length === 0) {
    // Return a structure with zero counts for the current week
    const currentWeekStart = moment().startOf("isoWeek").format("YYYY-MM-DD");
    const currentWeekEnd = moment().endOf("isoWeek").format("YYYY-MM-DD");
    return [
      {
        startDate: currentWeekStart,
        endDate: currentWeekEnd,
        positiveCount: 0,
        negativeCount: 0,
        averageCount: 0,
      },
    ];
  }

  data.forEach((item: any) => {
    // Check if item has a valid date and ratings
    if (!item.date || !Array.isArray(item.ratings)) {
      return; // Skip invalid items
    }

    const date = moment(item.date);

    // Ensure date is valid
    if (!date.isValid()) {
      return; // Skip invalid dates
    }

    const startOfWeek = date.startOf("isoWeek").format("YYYY-MM-DD");
    const endOfWeek = date.endOf("isoWeek").format("YYYY-MM-DD");

    const weekKey = `${startOfWeek}_${endOfWeek}`;

    // Initialize the week entry if it doesn't exist
    if (!weeklyRatings[weekKey]) {
      weeklyRatings[weekKey] = {
        startDate: startOfWeek,
        endDate: endOfWeek,
        positiveCount: 0,
        negativeCount: 0,
        averageCount: 0,
      };
    }

    item.ratings.forEach((rating: any) => {
      // Ensure rating has a type and count
      if (!rating.rating || typeof rating.count !== "number") {
        return; // Skip invalid ratings
      }

      if (rating.rating === "positiveCount") {
        weeklyRatings[weekKey].positiveCount += rating.count;
      } else if (rating.rating === "negativeCount") {
        weeklyRatings[weekKey].negativeCount += rating.count;
      } else if (rating.rating === "averageCount") {
        weeklyRatings[weekKey].averageCount += rating.count;
      }
    });
  });

  // Prepare results
  const result = Object.values(weeklyRatings);

  // If isPercentage is true, calculate percentages
  if (isPercentage) {
    result.forEach((weekData: any) => {
      const totalRatings =
        weekData.positiveCount + weekData.negativeCount + weekData.averageCount;

      weekData.positiveCount =
        totalRatings > 0 ? (weekData.positiveCount / totalRatings) * 100 : 0;
      weekData.negativeCount =
        totalRatings > 0 ? (weekData.negativeCount / totalRatings) * 100 : 0;
      weekData.averageCount =
        totalRatings > 0 ? (weekData.averageCount / totalRatings) * 100 : 0;
    });
  }

  return result;
};

// function to calculate the response rate of ratings week wise
export const calculateResponseRate = (
  weeklyOrdersData: any,
  weeklyReviewsData: any,
  isPercentage = false
) => {
  const responseRates: any = {};

  // Check if either data is valid (array and not empty)
  if (!Array.isArray(weeklyOrdersData) || !Array.isArray(weeklyReviewsData)) {
    return []; // Return an empty array if data is invalid
  }

  // Process weekly reviews data to aggregate counts
  const weeklyReviews: any = {};

  weeklyReviewsData.forEach((item) => {
    const date = moment(item.date);

    // Ensure date is valid
    if (!date.isValid()) return;

    const startOfWeek = date.startOf("isoWeek").format("YYYY-MM-DD");
    const endOfWeek = date.endOf("isoWeek").format("YYYY-MM-DD");
    const weekKey = `${startOfWeek}_${endOfWeek}`;

    if (!weeklyReviews[weekKey]) {
      weeklyReviews[weekKey] = {
        positiveCount: 0,
        negativeCount: 0,
        averageCount: 0,
      };
    }

    item.ratings.forEach((rating: any) => {
      if (rating.rating === "positiveCount") {
        weeklyReviews[weekKey].positiveCount += rating.count;
      } else if (rating.rating === "negativeCount") {
        weeklyReviews[weekKey].negativeCount += rating.count;
      } else if (rating.rating === "averageCount") {
        weeklyReviews[weekKey].averageCount += rating.count;
      }
    });
  });

  // Process weekly orders data
  const totalOrders: any = {};

  weeklyOrdersData.forEach((order) => {
    const date = moment(order._id);

    // Ensure date is valid
    if (!date.isValid()) return;

    const startOfWeek = date.startOf("isoWeek").format("YYYY-MM-DD");
    const endOfWeek = date.endOf("isoWeek").format("YYYY-MM-DD");
    const weekKey = `${startOfWeek}_${endOfWeek}`;

    if (!totalOrders[weekKey]) {
      totalOrders[weekKey] = 0; // Initialize total orders for the week
    }

    totalOrders[weekKey] += order.orders; // Aggregate orders
  });

  // Calculate response rates
  for (const weekKey in totalOrders) {
    const positiveCount = weeklyReviews[weekKey]?.positiveCount || 0;
    const negativeCount = weeklyReviews[weekKey]?.negativeCount || 0;
    const averageCount = weeklyReviews[weekKey]?.averageCount || 0;

    const totalOrderCount = totalOrders[weekKey];

    let positiveResponseRate = 0;
    let negativeResponseRate = 0;
    let averageResponseRate = 0;

    if (totalOrderCount > 0) {
      positiveResponseRate = (positiveCount / totalOrderCount) * 100; // Calculate percentage for positive ratings
      negativeResponseRate = (negativeCount / totalOrderCount) * 100; // Calculate percentage for negative ratings
      averageResponseRate = (averageCount / totalOrderCount) * 100; // Calculate percentage for average ratings
    }

    responseRates[weekKey] = {
      week: weekKey,
      positiveResponseRate: isPercentage ? positiveResponseRate : positiveCount, // Return as percentage or count
      negativeResponseRate: isPercentage ? negativeResponseRate : negativeCount, // Return as percentage or count
      averageResponseRate: isPercentage ? averageResponseRate : averageCount, // Return as percentage or count
      totalOrders: totalOrderCount,
      positiveRatings: positiveCount,
      negativeRatings: negativeCount,
      averageRatings: averageCount,
    };
  }

  return Object.values(responseRates);
};

// const responseRateData = calculateResponseRate(
//   weeklyOrdersData,
//   weeklyReviewsData,
//   true
// ); // Pass true for percentage
// console.log(responseRateData);

// Example usage:
export const salesData: SalesData[] = [
  {
    _id: "2024-10",
    sales: 6515.34,
    id: "2024-10",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11",
    sales: 14618.86,
    id: "2024-11",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12",
    sales: 8358,
    id: "2024-12",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
];

export const dailySalesData: SalesData[] = [
  {
    _id: "2024-10-04",
    sales: 222,
    id: "2024-10-04",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-07",
    sales: 176.4,
    id: "2024-10-07",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-08",
    sales: 60,
    id: "2024-10-08",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-09",
    sales: 1205,
    id: "2024-10-09",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-10",
    sales: 2565,
    id: "2024-10-10",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-11",
    sales: 326.12,
    id: "2024-10-11",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-15",
    sales: 340,
    id: "2024-10-15",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-16",
    sales: 0,
    id: "2024-10-16",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-17",
    sales: 95,
    id: "2024-10-17",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-18",
    sales: 242.84,
    id: "2024-10-18",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-20",
    sales: 0,
    id: "2024-10-20",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-22",
    sales: 549.2,
    id: "2024-10-22",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-23",
    sales: 79.26,
    id: "2024-10-23",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-24",
    sales: 378.52,
    id: "2024-10-24",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-25",
    sales: 204,
    id: "2024-10-25",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-26",
    sales: 5,
    id: "2024-10-26",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-27",
    sales: 10,
    id: "2024-10-27",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-28",
    sales: 5,
    id: "2024-10-28",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-10-29",
    sales: 52,
    id: "2024-10-29",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-04",
    sales: 8,
    id: "2024-11-04",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-06",
    sales: 903.4,
    id: "2024-11-06",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-07",
    sales: 50,
    id: "2024-11-07",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-11",
    sales: 1494.1599999999999,
    id: "2024-11-11",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-12",
    sales: 1451.08,
    id: "2024-11-12",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-13",
    sales: 1305.06,
    id: "2024-11-13",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-14",
    sales: 0,
    id: "2024-11-14",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-15",
    sales: 8001,
    id: "2024-11-15",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-18",
    sales: 1,
    id: "2024-11-18",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-19",
    sales: 213,
    id: "2024-11-19",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-20",
    sales: 560,
    id: "2024-11-20",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-21",
    sales: 35,
    id: "2024-11-21",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-25",
    sales: 313,
    id: "2024-11-25",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-26",
    sales: 120,
    id: "2024-11-26",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-27",
    sales: 56,
    id: "2024-11-27",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-28",
    sales: 103.16,
    id: "2024-11-28",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-11-29",
    sales: 5,
    id: "2024-11-29",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-03",
    sales: 0,
    id: "2024-12-03",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-04",
    sales: 413,
    id: "2024-12-04",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-09",
    sales: 550,
    id: "2024-12-09",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-10",
    sales: 471,
    id: "2024-12-10",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-11",
    sales: 274.06,
    id: "2024-12-11",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-12",
    sales: 655,
    id: "2024-12-12",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-16",
    sales: 255,
    id: "2024-12-16",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-17",
    sales: 900,
    id: "2024-12-17",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-18",
    sales: 1661.4,
    id: "2024-12-18",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-19",
    sales: 256,
    id: "2024-12-19",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-20",
    sales: 248.84,
    id: "2024-12-20",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-23",
    sales: 382.55,
    id: "2024-12-23",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-24",
    sales: 1035.27,
    id: "2024-12-24",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-26",
    sales: 200,
    id: "2024-12-26",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-30",
    sales: 455.88,
    id: "2024-12-30",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
  {
    _id: "2024-12-31",
    sales: 600,
    id: "2024-12-31",
    restaurantname: "",
    foodcourtname: "",
    dates: [],
  },
];

const momentRange = extendMoment(moment);

interface SalesData {
  _id: string;
  sales: number;
  id: string;
}

interface OutputData {
  _id: string;
  sales: number;
  id: string;
}

export function getSalesDataInRange(
  data: SalesData[],
  startDate: string,
  endDate: string,
  dataType: "monthly" | "daily",
  field: "sales" | "count"
): OutputData[] {
  const start = moment(startDate);
  const end = moment(endDate);
  const range = momentRange.range(start, end);

  const result: OutputData[] = [];

  if (dataType === "monthly") {
    // Iterate through each month in the range
    for (const m of range.by("month")) {
      const monthKey = m.format("YYYY-MM");
      const foundData = data.find((d) => d.id === monthKey);
      result.push({
        _id: monthKey,
        [field]: foundData ? foundData[field] : 0,
        id: monthKey,
      });
    }
  } else if (dataType === "daily") {
    // Iterate through each day in the range
    for (const d of range.by("day")) {
      const dayKey = d.format("YYYY-MM-DD");
      const foundData = data.find((d) => d._id === dayKey);
      result.push({
        _id: dayKey,
        [field]: foundData ? foundData[field] : 0,
        id: dayKey,
      });
    }
  }

  return result;
}

export function getChartDataInRange(
  data: SalesData[],
  startDate: string,
  endDate: string,
  dataType: "monthly" | "daily",
  field: string
): OutputData[] {
  const start = moment(startDate);
  const end = moment(endDate);
  const range = momentRange.range(start, end);

  const result: OutputData[] = [];

  const formatKey = (date: moment.Moment) =>
    dataType === "monthly" ? date.format("YYYY-MM") : date.format("YYYY-MM-DD");

  for (const date of range.by(dataType === "monthly" ? "month" : "day")) {
    const key = formatKey(date);

    // Initialize total for the specified field
    let total = 0;

    // Iterate through each restaurant's data
    for (const d of data) {
      // Check if the date matches any of the restaurant's dates
      const foundData = d.dates.find((d) => d.date === key);
      if (foundData) {
        total += foundData[field] || 0; // Sum up the specified field if found
      }
    }

    result.push({
      _id: key,
      [field]: total, // Use dynamic key for the specified field
      id: key,
      sales: 0,
    });
  }

  return result;
}

interface Rating {
  rating: string;
  count: number;
}

interface ReviewData {
  date: string;
  ratings: Rating[];
}

interface OutputRating {
  rating: string;
  count: number;
}

interface OutputReviewData {
  date: string;
  ratings: OutputRating[];
}

export function getReviewsDataInRange(
  data: ReviewData[],
  startDate: string,
  endDate: string,
  dataType: "monthly" | "daily"
): OutputReviewData[] {
  const start = moment(startDate);
  const end = moment(endDate);
  const range = momentRange.range(start, end);

  const result: OutputReviewData[] = [];

  // Create a map to store existing ratings by date
  const existingRatingsMap: { [key: string]: { [key: string]: number } } = {};

  // Populate the map with existing data
  for (const entry of data) {
    existingRatingsMap[entry.date] = {};
    entry.ratings.forEach((rating) => {
      existingRatingsMap[entry.date][rating.rating] = rating.count;
    });
  }

  // Define all possible ratings we want to track
  const possibleRatings = ["negativeCount", "averageCount", "positiveCount"];

  if (dataType === "monthly") {
    // Iterate through each month in the range
    for (const m of range.by("month")) {
      const monthKey = m.format("YYYY-MM");
      const ratings = existingRatingsMap[monthKey] || {};

      // Prepare output ratings, including zero counts for missing ratings
      const outputRatings: OutputRating[] = possibleRatings.map((rating) => ({
        rating,
        count: ratings[rating] || 0,
      }));

      result.push({
        date: monthKey,
        ratings: outputRatings,
      });
    }
  } else if (dataType === "daily") {
    // Iterate through each day in the range
    for (const d of range.by("day")) {
      const dayKey = d.format("YYYY-MM-DD");
      const monthKey = d.format("YYYY-MM"); // Get the month key for daily data
      const ratings = existingRatingsMap[monthKey] || {};

      // Prepare output ratings, including zero counts for missing ratings
      const outputRatings: OutputRating[] = possibleRatings.map((rating) => ({
        rating,
        count: ratings[rating] || 0,
      }));

      result.push({
        date: dayKey,
        ratings: outputRatings,
      });
    }
  }

  return result;
}

// Example usage:
export const reviewData: ReviewData[] = [
  {
    date: "2024-10",
    ratings: [
      { rating: "negativeCount", count: 1 },
      { rating: "positiveCount", count: 6 },
    ],
  },
  {
    date: "2024-11",
    ratings: [
      { rating: "negativeCount", count: 10 },
      { rating: "averageCount", count: 11 },
      { rating: "positiveCount", count: 39 },
    ],
  },
  {
    date: "2024-12",
    ratings: [
      { rating: "positiveCount", count: 84 },
      { rating: "averageCount", count: 13 },
      { rating: "negativeCount", count: 17 },
    ],
  },
];
export const dailyReviewsData: any = [
  {
    date: "2024-10-10",
    ratings: [
      {
        rating: "negativeCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-10-11",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-10-18",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-10-24",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-10-28",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-07",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-11-12",
    ratings: [
      {
        rating: "positiveCount",
        count: 11,
      },
      {
        rating: "averageCount",
        count: 2,
      },
      {
        rating: "negativeCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-11-13",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-14",
    ratings: [
      {
        rating: "averageCount",
        count: 4,
      },
      {
        rating: "negativeCount",
        count: 5,
      },
      {
        rating: "positiveCount",
        count: 8,
      },
    ],
  },
  {
    date: "2024-11-16",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-18",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-19",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-20",
    ratings: [
      {
        rating: "positiveCount",
        count: 5,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-21",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
      {
        rating: "negativeCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-25",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "negativeCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-11-27",
    ratings: [
      {
        rating: "negativeCount",
        count: 1,
      },
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 6,
      },
    ],
  },
  {
    date: "2024-12-03",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-04",
    ratings: [
      {
        rating: "negativeCount",
        count: 2,
      },
      {
        rating: "positiveCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-05",
    ratings: [
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 4,
      },
      {
        rating: "negativeCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-12-09",
    ratings: [
      {
        rating: "positiveCount",
        count: 7,
      },
      {
        rating: "negativeCount",
        count: 6,
      },
      {
        rating: "averageCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-12-10",
    ratings: [
      {
        rating: "negativeCount",
        count: 1,
      },
      {
        rating: "averageCount",
        count: 2,
      },
      {
        rating: "positiveCount",
        count: 4,
      },
    ],
  },
  {
    date: "2024-12-11",
    ratings: [
      {
        rating: "positiveCount",
        count: 9,
      },
      {
        rating: "negativeCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-12",
    ratings: [
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "negativeCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 7,
      },
    ],
  },
  {
    date: "2024-12-16",
    ratings: [
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 18,
      },
    ],
  },
  {
    date: "2024-12-17",
    ratings: [
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-18",
    ratings: [
      {
        rating: "positiveCount",
        count: 5,
      },
    ],
  },
  {
    date: "2024-12-19",
    ratings: [
      {
        rating: "negativeCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 18,
      },
    ],
  },
  {
    date: "2024-12-20",
    ratings: [
      {
        rating: "negativeCount",
        count: 2,
      },
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 5,
      },
    ],
  },
  {
    date: "2024-12-23",
    ratings: [
      {
        rating: "averageCount",
        count: 1,
      },
      {
        rating: "positiveCount",
        count: 1,
      },
    ],
  },
  {
    date: "2024-12-24",
    ratings: [
      {
        rating: "positiveCount",
        count: 2,
      },
    ],
  },
  {
    date: "2024-12-26",
    ratings: [
      {
        rating: "averageCount",
        count: 1,
      },
    ],
  },
];

interface SalesData {
  _id: {
    rest_id: string;
    fc_id: string;
  };
  restaurantname: string;
  foodcourtname: string;
  dates: {
    date: string;
    sales: number;
  }[];
  id: {
    rest_id: string;
    fc_id: string;
  };
}

interface OutputSalesData {
  restaurantname: string;
  foodcourtname: string;
  sales: { date: string; sales: number }[];
}

export function getCitySalesDataInRange(
  data: SalesData[],
  startDate: string,
  endDate: string,
  dataType: "monthly" | "daily"
): OutputSalesData[] {
  const start = moment(startDate);
  const end = moment(endDate);
  const range = momentRange.range(start, end);

  // Create a map to store sales data by restaurant
  const salesMap: { [key: string]: OutputSalesData } = {};

  // Initialize the sales map with restaurant names and food court names
  data.forEach((entry) => {
    const key = `${entry._id.rest_id}_${entry._id.fc_id}`;
    if (!salesMap[key]) {
      salesMap[key] = {
        restaurantname: entry.restaurantname,
        foodcourtname: entry.foodcourtname,
        sales: [],
      };
    }

    // Populate existing dates into the map
    entry.dates.forEach((dateEntry) => {
      salesMap[key].sales.push({
        date: dateEntry.date,
        sales: dateEntry.sales,
      });
    });
  });

  // Prepare output array
  const result: OutputSalesData[] = [];

  if (dataType === "monthly") {
    // Define all months in the specified range
    const monthsInRange = Array.from(range.by("month")).map((m) =>
      m.format("YYYY-MM")
    );

    // Iterate through each restaurant in the sales map
    Object.values(salesMap).forEach((restaurantData) => {
      // Create an array to hold the final sales data with zero counts for missing months
      const finalSalesData = monthsInRange.map((month) => {
        const foundSale = restaurantData.sales.find(
          (sale) => sale.date === month
        );
        return {
          date: month,
          sales: foundSale ? foundSale.sales : 0, // Assign zero if no data is found
        };
      });

      result.push({
        restaurantname: restaurantData.restaurantname,
        foodcourtname: restaurantData.foodcourtname,
        sales: finalSalesData,
      });
    });
  } else if (dataType === "daily") {
    // Define all days in the specified range
    const daysInRange = Array.from(range.by("day")).map((d) =>
      d.format("YYYY-MM-DD")
    );

    // Iterate through each restaurant in the sales map
    Object.values(salesMap).forEach((restaurantData) => {
      // Create an array to hold the final sales data with zero counts for missing days
      const finalSalesData = daysInRange.map((day) => {
        const foundSale = restaurantData.sales.find(
          (sale) => sale.date === day
        );
        return {
          date: day,
          sales: foundSale ? foundSale.sales : 0, // Assign zero if no data is found
        };
      });

      result.push({
        restaurantname: restaurantData.restaurantname,
        foodcourtname: restaurantData.foodcourtname,
        sales: finalSalesData,
      });
    });
  }

  return result;
}

export const restaurantSalesDataDaily = [
  {
    _id: {
      rest_id: "5ad47b159337a2739cdca7a7",
      fc_id: "599e6977f3d3cf43db2e2555",
    },
    restaurantname: "GK Contactless Ordering",
    foodcourtname: "GoKhana Food Court",
    dates: [
      {
        date: "2024-10-25",
        sales: 0,
      },
      {
        date: "2024-10-26",
        sales: 1,
      },
      {
        date: "2024-10-27",
        sales: 3,
      },
      {
        date: "2024-10-28",
        sales: 3,
      },
      {
        date: "2024-10-29",
        sales: 0,
      },
      {
        date: "2024-11-04",
        sales: 2,
      },
      {
        date: "2024-11-11",
        sales: 130,
      },
      {
        date: "2024-11-12",
        sales: 120,
      },
      {
        date: "2024-11-26",
        sales: 120,
      },
    ],
    id: {
      rest_id: "5ad47b159337a2739cdca7a7",
      fc_id: "599e6977f3d3cf43db2e2555",
    },
  },
  {
    _id: {
      rest_id: "6748348e3d7c2e00191c2293",
      fc_id: "67481b6000ea8c001a67e173",
    },
    restaurantname: "Chaat Corner",
    foodcourtname: "Snack Station FC",
    dates: [
      {
        date: "2024-12-12",
        sales: 555,
      },
      {
        date: "2024-12-16",
        sales: 55,
      },
      {
        date: "2024-12-17",
        sales: 400,
      },
      {
        date: "2024-12-18",
        sales: 150,
      },
      {
        date: "2024-12-24",
        sales: 200,
      },
      {
        date: "2024-12-26",
        sales: 200,
      },
    ],
    id: {
      rest_id: "6748348e3d7c2e00191c2293",
      fc_id: "67481b6000ea8c001a67e173",
    },
  },
  {
    _id: {
      rest_id: "65eebc3954817766c71b2a17",
      fc_id: "65eebdd652b18b001167867e",
    },
    restaurantname: "Hotel Mumbai",
    foodcourtname: "LSG Snack Stadium",
    dates: [
      {
        date: "2024-11-06",
        sales: 100,
      },
    ],
    id: {
      rest_id: "65eebc3954817766c71b2a17",
      fc_id: "65eebdd652b18b001167867e",
    },
  },
  {
    _id: {
      rest_id: "6374d13201e23e4af94e3e2d",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "Creams Cafe",
    foodcourtname: "BGL IT CAFETERIA",
    dates: [
      {
        date: "2024-10-04",
        sales: 222,
      },
      {
        date: "2024-10-07",
        sales: 176.4,
      },
      {
        date: "2024-10-09",
        sales: 610,
      },
      {
        date: "2024-10-10",
        sales: 2470,
      },
      {
        date: "2024-10-11",
        sales: 326.12,
      },
      {
        date: "2024-10-15",
        sales: 190,
      },
      {
        date: "2024-10-17",
        sales: 95,
      },
      {
        date: "2024-10-18",
        sales: 242.84,
      },
      {
        date: "2024-10-20",
        sales: 0,
      },
      {
        date: "2024-10-22",
        sales: 549.2,
      },
      {
        date: "2024-10-23",
        sales: 79.26,
      },
      {
        date: "2024-10-24",
        sales: 358.52,
      },
      {
        date: "2024-10-25",
        sales: 204,
      },
      {
        date: "2024-10-26",
        sales: 4,
      },
      {
        date: "2024-10-27",
        sales: 7,
      },
      {
        date: "2024-10-28",
        sales: 2,
      },
      {
        date: "2024-10-29",
        sales: 2,
      },
      {
        date: "2024-11-04",
        sales: 6,
      },
      {
        date: "2024-11-06",
        sales: 803.4,
      },
      {
        date: "2024-11-11",
        sales: 652.16,
      },
      {
        date: "2024-11-12",
        sales: 27.08,
      },
      {
        date: "2024-11-13",
        sales: 473.06,
      },
      {
        date: "2024-11-14",
        sales: 0,
      },
      {
        date: "2024-11-15",
        sales: 43,
      },
      {
        date: "2024-11-18",
        sales: 1,
      },
      {
        date: "2024-11-27",
        sales: 21,
      },
      {
        date: "2024-11-28",
        sales: 103.16,
      },
      {
        date: "2024-11-29",
        sales: 5,
      },
      {
        date: "2024-12-03",
        sales: 0,
      },
      {
        date: "2024-12-04",
        sales: 413,
      },
      {
        date: "2024-12-10",
        sales: 1,
      },
      {
        date: "2024-12-23",
        sales: 184.15,
      },
      {
        date: "2024-12-24",
        sales: 463.31,
      },
    ],
    id: {
      rest_id: "6374d13201e23e4af94e3e2d",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "63d0f3d5bd4403001b41b14e",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "BGL Pre Order",
    foodcourtname: "BGL IT CAFETERIA",
    dates: [
      {
        date: "2024-10-15",
        sales: 150,
      },
      {
        date: "2024-10-16",
        sales: 0,
      },
      {
        date: "2024-11-11",
        sales: 0,
      },
      {
        date: "2024-11-13",
        sales: 0,
      },
      {
        date: "2024-11-15",
        sales: 4365,
      },
      {
        date: "2024-11-25",
        sales: 20,
      },
      {
        date: "2024-12-03",
        sales: 0,
      },
    ],
    id: {
      rest_id: "63d0f3d5bd4403001b41b14e",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "63764b2b01e23e4af94e3fa0",
      fc_id: "63628b62164f6538aa73189c",
    },
    restaurantname: "Punjabi Times",
    foodcourtname: "VMware Foodcourt",
    dates: [
      {
        date: "2024-11-07",
        sales: 50,
      },
      {
        date: "2024-11-12",
        sales: 50,
      },
      {
        date: "2024-11-20",
        sales: 560,
      },
      {
        date: "2024-11-21",
        sales: 35,
      },
      {
        date: "2024-11-25",
        sales: 35,
      },
      {
        date: "2024-11-27",
        sales: 35,
      },
      {
        date: "2024-12-04",
        sales: 0,
      },
      {
        date: "2024-12-18",
        sales: 1060,
      },
    ],
    id: {
      rest_id: "63764b2b01e23e4af94e3fa0",
      fc_id: "63628b62164f6538aa73189c",
    },
  },
  {
    _id: {
      rest_id: "63abe3045c7d2f001bc69f9e",
      fc_id: "63abcdc7ecc88b00113c6719",
    },
    restaurantname: "The Pizza Box",
    foodcourtname: "Food Factory",
    dates: [
      {
        date: "2024-12-09",
        sales: 0,
      },
    ],
    id: {
      rest_id: "63abe3045c7d2f001bc69f9e",
      fc_id: "63abcdc7ecc88b00113c6719",
    },
  },
  {
    _id: {
      rest_id: "66bc66b7bd2f0a001a91a4fb",
      fc_id: "67481b6000ea8c001a67e173",
    },
    restaurantname: "Crunchy Bites",
    foodcourtname: "Snack Station FC",
    dates: [
      {
        date: "2024-12-12",
        sales: 100,
      },
      {
        date: "2024-12-16",
        sales: 0,
      },
      {
        date: "2024-12-17",
        sales: 500,
      },
      {
        date: "2024-12-18",
        sales: 0,
      },
      {
        date: "2024-12-19",
        sales: 0,
      },
      {
        date: "2024-12-20",
        sales: 0,
      },
      {
        date: "2024-12-23",
        sales: 0,
      },
    ],
    id: {
      rest_id: "66bc66b7bd2f0a001a91a4fb",
      fc_id: "67481b6000ea8c001a67e173",
    },
  },
  {
    _id: {
      rest_id: "6548fd6e7ed200001bc5e7e7",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "cafeteria",
    foodcourtname: "BGL IT CAFETERIA",
    dates: [
      {
        date: "2024-11-15",
        sales: 0,
      },
      {
        date: "2024-12-04",
        sales: 0,
      },
    ],
    id: {
      rest_id: "6548fd6e7ed200001bc5e7e7",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "66bb3380bd2f0a001a91a3c8",
      fc_id: "674819903d7c2e00191c228e",
    },
    restaurantname: "Fusion Feast",
    foodcourtname: "Hungry Hub FC",
    dates: [
      {
        date: "2024-12-16",
        sales: 0,
      },
      {
        date: "2024-12-18",
        sales: 257.7,
      },
    ],
    id: {
      rest_id: "66bb3380bd2f0a001a91a3c8",
      fc_id: "674819903d7c2e00191c228e",
    },
  },
  {
    _id: {
      rest_id: "67483a8600ea8c001a67e176",
      fc_id: "67481b6000ea8c001a67e173",
    },
    restaurantname: "Street Flavors",
    foodcourtname: "Snack Station FC",
    dates: [
      {
        date: "2024-12-16",
        sales: 200,
      },
      {
        date: "2024-12-18",
        sales: 32,
      },
      {
        date: "2024-12-19",
        sales: 30,
      },
      {
        date: "2024-12-20",
        sales: 0,
      },
      {
        date: "2024-12-24",
        sales: 30,
      },
    ],
    id: {
      rest_id: "67483a8600ea8c001a67e176",
      fc_id: "67481b6000ea8c001a67e173",
    },
  },
  {
    _id: {
      rest_id: "66bc5bf6bd2f0a001a91a4c9",
      fc_id: "674819903d7c2e00191c228e",
    },
    restaurantname: "Healthy Bites",
    foodcourtname: "Hungry Hub FC",
    dates: [
      {
        date: "2024-12-18",
        sales: 31,
      },
    ],
    id: {
      rest_id: "66bc5bf6bd2f0a001a91a4c9",
      fc_id: "674819903d7c2e00191c228e",
    },
  },
  {
    _id: {
      rest_id: "63629576164f6538aa73189f",
      fc_id: "63628b62164f6538aa73189c",
    },
    restaurantname: "Chung Wah",
    foodcourtname: "VMware Foodcourt",
    dates: [
      {
        date: "2024-11-25",
        sales: 100,
      },
    ],
    id: {
      rest_id: "63629576164f6538aa73189f",
      fc_id: "63628b62164f6538aa73189c",
    },
  },
  {
    _id: {
      rest_id: "63a9315952375e00118c40b4",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "Taste of South",
    foodcourtname: "BGL IT",
    dates: [
      {
        date: "2024-12-23",
        sales: 148.4,
      },
      {
        date: "2024-12-24",
        sales: 331.46000000000004,
      },
    ],
    id: {
      rest_id: "63a9315952375e00118c40b4",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "67569f8d3f0c11001adbddc5",
      fc_id: "675693a33f0c11001adbddbb",
    },
    restaurantname: "KK_1st Floor_1 Conference ",
    foodcourtname: "Kanya_Conference",
    dates: [
      {
        date: "2024-12-11",
        sales: 274.06,
      },
      {
        date: "2024-12-19",
        sales: 195.3,
      },
      {
        date: "2024-12-20",
        sales: 248.84,
      },
      {
        date: "2024-12-24",
        sales: 10.5,
      },
    ],
    id: {
      rest_id: "67569f8d3f0c11001adbddc5",
      fc_id: "675693a33f0c11001adbddbb",
    },
  },
  {
    _id: {
      rest_id: "6524fd4f1e756d001b262c48",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "creams tester",
    foodcourtname: "BGL IT",
    dates: [
      {
        date: "2024-10-09",
        sales: 595,
      },
      {
        date: "2024-10-10",
        sales: 95,
      },
      {
        date: "2024-10-29",
        sales: 50,
      },
      {
        date: "2024-11-11",
        sales: 200,
      },
      {
        date: "2024-11-12",
        sales: 570,
      },
      {
        date: "2024-11-13",
        sales: 190,
      },
      {
        date: "2024-11-14",
        sales: 0,
      },
      {
        date: "2024-11-15",
        sales: 0,
      },
      {
        date: "2024-11-18",
        sales: 0,
      },
      {
        date: "2024-11-25",
        sales: 158,
      },
      {
        date: "2024-12-10",
        sales: 0,
      },
      {
        date: "2024-12-24",
        sales: 0,
      },
      {
        date: "2024-12-31",
        sales: 200,
      },
    ],
    id: {
      rest_id: "6524fd4f1e756d001b262c48",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "652676471e756d001b262cc7",
      fc_id: "674819903d7c2e00191c228e",
    },
    restaurantname: "GK Conference Room 1st Floor",
    foodcourtname: "GK Conference Room Foodcourt 1",
    dates: [
      {
        date: "2024-12-09",
        sales: 550,
      },
      {
        date: "2024-12-10",
        sales: 470,
      },
      {
        date: "2024-12-18",
        sales: 130.7,
      },
      {
        date: "2024-12-19",
        sales: 30.7,
      },
    ],
    id: {
      rest_id: "652676471e756d001b262cc7",
      fc_id: "674819903d7c2e00191c228e",
    },
  },
  {
    _id: {
      rest_id: "6548d7377ed200001bc5e7d0",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "Bangalore Cafe (Test)",
    foodcourtname: "BGL IT CAFETERIA",
    dates: [
      {
        date: "2024-10-08",
        sales: 60,
      },
      {
        date: "2024-10-09",
        sales: 0,
      },
      {
        date: "2024-10-17",
        sales: 0,
      },
      {
        date: "2024-10-24",
        sales: 20,
      },
      {
        date: "2024-11-11",
        sales: 512,
      },
      {
        date: "2024-11-12",
        sales: 684,
      },
      {
        date: "2024-11-13",
        sales: 642,
      },
      {
        date: "2024-11-15",
        sales: 3593,
      },
      {
        date: "2024-11-19",
        sales: 213,
      },
      {
        date: "2024-12-10",
        sales: 0,
      },
      {
        date: "2024-12-11",
        sales: 0,
      },
      {
        date: "2024-12-23",
        sales: 50,
      },
      {
        date: "2024-12-24",
        sales: 0,
      },
      {
        date: "2024-12-26",
        sales: 0,
      },
      {
        date: "2024-12-30",
        sales: 455.88,
      },
      {
        date: "2024-12-31",
        sales: 400,
      },
    ],
    id: {
      rest_id: "6548d7377ed200001bc5e7d0",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
];

export const restaurantSalesDataMonthly = [
  {
    _id: {
      rest_id: "66bb3380bd2f0a001a91a3c8",
      fc_id: "674819903d7c2e00191c228e",
    },
    restaurantname: "Fusion Feast",
    foodcourtname: "Hungry Hub FC",
    dates: [
      {
        date: "2024-12",
        sales: 257.7,
      },
    ],
    id: {
      rest_id: "66bb3380bd2f0a001a91a3c8",
      fc_id: "674819903d7c2e00191c228e",
    },
  },
  {
    _id: {
      rest_id: "6548d7377ed200001bc5e7d0",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "Bangalore Cafe (Test)",
    foodcourtname: "BGL IT CAFETERIA",
    dates: [
      {
        date: "2024-10",
        sales: 80,
      },
      {
        date: "2024-11",
        sales: 5644,
      },
      {
        date: "2024-12",
        sales: 905.88,
      },
    ],
    id: {
      rest_id: "6548d7377ed200001bc5e7d0",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "6748348e3d7c2e00191c2293",
      fc_id: "67481b6000ea8c001a67e173",
    },
    restaurantname: "Chaat Corner",
    foodcourtname: "Snack Station FC",
    dates: [
      {
        date: "2024-12",
        sales: 1560,
      },
    ],
    id: {
      rest_id: "6748348e3d7c2e00191c2293",
      fc_id: "67481b6000ea8c001a67e173",
    },
  },
  {
    _id: {
      rest_id: "6548fd6e7ed200001bc5e7e7",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "cafeteria",
    foodcourtname: "BGL IT CAFETERIA",
    dates: [
      {
        date: "2024-11",
        sales: 0,
      },
      {
        date: "2024-12",
        sales: 0,
      },
    ],
    id: {
      rest_id: "6548fd6e7ed200001bc5e7e7",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "67569f8d3f0c11001adbddc5",
      fc_id: "675693a33f0c11001adbddbb",
    },
    restaurantname: "KK_1st Floor_1 Conference ",
    foodcourtname: "Kanya_Conference",
    dates: [
      {
        date: "2024-12",
        sales: 728.7,
      },
    ],
    id: {
      rest_id: "67569f8d3f0c11001adbddc5",
      fc_id: "675693a33f0c11001adbddbb",
    },
  },
  {
    _id: {
      rest_id: "652676471e756d001b262cc7",
      fc_id: "674819903d7c2e00191c228e",
    },
    restaurantname: "Breakfast Bliss",
    foodcourtname: "Hungry Hub FC",
    dates: [
      {
        date: "2024-12",
        sales: 1181.4,
      },
    ],
    id: {
      rest_id: "652676471e756d001b262cc7",
      fc_id: "674819903d7c2e00191c228e",
    },
  },
  {
    _id: {
      rest_id: "6524fd4f1e756d001b262c48",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "creams tester",
    foodcourtname: "BGL IT",
    dates: [
      {
        date: "2024-10",
        sales: 740,
      },
      {
        date: "2024-11",
        sales: 1118,
      },
      {
        date: "2024-12",
        sales: 200,
      },
    ],
    id: {
      rest_id: "6524fd4f1e756d001b262c48",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "67483a8600ea8c001a67e176",
      fc_id: "67481b6000ea8c001a67e173",
    },
    restaurantname: "Street Flavors",
    foodcourtname: "Snack Station FC",
    dates: [
      {
        date: "2024-12",
        sales: 292,
      },
    ],
    id: {
      rest_id: "67483a8600ea8c001a67e176",
      fc_id: "67481b6000ea8c001a67e173",
    },
  },
  {
    _id: {
      rest_id: "63a9315952375e00118c40b4",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "Taste of South",
    foodcourtname: "BGL IT",
    dates: [
      {
        date: "2024-12",
        sales: 479.86,
      },
    ],
    id: {
      rest_id: "63a9315952375e00118c40b4",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "63629576164f6538aa73189f",
      fc_id: "63628b62164f6538aa73189c",
    },
    restaurantname: "Chung Wah",
    foodcourtname: "VMware Foodcourt",
    dates: [
      {
        date: "2024-11",
        sales: 100,
      },
    ],
    id: {
      rest_id: "63629576164f6538aa73189f",
      fc_id: "63628b62164f6538aa73189c",
    },
  },
  {
    _id: {
      rest_id: "66bc5bf6bd2f0a001a91a4c9",
      fc_id: "674819903d7c2e00191c228e",
    },
    restaurantname: "Healthy Bites",
    foodcourtname: "Hungry Hub FC",
    dates: [
      {
        date: "2024-12",
        sales: 31,
      },
    ],
    id: {
      rest_id: "66bc5bf6bd2f0a001a91a4c9",
      fc_id: "674819903d7c2e00191c228e",
    },
  },
  {
    _id: {
      rest_id: "5ad47b159337a2739cdca7a7",
      fc_id: "599e6977f3d3cf43db2e2555",
    },
    restaurantname: "GK Contactless Ordering",
    foodcourtname: "GoKhana Food Court",
    dates: [
      {
        date: "2024-10",
        sales: 7,
      },
      {
        date: "2024-11",
        sales: 372,
      },
    ],
    id: {
      rest_id: "5ad47b159337a2739cdca7a7",
      fc_id: "599e6977f3d3cf43db2e2555",
    },
  },
  {
    _id: {
      rest_id: "66bc66b7bd2f0a001a91a4fb",
      fc_id: "67481b6000ea8c001a67e173",
    },
    restaurantname: "Crunchy Bites",
    foodcourtname: "Snack Station FC",
    dates: [
      {
        date: "2024-12",
        sales: 600,
      },
    ],
    id: {
      rest_id: "66bc66b7bd2f0a001a91a4fb",
      fc_id: "67481b6000ea8c001a67e173",
    },
  },
  {
    _id: {
      rest_id: "65eebc3954817766c71b2a17",
      fc_id: "65eebdd652b18b001167867e",
    },
    restaurantname: "Hotel Mumbai",
    foodcourtname: "LSG Snack Stadium",
    dates: [
      {
        date: "2024-11",
        sales: 100,
      },
    ],
    id: {
      rest_id: "65eebc3954817766c71b2a17",
      fc_id: "65eebdd652b18b001167867e",
    },
  },
  {
    _id: {
      rest_id: "6374d13201e23e4af94e3e2d",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "Creams Cafe",
    foodcourtname: "BGL IT",
    dates: [
      {
        date: "2024-10",
        sales: 5538.34,
      },
      {
        date: "2024-11",
        sales: 2134.86,
      },
      {
        date: "2024-12",
        sales: 1061.46,
      },
    ],
    id: {
      rest_id: "6374d13201e23e4af94e3e2d",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "63d0f3d5bd4403001b41b14e",
      fc_id: "6372397301e23e4af94e3b73",
    },
    restaurantname: "BGL Pre Order",
    foodcourtname: "BGL IT CAFETERIA",
    dates: [
      {
        date: "2024-10",
        sales: 150,
      },
      {
        date: "2024-11",
        sales: 4385,
      },
      {
        date: "2024-12",
        sales: 0,
      },
    ],
    id: {
      rest_id: "63d0f3d5bd4403001b41b14e",
      fc_id: "6372397301e23e4af94e3b73",
    },
  },
  {
    _id: {
      rest_id: "63764b2b01e23e4af94e3fa0",
      fc_id: "63628b62164f6538aa73189c",
    },
    restaurantname: "Punjabi Times",
    foodcourtname: "VMware Foodcourt",
    dates: [
      {
        date: "2024-11",
        sales: 765,
      },
      {
        date: "2024-12",
        sales: 1060,
      },
    ],
    id: {
      rest_id: "63764b2b01e23e4af94e3fa0",
      fc_id: "63628b62164f6538aa73189c",
    },
  },
  {
    _id: {
      rest_id: "63abe3045c7d2f001bc69f9e",
      fc_id: "63abcdc7ecc88b00113c6719",
    },
    restaurantname: "The Pizza Box",
    foodcourtname: "Food Factory",
    dates: [
      {
        date: "2024-12",
        sales: 0,
      },
    ],
    id: {
      rest_id: "63abe3045c7d2f001bc69f9e",
      fc_id: "63abcdc7ecc88b00113c6719",
    },
  },
];

const aggregateRatings = (inputData: any) => {
  // Initialize arrays to hold ratings
  const negativeRatings: any = [];
  const averageRatings: any = [];
  const positiveRatings: any = [];

  // Iterate through each entry in the input data
  inputData.forEach((entry: any) => {
    entry.ratings.forEach((rating: any) => {
      if (rating.rating === "negativeCount") {
        negativeRatings.push(rating.percentage);
      } else if (rating.rating === "averageCount") {
        averageRatings.push(rating.percentage);
      } else if (rating.rating === "positiveCount") {
        positiveRatings.push(rating.percentage);
      }
    });
  });

  const output: any = [
    { name: "Negative Ratings ( 1, 2 )", data: negativeRatings },
    { name: "Average Rating ( 3 )", data: averageRatings },
    { name: "Positive Ratings ( 4, 5 )", data: positiveRatings },
  ];

  // Return the aggregated result as an array of objects
  return output;
};

// Example input data
const inputData = [
  {
    date: "2024-10",
    ratings: [
      { rating: "negativeCount", count: 1, percentage: 1.11 },
      { rating: "averageCount", count: 0, percentage: 0 },
      { rating: "positiveCount", count: 6, percentage: 6.67 },
    ],
    _id: "2024-10",
    orders: 90,
    id: "2024-10",
  },
  {
    date: "2024-11",
    ratings: [
      { rating: "negativeCount", count: 10, percentage: 10.31 },
      { rating: "averageCount", count: 11, percentage: 11.34 },
      { rating: "positiveCount", count: 39, percentage: 40.21 },
    ],
    _id: "2024-11",
    orders: 97,
    id: "2024-11",
  },
  {
    date: "2024-12",
    ratings: [
      { rating: "negativeCount", count: 17, percentage: 21.52 },
      { rating: "averageCount", count: 13, percentage: 16.46 },
      { rating: "positiveCount", count: 84, percentage: 106.33 },
    ],
    _id: "2024-12",
    orders: 79,
    id: "2024-12",
  },
];

// Aggregating the input data
const aggregatedOutput = aggregateRatings(inputData);
console.log("ramesh", aggregatedOutput);
