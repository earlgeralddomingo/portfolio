"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    CheckCircle2,
    Code2,
    FolderKanban,
    Globe,
    X,
} from "lucide-react";

import arcguideImage from "@/assets/image/arcguide.svg";
import climsImage from "@/assets/image/clims.svg";
import hrtsImage from "@/assets/image/hrts.svg";
import rdsAutoworkzImage from "@/assets/image/RDS AUTOWORKZ.png";
import cssGeneratorImage from "@/assets/image/cssgenerator.gif";

type ProjectCategory =
    | "All"
    | "Web Application"
    | "System"
    | "Business Website"
    | "Utility";

type Project = {
    id: number;
    title: string;
    category: Exclude<ProjectCategory, "All">;
    status: "Completed" | "In Progress";
    description: string;
    details: string;
    technologies: string[];
    features: string[];
    image: StaticImageData;
    live?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "ArcGuide Tourism Hub",
        category: "Web Application",
        status: "In Progress",
        description:
            "A tourism-focused web platform designed to help users discover destinations, attractions, and travel-related information.",
        details:
            "ArcGuide Tourism Hub is a tourism web application focused on presenting destinations and travel information through a clean and user-friendly interface. The project is currently under development, with additional features and improvements being implemented.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Bootstrap",
            "JQuery"
        ],
        features: [
            "Tourism destination discovery",
            "Travel information",
            "Responsive interface",
            "Modern user interface",
        ],
        image: arcguideImage,
    },
    {
        id: 2,
        title: "Human Resources Ticketing System",
        category: "System",
        status: "Completed",
        description:
            "An internal ticketing system developed to help the Human Resources department manage and track employee concerns and technical requests.",
        details:
            "The Human Resources Ticketing System was developed during my IT internship at Metro North Medical Center Hospital. The system was designed to organize HR-related requests, improve request tracking, and provide a centralized way of managing HR concerns and requests.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Bootstrap",
            "JQuery",
            "AJAX"
        ],
        features: [
            "Ticket creation and management",
            "Request tracking",
            "Database management",
            "Administrative interface",
            "Technical documentation",
        ],
        image: hrtsImage,
    },
    {
        id: 3,
        title: "CLiMS",
        category: "System",
        status: "Completed",
        description:
            "A Cooperative Loan Management System designed to help manage member information, loan records, and related cooperative operations.",
        details:
            "CLiMS is a web-based Cooperative Loan Management System developed as an academic project. The system focuses on organizing member information and simplifying the management of loan-related records through a centralized database-driven application.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Bootstrap",
            "JQuery",
            "AJAX",
            "Chart.js"

        ],
        features: [
            "Member management",
            "Loan record management",
            "Database-driven system",
            "Administrative functions",
            "Responsive interface",
        ],
        image: climsImage,
    },
    {
        id: 4,
        title: "RDS Autoworkz",
        category: "Business Website",
        status: "Completed",
        description:
            "A modern automotive service website created for RDS Autoworkz, showcasing automotive services and business information.",
        details:
            "RDS Autoworkz is a business website designed to present automotive services such as car repainting, detailing, engine detailing, dent removal, and interior detailing. The website focuses on a modern visual presentation and responsive browsing experience.",
        technologies: [
            "Vue",
            "JavaScript",
            "Tailwind CSS",
            "Vite",
        ],
        features: [
            "Automotive service showcase",
            "Responsive design",
            "Service information",
            "Modern visual interface",
            "Business-focused presentation",
        ],
        image: rdsAutoworkzImage,
        live: "https://rds-autoworkz.vercel.app/",
    },
    {
        id: 5,
        title: "CSS Generator",
        category: "Utility",
        status: "Completed",
        description:
            "A browser-based CSS utility project designed to generate and experiment with CSS styling through an interactive interface.",
        details:
            "CSS Generator is a web utility project focused on making CSS experimentation easier through an interactive interface. It provides a practical environment for generating and previewing CSS styles while learning and working with frontend development.",
        technologies: [
            "Vue",
            "JavaScript",
            "Tailwind CSS",
            "Vite",
        ],
        features: [
            "Interactive CSS generation",
            "Live style preview",
            "Frontend experimentation",
            "Responsive interface",
        ],
        image: cssGeneratorImage,
        live: "https://csscraft.vercel.app/",
    },
];

