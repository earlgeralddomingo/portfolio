"use client";

import { useState } from "react";
import {
Mail,
MapPin,
Phone,
ArrowUpRight,
CheckCircle2,
Copy,
Check,
X,
} from "lucide-react";

import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";

type CopyModalData = {
label: string;
value: string;
};

const contactDetails = [
{
label: "Email",
value: "earlgeralddomingo.basc@gmail.com",
icon: Mail,
copyable: true,
},
{
label: "Phone",
value: "+63 930 125 0504",
icon: Phone,
copyable: true,
},
{
label: "Location",
value: "San Miguel, Bulacan, Philippines",
icon: MapPin,
copyable: false,
},
];

const socialLinks = [
{
name: "GitHub",
href: "https://github.com/earlgeralddomingo",
icon: github.src,
brandColor: "#181717",
},
{
name: "LinkedIn",
href: "https://www.linkedin.com/in/earl-gerald-domingo-479682316/",
icon: linkedin.src,
brandColor: "#0A66C2",
},
];

export default function Contact() {
const [copyModal, setCopyModal] = useState<CopyModalData | null>(null);
const [copied, setCopied] = useState(false);
const openCopyModal = (label: string, value: string) => {
    setCopied(false);

    setCopyModal({
        label,
        value,
    });
};

const closeCopyModal = () => {
    setCopyModal(null);
    setCopied(false);
};

const handleCopy = async () => {
    if (!copyModal) return;

    try {
        await navigator.clipboard.writeText(copyModal.value);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    } catch {
        const textArea = document.createElement("textarea");

        textArea.value = copyModal.value;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        document.body.removeChild(textArea);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
};

return (
    <>
        <section
            id="contact"
            className="scroll-mt-20 space-y-6"
        >
            {/* Section Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <div className="mb-2 flex items-center gap-2">
                        <span className="h-px w-6 bg-cyan-500" />

                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-500">
                            Contact
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                        Let&apos;s Connect
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                        Have a project, job opportunity, or technical
                        concern? Feel free to reach out and let&apos;s talk.
                    </p>
                </div>

                {/* Availability */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>

                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Open to opportunities
                    </span>
                </div>
            </div>

            {/* Main Contact Card */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />

                <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Left Side */}
                    <div>
                        {/* Introduction */}
                        <div className="mb-5 flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-500">
                                <Mail size={20} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                                    Get in touch
                                </p>

                                <h3 className="mt-1 text-lg font-bold text-zinc-900 dark:text-white">
                                    Let&apos;s work together
                                </h3>

                                <p className="mt-2 max-w-lg text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                                    I&apos;m interested in IT support,
                                    technical support, web development,
                                    and other technology-related
                                    opportunities. Send me a message and
                                    I&apos;ll get back to you as soon as
                                    possible.
                                </p>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="grid gap-3 sm:grid-cols-3">
                            {contactDetails.map((item) => {
                                const Icon = item.icon;

                                if (item.copyable) {
                                    return (
                                        <button
                                            key={item.label}
                                            type="button"
                                            onClick={() =>
                                                openCopyModal(
                                                    item.label,
                                                    item.value
                                                )
                                            }
                                            className="group cursor-pointer rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-cyan-500/30 dark:hover:bg-cyan-500/5"
                                        >
                                            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-zinc-400 transition-colors duration-300 group-hover:text-cyan-500 dark:bg-zinc-900 dark:text-zinc-500 dark:group-hover:text-cyan-400">
                                                <Icon size={14} />
                                            </div>

                                            <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400">
                                                {item.label}
                                            </p>

                                            <p className="mt-1 truncate text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                                                {item.value}
                                            </p>

                                            <p className="mt-1 text-[9px] text-zinc-400 transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
                                                Click to copy
                                            </p>
                                        </button>
                                    );
                                }

                                {/* Location Card */}
                                return (
                                    <div
                                        key={item.label}
                                        className="group cursor-default rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-cyan-500/30 dark:hover:bg-cyan-500/5"
                                    >
                                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-zinc-400 transition-colors duration-300 group-hover:text-cyan-500 dark:bg-zinc-900 dark:text-zinc-500 dark:group-hover:text-cyan-400">
                                            <Icon size={14} />
                                        </div>

                                        <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400">
                                            {item.label}
                                        </p>

                                        <p className="mt-1 truncate text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                                            {item.value}
                                        </p>

                                        <p className="mt-1 text-[9px] text-transparent">
                                            Location
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Email Button */}
                        <div className="mt-5">
                            <a
                                href="mailto:earlgeralddomingo.basc@gmail.com"
                                className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-600 dark:border-zinc-800 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400"
                            >
                                <Mail
                                    size={14}
                                    className="text-zinc-400 transition-colors duration-300 group-hover:text-cyan-500 dark:text-zinc-500 dark:group-hover:text-cyan-400"
                                />

                                <span>Send me an email</span>

                                <ArrowUpRight
                                    size={13}
                                    className="text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-500"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Social Side */}
                    <div className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-zinc-50/70 p-5 dark:border-zinc-800 dark:bg-zinc-950/50">
                        <div>
                            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-cyan-500">
                                Social
                            </p>

                            <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-white">
                                Find me online
                            </h3>

                            <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                                Connect with me through my professional and
                                development profiles.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6 space-y-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2.5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-cyan-500/30 dark:hover:bg-cyan-500/5"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                                            <span
                                                aria-hidden="true"
                                                className="h-3.5 w-3.5 bg-zinc-400 opacity-60 transition-colors duration-300 group-hover:bg-[var(--brand-color)] group-hover:opacity-100 dark:bg-zinc-500 dark:group-hover:bg-[var(--brand-color)]"
                                                style={
                                                    {
                                                        "--brand-color":
                                                            social.brandColor,
                                                        "--icon-url": `url(${social.icon})`,
                                                        maskImage:
                                                            "var(--icon-url)",
                                                        WebkitMaskImage:
                                                            "var(--icon-url)",
                                                        maskRepeat:
                                                            "no-repeat",
                                                        WebkitMaskRepeat:
                                                            "no-repeat",
                                                        maskPosition:
                                                            "center",
                                                        WebkitMaskPosition:
                                                            "center",
                                                        maskSize: "contain",
                                                        WebkitMaskSize:
                                                            "contain",
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </div>

                                        <span className="text-[11px] font-medium text-zinc-600 transition-colors duration-300 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white">
                                            {social.name}
                                        </span>
                                    </div>

                                    <ArrowUpRight
                                        size={13}
                                        className="text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-500"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Status */}
                <div className="relative mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <CheckCircle2
                            size={14}
                            className="text-emerald-500"
                        />

                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                            Usually responds within 24 hours
                        </span>
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                        IT Support • Web Development
                    </span>
                </div>
            </div>
        </section>

        {/* Copy Modal */}
        {copyModal && (
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                onClick={closeCopyModal}
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="copy-modal-title"
                    onClick={(event) => event.stopPropagation()}
                    className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
                >
                    {/* Modal Header */}
                    <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
                        <div>
                            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-500">
                                Contact
                            </p>

                            <h3
                                id="copy-modal-title"
                                className="mt-1 text-base font-bold text-zinc-900 dark:text-white"
                            >
                                Copy {copyModal.label}
                            </h3>
                        </div>

                        <button
                            type="button"
                            onClick={closeCopyModal}
                            aria-label="Close modal"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-5">
                        <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                            {copyModal.label}
                        </p>

                        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-950">
                            <p className="break-all text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                {copyModal.value}
                            </p>
                        </div>

                        {/* Copy Button */}
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-cyan-400"
                        >
                            {copied ? (
                                <>
                                    <Check size={14} />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={14} />
                                    <span>
                                        Copy {copyModal.label}
                                    </span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
);
}
