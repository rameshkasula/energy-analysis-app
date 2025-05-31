// create 50 vendors

import { axiosClient } from "@/helpers/axios-helper";
import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    fullName: faker.internet.displayName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isVerified: true,
  };
}

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 50,
// });

// create vendors
export const createVendors = async () => {
  const users = faker.helpers.multiple(createRandomUser, {
    count: 500,
  });

  for (const user of users) {
    try {
      const response = await axiosClient.post("/auth/user", {
        ...user,
        role: "VENDOR",
      });
      console.log("response", response);
      console.log(user);
    } catch (error) {
      console.error("Error posting user:", error);
    }
  }
};

// create users
export async function createUsers() {
  const users = faker.helpers.multiple(createRandomUser, {
    count: 50,
  });

  for (const user of users) {
    try {
      const response = await axiosClient.post("/auth/user", user);
      console.log("response", response);
      console.log(user);
    } catch (error) {
      console.error("Error posting user:", error);
    }
  }
}

// get all active vendors
export async function getVendors() {
  const payload = {
    skip: 0,
    limit: 100,
    where: {
      role: "VENDOR",
      isVerified: true,
    },
  };

  const vendors = await axiosClient.get("/auth/user", {
    params: payload,
  });
  return vendors;
}
