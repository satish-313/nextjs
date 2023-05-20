import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(req: Request) {
    return NextResponse.json(courses);
}

export async function POST(req: Request) {
    const course:course = await req.json();
    // const { description,id,title} = course
    courses.push(course);
    return NextResponse.json(courses);
}
