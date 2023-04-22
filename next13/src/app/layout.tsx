import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "NextJs 13",
    description: "nextjs 13 crash course",
    keyword: "Javascript, Typescript, nextjs, web development",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <main className="max-w-5xl mx-auto w-11/12">{children}</main>
            </body>
        </html>
    );
}
