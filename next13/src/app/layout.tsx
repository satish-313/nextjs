import "./globals.css";
import Headers from "@/components/Headers";
import { Poppins } from "next/font/google";

const roboto = Poppins({
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
                <Headers />
                <main className="max-w-5xl mx-auto w-11/12">{children}</main>
            </body>
        </html>
    );
}
