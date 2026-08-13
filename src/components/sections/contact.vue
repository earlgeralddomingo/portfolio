<script setup>
import { ref } from 'vue'

import {
    ArrowUpRight,
    Check,
    Copy,
    ExternalLink,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    X,
} from 'lucide-vue-next'

const email = 'earlgeralddomingo.basc@gmail.com'
const phone = '+63 930 125 0504'
const location = 'San Miguel, Bulacan, Philippines'

const linkedinUrl =
    'https://www.linkedin.com/in/earl-gerald-domingo-479682316/'

const showGmailModal = ref(false)
const showPhoneModal = ref(false)

const copiedEmail = ref(false)
const copiedPhone = ref(false)

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email)

        copiedEmail.value = true

        setTimeout(() => {
            copiedEmail.value = false
        }, 2000)
    } catch (error) {
        console.error('Failed to copy email:', error)
    }
}

const copyPhone = async () => {
    try {
        await navigator.clipboard.writeText(phone)

        copiedPhone.value = true

        setTimeout(() => {
            copiedPhone.value = false
        }, 2000)
    } catch (error) {
        console.error('Failed to copy phone:', error)
    }
}

const openMailApp = () => {
    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

    window.open(
        gmailUrl,
        '_blank',
        'noopener,noreferrer'
    )
}

const callPhone = () => {
    window.location.href = `tel:${phone.replace(/\s+/g, '')}`
}
</script>

