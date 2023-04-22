// "use client" client side redering
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
    const res = await fetch("https://api.github.com/users/satish-313/repos");
    // await new Promise((r) => setTimeout(r, 1000));
    return await res.json();
}

const Repos = async () => {
    const repos: gitRepos[] = await fetchRepos();
    return (
        <div className="">
            <h1 className="font-medium text-lg my-3 text-white">
                My repositories : {repos.length}{" "}
            </h1>
            <ul className="">
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <div className="my-3 bg-yellow-100 rounded-sm p-2 hover:-translate-y-1 transition-all">
                                <h3 className="text-gray-800 font-semibold">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-600">
                                    {" "}
                                    description :{" "}
                                    {repo.description ? repo.description : ""}
                                </p>
                                <div className="flex justify-between text-gray-900">
                                    <span className="flex items-center">
                                        <FaStar className="text-gray-500 mr-1" />{" "}
                                        {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center">
                                        <FaCodeBranch className="text-gray-500 mr-1" />{" "}
                                        {repo.forks_count}
                                    </span>
                                    <span className="flex items-center">
                                        <FaEye className="text-gray-500 mr-1" />{" "}
                                        {repo.watchers_count}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Repos;
