"use client";

import { useEffect, useRef } from "react";

import bootstrapIcon from "@/assets/icons/bootstrap.svg";
import cssIcon from "@/assets/icons/css.svg";
import gitIcon from "@/assets/icons/git.svg";
import githubIcon from "@/assets/icons/github.svg";
import html5Icon from "@/assets/icons/html5.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";
import nextjsIcon from "@/assets/icons/nextdotjs.svg";
import phpIcon from "@/assets/icons/php.svg";
import reactIcon from "@/assets/icons/reactquery.svg";
import tailwindIcon from "@/assets/icons/tailwindcss.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import vscodeIcon from "@/assets/icons/vscode.svg";
import vueIcon from "@/assets/icons/vuedotjs.svg";
import xamppIcon from "@/assets/icons/xampp.svg";

const technologies = [
    {
        name: "HTML5",
        icon: html5Icon,
        color: "#E34F26",
    },
    {
        name: "CSS3",
        icon: cssIcon,
        color: "#1572B6",
    },
    {
        name: "JavaScript",
        icon: javascriptIcon,
        color: "#F7DF1E",
    },
    {
        name: "TypeScript",
        icon: typescriptIcon,
        color: "#3178C6",
    },
    {
        name: "React",
        icon: reactIcon,
        color: "#61DAFB",
    },
    {
        name: "Next.js",
        icon: nextjsIcon,
        color: "#000000",
        darkColor: "#FFFFFF",
    },
    {
        name: "Vue.js",
        icon: vueIcon,
        color: "#4FC08D",
    },
    {
        name: "PHP",
        icon: phpIcon,
        color: "#777BB4",
    },
    {
        name: "MySQL",
        icon: mysqlIcon,
        color: "#4479A1",
    },
    {
        name: "Tailwind CSS",
        icon: tailwindIcon,
        color: "#06B6D4",
    },
    {
        name: "Bootstrap",
        icon: bootstrapIcon,
        color: "#7952B3",
    },
    {
        name: "Git",
        icon: gitIcon,
        color: "#F05032",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        color: "#000000",
        darkColor: "#FFFFFF",
    },
    {
        name: "VS Code",
        icon: vscodeIcon,
        color: "#007ACC",
    },
    {
        name: "XAMPP",
        icon: xamppIcon,
        color: "#FB7A24",
    },
];

type Technology = (typeof technologies)[number];

export default function TechRibbon() {
    const trackRef = useRef<HTMLDivElement>(null);
    const groupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        const group = groupRef.current;

        if (!track || !group) return;

        let position = 0;
        let animationFrame = 0;
        let lastTime = performance.now();

        const speed = 45;

        const animate = (currentTime: number) => {
            const delta = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            position -= speed * delta;

            const groupWidth = group.offsetWidth;

            if (Math.abs(position) >= groupWidth) {
                position = 0;
            }

            track.style.transform = `translate3d(${position}px, 0, 0)`;

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    const renderTechnology = (
        technology: Technology,
        duplicate = false
    ) => {
        const iconSource =
            typeof technology.icon === "string"
                ? technology.icon
                : technology.icon.src;

        const darkColor =
            "darkColor" in technology
                ? technology.darkColor
                : technology.color;

        return (
            <div
                key={duplicate ? `duplicate-${technology.name}` : technology.name}
                className="group flex w-20 shrink-0 flex-col items-center justify-center gap-2"
                style={
                    {
                        "--tech-color": technology.color,
                        "--tech-dark-color": darkColor,
                    } as React.CSSProperties
                }
            >
                {/* Logo */}
                <div className="flex h-8 w-8 items-center justify-center">
                    <span
                        aria-hidden="true"
                        className="block h-[30px] w-[30px] bg-zinc-500/50 opacity-60 transition-all duration-300 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:bg-[var(--tech-color)] dark:bg-zinc-400/50 dark:group-hover:bg-[var(--tech-dark-color)]"
                        style={{
                            maskImage: `url("${iconSource}")`,
                            WebkitMaskImage: `url("${iconSource}")`,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                        }}
                    />
                </div>

                {/* Name */}
                <span className="whitespace-nowrap text-[10px] font-medium text-zinc-500 transition-all duration-300 group-hover:text-[var(--tech-color)] dark:text-zinc-500 dark:group-hover:text-[var(--tech-dark-color)]">
                    {technology.name}
                </span>
            </div>
        );
    };

    return (
        <section
            aria-label="Technologies and tools"
            className="relative overflow-hidden border-y border-zinc-200/80 py-5 dark:border-zinc-800/80"
        >
            {/* Left Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />

            {/* Right Fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />

            {/* Moving Track */}
            <div
                ref={trackRef}
                className="flex w-max will-change-transform"
            >
                {/* First Set */}
                <div
                    ref={groupRef}
                    className="flex shrink-0 items-center gap-8 pr-8"
                >
                    {technologies.map((technology) =>
                        renderTechnology(technology)
                    )}
                </div>

                {/* Second Set */}
                <div className="flex shrink-0 items-center gap-8 pr-8">
                    {technologies.map((technology) =>
                        renderTechnology(technology, true)
                    )}
                </div>
            </div>
        </section>
    );
}