<template>
    <section
        id="contact"
        class="
            relative
            min-h-[calc(100svh-68px)]
            scroll-mt-[68px]
            overflow-hidden
            bg-[#F7F7F5]
            px-5
            py-20
            text-zinc-900
            transition-colors
            duration-500

            dark:bg-[#0D1210]
            dark:text-white

            sm:px-8
            lg:px-10
            lg:py-24
            xl:px-14
        "
    >
        <!-- Background -->
        <div
            class="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
            "
            aria-hidden="true"
        >
            <div
                class="
                    absolute
                    -right-32
                    top-1/4
                    h-96
                    w-96
                    rounded-full
                    bg-teal-200/20
                    blur-[90px]

                    dark:bg-teal-900/15
                "
            ></div>

            <div
                class="
                    absolute
                    -bottom-32
                    left-1/4
                    h-72
                    w-72
                    rounded-full
                    bg-amber-200/15
                    blur-[90px]

                    dark:bg-amber-900/10
                "
            ></div>

            <div
                class="
                    absolute
                    inset-0
                    opacity-[0.03]

                    dark:opacity-[0.04]
                "
                style="
                    background-image:
                        linear-gradient(
                            to right,
                            currentColor 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to bottom,
                            currentColor 1px,
                            transparent 1px
                        );
                    background-size: 46px 46px;
                "
            ></div>
        </div>

        <!-- Main -->
        <div
            class="
                relative
                z-10
                mx-auto
                flex
                min-h-[70vh]
                w-full
                max-w-[1120px]
                items-center
            "
        >
            <div class="grid w-full gap-10 lg:grid-cols-[1fr_420px] lg:gap-14 xl:grid-cols-[1fr_450px]">

                <!-- Left -->
                <div class="flex flex-col justify-center">

                    <div
                        class="
                            mb-5
                            flex
                            items-center
                            gap-3
                            font-mono
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-teal-700

                            dark:text-teal-400
                        "
                    >
                        <span
                            class="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-teal-500
                                shadow-[0_0_0_4px_rgba(20,184,166,0.08)]
                            "
                        ></span>

                        Contact
                    </div>

                    <p
                        class="
                            mb-2
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-zinc-400
                        "
                    >
                        IT Support

                        <span class="mx-1.5 text-zinc-300 dark:text-zinc-700">
                            /
                        </span>

                        Web Development
                    </p>

                    <h2
                        class="
                            max-w-3xl
                            text-[3rem]
                            font-black
                            leading-[0.88]
                            tracking-[-0.06em]
                            text-zinc-950

                            sm:text-[3.8rem]

                            lg:text-[4.5rem]

                            xl:text-[5rem]

                            dark:text-white
                        "
                    >
                        Let's

                        <span class="text-teal-700 dark:text-teal-400">
                            connect.
                        </span>
                    </h2>

                    <p
                        class="
                            mt-5
                            max-w-xl
                            text-sm
                            font-medium
                            leading-6
                            text-zinc-700

                            dark:text-zinc-300

                            sm:text-base
                        "
                    >
                        Have a technical problem, project idea, or
                        opportunity in mind?
                    </p>

                    <p
                        class="
                            mt-2
                            max-w-xl
                            text-[11px]
                            leading-5
                            text-zinc-500

                            dark:text-zinc-500

                            sm:text-xs
                        "
                    >
                        I'm available for IT support, troubleshooting,
                        web development, and practical digital solutions.
                    </p>

                    <!-- Availability -->
                    <div
                        class="
                            mt-6
                            inline-flex
                            w-fit
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-teal-200
                            bg-teal-50/70
                            px-3
                            py-1.5
                            font-mono
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-teal-700
                            backdrop-blur-sm

                            dark:border-teal-900
                            dark:bg-teal-950/40
                            dark:text-teal-400
                        "
                    >
                        <span
                            class="
                                h-1.5
                                w-1.5
                                animate-pulse
                                rounded-full
                                bg-teal-500
                            "
                        ></span>

                        Available for opportunities
                    </div>

                    <!-- Mini Info -->
                    <div
                        class="
                            mt-8
                            grid
                            max-w-xl
                            gap-2
                            sm:grid-cols-2
                        "
                    >
                        <div
                            class="
                                flex
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-zinc-200
                                bg-white/60
                                p-3
                                backdrop-blur-sm

                                dark:border-zinc-800
                                dark:bg-zinc-900/50
                            "
                        >
                            <div
                                class="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-md
                                    bg-teal-50
                                    text-teal-700

                                    dark:bg-teal-950
                                    dark:text-teal-400
                                "
                            >
                                <MapPin class="h-3.5 w-3.5" />
                            </div>

                            <div class="min-w-0">
                                <p
                                    class="
                                        font-mono
                                        text-[7px]
                                        uppercase
                                        tracking-[0.15em]
                                        text-zinc-400
                                    "
                                >
                                    Location
                                </p>

                                <p
                                    class="
                                        mt-0.5
                                        truncate
                                        text-[10px]
                                        font-semibold
                                        text-zinc-700

                                        dark:text-zinc-300
                                    "
                                >
                                    {{ location }}
                                </p>
                            </div>
                        </div>

                        <div
                            class="
                                flex
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-zinc-200
                                bg-white/60
                                p-3
                                backdrop-blur-sm

                                dark:border-zinc-800
                                dark:bg-zinc-900/50
                            "
                        >
                            <div
                                class="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-md
                                    bg-amber-50
                                    text-amber-700

                                    dark:bg-amber-950
                                    dark:text-amber-400
                                "
                            >
                                <Send class="h-3.5 w-3.5" />
                            </div>

                            <div>
                                <p
                                    class="
                                        font-mono
                                        text-[7px]
                                        uppercase
                                        tracking-[0.15em]
                                        text-zinc-400
                                    "
                                >
                                    Response
                                </p>

                                <p
                                    class="
                                        mt-0.5
                                        text-[10px]
                                        font-semibold
                                        text-zinc-700

                                        dark:text-zinc-300
                                    "
                                >
                                    Let's start a conversation
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Statement -->
                    <div
                        class="
                            mt-7
                            flex
                            items-center
                            gap-2
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            text-zinc-400
                        "
                    >
                        <span class="h-px w-8 bg-zinc-300 dark:bg-zinc-700"></span>

                        BUILD

                        <span class="text-amber-500">•</span>

                        SUPPORT

                        <span class="text-amber-500">•</span>

                        SOLVE
                    </div>
                </div>

                <!-- Right -->
                <div
                    class="
                        relative
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-white/70
                        p-5
                        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                        backdrop-blur-md

                        dark:border-zinc-800
                        dark:bg-zinc-900/60
                        dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)]

                        sm:p-6
                    "
                >
                    <div
                        class="
                            absolute
                            inset-x-8
                            top-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-teal-500
                            to-transparent
                            opacity-60
                        "
                    ></div>

                    <!-- Header -->
                    <div class="flex items-start justify-between gap-4">

                        <div>
                            <p
                                class="
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-400
                                "
                            >
                                Communication
                            </p>

                            <h3
                                class="
                                    mt-1
                                    text-xl
                                    font-bold
                                    tracking-tight
                                    text-zinc-900

                                    dark:text-white
                                "
                            >
                                Get in touch
                            </h3>
                        </div>

                        <div
                            class="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-lg
                                bg-teal-50
                                text-teal-700

                                dark:bg-teal-950
                                dark:text-teal-400
                            "
                        >
                            <Send class="h-3.5 w-3.5" />
                        </div>

                    </div>

                    <p
                        class="
                            mt-3
                            text-[10px]
                            leading-5
                            text-zinc-500

                            dark:text-zinc-500
                        "
                    >
                        Choose the easiest way to reach me. I'm open to
                        professional opportunities, projects, and collaborations.
                    </p>

                    <div
                        class="
                            my-5
                            h-px
                            bg-zinc-200

                            dark:bg-zinc-800
                        "
                    ></div>

                    <!-- Contact Actions -->
                    <div class="space-y-2.5">

                        <!-- Email -->
                        <button
                            type="button"
                            @click="showGmailModal = true"
                            class="
                                group
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-zinc-200
                                bg-white
                                p-3
                                text-left
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:border-teal-200
                                hover:bg-teal-50/40

                                dark:border-zinc-800
                                dark:bg-zinc-950/60

                                dark:hover:border-teal-900
                                dark:hover:bg-teal-950/30
                            "
                        >
                            <div
                                class="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-teal-50
                                    text-teal-700
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105

                                    dark:bg-teal-950
                                    dark:text-teal-400
                                "
                            >
                                <Mail class="h-4 w-4" />
                            </div>

                            <div class="min-w-0 flex-1">
                                <p
                                    class="
                                        font-mono
                                        text-[7px]
                                        uppercase
                                        tracking-[0.15em]
                                        text-zinc-400
                                    "
                                >
                                    Email
                                </p>

                                <p
                                    class="
                                        mt-0.5
                                        truncate
                                        text-[10px]
                                        font-semibold
                                        text-zinc-700

                                        dark:text-zinc-300
                                    "
                                >
                                    {{ email }}
                                </p>
                            </div>

                            <ArrowUpRight
                                class="
                                    h-3.5
                                    w-3.5
                                    text-zinc-300
                                    transition-all
                                    duration-300

                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    group-hover:text-teal-500

                                    dark:text-zinc-700
                                "
                            />
                        </button>

                        <!-- LinkedIn -->
                        <a
                            :href="linkedinUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="
                                group
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-zinc-200
                                bg-white
                                p-3
                                text-left
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:border-teal-200
                                hover:bg-teal-50/40

                                dark:border-zinc-800
                                dark:bg-zinc-950/60

                                dark:hover:border-teal-900
                                dark:hover:bg-teal-950/30
                            "
                        >
                            <div
                                class="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-teal-50
                                    text-teal-700
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105

                                    dark:bg-teal-950
                                    dark:text-teal-400
                                "
                            >
                                <Linkedin class="h-4 w-4" />
                            </div>

                            <div class="min-w-0 flex-1">
                                <p
                                    class="
                                        font-mono
                                        text-[7px]
                                        uppercase
                                        tracking-[0.15em]
                                        text-zinc-400
                                    "
                                >
                                    Professional Network
                                </p>

                                <p
                                    class="
                                        mt-0.5
                                        text-[10px]
                                        font-semibold
                                        text-zinc-700

                                        dark:text-zinc-300
                                    "
                                >
                                    LinkedIn Profile
                                </p>
                            </div>

                            <ExternalLink
                                class="
                                    h-3.5
                                    w-3.5
                                    text-zinc-300
                                    transition-all
                                    duration-300

                                    group-hover:text-teal-500

                                    dark:text-zinc-700
                                "
                            />
                        </a>

                        <!-- Phone -->
                        <button
                            type="button"
                            @click="showPhoneModal = true"
                            class="
                                group
                                flex
                                w-full
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-zinc-200
                                bg-white
                                p-3
                                text-left
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:border-amber-200
                                hover:bg-amber-50/40

                                dark:border-zinc-800
                                dark:bg-zinc-950/60

                                dark:hover:border-amber-900
                                dark:hover:bg-amber-950/30
                            "
                        >
                            <div
                                class="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-amber-50
                                    text-amber-700
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105

                                    dark:bg-amber-950
                                    dark:text-amber-400
                                "
                            >
                                <Phone class="h-4 w-4" />
                            </div>

                            <div class="min-w-0 flex-1">
                                <p
                                    class="
                                        font-mono
                                        text-[7px]
                                        uppercase
                                        tracking-[0.15em]
                                        text-zinc-400
                                    "
                                >
                                    Phone
                                </p>

                                <p
                                    class="
                                        mt-0.5
                                        text-[10px]
                                        font-semibold
                                        text-zinc-700

                                        dark:text-zinc-300
                                    "
                                >
                                    {{ phone }}
                                </p>
                            </div>

                            <ArrowUpRight
                                class="
                                    h-3.5
                                    w-3.5
                                    text-zinc-300
                                    transition-all
                                    duration-300

                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    group-hover:text-amber-500

                                    dark:text-zinc-700
                                "
                            />
                        </button>

                    </div>

                    <!-- CTA -->
                    <button
                        type="button"
                        @click="showGmailModal = true"
                        class="
                            group
                            mt-5
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-teal-700
                            px-5
                            py-2.5
                            font-mono
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-white
                            shadow-lg
                            shadow-teal-900/10
                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:bg-teal-800

                            dark:bg-teal-500
                            dark:text-zinc-950
                            dark:shadow-teal-950/20

                            dark:hover:bg-teal-400
                        "
                    >
                        Start a conversation

                        <ArrowUpRight
                            class="
                                h-3.5
                                w-3.5
                                transition-transform
                                duration-300

                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
                        />
                    </button>

                    <!-- Footer -->
                    <div
                        class="
                            mt-5
                            flex
                            items-center
                            justify-center
                            gap-2
                            font-mono
                            text-[7px]
                            uppercase
                            tracking-[0.18em]
                            text-zinc-400
                        "
                    >
                        <span
                            class="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-teal-500
                            "
                        ></span>

                        Open to opportunities
                    </div>
                </div>
            </div>
        </div>

        <!-- Side Label -->
        <div
            class="
                absolute
                right-5
                top-1/2
                hidden
                -translate-y-1/2
                font-mono
                text-[7px]
                uppercase
                tracking-[0.25em]
                text-zinc-300
                [writing-mode:vertical-rl]

                dark:text-zinc-700

                xl:block
            "
        >
            EGD / CONTACT / 2026
        </div>
    </section>

    <!-- Gmail Modal -->
    <Transition name="modal">
        <div
            v-if="showGmailModal"
            @click.self="showGmailModal = false"
            class="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-zinc-950/20
                px-5
                py-8
                backdrop-blur-sm

                dark:bg-black/60
            "
        >
            <div
                class="
                    relative
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-[#F7F7F5]/95
                    p-7
                    shadow-2xl
                    backdrop-blur-xl

                    dark:border-zinc-800
                    dark:bg-[#0D1210]/95

                    sm:p-8
                "
            >
                <button
                    type="button"
                    @click="showGmailModal = false"
                    aria-label="Close email modal"
                    class="
                        absolute
                        right-5
                        top-5
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        text-zinc-400
                        transition-all

                        hover:bg-zinc-200
                        hover:text-zinc-700

                        dark:hover:bg-zinc-800
                        dark:hover:text-white
                    "
                >
                    <X class="h-4 w-4" />
                </button>

                <p
                    class="
                        font-mono
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-teal-700

                        dark:text-teal-400
                    "
                >
                    Email
                </p>

                <h3
                    class="
                        mt-3
                        text-2xl
                        font-black
                        tracking-tight
                        text-zinc-950

                        dark:text-white
                    "
                >
                    Let's

                    <span class="text-teal-700 dark:text-teal-400">
                        connect.
                    </span>
                </h3>

                <p
                    class="
                        mt-3
                        text-xs
                        leading-6
                        text-zinc-500
                    "
                >
                    Send me a message about an opportunity, project,
                    collaboration, or technical requirement.
                </p>

                <div
                    class="
                        mt-6
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        p-3

                        dark:border-zinc-800
                        dark:bg-zinc-950
                    "
                >
                    <Mail class="h-4 w-4 shrink-0 text-teal-600" />

                    <span
                        class="
                            min-w-0
                            flex-1
                            truncate
                            font-mono
                            text-xs
                            font-semibold
                            text-zinc-700

                            dark:text-zinc-300
                        "
                    >
                        {{ email }}
                    </span>

                    <button
                        type="button"
                        @click="copyEmail"
                        class="
                            inline-flex
                            shrink-0
                            items-center
                            gap-1.5
                            rounded-lg
                            bg-teal-700
                            px-3
                            py-2
                            font-mono
                            text-[9px]
                            font-semibold
                            text-white
                            transition-all

                            hover:bg-teal-800

                            dark:bg-teal-500
                            dark:text-zinc-950

                            dark:hover:bg-teal-400
                        "
                    >
                        <Check
                            v-if="copiedEmail"
                            class="h-3.5 w-3.5"
                        />

                        <Copy
                            v-else
                            class="h-3.5 w-3.5"
                        />

                        {{ copiedEmail ? 'Copied' : 'Copy' }}
                    </button>
                </div>

                <button
                    type="button"
                    @click="openMailApp"
                    class="
                        mt-3
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        px-5
                        py-3
                        font-mono
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-zinc-700
                        transition-all

                        hover:-translate-y-0.5
                        hover:border-teal-200
                        hover:bg-teal-50
                        hover:text-teal-700

                        dark:border-zinc-800
                        dark:bg-zinc-950
                        dark:text-zinc-300

                        dark:hover:border-teal-900
                        dark:hover:bg-teal-950/30
                        dark:hover:text-teal-400
                    "
                >
                    <Mail class="h-4 w-4" />

                    Open Gmail

                    <ExternalLink class="h-3.5 w-3.5" />
                </button>

                <div
                    class="
                        mt-5
                        flex
                        items-center
                        justify-center
                        gap-2
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                    "
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-teal-500"></span>

                    Available for opportunities
                </div>
            </div>
        </div>
    </Transition>

    <!-- Phone Modal -->
    <Transition name="modal">
        <div
            v-if="showPhoneModal"
            @click.self="showPhoneModal = false"
            class="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-zinc-950/20
                px-5
                py-8
                backdrop-blur-sm

                dark:bg-black/60
            "
        >
            <div
                class="
                    relative
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    border-zinc-200
                    bg-[#F7F7F5]/95
                    p-7
                    shadow-2xl
                    backdrop-blur-xl

                    dark:border-zinc-800
                    dark:bg-[#0D1210]/95

                    sm:p-8
                "
            >
                <button
                    type="button"
                    @click="showPhoneModal = false"
                    aria-label="Close phone modal"
                    class="
                        absolute
                        right-5
                        top-5
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        text-zinc-400
                        transition-all

                        hover:bg-zinc-200
                        hover:text-zinc-700

                        dark:hover:bg-zinc-800
                        dark:hover:text-white
                    "
                >
                    <X class="h-4 w-4" />
                </button>

                <p
                    class="
                        font-mono
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-amber-600

                        dark:text-amber-400
                    "
                >
                    Phone
                </p>

                <h3
                    class="
                        mt-3
                        text-2xl
                        font-black
                        tracking-tight
                        text-zinc-950

                        dark:text-white
                    "
                >
                    Let's

                    <span class="text-amber-600 dark:text-amber-400">
                        talk.
                    </span>
                </h3>

                <p
                    class="
                        mt-3
                        text-xs
                        leading-6
                        text-zinc-500
                    "
                >
                    Prefer a direct conversation? You can reach me
                    through my mobile number.
                </p>

                <div
                    class="
                        mt-6
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white
                        p-3

                        dark:border-zinc-800
                        dark:bg-zinc-950
                    "
                >
                    <Phone class="h-4 w-4 shrink-0 text-amber-600" />

                    <span
                        class="
                            min-w-0
                            flex-1
                            font-mono
                            text-sm
                            font-semibold
                            text-zinc-700

                            dark:text-zinc-300
                        "
                    >
                        {{ phone }}
                    </span>

                    <button
                        type="button"
                        @click="copyPhone"
                        class="
                            inline-flex
                            shrink-0
                            items-center
                            gap-1.5
                            rounded-lg
                            bg-amber-500
                            px-3
                            py-2
                            font-mono
                            text-[9px]
                            font-semibold
                            text-zinc-950
                            transition-all

                            hover:bg-amber-400
                        "
                    >
                        <Check
                            v-if="copiedPhone"
                            class="h-3.5 w-3.5"
                        />

                        <Copy
                            v-else
                            class="h-3.5 w-3.5"
                        />

                        {{ copiedPhone ? 'Copied' : 'Copy' }}
                    </button>
                </div>

                <button
                    type="button"
                    @click="callPhone"
                    class="
                        mt-3
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-teal-700
                        px-5
                        py-3
                        font-mono
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-white
                        shadow-lg
                        shadow-teal-900/10
                        transition-all

                        hover:-translate-y-0.5
                        hover:bg-teal-800

                        dark:bg-teal-500
                        dark:text-zinc-950

                        dark:hover:bg-teal-400
                    "
                >
                    <Phone class="h-4 w-4" />

                    Call now
                </button>

                <div
                    class="
                        mt-5
                        flex
                        items-center
                        justify-center
                        gap-2
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                    "
                >
                    <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>

                    Direct communication
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
    transform: translateY(8px) scale(0.98);
}
</style>