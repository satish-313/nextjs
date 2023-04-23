import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params }: { params: { name: string } }) => {
    return (
        <div className="bg-white px-2 py-4 mt-2 rounded-md">
            <div className="mb-4">
                <Link
                    className="text-neutral-700 text-sm font-medium underline underline-offset-1 p-2 hover:bg-blue-500 rounded-sm hover:text-white hover:font-semibold transition-all"
                    href="/code/repos"
                >
                    Back to Repository
                </Link>
            </div>
            <Suspense fallback={<div>repo loading.</div>}>
                <Repo name={params.name} />
            </Suspense>
            <Suspense fallback={<div>dir loading</div>}>
                <RepoDirs name={params.name} />
            </Suspense>
        </div>
    );
};

export default RepoPage;
