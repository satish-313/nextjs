"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
    signIn,
    signOut,
    useSession,
    getProviders,
    ClientSafeProvider,
    LiteralUnion,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

const Nav = () => {
    const isUserLogin = true;
    const [provider, setProvider] = useState<Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null>(null);
    const [toogleDropdown, setToogleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const responce = await getProviders();
            setProvider(responce);
        };
    }, []);

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center ">
                <Image
                    src="/assets/images/logo.svg"
                    alt="logo"
                    height={30}
                    width={30}
                    className="object-contain"
                />
                <p className="logo_text">Promptopia</p>
            </Link>
            {/* desktop view first*/}
            <div className="sm:flex hidden">
                {isUserLogin ? (
                    <div className="flex gap-3 md:gap-5 ">
                        <Link href="/create-prompt" className="black_btn">
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={() => signOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                height={37}
                                width={37}
                                alt="profile"
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {provider &&
                            Object.values(provider).map((p) => (
                                <button
                                    type="button"
                                    key={p.name}
                                    onClick={() => signIn(p.id)}
                                    className="black_btn"
                                >
                                    signIn
                                </button>
                            ))}
                    </>
                )}
            </div>

            {/* mobile navigation */}
            <div className="sm:hidden flex relative">
                {isUserLogin ? (
                    <div className="flex">
                        <Image
                            src="/assets/images/logo.svg"
                            height={37}
                            width={37}
                            alt="profile"
                            className="rounded-full"
                            onClick={() => setToogleDropdown((prev) => !prev)}
                        />

                        {toogleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToogleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToogleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToogleDropdown(false);
                                        signOut;
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    sign out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {provider &&
                            Object.values(provider).map((p) => (
                                <button
                                    type="button"
                                    key={p.name}
                                    onClick={() => signIn(p.id)}
                                    className="black_btn"
                                >
                                    signIn
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
