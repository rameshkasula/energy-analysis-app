import {
  IconChartBarPopular,
  IconPackage,
  IconShoppingBagCheck,
  IconCategory2,
  IconUsers,
  IconSolarPanel,
  IconChargingPile
} from "@tabler/icons-react";

export const SidebarItems = [
  {
    name: "Dashboard",
    icon: IconChartBarPopular,
    href: "/workspace",
    current: true,
  },
  {
    name: "Designs",
    icon: IconPackage,
    href: "/designs",
    current: false,
  },
  // {
  //   name: "Orders",
  //   icon: IconShoppingBagCheck,
  //   href: "/orders",
  //   current: false,
  //   badge: 7,
  // },
  // {
  //   name: "Categories",
  //   icon: IconCategory2,
  //   href: "/categories",
  //   current: false,
  // },
  // {
  //   name: "Users",
  //   icon: IconUsers,
  //   href: "/users",
  //   current: false,
  // },
  // {
  //   name: "Example",
  //   icon: IconUsers,
  //   href: "/example",
  //   current: false,
  // },
  {
    name: "Electricity Rates",
    icon: IconChargingPile,
    href: "/electricity-rates",
    current: false,
  },
  {
    name: "Solar Radiation",
    icon: IconSolarPanel,
    href: "/solar-radiation",
    current: false,
  }
];
