"use client";

import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    Briefcase,
    CalendarDays,
    CheckCircle2,
    Code2,
    MapPin,
    X,
} from "lucide-react";

type Experience = {
    id: number;
    period: string;
    role: string;
    company: string;
    type: string;
    location: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
};

const experiences: Experience[] = [
    {
        id: 1,
        period: "Jan 2020 — Present",
        role: "Technical VA / IT Support",
        company: "Freelance",
        type: "Freelance",
        location: "Remote",
        description:
            "Providing remote technical assistance, Windows support, troubleshooting, and general IT services for clients.",
        responsibilities: [
            "Provided Windows desktop and software troubleshooting.",
            "Diagnosed and resolved common hardware and software issues.",
            "Assisted clients with remote technical support and system configuration.",
            "Performed basic network and connectivity troubleshooting.",
            "Provided technical guidance for day-to-day computer-related issues.",
        ],
        achievements: [
            "Developed practical experience supporting different Windows environments.",
            "Built several years of hands-on troubleshooting experience through freelance work.",
            "Improved remote support and client communication skills.",
        ],
        technologies: [
            "Windows",
            "AnyDesk",
            "Hardware",
            "Networking",
            "Software Troubleshooting",
        ],
    },
    {
        id: 2,
        period: "2025 — 2026",
        role: "IT Staff",
        company: "Circle Asia Trading Corporation",
        type: "Full-time",
        location: "On-site",
        description:
            "Provided technical support and assisted with maintaining computer systems, software, and IT equipment used throughout the organization.",
        responsibilities: [
            "Provided technical support for desktop computers and peripherals.",
            "Troubleshot hardware, software, and Windows-related issues.",
            "Assisted with network and connectivity troubleshooting.",
            "Installed and configured computer systems and software.",
            "Maintained IT equipment and assisted employees with technical concerns.",
        ],
        achievements: [
            "Supported day-to-day IT operations within an organizational environment.",
            "Developed stronger hands-on troubleshooting and technical support skills.",
            "Gained experience working directly with users and business IT requirements.",
        ],
        technologies: [
            "Windows",
            "Hardware",
            "Networking",
            "Printers",
            "Troubleshooting",
        ],
    },
    {
        id: 3,
        period: "Feb 2025 — May 2025",
        role: "IT Staff Intern",
        company: "Metro North Medical Center Hospital",
        type: "Internship",
        location: "On-site",
        description:
            "Supported daily IT operations while developing an internal Human Resources Ticketing System using PHP and MySQL.",
        responsibilities: [
            "Installed and configured desktop computers and printers.",
            "Troubleshot hardware, software, and LAN connectivity issues.",
            "Assisted with CCTV and wireless access point configuration.",
            "Provided technical support to hospital personnel.",
            "Created technical documentation and a user manual for the ticketing system.",
        ],
        achievements: [
            "Developed the Human Resources Ticketing System using PHP and MySQL.",
            "Completed hands-on IT support and infrastructure tasks in a hospital environment.",
            "Created technical documentation to support system users.",
        ],
        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "Bootstrap",
            "Windows",
            "Networking",
            "CCTV",
        ],
    },
];

