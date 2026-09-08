import Link from "next/link";

export default function Footer() {
    return (
       <footer className="border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 pb-6 sm:px-6 lg:px-8">
                {/* Top Footer */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    {/* Copyright */}
                    <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

                        <p className="text-[10px] text-zinc-400">
                            © {new Date().getFullYear()} Earl Gerald Domingo
                        </p>
                    </div>

                    {/* Quick Navigation */}
                    <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <Link
                            href="#dashboard"
                            className="text-[10px] text-zinc-400 transition-colors duration-200 hover:text-cyan-500"
                        >
                            Home
                        </Link>

                        <Link
                            href="#about"
                            className="text-[10px] text-zinc-400 transition-colors duration-200 hover:text-cyan-500"
                        >
                            About
                        </Link>

                        <Link
                            href="#experience"
                            className="text-[10px] text-zinc-400 transition-colors duration-200 hover:text-cyan-500"
                        >
                            Experience
                        </Link>

                        <Link
                            href="#projects"
                            className="text-[10px] text-zinc-400 transition-colors duration-200 hover:text-cyan-500"
                        >
                            Projects
                        </Link>

                        <Link
                            href="#techstack"
                            className="text-[10px] text-zinc-400 transition-colors duration-200 hover:text-cyan-500"
                        >
                            Tech Stack
                        </Link>

                        <Link
                            href="#contact"
                            className="text-[10px] text-zinc-400 transition-colors duration-200 hover:text-cyan-500"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Built With */}
                    <div className="flex items-center gap-1.5">
                        <span className="text-[9px] text-zinc-400">
                            Built with
                        </span>

                        <span className="font-mono text-[9px] font-medium text-zinc-500 dark:text-zinc-400">
                            Next.js
                        </span>

                        <span className="text-zinc-300 dark:text-zinc-700">
                            •
                        </span>

                        <span className="font-mono text-[9px] font-medium text-zinc-500 dark:text-zinc-400">
                            Tailwind CSS
                        </span>
                    </div>
                </div>

                {/* Bottom System Line */}
                <div className="flex flex-col gap-2 border-t border-zinc-100 pt-3 dark:border-zinc-900 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-300 dark:text-zinc-700">
                        EGD.DEV
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-300 dark:text-zinc-700">
                        IT Support • Web Development
                    </span>
                </div>
            </div>
        </footer>
    );
}