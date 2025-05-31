/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/helpers/prisma-helper";
import { NextRequest, NextResponse } from "next/server";

// GET /api/products/:id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        vendor: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error, message: error?.message },
      { status: 500 }
    );
  }
}

// PUT /api/products/:id
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();

    // Validate that category and vendor IDs are provided if updating them
    if (!body.category || !body.vendor) {
      return NextResponse.json(
        { message: "Category and vendor are required fields" },
        { status: 400 }
      );
    }

    const updatedProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        grossPrice: body.grossPrice,
        tax: body.tax,
        totalPrice: body.totalPrice,
        isApproved: body.isApproved,
        // Connect to the updated category
        category: {
          connect: {
            id: body.category,
          },
        },
        // Connect to the updated vendor
        vendor: {
          connect: {
            id: body.vendor,
          },
        },
      },
    });

    return NextResponse.json({ product: updatedProduct }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error, message: error?.message },
      { status: 500 }
    );
  }
}

// DELETE /api/products/:id
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const deletedProduct = await prisma.product.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      { message: "Product deleted successfully", product: deletedProduct },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { error, message: error?.message },
      { status: 500 }
    );
  }
}
