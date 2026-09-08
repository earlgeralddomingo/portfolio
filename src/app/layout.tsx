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
    metadataBase: new URL("https://egdomingodev.vercel.app"),

    title: {
        default: "Earl Gerald Domingo | IT Support Specialist & Web Developer",
        template: "%s | Earl Gerald Domingo",
    },

    description:
        "Portfolio of Earl Gerald Domingo — IT Support Specialist and Web Developer specializing in IT support, troubleshooting, web development, and technical solutions.",

    keywords: [
        // Name / Personal Brand
        "Earl Gerald Domingo",
        "Earl Domingo",
        "EGD Dev",
        "EGD Portfolio",

        // IT Support
        "IT Support Specialist",
        "IT Support",
        "IT Specialist",
        "IT Helpdesk",
        "Help Desk Support",
        "Technical Support Specialist",
        "Technical Support",
        "Desktop Support",
        "IT Technician",
        "IT Support Technician",
        "Computer Technician",
        "IT Troubleshooting",
        "Computer Troubleshooting",
        "Hardware Troubleshooting",
        "Software Troubleshooting",
        "Windows Support",
        "Network Troubleshooting",
        "LAN Troubleshooting",
        "Printer Troubleshooting",
        "Remote IT Support",
        "Remote Technical Support",

        // Web Development
        "Web Developer",
        "Web Development",
        "Frontend Developer",
        "Full Stack Web Developer",
        "Next.js Developer",
        "React Developer",
        "TypeScript Developer",
        "JavaScript Developer",
        "PHP Developer",
        "Vue.js Developer",

        // Technologies
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "PHP",
        "MySQL",
        "MariaDB",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "GitHub",

        // Portfolio / Services
        "IT Solutions",
        "Technical Solutions",
        "Web Applications",
        "Website Development",
        "Responsive Web Design",
        "Business Website Development",
        "Custom Web Development",

        // Location
        "IT Specialist Philippines",
        "IT Support Philippines",
        "IT Support Specialist Philippines",
        "IT Helpdesk Philippines",
        "Technical Support Philippines",
        "Web Developer Philippines",
        "Web Development Philippines",
        "Frontend Developer Philippines",
    ],
    authors: [
        {
            name: "Earl Gerald Domingo",
        },
    ],

    creator: "Earl Gerald Domingo",

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://egdomingodev.vercel.app",
        siteName: "Earl Gerald Domingo",
        title: "Earl Gerald Domingo | IT Support Specialist & Web Developer",
        description:
            "Portfolio of Earl Gerald Domingo — IT Support Specialist and Web Developer specializing in IT support, troubleshooting, web development, and technical solutions.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Earl Gerald Domingo — IT Support Specialist & Web Developer",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Earl Gerald Domingo | IT Support Specialist & Web Developer",
        description:
            "IT Support Specialist and Web Developer portfolio of Earl Gerald Domingo.",
        images: ["/og-image.png"],
    },

    icons: {
        icon: "/icon.png",
    },
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