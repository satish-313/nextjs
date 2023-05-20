import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    // console.log(req.url, searchParams, searchParams.get("query"));
    const query = searchParams.get("query");
    const filterCourses = courses.filter((c) => {
        return c.title
            .toLocaleLowerCase()
            .includes(query?.toLocaleLowerCase()!);
    });
    return NextResponse.json(filterCourses);
}
