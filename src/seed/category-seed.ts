import { axiosClient } from "@/helpers/axios-helper";
import { faker } from "@faker-js/faker";

// create 50 categories
export function createRandomCategory() {
  return {
    name: faker.commerce.department(),
    image: faker.image.urlPicsumPhotos(),
  };
}

// get all categories
export async function getCategories() {
  const categories = await axiosClient.get("/category", {
    params: {
      skip: 0,
      limit: 100,
    },
  });
  return categories;
}

// create categories
export async function createCategories() {
  const categories = faker.helpers.multiple(createRandomCategory, {
    count: 6,
  });

  console.log("categories", categories);

  for (const category of categories) {
    try {
      //  const response = await axiosClient.post("/category", category);
      //   console.log("response", response);
      console.log(category);
    } catch (error) {
      console.error("Error posting category:", error);
    }
  }
}

export async function deleteDuplicateCategories() {
  const allCategories = await getCategories();
  const categories = allCategories.data?.categories;

  if (!categories || categories.length === 0) {
    console.log("No categories found.");
    return;
  }

  try {
    console.log("categories", categories);

    // Create a map to track unique categories by name
    const categoryMap = new Map();

    // Iterate through categories to populate the map
    for (const category of categories) {
      const { id, name } = category;

      if (categoryMap.has(name)) {
        // If the name already exists, push the ID to duplicates for deletion
        categoryMap.get(name).push(id);
      } else {
        // If not, create a new entry with the ID in an array
        categoryMap.set(name, [id]);
      }
    }

    // Prepare IDs for deletion
    const idsToDelete = [];

    // Iterate through the map to find duplicates
    for (const [name, ids] of categoryMap.entries()) {
      if (ids.length > 1) {
        console.log(`Duplicate category found: ${name} with IDs:`, ids);
        // Keep the first ID and mark others for deletion
        idsToDelete.push(...ids.slice(1)); // Exclude the first ID
      }
    }

    console.log("IDs to delete:", idsToDelete);

    // Delete duplicate categories using their IDs
    for (const id of idsToDelete) {
      try {
        const response = await axiosClient.delete(`/category/${id}`, {
          params: {
            id,
          },
        });
        console.log(`Deleted category with ID: ${id}`, response);
      } catch (error) {
        console.error(`Error deleting category with ID ${id}:`, error);
      }
    }
  } catch (error) {
    console.error("Error processing categories:", error);
  }
}
