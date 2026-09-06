import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Query } from "@/models/query/query"; // Adjust the import path based on your project structure


export const POST = async (request: NextRequest) => {
    try {
        await connectToDatabase();
        const { title, email, message ,subject } = await request.json();
        if (!title || !email || !message || !subject) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        const query = new Query({ title, email, message, subject });
        await query.save();
        return NextResponse.json({ message: "Query submitted successfully" });
    } catch (error) {
        console.error("Error submitting query:", error);
        return NextResponse.json({ error: "Failed to submit query" }, { status: 500 });
    }
}