const categories: ProjectCategory[] = [
    "All",
    "Web Application",
    "System",
    "Business Website",
    "Utility",
];

export default function Projects() {
    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const [selectedCategory, setSelectedCategory] =
        useState<ProjectCategory>("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) =>
                      project.category === selectedCategory
              );

    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    /*
     * Modal keyboard + body scroll handling
     */
    useEffect(() => {
        if (!selectedProject) return;

        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedProject]);

    return (
        <>
            <section
                id="projects"
                className="scroll-mt-20 space-y-6"
            >
                {/* Section Header */}
                <div
                    data-aos="fade-up"
                    className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
                >
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-6 bg-cyan-500" />

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
                                Projects
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                            Selected Work
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                            A selection of systems, applications,
                            websites, and utilities I have built
                            throughout my development journey.
                        </p>
                    </div>

                    {/* Project Count */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="flex w-fit items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/60"
                    >
                        <FolderKanban
                            size={15}
                            className="text-cyan-500"
                        />

                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            {projects.length} Projects
                        </span>
                    </div>
                </div>

                {/* Category Filter */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="overflow-x-auto pb-1"
                >
                    <div className="flex min-w-max items-center gap-1 rounded-2xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900/60">
                        {categories.map((category) => {
                            const isActive =
                                selectedCategory === category;

                            const categoryLabel =
                                category === "Web Application"
                                    ? "Web Applications"
                                    : category ===
                                      "Business Website"
                                    ? "Business Websites"
                                    : category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() =>
                                        setSelectedCategory(
                                            category
                                        )
                                    }
                                    className={`rounded-xl px-3 py-2 text-[11px] font-semibold transition-all duration-300 sm:px-4 ${
                                        isActive
                                            ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                                            : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                                    }`}
                                >
                                    {categoryLabel}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-cyan-500/30"
                        >
                            {/* Hover Glow */}
                            <div className="pointer-events-none absolute left-0 top-0 z-10 h-32 w-32 -translate-x-10 -translate-y-10 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />

                            {/* Left Accent */}
                            <div className="absolute bottom-0 left-0 top-0 z-20 w-0.5 origin-bottom scale-y-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-y-100" />

                            {/* Project Image */}
                            <div className="relative h-44 overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    unoptimized
                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

                                {/* Project Number */}
                                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-[10px] font-bold text-white backdrop-blur-md">
                                    {String(index + 1).padStart(
                                        2,
                                        "0"
                                    )}
                                </div>

                                {/* Status */}
                                <span
                                    className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-md ${
                                        project.status ===
                                        "Completed"
                                            ? "border-emerald-400/30 bg-emerald-500/20 text-emerald-100"
                                            : "border-amber-400/30 bg-amber-500/20 text-amber-100"
                                    }`}
                                >
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full ${
                                            project.status ===
                                            "Completed"
                                                ? "bg-emerald-400"
                                                : "bg-amber-400"
                                        }`}
                                    />

                                    {project.status}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-5">
                                {/* Project Info */}
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-500">
                                        {project.category}
                                    </p>

                                    <h3 className="mt-1 text-lg font-semibold text-zinc-950 transition-colors duration-300 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-1.5">
                                    {project.technologies
                                        .slice(0, 4)
                                        .map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-medium text-zinc-500 transition-all duration-300 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                </div>

                                {/* Bottom */}
                                <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
                                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                                        <Code2 size={14} />

                                        <span>
                                            {
                                                project
                                                    .technologies
                                                    .length
                                            }{" "}
                                            Technologies
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            openModal(project)
                                        }
                                        className="group/button inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 transition-all duration-300 hover:text-cyan-500 dark:text-zinc-400 dark:hover:text-cyan-400"
                                    >
                                        View project

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

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-zinc-200 bg-white px-6 py-12 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
                        <FolderKanban
                            size={24}
                            className="mx-auto text-zinc-400"
                        />

                        <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                            No projects in this category.
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedCategory("All")
                            }
                            className="mt-3 text-xs font-semibold text-cyan-500 hover:text-cyan-400"
                        >
                            View all projects
                        </button>
                    </div>
                )}
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-5"
                    onMouseDown={(event) => {
                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            closeModal();
                        }
                    }}
                >
                    <div className="relative flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
                        {/* Top Accent */}
                        <div className="absolute left-0 right-0 top-0 z-20 h-0.5 bg-cyan-500" />

                        {/* Modal Header */}
                        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-200 p-5 dark:border-zinc-800 sm:p-6">
                            <div className="min-w-0">
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                        {
                                            selectedProject.category
                                        }
                                    </span>

                                    <span
                                        className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${
                                            selectedProject.status ===
                                            "Completed"
                                                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                : "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                                        }`}
                                    >
                                        {
                                            selectedProject.status
                                        }
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">
                                    {
                                        selectedProject.title
                                    }
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    {
                                        selectedProject.description
                                    }
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close project details"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-200 text-zinc-500 transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-red-500/20 dark:hover:bg-red-500/10 dark:hover:text-red-400"
                            >
                                <X size={17} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
                            {/* Project Preview */}
                            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                                {/* Browser Bar */}
                                <div className="relative z-10 flex h-10 items-center gap-1.5 border-b border-zinc-200 bg-white/90 px-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />

                                    <div className="ml-3 flex h-5 flex-1 items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 text-[9px] text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-600">
                                        {selectedProject.title}
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative min-h-60 bg-zinc-100 dark:bg-zinc-900 sm:min-h-72">
                                    <Image
                                        src={
                                            selectedProject.image
                                        }
                                        alt={`${selectedProject.title} preview`}
                                        fill
                                        unoptimized
                                        className="object-contain object-center"
                                    />

                                    {/* Bottom Gradient */}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="mt-7">
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                                        <FolderKanban
                                            size={14}
                                            className="text-cyan-500"
                                        />
                                    </div>

                                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                        About the Project
                                    </h4>
                                </div>

                                <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                                    {
                                        selectedProject.details
                                    }
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mt-7">
                                <div className="mb-3 flex items-center gap-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
                                        <CheckCircle2
                                            size={14}
                                            className="text-cyan-500"
                                        />
                                    </div>

                                    <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                        Key Features
                                    </h4>
                                </div>

                                <div className="grid gap-2 sm:grid-cols-2">
                                    {selectedProject.features.map(
                                        (feature) => (
                                            <div
                                                key={feature}
                                                className="flex gap-2.5 rounded-xl border border-zinc-100 bg-zinc-50/70 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/40"
                                            >
                                                <CheckCircle2
                                                    size={14}
                                                    className="mt-0.5 shrink-0 text-cyan-500"
                                                />

                                                <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                                                    {feature}
                                                </p>
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
                                        Technologies
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map(
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
                        </div>

                        {/* Modal Footer */}
                        <div className="flex shrink-0 flex-col gap-3 border-t border-zinc-200 bg-zinc-50/80 px-5 py-3 dark:border-zinc-800 dark:bg-zinc-900/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                            <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                Project Details
                            </span>

                            <div className="flex flex-wrap items-center gap-2">
                                {/* Live Demo */}
                                {selectedProject.live && (
                                    <a
                                        href={
                                            selectedProject.live
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-600 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/15 dark:text-cyan-400"
                                    >
                                        <Globe size={13} />
                                        Live Demo
                                    </a>
                                )}

                                {/* Close */}
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
                </div>
            )}
        </>
    );
}