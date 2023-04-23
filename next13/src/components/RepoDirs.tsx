import Link from "next/link";

async function fetchRepoContent(name: string) {
    // await new Promise((r) => setTimeout(r, 2000));
    const res = await fetch(
        `https://api.github.com/repos/satish-313/${name}/contents`,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    return res.json();
}

const RepoDirs = async ({ name }: { name: string }) => {
    const contents: repoContent[] = await fetchRepoContent(name);
    const dir = contents.filter((c) => c.type === "dir");

    return (
        <div className="py-2">
            <h1 className="text-gray-800 font-semibold">Directory : </h1>
            <ul className="list-disc ml-5 marker:text-gray-800">
                {dir.map((c) => (
                    <li key={c.path}>
                        <Link href={c.html_url}>
                            <span className="text-gray-600">{c.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepoDirs;
