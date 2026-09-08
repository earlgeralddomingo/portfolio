"use client";

import {
    Braces,
    Code2,
    Database,
    Globe,
    Headphones,
    Laptop,
    Network,
    Server,
    Settings,
    Wrench,
} from "lucide-react";

import adobePhotoshop from "@/assets/icons/adobephotoshop.svg";
import anydesk from "@/assets/icons/anydesk.svg";
import bootstrap from "@/assets/icons/bootstrap.svg";
import canva from "@/assets/icons/canva.svg";
import capcut from "@/assets/icons/capcut.svg";
import chartdotjs from "@/assets/icons/chartdotjs.svg";
import chatgpt from "@/assets/icons/chatgpt.svg";
import css from "@/assets/icons/css.svg";
import figma from "@/assets/icons/figma.svg";
import git from "@/assets/icons/git.svg";
import github from "@/assets/icons/github.svg";
import html5 from "@/assets/icons/html5.svg";
import javascript from "@/assets/icons/javascript.svg";
import mysql from "@/assets/icons/mysql.svg";
import nextdotjs from "@/assets/icons/nextdotjs.svg";
import php from "@/assets/icons/php.svg";
import reactquery from "@/assets/icons/reactquery.svg";
import tailwindcss from "@/assets/icons/tailwindcss.svg";
import teamviewer from "@/assets/icons/teamviewer.svg";
import typescript from "@/assets/icons/typescript.svg";
import vite from "@/assets/icons/vite.svg";
import vscode from "@/assets/icons/vscode.svg";
import vuedotjs from "@/assets/icons/vuedotjs.svg";
import xampp from "@/assets/icons/xampp.svg";

type TechItem = {
    name: string;
    icon?: string;
    brandColor?: string;
};

type TechCategory = {
    title: string;
    description: string;
    icon: typeof Code2;
    technologies: TechItem[];
};

