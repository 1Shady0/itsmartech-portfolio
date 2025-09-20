import { type NextRequest, NextResponse } from "next/server"
import { insertRequest } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, description, specificNeeds } = body

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Name, email, and description are required" }, { status: 400 })
    }

    // Insert into database
    await insertRequest({
      fullName: name,
      email: email,
      projectDescription: description,
      specificNeeds: specificNeeds || "",
    })

    return NextResponse.json({ message: "Project request submitted successfully!" }, { status: 201 })
  } catch (error) {
    console.error("Error submitting project request:", error)
    return NextResponse.json({ error: "Failed to submit project request. Please try again." }, { status: 500 })
  }
}
