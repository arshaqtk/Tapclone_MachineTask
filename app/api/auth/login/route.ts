import { NextResponse } from "next/server";
import { generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = await generateToken({ email });

  const response = NextResponse.json({ message: "Login successful" });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}