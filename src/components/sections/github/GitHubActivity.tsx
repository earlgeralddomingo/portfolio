"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    GitFork,
    Users,
    ExternalLink,
    GitCommitHorizontal,
    RefreshCw,
} from "lucide-react";

import githubIcon from "@/assets/icons/github.svg";

type ContributionDay = {
    date: string;
    contributionCount: number;
    color: string;
};

type GitHubProfile = {
    login: string;
    name: string | null;
    avatarUrl: string;
    url: string;
    repositories: {
        totalCount: number;
    };
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
    contributionsCollection: {
        contributionCalendar: {
            totalContributions: number;
            weeks: {
                contributionDays: ContributionDay[];
            }[];
        };
    };
};

function isValidGitHubProfile(
    data: unknown
): data is GitHubProfile {
    if (!data || typeof data !== "object") {
        return false;
    }

    const profile = data as Partial<GitHubProfile>;

    return (
        typeof profile.login === "string" &&
        typeof profile.url === "string" &&
        typeof profile.avatarUrl === "string" &&
        typeof profile.repositories?.totalCount === "number" &&
        typeof profile.followers?.totalCount === "number" &&
        typeof profile.contributionsCollection?.contributionCalendar
            ?.totalContributions === "number" &&
        Array.isArray(
            profile.contributionsCollection?.contributionCalendar?.weeks
        )
    );
}

