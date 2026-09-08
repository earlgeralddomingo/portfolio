"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    FolderKanban,
    Headphones,
    MapPin,
    Terminal,
    X,
} from "lucide-react";

import TechRibbon from "./TechRibbon";

const stats = [
    {
        label: "Focus",
        value: "IT Support",
        icon: Headphones,
        title: "IT Support",
        description:
            "Hands-on experience providing technical support, troubleshooting hardware and software issues, and maintaining reliable IT environments.",
        details: [
            "Hardware & software troubleshooting",
            "Windows support and configuration",
            "Network and connectivity troubleshooting",
            "Printer and peripheral setup",
            "Remote technical assistance",
        ],
    },
    {
        label: "Projects",
        value: "Web & IT",
        icon: FolderKanban,
        title: "Web & IT Projects",
        description:
            "I build practical digital solutions that combine web development with real-world IT needs.",
        details: [
            "Business and portfolio websites",
            "PHP & MySQL systems",
            "Internal management systems",
            "Responsive web interfaces",
            "IT-focused technical solutions",
        ],
    },
    {
        label: "Experience",
        value: "6+ Years",
        icon: BriefcaseBusiness,
        title: "6+ Years of Experience",
        description:
            "My experience includes freelance technical work, IT support, troubleshooting, and web development.",
        details: [
            "Freelance IT Support",
            "Technical assistance",
            "Windows troubleshooting",
            "Hardware and software support",
            "Web development",
        ],
    },
    {
        label: "Development",
        value: "Web Development",
        icon: Code2,
        title: "Web Development",
        description:
            "I develop responsive and functional websites and web applications using modern frontend and backend technologies.",
        details: [
            "HTML, CSS & JavaScript",
            "PHP & MySQL",
            "Tailwind CSS",
            "Vue.js",
            "Next.js & TypeScript",
        ],
    },
];

export default function Dashboard() {
    const [selectedStat, setSelectedStat] =
        useState<(typeof stats)[number] | null>(null);

    return (
        <section id="dashboard" className="space-y-6 scroll-mt-24">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950">
                {/* Grid background */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
                    aria-hidden="true"
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                            backgroundSize: "36px 36px",
                        }}
                    />
                </div>

                {/* Cyan glow */}
                <div
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px] dark:bg-cyan-500/10"
                    aria-hidden="true"
                />

                <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_300px] lg:p-10">
                    {/* Hero content */}
                    <div
                        className="flex flex-col justify-center"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <div className="mb-5 flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.08)]" />
                            IT Support / Web Development
                        </div>

                        <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-zinc-950 transition-colors duration-300 sm:text-5xl lg:text-6xl dark:text-white">
                            Practical
                            <span className="text-cyan-600 dark:text-cyan-400">
                                {" "}
                                solutions.
                            </span>
                            <br />
                            Technical
                            <span className="text-zinc-400 dark:text-zinc-600">
                                {" "}
                                thinking.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
                            I build, troubleshoot, and support reliable digital
                            solutions — combining hands-on IT support with
                            modern web development.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            {/* Location */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 dark:border-zinc-800 dark:bg-zinc-900/60">
                                <MapPin
                                    size={13}
                                    className="text-zinc-400"
                                />

                                <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                                    San Miguel, Bulacan
                                </span>
                            </div>

                            {/* Availability */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                </span>

                                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                                    Available for opportunities
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
                            >
                                View Projects

                                <ArrowUpRight
                                    size={14}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>

                            <Link
                                href="#contact"
                                className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-cyan-900 dark:hover:text-cyan-400"
                            >
                                Let&apos;s Connect

                                <ArrowUpRight
                                    size={14}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* System status card */}
                    <div
                        className="flex items-end lg:justify-end"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                                        System
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">
                                        Portfolio Status
                                    </p>
                                </div>

                                <Terminal
                                    size={18}
                                    className="text-cyan-500"
                                />
                            </div>

                            <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                                        Availability
                                    </span>

                                    <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        Online
                                    </span>
                                </div>

                                <p className="mt-3 text-sm font-semibold text-zinc-900 dark:text-white">
                                    Open to opportunities
                                </p>

                                <p className="mt-1 text-[10px] leading-5 text-zinc-500">
                                    Available for IT support, web development,
                                    and technical projects.
                                </p>
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <div className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950/60">
                                    <p className="text-[8px] uppercase tracking-wider text-zinc-400">
                                        Stack
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-white">
                                        Full Stack
                                    </p>
                                </div>

                                <div className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950/60">
                                    <p className="text-[8px] uppercase tracking-wider text-zinc-400">
                                        Mode
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-white">
                                        Remote
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Ribbon */}
            <div data-aos="fade-up" data-aos-delay="250">
                <TechRibbon />
            </div>

            {/* Stats */}
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <button
                            key={stat.label}
                            type="button"
                            onClick={() => setSelectedStat(stat)}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group rounded-2xl border border-zinc-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-cyan-900"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                                        {stat.label}
                                    </p>

                                    <p className="mt-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                                        {stat.value}
                                    </p>

                                    <p className="mt-2 text-[9px] text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        Click to explore
                                    </p>
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 transition-transform duration-300 group-hover:scale-105 dark:text-cyan-400">
                                    <Icon size={17} />
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Stat Modal */}
            {selectedStat && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedStat(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="stat-modal-title"
                >
                    <div
                        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Modal glow */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px]" />

                        <div className="relative p-6 sm:p-7">
                            {/* Modal header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                                        <selectedStat.icon size={20} />
                                    </div>

                                    <div>
                                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                                            {selectedStat.label}
                                        </p>

                                        <h3
                                            id="stat-modal-title"
                                            className="mt-1 text-xl font-bold tracking-tight text-zinc-950 dark:text-white"
                                        >
                                            {selectedStat.title}
                                        </h3>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedStat(null)}
                                    aria-label="Close modal"
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white"
                                >
                                    <X size={17} />
                                </button>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                {selectedStat.description}
                            </p>

                            {/* Highlights */}
                            <div className="mt-6">
                                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                                    Highlights
                                </p>

                                <div className="mt-3 space-y-2">
                                    {selectedStat.details.map((detail) => (
                                        <div
                                            key={detail}
                                            className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60"
                                        >
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />

                                            <span className="text-xs text-zinc-700 dark:text-zinc-300">
                                                {detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Close */}
                            <button
                                type="button"
                                onClick={() => setSelectedStat(null)}
                                className="mt-6 w-full rounded-xl bg-cyan-500 px-4 py-3 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}