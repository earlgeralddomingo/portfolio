"use client";

import Image from "next/image";
import { useState } from "react";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    Code2,
    Headphones,
    MapPin,
    Monitor,
    X,
} from "lucide-react";

import egdImage from "@/assets/image/egd.png";

const highlights = [
    {
        label: "Experience",
        value: "6+ Years",
        icon: BriefcaseBusiness,
    },
    {
        label: "Specialization",
        value: "IT Support",
        icon: Headphones,
    },
    {
        label: "Development",
        value: "Web Development",
        icon: Code2,
    },
];

const technicalAreas = [
    "Hardware & Software",
    "Windows Support",
    "Network Troubleshooting",
    "Web Development",
    "PHP & MySQL",
    "Vue.js",
    "Next.js",
    "Tailwind CSS",
];

export default function About() {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <section id="about" className="scroll-mt-24 space-y-6">
            {/* Main About Area */}
            <div className="grid gap-4 xl:grid-cols-[1.4fr_0.6fr]">
                {/* About Card */}
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />

                    <div className="relative grid items-center gap-6 p-6 sm:p-7 lg:grid-cols-[1fr_220px]">
                        {/* About Content */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                                    About Me
                                </p>
                            </div>

                            <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                                IT Support Specialist{" "}
                                <span className="text-zinc-400">&</span>{" "}
                                Web Developer
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                                I&apos;m an IT Support Specialist and Web
                                Developer focused on solving technical problems
                                and building practical digital solutions.
                            </p>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                                My experience includes hands-on IT support,
                                hardware and software troubleshooting, Windows
                                environments, networking, and web development.
                                I enjoy turning technical requirements into
                                solutions that are reliable, usable, and easy
                                to maintain.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "IT SUPPORT",
                                    "WEB DEVELOPMENT",
                                    "PROBLEM SOLVING",
                                ].map((item, index) => (
                                    <span
                                        key={item}
                                        data-aos="zoom-in"
                                        data-aos-delay={250 + index * 100}
                                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-mono text-[8px] font-medium tracking-[0.12em] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowProfile(true)}
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                            >
                                View Profile

                                <ArrowUpRight size={14} />
                            </button>
                        </div>

                        {/* Profile Image */}
                        <div
                            className="relative mx-auto w-full max-w-[220px]"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <div className="absolute -inset-1 rounded-2xl bg-cyan-400/10 blur-xl" />

                            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                                <Image
                                    src={egdImage}
                                    alt="Professional profile photo"
                                    width={500}
                                    height={500}
                                    priority
                                    className="h-auto w-full object-cover"
                                />

                                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-zinc-950/80 px-3 py-2 backdrop-blur-md">
                                    <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-cyan-400">
                                        Profile
                                    </p>

                                    <p className="mt-0.5 text-[10px] font-semibold text-white">
                                        IT Support & Web Development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Overview */}
                <div
                    className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
                    data-aos="fade-left"
                    data-aos-delay="250"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                                Profile
                            </p>

                            <h3 className="mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                                Technical Overview
                            </h3>
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                            <Monitor size={17} />
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-900">
                            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                                Location
                            </span>

                            <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                <MapPin
                                    size={12}
                                    className="text-cyan-500"
                                />
                                San Miguel, Bulacan
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-900">
                            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                                Work Style
                            </span>

                            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                Remote / On-site
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-900">
                            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                                Focus
                            </span>

                            <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
                                IT Support
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                                Status
                            </span>

                            <span className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Available
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-cyan-900"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                                        {item.label}
                                    </p>

                                    <p className="mt-2 text-base font-bold tracking-tight text-zinc-900 dark:text-white">
                                        {item.value}
                                    </p>
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 transition-transform duration-300 group-hover:scale-105 dark:text-cyan-400">
                                    <Icon size={17} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Technical Areas */}
            <div
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
                data-aos="fade-up"
                data-aos-delay="150"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                            Technical Areas
                        </p>

                        <h3 className="mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                            What I Work With
                        </h3>
                    </div>

                    <Code2
                        size={17}
                        className="text-cyan-600 dark:text-cyan-400"
                    />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {technicalAreas.map((area, index) => (
                        <div
                            key={area}
                            data-aos="zoom-in"
                            data-aos-delay={200 + index * 75}
                            className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 dark:border-zinc-800 dark:bg-zinc-900/60"
                        >
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />

                                <span className="text-[10px] font-medium text-zinc-700 dark:text-zinc-300">
                                    {area}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Profile Modal */}
            {showProfile && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
                    onClick={() => setShowProfile(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="about-modal-title"
                >
                    <div
                        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px]" />

                        <div className="relative p-6 sm:p-7">
                            {/* Modal Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                                        <BriefcaseBusiness size={20} />
                                    </div>

                                    <div>
                                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">
                                            About
                                        </p>

                                        <h3
                                            id="about-modal-title"
                                            className="mt-1 text-xl font-bold tracking-tight text-zinc-950 dark:text-white"
                                        >
                                            Professional Profile
                                        </h3>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowProfile(false)}
                                    aria-label="Close modal"
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white"
                                >
                                    <X size={17} />
                                </button>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                I combine hands-on IT support experience with
                                web development skills to build, troubleshoot,
                                and maintain practical digital solutions.
                            </p>

                            {/* Profile Details */}
                            <div className="mt-6 space-y-2">
                                {[
                                    ["Primary Role", "IT Support Specialist"],
                                    ["Development", "Web Developer"],
                                    ["Experience", "6+ Years"],
                                    ["Work Style", "Remote / On-site"],
                                    ["Location", "San Miguel, Bulacan"],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60"
                                    >
                                        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-400">
                                            {label}
                                        </span>

                                        <span className="text-right text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Close */}
                            <button
                                type="button"
                                onClick={() => setShowProfile(false)}
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