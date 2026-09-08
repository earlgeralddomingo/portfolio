import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Earl Gerald Domingo | IT Support Specialist & Web Developer",
    description:
        "Portfolio of Earl Gerald Domingo — IT Support Specialist and Web Developer specializing in IT support, web development, troubleshooting, and technical solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <AOSProvider />

                {children}
            </body>
        </html>
    );
}