const techCategories: TechCategory[] = [
    {
        title: "IT Support",
        description:
            "Technical support, troubleshooting, remote assistance, and system maintenance.",
        icon: Headphones,
        technologies: [
            {
                name: "Windows",
                brandColor: "#0078D4",
            },
            {
                name: "Hardware Troubleshooting",
                brandColor: "#22D3EE",
            },
            {
                name: "Software Troubleshooting",
                brandColor: "#8B5CF6",
            },
            {
                name: "Printer Support",
                brandColor: "#64748B",
            },
            {
                name: "AnyDesk",
                icon: anydesk.src,
                brandColor: "#EF443B",
            },
            {
                name: "TeamViewer",
                icon: teamviewer.src,
                brandColor: "#0E8EE9",
            },
            {
                name: "Technical Documentation",
                brandColor: "#14B8A6",
            },
        ],
    },

    {
        title: "Networking",
        description:
            "Networking technologies used for connectivity, diagnostics, and device configuration.",
        icon: Network,
        technologies: [
            {
                name: "LAN",
                brandColor: "#06B6D4",
            },
            {
                name: "TCP/IP",
                brandColor: "#3B82F6",
            },
            {
                name: "Wi-Fi",
                brandColor: "#0EA5E9",
            },
            {
                name: "Network Devices",
                brandColor: "#6366F1",
            },
            {
                name: "Router Configuration",
                brandColor: "#8B5CF6",
            },
        ],
    },

    {
        title: "Frontend Development",
        description:
            "Modern frontend technologies used to build responsive and interactive web interfaces.",
        icon: Globe,
        technologies: [
            {
                name: "HTML5",
                icon: html5.src,
                brandColor: "#E34F26",
            },
            {
                name: "CSS",
                icon: css.src,
                brandColor: "#1572B6",
            },
            {
                name: "JavaScript",
                icon: javascript.src,
                brandColor: "#F7DF1E",
            },
            {
                name: "Vue",
                icon: vuedotjs.src,
                brandColor: "#4FC08D",
            },
            {
                name: "React",
                icon: reactquery.src,
                brandColor: "#61DAFB",
            },
            {
                name: "Next.js",
                icon: nextdotjs.src,
                brandColor: "#000000",
            },
            {
                name: "Tailwind CSS",
                icon: tailwindcss.src,
                brandColor: "#06B6D4",
            },
            {
                name: "Bootstrap",
                icon: bootstrap.src,
                brandColor: "#7952B3",
            },
            {
                name: "TypeScript",
                icon: typescript.src,
                brandColor: "#3178C6",
            },
            {
                name: "Chart.js",
                icon: chartdotjs.src,
                brandColor: "#FF6384",
            },
        ],
    },

    {
        title: "Backend & Database",
        description:
            "Backend technologies and database tools used for business systems and web applications.",
        icon: Database,
        technologies: [
            {
                name: "PHP",
                icon: php.src,
                brandColor: "#777BB4",
            },
            {
                name: "MySQL",
                icon: mysql.src,
                brandColor: "#4479A1",
            },
            {
                name: "SQL",
                brandColor: "#336791",
            },
            {
                name: "Database Design",
                brandColor: "#10B981",
            },
            {
                name: "phpMyAdmin",
                brandColor: "#6C78AF",
            },
        ],
    },

    {
        title: "Development Tools",
        description:
            "Tools used for coding, version control, local development, and project workflows.",
        icon: Wrench,
        technologies: [
            {
                name: "VS Code",
                icon: vscode.src,
                brandColor: "#007ACC",
            },
            {
                name: "Git",
                icon: git.src,
                brandColor: "#F05032",
            },
            {
                name: "GitHub",
                icon: github.src,
                brandColor: "#181717",
            },
            {
                name: "XAMPP",
                icon: xampp.src,
                brandColor: "#FB7A24",
            },
            {
                name: "Vite",
                icon: vite.src,
                brandColor: "#646CFF",
            },
            {
                name: "Composer",
                brandColor: "#885630",
            },
        ],
    },

    {
        title: "Creative & Productivity",
        description:
            "Creative, design, AI, and productivity tools used alongside development and technical work.",
        icon: Laptop,
        technologies: [
            {
                name: "Adobe Photoshop",
                icon: adobePhotoshop.src,
                brandColor: "#31A8FF",
            },
            {
                name: "CapCut",
                icon: capcut.src,
                brandColor: "#000000",
            },
            {
                name: "ChatGPT",
                icon: chatgpt.src,
                brandColor: "#000000",
            },
            {
                name: "Canva",
                icon: canva.src,
                brandColor: "#00C4CC",
            },
            {
                name: "Figma",
                icon: figma.src,
                brandColor: "#F24E1E",
            },
        ],
    },
];

const coreFocus = [
    {
        label: "IT Support",
        icon: Headphones,
    },
    {
        label: "Web Development",
        icon: Braces,
    },
    {
        label: "Networking",
        icon: Network,
    },
    {
        label: "Systems",
        icon: Server,
    },
];

