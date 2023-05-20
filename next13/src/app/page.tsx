"use client";
import React, { useState, useEffect, use } from "react";
import LoadingPage from "./loading";
import Courses from "@/components/Courses";
import Link from "next/link";

function HomePage() {
    const [courses, setCourses] = useState<course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch("/api/courses");
            const data = await res.json();
            setCourses(data);
            setLoading(false);
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="">
            <h1 className="text-3xl text-white mb-5">Welcome to nextjs 13</h1>
            {/* <ul className="list-disc">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/about/team">team</Link>
                </li>
                <li>
                    <Link href="/code/repos">code</Link>
                </li>
            </ul> */}

            <Courses courses={courses} />
        </div>
    );
}

export default HomePage;