export default function Experience() {
    const [selectedExperience, setSelectedExperience] =
        useState<Experience | null>(null);

    const openModal = (experience: Experience) => {
        setSelectedExperience(experience);
    };

    const closeModal = () => {
        setSelectedExperience(null);
    };

    useEffect(() => {
        if (!selectedExperience) return;

        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedExperience]);

    return (
        <>
            <section id="experience" className="scroll-mt-20 space-y-6">
                {/* Section Header */}
                <div
                    data-aos="fade-up"
                    className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
                >
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-6 bg-cyan-500" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
                                Experience
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                            Professional Journey
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                            My experience in IT support, technical assistance,
                            systems development, and infrastructure.
                        </p>
                    </div>

                    {/* Experience Count */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="flex w-fit items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/60"
                    >
                        <Briefcase size={15} className="text-cyan-500" />

                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            {experiences.length} Experiences
                        </span>
                    </div>
                </div>

                {/* Experience Cards */}
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {experiences.map((experience, index) => (
                        <article
                            key={experience.id}
                            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-cyan-500/30"
                        >
                            {/* Hover Glow */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Active Top Border */}
                            <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                            <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                                {/* Card Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        {/* Number */}
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-xs font-bold text-zinc-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-600 dark:group-hover:text-cyan-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <div className="min-w-0">
                                            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-medium text-cyan-600 dark:text-cyan-400">
                                                {experience.type}
                                            </span>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={17}
                                        className="shrink-0 text-zinc-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-500 dark:text-zinc-700 dark:group-hover:text-cyan-400"
                                    />
                                </div>

                                {/* Role */}
                                <div className="mt-5">
                                    <h3 className="text-lg font-bold leading-tight tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                                        {experience.role}
                                    </h3>

                                    <p className="mt-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                        {experience.company}
                                    </p>
                                </div>

                                {/* Date + Location */}
                                <div className="mt-5 space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                                        <CalendarDays size={13} />
                                        <span>{experience.period}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                                        <MapPin size={13} />
                                        <span>{experience.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="mt-5 line-clamp-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    {experience.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {experience.technologies
                                        .slice(0, 3)
                                        .map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-[9px] font-medium text-zinc-500 transition-all duration-300 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400"
                                            >
                                                {technology}
                                            </span>
                                        ))}

                                    {experience.technologies.length > 3 && (
                                        <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-[9px] font-medium text-zinc-400 dark:border-zinc-800 dark:bg-zinc-950/60">
                                            +
                                            {experience.technologies.length -
                                                3}
                                        </span>
                                    )}
                                </div>

                                {/* View Details */}
                                <div className="mt-auto pt-6">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            openModal(experience)
                                        }
                                        className="group/button inline-flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs font-semibold text-zinc-600 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:border-cyan-500/30 dark:hover:bg-cyan-500/5 dark:hover:text-cyan-400"
                                    >
                                        <span>
                                            View experience details
                                        </span>

                                        <ArrowUpRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                                        />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Experience Modal */}
            {selectedExperience && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-5"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div className="relative flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
                        {/* Top Accent */}
                        <div className="absolute left-0 right-0 top-0 z-20 h-0.5 bg-cyan-500" />

                        {/* Modal Header */}
                        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-200 p-5 dark:border-zinc-800 sm:p-6">
                            <div className="min-w-0">
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                        {selectedExperience.type}
                                    </span>

                                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                        {selectedExperience.period}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
                                    {selectedExperience.role}
                                </h3>

                                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <span className="font-medium">
                                        {selectedExperience.company}
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <MapPin size={13} />
                                        {selectedExperience.location}
                                    </span>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close experience details"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-red-500/20 dark:hover:bg-red-500/10 dark:hover:text-red-400"
                            >
                                <X size={17} />
                            </button>
                        </div>

                        {/* Scrollable Modal Content */}
                        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
                            {/* Overview */}
                            <div>
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                                        <Briefcase
                                            size={14}
                                            className="text-cyan-500"
                                        />
                                    </div>

                                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                        Overview
                                    </h4>
                                </div>

                                <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    {selectedExperience.description}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            <div className="mt-7">
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                                        <CheckCircle2
                                            size={14}
                                            className="text-cyan-500"
                                        />
                                    </div>

                                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                        Responsibilities
                                    </h4>
                                </div>

                                <div className="space-y-2.5">
                                    {selectedExperience.responsibilities.map(
                                        (item) => (
                                            <div
                                                key={item}
                                                className="flex gap-3 rounded-xl border border-zinc-100 bg-zinc-50/70 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/40"
                                            >
                                                <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />

                                                <p className="text-sm leading-5 text-zinc-500 dark:text-zinc-400">
                                                    {item}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="mt-7">
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                                        <CheckCircle2
                                            size={14}
                                            className="text-cyan-500"
                                        />
                                    </div>

                                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                        Key Achievements
                                    </h4>
                                </div>

                                <div className="grid gap-2 sm:grid-cols-2">
                                    {selectedExperience.achievements.map(
                                        (item) => (
                                            <div
                                                key={item}
                                                className="rounded-xl border border-zinc-200 bg-white p-3 transition-colors duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-cyan-500/20 dark:hover:bg-cyan-500/5"
                                            >
                                                <div className="flex gap-2.5">
                                                    <CheckCircle2
                                                        size={14}
                                                        className="mt-0.5 shrink-0 text-cyan-500"
                                                    />

                                                    <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                                                        {item}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="mt-7">
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                                        <Code2
                                            size={14}
                                            className="text-cyan-500"
                                        />
                                    </div>

                                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                        Technologies & Tools
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {selectedExperience.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="h-2" />
                        </div>

                        {/* Modal Footer */}
                        <div className="flex shrink-0 items-center justify-between border-t border-zinc-200 bg-zinc-50/80 px-5 py-3 dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-6">
                            <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                Experience Details
                            </span>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-600 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-cyan-500/30 dark:hover:text-cyan-400"
                            >
                                Close
                                <X size={13} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}