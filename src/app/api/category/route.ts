/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// GET , POST for categories

import { connectToDatabase } from "@/helpers/db-helper";
import prisma from "@/helpers/prisma-helper";
import { NextResponse, NextRequest } from "next/server";

// GET /api/category
// GET /api/category?id=1
// Get all categories or get single category by id
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams }: any = new URL(req.url);

    // Extract pagination parameters
    const skip = parseInt(searchParams.get("skip")) || 0; // Default to 0 if not provided
    const limit = parseInt(searchParams.get("limit")) || 10; // Default to 10 if not provided

    const where = {
      id: searchParams.get("id"),
    };

    // todo: get categories
    const categories = await prisma.category.findMany({
      skip: Number(skip),
      take: Number(limit),
      where: {
        id: where.id ? where.id : undefined,
      },
    });

    // count of all users
    const count = await prisma.category.count();

    return NextResponse.json({ categories, count }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// POST /api/category
// Create a new category
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // todo: connect to db
    await connectToDatabase();

    // todo: get body
    const body = await req.json();
    console.log(body);

    // todo: create category
    const category = await prisma.category.create({
      data: {
        name: body.name,
        image: body.image,
      },
    });

    return NextResponse.json({ category }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error }, { status: 500 });
  }
}

// PUT /api/category?id=1
// Update a category by id
export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    // Connect to database
    await connectToDatabase();

    // update category
    const updatedCategory = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name: body.name,
        image: body.image,
      },
    });

    return NextResponse.json({ updatedCategory }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error, message: error?.message },
      { status: 500 }
    );
  }
}

// DELETE /api/category?id=1
// Delete a category by id
// Delete all products in the category
export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Category ID is required", status: 400 },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // delete products
    await prisma.product.deleteMany({
      where: { categoryId: id },
    });

    // delete category
    const deletedCategory = await prisma.category.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      { message: "Category is deleted.", deletedCategory, status: 200 },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error, message: error?.message, status: 500 },
      { status: 500 }
    );
  }
}
