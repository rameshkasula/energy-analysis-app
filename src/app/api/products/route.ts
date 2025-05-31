/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// create get and post route for products

import { connectToDatabase } from "@/helpers/db-helper";
import prisma from "@/helpers/prisma-helper";
import { NextRequest, NextResponse } from "next/server";

// GET Route
// GET /api/products

export async function GET(req: NextRequest, _res: NextResponse) {
  try {
    // Extract pagination parameters
    const { searchParams } = new URL(req.url);

    const skip = parseInt(searchParams.get("skip") || "0", 10); // Default to 0 if not provided
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Default to 10 if not provided

    const where: any = {};

    // Extract isApproved from search params
    if (searchParams.get("isApproved") !== null) {
      where.isApproved = searchParams.get("isApproved") === "true";
    } else {
      where.isApproved = true; // Default to true if not provided
    }

    // Extract categories from search params and filter by category IDs
    if (searchParams.get("categories")) {
      const categories: any = searchParams.get("categories")?.split(",") || [];
      if (categories.length > 0) {
        where.categoryId = {
          in: JSON.parse(categories),
        };
      }
    }

    // Extract vendors from search params and filter by vendor IDs
    if (searchParams.get("vendors")) {
      const vendors: any = searchParams.get("vendors")?.split(",") || [];
      if (vendors.length > 0) {
        where.vendorId = {
          in: JSON.parse(vendors),
        };
      }
    }

    // Connect to database
    await connectToDatabase();

    // Fetch products
    const products = await prisma.product.findMany({
      skip,
      take: limit,
      where,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: true,
        vendor: true,
      },
    });

    // Count of all products based on the where clause
    const count = await prisma.product.count({ where });

    return NextResponse.json({ products, count }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error, message: error?.message },
      { status: 500 }
    );
  }
}

// POST Route
// POST /api/products

export async function POST(req: NextRequest, _res: NextResponse) {
  try {
    // Get body from request
    const body = await req.json();

    console.log("body", body);

    // Validate that category and vendor IDs are provided
    if (!body.category || !body.vendor) {
      return NextResponse.json(
        { message: "Category and vendor are required fields" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // Create product
    const product = await prisma.product.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        grossPrice: body.grossPrice,
        tax: body.tax,
        totalPrice: body.totalPrice,
        isApproved: body.isApproved ?? false, // Default to false if not provided
        // Connect to the category
        category: {
          connect: {
            id: body.category, // Expecting category ID as a string
          },
        },
        // Connect to the vendor
        vendor: {
          connect: {
            id: body.vendor, // Expecting vendor ID as a string
          },
        },
      },
    });

    // Return response with the created product
    return NextResponse.json(
      { product, message: "Product created Successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { error, message: error?.message },
      { status: 500 }
    );
  }
}
