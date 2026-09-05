"use server"

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase, mongoose } from "@/lib/db"; // Adjust the import path based on your project structure
import { User } from "@/models/user/user"; // Adjust the import path based on your project structure

export const  GET = async (request: NextRequest) => {
 try {
await connectToDatabase();
const users = await User.find();
return NextResponse.json(users, { status: 200 });    
 }
 catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
 }
}

export const POST = async (request: NextRequest) => {
  try {
    await connectToDatabase();
    const { title, author, body, comments, hidden, meta } = await request.json();
    if (!title || !author || !body) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const doesUserExist = await User.findOne({ title, author });
    if (doesUserExist) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }
    const newUser = new User({ title, author, body, comments, hidden, meta });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}