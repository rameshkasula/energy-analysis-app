/* eslint-disable @typescript-eslint/no-unused-vars */
// api call to login user

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/helpers/db-helper";
import prisma from "@/helpers/prisma-helper";
import { generateAccessToken } from "@/helpers/token-helper";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          status: 400,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // todo: connect to db
    await connectToDatabase();

    // todo: decrypt password
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          status: 404,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          status: 401,
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    // todo : access token
    // Generate an access token for the user
    const accessToken = generateAccessToken(user.id);

    console.log("access token", accessToken);

    return NextResponse.json({ user, token: accessToken }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: error,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
