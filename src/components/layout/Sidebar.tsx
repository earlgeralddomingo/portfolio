"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    LayoutDashboard,
    User,
    Briefcase,
    FolderKanban,
    Code2,
    Mail,
    MapPin,
    Phone,
    Download,
} from "lucide-react";

import profileImage from "@/assets/image/egd.png";
import AnimatedRole from "./AnimatedRole";

const navigation = [
    {
        name: "Dashboard",
        href: "#dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "About",
        href: "#about",
        icon: User,
    },
    {
        name: "Experience",
        href: "#experience",
        icon: Briefcase,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: FolderKanban,
    },
    {
        name: "Tech Stack",
        href: "#techstack",
        icon: Code2,
    },
    {
        name: "Contact",
        href: "#contact",
        icon: Mail,
    },
];

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [isNavigating, setIsNavigating] = useState(false);

    /*
     * Scroll spy.
     *
     * Only updates the active navigation while the user
     * is manually scrolling.
     */
    useEffect(() => {
        const updateActiveSection = () => {
            if (isNavigating) return;

            /*
             * Dashboard at the top.
             */
            if (window.scrollY < 100) {
                setActiveSection("dashboard");
                return;
            }

            /*
             * Contact at the bottom.
             */
            const scrollPosition = window.scrollY + window.innerHeight;

            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight - 20) {
                setActiveSection("contact");
                return;
            }

            /*
             * Find the section closest to the top.
             */
            const offset = 120;

            let currentSection = "dashboard";
            let closestDistance = Number.POSITIVE_INFINITY;

            navigation.forEach((item) => {
                const sectionId = item.href.replace("#", "");
                const section = document.getElementById(sectionId);

                if (!section) return;

                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop <= offset) {
                    const distance = Math.abs(sectionTop - offset);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        currentSection = sectionId;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection, { passive: true });

        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);

            window.removeEventListener("resize", updateActiveSection);
        };
    }, [isNavigating]);

    /*
     * Smooth navigation.
     *
     * During the animation, the scroll spy is completely
     * disabled so it cannot change the active navigation.
     */
    const handleNavigation = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        event.preventDefault();

        const sectionId = href.replace("#", "");

        const section = document.getElementById(sectionId);

        if (!section) return;

        /*
         * Immediately activate the clicked item.
         */
        setActiveSection(sectionId);

        /*
         * Lock the scroll spy.
         */
        setIsNavigating(true);

        /*
         * Calculate target position.
         */
        const navbarOffset = 80;

        const targetPosition =
            section.getBoundingClientRect().top + window.scrollY - navbarOffset;

        /*
         * Scroll smoothly.
         */
        window.scrollTo({
            top: Math.max(targetPosition, 0),
            behavior: "smooth",
        });

        /*
         * Update URL without browser jump.
         */
        window.history.replaceState(null, "", href);

        /*
         * Keep the clicked item active while the browser
         * finishes the smooth scrolling animation.
         */
        window.setTimeout(() => {
            setIsNavigating(false);
            setActiveSection(sectionId);
        }, 900);
    };

    return (
        <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 border-r border-zinc-200 bg-white transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950 lg:flex lg:flex-col">

            {/* Profile */}
            <div className="border-b border-zinc-200 px-6 py-5 transition-colors duration-300 dark:border-zinc-800">
                <Link
                    href="/"
                    className="group flex items-center gap-4"
                >
                    {/* Profile Image */}
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-lg shadow-zinc-200/40 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/10 dark:border-cyan-400/40 dark:bg-zinc-900 dark:shadow-cyan-950/20 dark:group-hover:border-cyan-400/60">
                        <Image
                            src={profileImage}
                            alt="Earl Gerald Domingo"
                            fill
                            sizes="64px"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Profile Information */}
                    <div className="min-w-0 flex-1">
                        {/* Name */}
                        <p className="truncate text-sm font-semibold text-zinc-950 transition-colors duration-300 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                            Earl Gerald Domingo
                        </p>

                        {/* Animated Role */}
                        <AnimatedRole />
                    </div>
                </Link>
            </div>


            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                    Navigation
                </p>

                <div className="space-y-1">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        const sectionId = item.href.replace("#", "");

                        const isActive = activeSection === sectionId;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(event) => handleNavigation(event, item.href)}
                                aria-current={isActive ? "page" : undefined}
                                className={`group flex h-10 items-center gap-3 rounded-xl px-3 text-sm transition-colors duration-200 ${isActive
                                    ? "bg-cyan-500/10 text-zinc-950 dark:bg-cyan-400/10 dark:text-white"
                                    : "text-zinc-600 dark:text-zinc-400"
                                    }`}
                            >
                                <Icon
                                    size={18}
                                    strokeWidth={1.8}
                                    className={`transition-colors duration-200 ${isActive
                                        ? "text-cyan-500 dark:text-cyan-400"
                                        : "text-zinc-400 group-hover:text-cyan-500 dark:text-zinc-500 dark:group-hover:text-cyan-400"
                                        }`}
                                />

                                <span
                                    className={`transition-colors duration-200 ${isActive
                                        ? "text-zinc-950 dark:text-white"
                                        : "group-hover:text-zinc-950 dark:group-hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </span>

                                {isActive && (
                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-zinc-200 p-4 transition-colors duration-300 dark:border-zinc-800">
                {/* Resume */}
                <a
                    href="/resume/Earl_Gerald_Domingo_IT_Staff.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                    title="Download Resume"
                    className="group mb-3 flex items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-cyan-500/15 dark:text-cyan-400"
                >
                    <Download
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    />

                    <span>Download Resume</span>
                </a>

                {/* Quick Contact */}
                <div className="flex items-center justify-center gap-2">
                    <Link
                        href="#contact"
                        aria-label="Location"
                        title="Location"
                        onClick={(event) => handleNavigation(event, "#contact")}
                        className="rounded-lg p-2 text-zinc-400 transition-all duration-200 hover:bg-zinc-100 hover:text-cyan-500 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-cyan-400"
                    >
                        <MapPin size={17} strokeWidth={1.8} />
                    </Link>

                    <Link
                        href="#contact"
                        aria-label="Email"
                        title="Email"
                        onClick={(event) => handleNavigation(event, "#contact")}
                        className="rounded-lg p-2 text-zinc-400 transition-all duration-200 hover:bg-zinc-100 hover:text-cyan-500 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-cyan-400"
                    >
                        <Mail size={17} strokeWidth={1.8} />
                    </Link>

                    <Link
                        href="#contact"
                        aria-label="Phone"
                        title="Phone"
                        onClick={(event) => handleNavigation(event, "#contact")}
                        className="rounded-lg p-2 text-zinc-400 transition-all duration-200 hover:bg-zinc-100 hover:text-cyan-500 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-cyan-400"
                    >
                        <Phone size={17} strokeWidth={1.8} />
                    </Link>
                </div>
            </div>
        </aside>
    );
}