function TechnologyIcon({ technology }: { technology: TechItem }) {
    const isThemeAwareIcon =
        technology.name === "Next.js" ||
        technology.name === "ChatGPT";

    /*
     * Technologies with an actual SVG logo.
     *
     * The SVG is used as a CSS mask so we can apply the exact
     * brand color on hover without changing the shape of the logo.
     */
    if (technology.icon && !isThemeAwareIcon) {
        return (
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                <span
                    aria-hidden="true"
                    className="h-4 w-4 bg-zinc-400 opacity-60 transition-all duration-300 group-hover/tech:bg-[var(--brand-color)] group-hover/tech:opacity-100 dark:bg-zinc-500 dark:group-hover/tech:bg-[var(--brand-color)]"
                    style={
                        {
                            "--brand-color":
                                technology.brandColor ?? "#06B6D4",
                            "--icon-url": `url(${technology.icon})`,
                            maskImage: "var(--icon-url)",
                            WebkitMaskImage: "var(--icon-url)",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                        } as React.CSSProperties
                    }
                />
            </div>
        );
    }

    /*
     * Next.js and ChatGPT:
     *
     * Light mode = black
     * Dark mode = white
     *
     * These two intentionally remain monochrome.
     */
    if (technology.icon && isThemeAwareIcon) {
        return (
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                <span
                    aria-hidden="true"
                    className="h-4 w-4 bg-black dark:bg-white"
                    style={{
                        maskImage: `url(${technology.icon})`,
                        WebkitMaskImage: `url(${technology.icon})`,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                    }}
                />
            </div>
        );
    }

    /*
     * Technologies without an actual logo.
     *
     * These use a generic Code2 icon and change to their
     * assigned color when the technology item is hovered.
     */
    return (
        <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-zinc-400 transition-colors duration-300 group-hover/tech:text-[var(--brand-color)] dark:bg-zinc-800 dark:text-zinc-500 dark:group-hover/tech:text-[var(--brand-color)]"
            style={
                {
                    "--brand-color":
                        technology.brandColor ?? "#06B6D4",
                } as React.CSSProperties
            }
        >
            <Code2 size={14} />
        </div>
    );
}

export default function TechStack() {
    const totalTechnologies = techCategories.reduce(
        (total, category) => total + category.technologies.length,
        0
    );

    return (
        <section id="techstack" className="scroll-mt-20 space-y-6">
            {/* Section Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <div className="mb-2 flex items-center gap-2">
                        <span className="h-px w-6 bg-cyan-500" />

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
                            Tech Stack
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                        Technologies & Tools
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                        The technologies, tools, and technical areas I use
                        across IT support, networking, web development,
                        databases, and creative workflows.
                    </p>
                </div>

                {/* Technology Count */}
                <div className="flex w-fit items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/60">
                    <Code2 size={15} className="text-cyan-500" />

                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {totalTechnologies} Technologies
                    </span>
                </div>
            </div>

            {/* Technology Categories */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {techCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article
                            key={category.title}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-cyan-500/30"
                        >
                            {/* Hover Glow */}
                            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />

                            {/* Left Accent */}
                            <div className="absolute bottom-0 left-0 top-0 w-0.5 origin-bottom scale-y-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-y-100" />

                            {/* Category Header */}
                            <div className="relative z-10 flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 transition-all duration-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/15">
                                    <Icon
                                        size={18}
                                        className="text-cyan-500"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                        {category.title}
                                    </h3>

                                    <p className="mt-1 text-[11px] leading-5 text-zinc-500 dark:text-zinc-400">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="relative z-10 mt-5 grid grid-cols-2 gap-2">
                                {category.technologies.map((technology) => (
                                    <div
                                        key={technology.name}
                                        className="group/tech flex min-w-0 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-2.5 py-2 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:bg-zinc-900"
                                        style={
                                            {
                                                "--brand-color":
                                                    technology.brandColor ??
                                                    "#06B6D4",
                                            } as React.CSSProperties
                                        }
                                    >
                                        <TechnologyIcon
                                            technology={technology}
                                        />

                                        {/* Technology Name */}
                                        <span className="min-w-0 truncate text-[10px] font-medium text-zinc-600 dark:text-zinc-400">
                                            {technology.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Core Focus */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Settings
                                size={16}
                                className="text-cyan-500"
                            />

                            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                                Core Focus
                            </h3>
                        </div>

                        <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                            Combining practical IT support, troubleshooting,
                            networking, and web development to build and
                            maintain reliable technical solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {coreFocus.map((focus) => {
                            const FocusIcon = focus.icon;

                            return (
                                <div
                                    key={focus.label}
                                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-[10px] font-semibold text-zinc-500 transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/5 hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400 dark:hover:text-cyan-400"
                                >
                                    <FocusIcon size={13} />

                                    {focus.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}