// create orders from users

// import { axiosClient } from "@/helpers/axios-helper";
import { faker } from "@faker-js/faker";

// create random order
export function createRandomOrder(userId: string) {
  const total = parseFloat(faker.commerce.price());
  const tax = parseFloat((total * 0.28).toFixed(2)); // Calculate tax based on total price

  return {
    total: total,
    tax: tax,
    grandTotal: parseFloat((total + tax).toFixed(2)), // Total price calculation
    user: userId, // Accept userId as a parameter
  };
}
