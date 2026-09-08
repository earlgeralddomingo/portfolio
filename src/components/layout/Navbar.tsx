"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Moon,
    Sun,
    X,
    LayoutDashboard,
    User,
    Briefcase,
    FolderKanban,
    Code2,
    Mail,
    MapPin,
    Phone,
    Download,
    ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import profileImage from "@/assets/image/egd.png";
import logoIcon from "@/assets/icons/egdIcon.png";

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

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] =
        useState("dashboard");

    /*
     * Prevent the scroll spy from fighting against
     * programmatic smooth scrolling.
     */
    const isNavigatingRef = useRef(false);

    /* Apply theme whenever the state changes */
    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            darkMode
        );

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    /*
     * Detect the currently visible section.
     */
    useEffect(() => {
        const updateActiveSection = () => {
            /*
             * IMPORTANT:
             *
             * While a navigation click is performing a
             * smooth scroll, don't let the scroll spy change
             * the active navigation item.
             */
            if (isNavigatingRef.current) return;

            /*
             * Dashboard at the very top.
             */
            if (window.scrollY < 100) {
                setActiveSection("dashboard");
                return;
            }

            /*
             * Contact at the bottom of the page.
             *
             * Contact may not be able to physically reach
             * the normal navbar offset because there may not
             * be enough content below it.
             */
            const scrollPosition =
                window.scrollY + window.innerHeight;

            const pageHeight =
                document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight - 20) {
                setActiveSection("contact");
                return;
            }

            /*
             * Normal section detection.
             */
            const offset = 140;

            let currentSection = "dashboard";
            let closestDistance =
                Number.POSITIVE_INFINITY;

            navigation.forEach((item) => {
                const sectionId =
                    item.href.replace("#", "");

                const section =
                    document.getElementById(sectionId);

                if (!section) return;

                const sectionTop =
                    section.getBoundingClientRect().top;

                /*
                 * Only consider sections that have passed
                 * the navbar offset.
                 */
                if (sectionTop <= offset) {
                    const distance = Math.abs(
                        sectionTop - offset
                    );

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        currentSection = sectionId;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        updateActiveSection();

        window.addEventListener(
            "scroll",
            updateActiveSection,
            {
                passive: true,
            }
        );

        window.addEventListener(
            "resize",
            updateActiveSection
        );

        return () => {
            window.removeEventListener(
                "scroll",
                updateActiveSection
            );

            window.removeEventListener(
                "resize",
                updateActiveSection
            );
        };
    }, []);

    /*
     * Toggle dark/light theme.
     */
    const toggleTheme = () => {
        setDarkMode((current) => !current);
    };

    /*
     * Close mobile menu.
     */
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    /*
     * Mobile anchor navigation.
     *
     * The active section is changed immediately.
     * The scroll spy is then locked so it cannot temporarily
     * change Contact to Tech Stack or another section while
     * smooth scrolling is happening.
     */
    const handleMobileNavigation = (href: string) => {
        const targetId = href.replace("#", "");

        /*
         * Immediately activate the clicked section.
         */
        setActiveSection(targetId);

        /*
         * Lock scroll spy.
         */
        isNavigatingRef.current = true;

        /*
         * Close the mobile menu.
         */
        setMobileMenuOpen(false);

        /*
         * Wait for the mobile menu closing animation.
         */
        setTimeout(() => {
            const target =
                document.getElementById(targetId);

            if (!target) {
                isNavigatingRef.current = false;
                return;
            }

            /*
             * Mobile navbar height.
             */
            const navbarHeight = 68;

            /*
             * Small additional spacing so the section
             * doesn't sit directly against the navbar.
             */
            const extraSpacing = 12;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight -
                extraSpacing;

            /*
             * Smooth scroll to target.
             */
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: "smooth",
            });

            /*
             * Update URL without triggering the browser's
             * default anchor jump.
             */
            window.history.replaceState(
                null,
                "",
                href
            );

            /*
             * Keep the clicked navigation item active
             * while smooth scrolling is happening.
             */
            setTimeout(() => {
                isNavigatingRef.current = false;

                /*
                 * If we reached the bottom of the page,
                 * Contact should definitely remain active.
                 */
                const scrollPosition =
                    window.scrollY +
                    window.innerHeight;

                const pageHeight =
                    document.documentElement
                        .scrollHeight;

                if (
                    scrollPosition >=
                    pageHeight - 20
                ) {
                    setActiveSection("contact");
                } else {
                    setActiveSection(targetId);
                }
            }, 900);
        }, 320);
    };

    return (
        <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/80 dark:bg-zinc-950/95">
            {/* Main Navbar */}
            <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">
                {/* Left Side */}
                <div className="flex min-w-0 items-center gap-3">
                    {/* Profile Photo - Mobile */}
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full lg:hidden">
                        <Image
                            src={profileImage}
                            alt="Earl Gerald Domingo"
                            fill
                            sizes="36px"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Page Heading */}
                    <div className="flex min-w-0 flex-col justify-center">
                        <h1 className="truncate text-[16px] font-semibold leading-tight text-zinc-950 transition-colors duration-300 dark:text-zinc-100">
                            Welcome back.
                        </h1>

                        <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-zinc-500 transition-colors duration-300 sm:text-[11px] dark:text-zinc-500">
                            <span className="hidden sm:inline">
                                Explore
                            </span>

                            <span className="hidden text-zinc-300 sm:inline dark:text-zinc-700">
                                /
                            </span>

                            <span className="text-zinc-600 dark:text-zinc-400">
                                My work, skills & experience
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    {/* Availability */}
                    <div className="hidden items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 md:flex">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>

                        <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                            Open to opportunities
                        </span>
                    </div>

                    {/* CTA */}
                    <Link
                        href="#contact"
                        onClick={(event) => {
                            event.preventDefault();

                            handleMobileNavigation(
                                "#contact"
                            );
                        }}
                        className="group hidden items-center gap-1.5 rounded-full bg-cyan-500 px-3.5 py-1.5 text-[10px] font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 sm:flex"
                    >
                        <span>
                            Let&apos;s Work Together
                        </span>

                        <ArrowUpRight
                            size={13}
                            strokeWidth={2}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>

                    {/* Theme Toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            darkMode
                                ? "Switch to light theme"
                                : "Switch to dark theme"
                        }
                        title={
                            darkMode
                                ? "Switch to light theme"
                                : "Switch to dark theme"
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-zinc-100 text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
                    >
                        {darkMode ? (
                            <Moon
                                size={14}
                                strokeWidth={1.8}
                            />
                        ) : (
                            <Sun
                                size={14}
                                strokeWidth={1.8}
                            />
                        )}
                    </button>

                    {/* EGD Logo / Mobile Toggle */}
                    <button
                        type="button"
                        onClick={() =>
                            setMobileMenuOpen(
                                (current) => !current
                            )
                        }
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                        className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 lg:hidden ${
                            mobileMenuOpen
                                ? "scale-95"
                                : "scale-100"
                        }`}
                    >
                        {/* EGD Logo */}
                        <Image
                            src={logoIcon}
                            alt="EGD"
                            fill
                            sizes="36px"
                            className={`object-contain transition-all duration-300 ${
                                mobileMenuOpen
                                    ? "scale-75 opacity-0"
                                    : "scale-100 opacity-100"
                            }`}
                        />

                        {/* Close Icon */}
                        <span
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                                mobileMenuOpen
                                    ? "scale-100 opacity-100"
                                    : "scale-75 opacity-0"
                            }`}
                        >
                            <X
                                size={16}
                                strokeWidth={1.8}
                                className="text-cyan-500"
                            />
                        </span>
                    </button>

                    {/* Desktop Logo */}
                    <div className="relative hidden h-9 w-9 items-center justify-center overflow-hidden lg:flex">
                        <Image
                            src={logoIcon}
                            alt="EGD"
                            fill
                            sizes="36px"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`grid overflow-hidden border-t border-zinc-200/80 bg-white/98 transition-all duration-300 ease-in-out dark:border-zinc-800/80 dark:bg-zinc-950/98 lg:hidden ${
                    mobileMenuOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="min-h-0">
                    <nav className="px-4 py-4 sm:px-6">
                        {/* Navigation Header */}
                        <div className="mb-3 flex items-center justify-between px-2">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                Navigation
                            </p>

                            <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-700">
                                MENU
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <div className="space-y-1">
                            {navigation.map((item) => {
                                const Icon = item.icon;

                                const sectionId =
                                    item.href.replace(
                                        "#",
                                        ""
                                    );

                                const isActive =
                                    activeSection ===
                                    sectionId;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={(event) => {
                                            event.preventDefault();

                                            handleMobileNavigation(
                                                item.href
                                            );
                                        }}
                                        className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 text-sm transition-all duration-300 ${
                                            isActive
                                                ? "translate-x-1 border-cyan-500/20 bg-cyan-500/10 text-zinc-950 dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-white"
                                                : "border-transparent text-zinc-600 hover:translate-x-1 hover:border-cyan-500/20 hover:bg-cyan-500/5 hover:text-zinc-950 dark:text-zinc-400 dark:hover:border-cyan-500/20 dark:hover:bg-cyan-500/5 dark:hover:text-white"
                                        }`}
                                    >
                                        {/* Sliding Active Indicator */}
                                        <span
                                            className={`absolute left-0 top-1/2 w-0.5 -translate-y-1/2 rounded-full bg-cyan-500 transition-all duration-500 ease-out ${
                                                isActive
                                                    ? "h-6 opacity-100"
                                                    : "h-0 opacity-0 group-hover:h-5 group-hover:opacity-100"
                                            }`}
                                        />

                                        {/* Active Background Glow */}
                                        <span
                                            className={`pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cyan-500/10 to-transparent transition-all duration-500 ${
                                                isActive
                                                    ? "translate-x-0 opacity-100"
                                                    : "-translate-x-4 opacity-0"
                                            }`}
                                        />

                                        {/* Icon */}
                                        <Icon
                                            size={17}
                                            strokeWidth={
                                                isActive
                                                    ? 2
                                                    : 1.8
                                            }
                                            className={`relative z-10 shrink-0 transition-all duration-300 ${
                                                isActive
                                                    ? "translate-x-0.5 text-cyan-500 dark:text-cyan-400"
                                                    : "text-zinc-400 group-hover:translate-x-0.5 group-hover:text-cyan-500 dark:text-zinc-500 dark:group-hover:text-cyan-400"
                                            }`}
                                        />

                                        {/* Label */}
                                        <span
                                            className={`relative z-10 transition-all duration-300 ${
                                                isActive
                                                    ? "translate-x-0.5 font-medium"
                                                    : "group-hover:translate-x-0.5"
                                            }`}
                                        >
                                            {item.name}
                                        </span>

                                        {/* Arrow */}
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.8}
                                            className={`relative z-10 ml-auto transition-all duration-300 ${
                                                isActive
                                                    ? "translate-x-0 text-cyan-500 opacity-100 dark:text-cyan-400"
                                                    : "-translate-x-1 text-cyan-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:text-cyan-400"
                                            }`}
                                        />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile CTA */}
                        <Link
                            href="#contact"
                            onClick={(event) => {
                                event.preventDefault();

                                handleMobileNavigation(
                                    "#contact"
                                );
                            }}
                            className="group mt-4 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
                        >
                            Let&apos;s Work Together

                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>

                        {/* Contact */}
                        <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                            <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                Contact
                            </p>

                            <div className="flex items-center justify-center gap-2">
                                {/* Location */}
                                <Link
                                    href="#contact"
                                    onClick={(event) => {
                                        event.preventDefault();

                                        handleMobileNavigation(
                                            "#contact"
                                        );
                                    }}
                                    aria-label="Location"
                                    title="Location"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-zinc-200 hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-cyan-400"
                                >
                                    <MapPin size={16} />
                                </Link>

                                {/* Email */}
                                <Link
                                    href="#contact"
                                    onClick={(event) => {
                                        event.preventDefault();

                                        handleMobileNavigation(
                                            "#contact"
                                        );
                                    }}
                                    aria-label="Email"
                                    title="Email"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-zinc-200 hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-cyan-400"
                                >
                                    <Mail size={16} />
                                </Link>

                                {/* Phone */}
                                <Link
                                    href="#contact"
                                    onClick={(event) => {
                                        event.preventDefault();

                                        handleMobileNavigation(
                                            "#contact"
                                        );
                                    }}
                                    aria-label="Phone"
                                    title="Phone"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-zinc-200 hover:text-cyan-400"
                                >
                                    <Phone size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Resume */}
                        <div className="mt-4">
                            <a
                                href="/resume/Earl_Gerald_Domingo_IT_Staff.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500/15 dark:text-cyan-400"
                            >
                                <Download
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                                />

                                <span>
                                    Download Resume
                                </span>

                                <ArrowUpRight
                                    size={13}
                                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                                />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}