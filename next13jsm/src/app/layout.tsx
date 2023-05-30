import "@/styles/global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nextjs13 jsm",
    description: "Nextjs app for sharing file and learing ai power knowledge",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <main className="app">{children}</main>
            </body>
        </html>
    );
}
