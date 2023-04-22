import Link from "next/link";

const Headers = () => {
    return (
        <header className="w-full bg-blue-600 p-3">
            <div className="flex flex-col items-center">
                <div>
                    <Link className="text-3xl text-white font-semibold mb-5" href="/">NextJs13!</Link>
                </div>
                <div className="space-x-4 font-medium text-white">
                    <Link href="/about">About</Link>
                    <Link href="/about/team">Our Team</Link>
                    <Link href="/code/repos">code</Link>
                </div>
            </div>
        </header>
    );
};

export default Headers;
