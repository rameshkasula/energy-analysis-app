/* eslint-disable @typescript-eslint/ban-types */
// create 1000 products ( 2 products per category, 20 products per vendor )

import { axiosClient } from "@/helpers/axios-helper";
import { faker } from "@faker-js/faker";
import { getCategories } from "./category-seed";
import { getVendors } from "./users-seed";

// create random product
export function createRandomProduct(categoryId: string, vendorId: string) {
  const grossPrice = parseFloat(faker.commerce.price());

  // Generate a random tax rate between 0% and 28%
  const taxRate = Math.random() * 0.28; // Random value between 0 and 0.28
  const tax = parseFloat((grossPrice * taxRate).toFixed(2)); // Calculate tax based on gross price

  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.urlPicsumPhotos(),
    grossPrice: grossPrice,
    tax: tax,
    totalPrice: parseFloat((grossPrice + tax).toFixed(2)), // Total price calculation
    isApproved: true, // Set to true if the product is approved
    category: categoryId, // Accept categoryId as a parameter
    vendor: vendorId, // Accept vendorId as a parameter
  };
}

// create products\

export async function createProducts() {
  const categories = await getCategories();
  const vendors = await getVendors();

  //   console.log("categories", categories);
  //   console.log("vendors", vendors);

  for (const category of categories.data?.categories) {
    for (const vendor of vendors.data?.users) {
      const products = faker.helpers.multiple(
        () => createRandomProduct(category.id, vendor.id),
        {
          count: 2,
        }
      );

      for (const product of products) {
        try {
          const response = await axiosClient.post("/products", product);
          console.log("response", response);
          console.log(product);
        } catch (error) {
          console.error("Error posting product:", error);
        }
      }
    }
  }
}
