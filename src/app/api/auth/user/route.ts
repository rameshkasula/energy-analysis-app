/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// register user api

import prisma from "@/helpers/prisma-helper";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/helpers/db-helper";

// Create user (can be a customer or vendor)
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    console.log(body);
    const { fullName, email, password, role, isVerified = false } = body;

    // Validate required fields
    if (!fullName || !email || !password) {
      return NextResponse.json({
        status: 400,
        message: "Full name, email, and password are required",
      });
    }

    // Validate role
    if (role && !["USER", "VENDOR"].includes(role.toUpperCase())) {
      return NextResponse.json({
        status: 400,
        message: "Invalid role. Role must be either 'USER' or 'VENDOR'.",
      });
    }

    // Connect to database
    await connectToDatabase();

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create user with the specified role (defaulting to 'USER' if not provided)
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role: role ? role.toUpperCase() : "USER",
        isVerified,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// api to get all users
export async function GET(
  req: NextRequest,
  { params }: any,
  res: NextResponse
) {
  try {
    // todo: connect to db
    await connectToDatabase();

    const { searchParams }: any = new URL(req.url);

    // Extract pagination parameters
    const skip = parseInt(searchParams.get("skip")) || 0; // Default to 0 if not provided
    const limit = parseInt(searchParams.get("limit")) || 10; // Default to 10 if not provided

    // req params to json

    console.log("params", searchParams);

    const where = JSON.parse(searchParams.get("where") || "{}");

    // todo: get users
    const users = await prisma.user.findMany({
      skip: Number(skip),
      take: Number(limit),
      where,
    });

    // count of all users
    const count = await prisma.user.count({
      where,
    });

    return NextResponse.json({ users, count }, { status: 200 });
  } catch (error: any) {
    console.log("error", error?.message);

    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error?.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// api to update user by id
export async function PUT(
  req: NextRequest,
  { params }: any,
  res: NextResponse
) {
  try {
    const body = await req.json();

    const { searchParams }: any = new URL(req.url);

    // extract id from url
    const id = searchParams.get("id");

    console.log("ssss", body, "id", id);

    // Connect to database
    await connectToDatabase();

    // Update user
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...body,
      },
    });

    return NextResponse.json(
      { user, message: "User updated successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("error", error?.message);

    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
