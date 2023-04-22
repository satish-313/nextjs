import Link from "next/link";

function HomePage() {
    return (
        <div className="">
            <h1 className="text-3xl text-white mb-5">Welcome to nextjs 13</h1>
            <ul className="list-disc">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/about/team">team</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
