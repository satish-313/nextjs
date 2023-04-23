import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

// type Props = {
//     name: string;
// };

async function fetchRepo(name: string) {
    const res = await fetch(`https://api.github.com/repos/satish-313/${name}`, {
        next: {
            revalidate: 60,
        },
    });
    return res.json();
}

const Repo = async ({ name }: { name: string }) => {
    const repo: gitRepos = await fetchRepo(name);
    return (
        <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-2">
                {repo.name}
            </h2>
            <p className="text-gray-700 font-normal mb-2">
                {repo.description ? repo.description : ""}{" "}
            </p>
            <div className="flex items-center space-x-5">
                <div className="flex text-gray-700 items-center space-x-2">
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex text-gray-700 items-center space-x-2">
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className="flex text-gray-700 items-center space-x-2">
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </div>
    );
};

export default Repo;
