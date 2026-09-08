"use client";

import { useEffect, useState } from "react";

const roles = [
    "IT Support Specialist",
    "Web Developer",
];

export default function AnimatedRole() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timer = setTimeout(
            () => {
                if (!isDeleting) {
                    const nextText = currentRole.slice(
                        0,
                        displayText.length + 1
                    );

                    setDisplayText(nextText);

                    if (nextText === currentRole) {
                        setTimeout(() => {
                            setIsDeleting(true);
                        }, 1500);
                    }
                } else {
                    const nextText = currentRole.slice(
                        0,
                        displayText.length - 1
                    );

                    setDisplayText(nextText);

                    if (nextText === "") {
                        setIsDeleting(false);
                        setRoleIndex(
                            (current) => (current + 1) % roles.length
                        );
                    }
                }
            },
            isDeleting ? 45 : 80
        );

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <span className="inline-flex min-h-[1rem] items-center truncate text-xs text-zinc-500">
            {displayText}

            <span
                className="ml-0.5 inline-block h-3 w-px shrink-0 animate-pulse bg-cyan-500 dark:bg-cyan-400"
                aria-hidden="true"
            />
        </span>
    );
}

