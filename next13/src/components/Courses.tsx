"use client"
import Link from "next/link";

// async function fetchCourses() {
//     const res = await fetch("http://localhost:3000/api/courses");
//     return res.json();
// }

const Courses = ({ courses }: { courses: course[] }) => {
    // const courses: course[] = await fetchCourses();
    return (
        <div className="px-2">
            {courses.map((course) => (
                <div
                    className="bg-white my-4 px-4 py-3 rounded-md"
                    key={course.id}
                >
                    <h2 className="text-xl font-semibold text-gray-700">
                        {course.title}
                    </h2>
                    <small className="text-sm">Level: {course.level}</small>
                    <p className="my-4 text-gray-600">{course.description}</p>
                    <Link
                        className="bg-blue-600 text-white font-medium px-3 py-1.5 rounded-md hover:bg-blue-300 transition-all"
                        href={course.link}
                        target="_blank"
                    >
                        Go to Course
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Courses;