export default function GitHubActivity() {
    const [profile, setProfile] =
        useState<GitHubProfile | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [retrying, setRetrying] = useState(false);

    async function fetchGitHubData(
        isRetry = false
    ) {
        try {
            if (isRetry) {
                setRetrying(true);
            } else {
                setLoading(true);
            }

            setError(false);

            const response = await fetch("/api/github", {
                method: "GET",
                cache: "no-store",
            });

            if (!response.ok) {
                throw new Error(
                    `GitHub API returned ${response.status}`
                );
            }

            const data: unknown = await response.json();

            if (!isValidGitHubProfile(data)) {
                throw new Error(
                    "Invalid GitHub API response"
                );
            }

            setProfile(data);
        } catch (error) {
            console.error(
                "GitHub activity error:",
                error
            );

            setError(true);
        } finally {
            setLoading(false);
            setRetrying(false);
        }
    }

    useEffect(() => {
        let cancelled = false;

        async function initialLoad() {
            try {
                const response = await fetch(
                    "/api/github",
                    {
                        method: "GET",
                        cache: "no-store",
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `GitHub API returned ${response.status}`
                    );
                }

                const data: unknown =
                    await response.json();

                if (!isValidGitHubProfile(data)) {
                    throw new Error(
                        "Invalid GitHub API response"
                    );
                }

                if (cancelled) {
                    return;
                }

                setProfile(data);
                setError(false);
                setLoading(false);
            } catch (error) {
                console.error(
                    "GitHub activity error:",
                    error
                );

                if (cancelled) {
                    return;
                }

                setError(true);
                setLoading(false);
            }
        }

        initialLoad();

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) {
        return (
            <section
                id="github"
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
                <div className="flex items-center gap-3">
                    <span
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 bg-zinc-700 dark:bg-zinc-400"
                        style={{
                            maskImage: `url(${githubIcon.src})`,
                            WebkitMaskImage: `url(${githubIcon.src})`,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                        }}
                    />

                    <div>
                        <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                            GitHub Activity
                        </h2>

                        <p className="text-sm text-zinc-500 dark:text-zinc-500">
                            Loading GitHub activity...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !profile) {
        return (
            <section
                id="github"
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
                            <span
                                aria-hidden="true"
                                className="h-[22px] w-[22px] shrink-0 bg-zinc-700 dark:bg-zinc-400"
                                style={{
                                    maskImage: `url(${githubIcon.src})`,
                                    WebkitMaskImage: `url(${githubIcon.src})`,
                                    maskRepeat: "no-repeat",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskPosition: "center",
                                    WebkitMaskPosition: "center",
                                    maskSize: "contain",
                                    WebkitMaskSize: "contain",
                                }}
                            />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                                GitHub Activity
                            </h2>

                            <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                GitHub activity is temporarily unavailable.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            fetchGitHubData(true)
                        }
                        disabled={retrying}
                        className="inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-600 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400"
                    >
                        <RefreshCw
                            className={`h-3.5 w-3.5 ${
                                retrying
                                    ? "animate-spin"
                                    : ""
                            }`}
                        />

                        {retrying
                            ? "Retrying..."
                            : "Try again"}
                    </button>
                </div>
            </section>
        );
    }

    const calendar =
        profile.contributionsCollection
            .contributionCalendar;

    return (
        <section
            id="github"
            className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
            {/* Header */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950">
                        <span
                            aria-hidden="true"
                            className="h-[22px] w-[22px] shrink-0 bg-zinc-700 transition-all duration-300 hover:bg-zinc-950 dark:bg-zinc-400 dark:hover:bg-zinc-100"
                            style={{
                                maskImage: `url(${githubIcon.src})`,
                                WebkitMaskImage: `url(${githubIcon.src})`,
                                maskRepeat: "no-repeat",
                                WebkitMaskRepeat: "no-repeat",
                                maskPosition: "center",
                                WebkitMaskPosition: "center",
                                maskSize: "contain",
                                WebkitMaskSize: "contain",
                            }}
                        />
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                            GitHub Activity
                        </h2>

                        <p className="text-sm text-zinc-500 dark:text-zinc-500">
                            My development activity on GitHub
                        </p>
                    </div>
                </div>

                <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-600 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400"
                >
                    View GitHub

                    <ExternalLink className="h-3.5 w-3.5" />
                </a>
            </div>

            {/* Statistics */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950/70">
                    <div className="mb-2 flex items-center gap-2 text-zinc-500">
                        <GitCommitHorizontal className="h-4 w-4" />

                        <span className="text-xs">
                            Contributions
                        </span>
                    </div>

                    <p className="text-2xl font-bold text-zinc-950 dark:text-white">
                        {calendar.totalContributions}
                    </p>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950/70">
                    <div className="mb-2 flex items-center gap-2 text-zinc-500">
                        <GitFork className="h-4 w-4" />

                        <span className="text-xs">
                            Repositories
                        </span>
                    </div>

                    <p className="text-2xl font-bold text-zinc-950 dark:text-white">
                        {profile.repositories.totalCount}
                    </p>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950/70">
                    <div className="mb-2 flex items-center gap-2 text-zinc-500">
                        <Users className="h-4 w-4" />

                        <span className="text-xs">
                            Followers
                        </span>
                    </div>

                    <p className="text-2xl font-bold text-zinc-950 dark:text-white">
                        {profile.followers.totalCount}
                    </p>
                </div>
            </div>

            {/* Contribution Graph */}
            <div className="mt-6 overflow-x-auto">
                <div className="min-w-[760px]">
                    <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            Contribution activity
                        </p>

                        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-500">
                            <span className="mr-1">
                                Less
                            </span>

                            <span className="h-3 w-3 rounded-sm bg-zinc-200 dark:bg-zinc-800" />

                            <span className="h-3 w-3 rounded-sm bg-cyan-100 dark:bg-cyan-950" />

                            <span className="h-3 w-3 rounded-sm bg-cyan-300 dark:bg-cyan-800" />

                            <span className="h-3 w-3 rounded-sm bg-cyan-500 dark:bg-cyan-600" />

                            <span className="h-3 w-3 rounded-sm bg-cyan-600 dark:bg-cyan-400" />

                            <span className="ml-1">
                                More
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-1">
                        {calendar.weeks.map(
                            (week, columnIndex) => (
                                <div
                                    key={columnIndex}
                                    className="flex flex-col gap-1"
                                >
                                    {Array.from({
                                        length: 7,
                                    }).map(
                                        (
                                            _,
                                            rowIndex
                                        ) => {
                                            const day =
                                                week
                                                    .contributionDays[
                                                    rowIndex
                                                ];

                                            if (!day) {
                                                return (
                                                    <div
                                                        key={
                                                            rowIndex
                                                        }
                                                        className="h-3 w-3"
                                                    />
                                                );
                                            }

                                            let intensity =
                                                "bg-zinc-200 dark:bg-zinc-800";

                                            if (
                                                day.contributionCount >=
                                                1
                                            ) {
                                                intensity =
                                                    "bg-cyan-100 dark:bg-cyan-950";
                                            }

                                            if (
                                                day.contributionCount >=
                                                3
                                            ) {
                                                intensity =
                                                    "bg-cyan-300 dark:bg-cyan-800";
                                            }

                                            if (
                                                day.contributionCount >=
                                                6
                                            ) {
                                                intensity =
                                                    "bg-cyan-500 dark:bg-cyan-600";
                                            }

                                            if (
                                                day.contributionCount >=
                                                10
                                            ) {
                                                intensity =
                                                    "bg-cyan-600 dark:bg-cyan-400";
                                            }

                                            return (
                                                <div
                                                    key={
                                                        day.date
                                                    }
                                                    title={`${day.contributionCount} contributions on ${day.date}`}
                                                    className={`h-3 w-3 rounded-sm transition-all duration-200 hover:scale-125 hover:opacity-80 ${intensity}`}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}