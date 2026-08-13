<script setup>
import {
    BriefcaseBusiness,
    Code2,
    GraduationCap,
    Headphones,
    Laptop,
    Network,
    ServerCog,
    Wrench,
    ArrowUpRight,
} from 'lucide-vue-next'

const skills = [
    'IT Support',
    'Windows',
    'Networking',
    'PHP',
    'MySQL',
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'Tailwind CSS',
]

const opportunities = [
    {
        title: 'IT Support',
        description: 'Hardware & Software',
        icon: Wrench,
    },
    {
        title: 'Technical Support',
        description: 'Troubleshooting',
        icon: Headphones,
    },
    {
        title: 'Help Desk',
        description: 'User Support',
        icon: Laptop,
    },
    {
        title: 'System Administration',
        description: 'Windows & Maintenance',
        icon: ServerCog,
    },
    {
        title: 'Network Support',
        description: 'LAN & Connectivity',
        icon: Network,
    },
    {
        title: 'Web Development',
        description: 'PHP, MySQL & Vue.js',
        icon: Code2,
    },
]

const stats = [
    {
        value: '3+',
        label: 'YEARS',
        description: 'Hands-on experience',
        icon: BriefcaseBusiness,
    },
    {
        value: 'BSIT',
        label: 'DEGREE',
        description: 'Information Technology',
        icon: GraduationCap,
    },
    {
        value: 'IT',
        label: 'PRIMARY',
        description: 'Support specialist',
        icon: Headphones,
    },
    {
        value: 'WEB',
        label: 'SECONDARY',
        description: 'Application development',
        icon: Code2,
    },
]
</script>

<template>
    <section id="about" class="
            relative
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
            sm:py-24

            lg:px-10
            lg:py-28

            xl:px-14
        ">
        <!-- Background -->
        <div class="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
            " aria-hidden="true">
            <!-- Teal glow -->
            <div class="
                    absolute
                    -left-40
                    top-20
                    h-96
                    w-96
                    rounded-full
                    bg-teal-200/20
                    blur-[120px]

                    dark:bg-teal-900/15
                "></div>

            <!-- Amber glow -->
            <div class="
                    absolute
                    -right-40
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-amber-200/15
                    blur-[120px]

                    dark:bg-amber-900/10
                "></div>

            <!-- Grid -->
            <div class="
                    absolute
                    inset-0
                    opacity-[0.025]

                    dark:opacity-[0.035]
                " style="
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
                "></div>
        </div>

        <!-- Main Container -->
        <div class="
                relative
                z-10
                mx-auto
                w-full
                max-w-[1280px]
            ">
            <!-- Section Header -->
            <div class="
                    mb-12
                    flex
                    flex-col
                    gap-4

                    lg:mb-16
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                ">
                <div>
                    <div class="
                            mb-4
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
                        ">
                        <span class="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-teal-500
                            "></span>

                        About Me

                        <span class="text-zinc-300 dark:text-zinc-700">
                            /
                        </span>

                        01
                    </div>

                    <h2 class="
                            max-w-3xl
                            text-4xl
                            font-black
                            leading-[0.9]
                            tracking-[-0.055em]
                            text-zinc-950

                            dark:text-white

                            sm:text-5xl

                            lg:text-6xl
                        ">
                        PEOPLE.
                        <span class="text-teal-700 dark:text-teal-400">
                            SYSTEMS.
                        </span>

                        <span class="block text-zinc-400 dark:text-zinc-600">
                            SOLUTIONS.
                        </span>
                    </h2>
                </div>

                <div class="
                        max-w-md
                        font-mono
                        text-[10px]
                        leading-5
                        text-zinc-500

                        dark:text-zinc-500

                        sm:text-xs
                    ">
                    I work where technology meets people — keeping systems
                    reliable, supporting users, and building practical
                    applications that solve real problems.
                </div>
            </div>

            <!-- Main Grid -->
            <div class="
                    grid
                    gap-10

                    lg:grid-cols-[1.15fr_0.85fr]
                    lg:gap-14
                ">
                <!-- LEFT -->
                <div>
                    <!-- Intro -->
                    <div class="
                            border-l-2
                            border-teal-500
                            pl-5

                            sm:pl-6
                        ">
                        <p class="
                                max-w-3xl
                                text-lg
                                font-semibold
                                leading-7
                                text-zinc-800

                                dark:text-zinc-200

                                sm:text-xl
                                sm:leading-8
                            ">
                            IT professional focused on
                            <span class="text-teal-700 dark:text-teal-400">
                                technical support
                            </span>,
                            troubleshooting, networking, and web development.
                        </p>

                        <p class="
                                mt-4
                                max-w-2xl
                                text-xs
                                leading-6
                                text-zinc-500

                                dark:text-zinc-400

                                sm:text-sm
                                sm:leading-7
                            ">
                            I enjoy figuring out why something isn't working,
                            fixing it properly, and improving the process
                            afterward. My experience spans hardware,
                            Windows systems, networks, user support, and
                            practical web applications.
                        </p>
                    </div>

                    <!-- Skills -->
                    <div class="mt-10">
                        <div class="
                                mb-4
                                flex
                                items-center
                                gap-3
                                font-mono
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-zinc-400
                            ">
                            <span class="
                                    h-px
                                    w-7
                                    bg-zinc-300

                                    dark:bg-zinc-700
                                "></span>

                            Core Skills
                        </div>

                        <div class="
                                flex
                                flex-wrap
                                gap-2
                            ">
                            <span v-for="skill in skills" :key="skill" class="
                                    rounded-full
                                    border
                                    border-zinc-200
                                    bg-white/60
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[10px]
                                    font-medium
                                    text-zinc-600
                                    backdrop-blur-sm
                                    transition-all
                                    duration-300

                                    hover:border-teal-200
                                    hover:bg-teal-50
                                    hover:text-teal-700

                                    dark:border-zinc-800
                                    dark:bg-zinc-900/50
                                    dark:text-zinc-400

                                    dark:hover:border-teal-900
                                    dark:hover:bg-teal-950/40
                                    dark:hover:text-teal-400
                                ">
                                {{ skill }}
                            </span>
                        </div>
                    </div>

                    <!-- Stats -->
                    <div class="
                            mt-10
                            grid
                            grid-cols-2
                            border-y
                            border-zinc-200

                            dark:border-zinc-800

                            sm:grid-cols-4
                        ">
                        <div v-for="(stat, index) in stats" :key="stat.label" class="
                                relative
                                px-4
                                py-5

                                sm:px-5
                                sm:py-6
                            " :class="[
                                index < 3
                                    ? 'sm:border-r sm:border-zinc-200 dark:sm:border-zinc-800'
                                    : '',
                                index < 2
                                    ? 'border-b border-zinc-200 dark:border-zinc-800 sm:border-b-0'
                                    : '',
                                index % 2 === 0
                                    ? 'border-r border-zinc-200 dark:border-zinc-800 sm:border-r'
                                    : '',
                            ]">
                            <component :is="stat.icon" class="
                                    mb-3
                                    h-4
                                    w-4
                                    text-teal-600

                                    dark:text-teal-400
                                " :stroke-width="1.5" />

                            <div class="
                                    font-mono
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-zinc-900

                                    dark:text-white
                                ">
                                {{ stat.value }}
                            </div>

                            <div class="
                                    mt-1
                                    font-mono
                                    text-[8px]
                                    font-semibold
                                    tracking-[0.12em]
                                    text-zinc-700

                                    dark:text-zinc-300
                                ">
                                {{ stat.label }}
                            </div>

                            <div class="
                                    mt-1
                                    font-mono
                                    text-[9px]
                                    leading-4
                                    text-zinc-400
                                ">
                                {{ stat.description }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT -->
                <div>
                    <!-- Open To Header -->
                    <div class="
                            mb-5
                            flex
                            items-center
                            justify-between
                        ">
                        <div class="
                                flex
                                items-center
                                gap-3
                                font-mono
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-amber-600

                                dark:text-amber-400
                            ">
                            <span class="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-amber-500
                                "></span>

                            Open To
                        </div>

                        <span class="
                                font-mono
                                text-[8px]
                                uppercase
                                tracking-[0.18em]
                                text-zinc-400
                            ">
                            Opportunities
                        </span>
                    </div>

                    <!-- Opportunity List -->
                    <div class="space-y-2">
                        <a v-for="(item, index) in opportunities" :key="item.title" href="#contact" class="
                                group
                                flex
                                items-center
                                gap-4
                                rounded-xl
                                border
                                border-zinc-200
                                bg-white/50
                                px-4
                                py-3.5
                                backdrop-blur-sm
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:border-teal-200
                                hover:bg-white
                                hover:shadow-lg
                                hover:shadow-teal-900/5

                                dark:border-zinc-800
                                dark:bg-zinc-900/40

                                dark:hover:border-teal-900
                                dark:hover:bg-zinc-900
                            ">
                            <!-- Number -->
                            <span class="
                                    w-5
                                    shrink-0
                                    font-mono
                                    text-[8px]
                                    text-zinc-300

                                    dark:text-zinc-700
                                ">
                                0{{ index + 1 }}
                            </span>

                            <!-- Icon -->
                            <div class="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-teal-50
                                    text-teal-700
                                    transition-all
                                    duration-300

                                    group-hover:bg-teal-600
                                    group-hover:text-white

                                    dark:bg-teal-950/60
                                    dark:text-teal-400

                                    dark:group-hover:bg-teal-500
                                    dark:group-hover:text-zinc-950
                                ">
                                <component :is="item.icon" class="h-4 w-4" :stroke-width="1.5" />
                            </div>

                            <!-- Text -->
                            <div class="min-w-0 flex-1">
                                <p class="
                                        text-xs
                                        font-semibold
                                        text-zinc-800

                                        dark:text-zinc-200
                                    ">
                                    {{ item.title }}
                                </p>

                                <p class="
                                        mt-0.5
                                        font-mono
                                        text-[9px]
                                        text-zinc-400
                                    ">
                                    {{ item.description }}
                                </p>
                            </div>

                            <!-- Arrow -->
                            <ArrowUpRight class="
                                    h-3.5
                                    w-3.5
                                    shrink-0
                                    text-zinc-300
                                    transition-all
                                    duration-300

                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    group-hover:text-teal-600

                                    dark:text-zinc-700
                                    dark:group-hover:text-teal-400
                                " />
                        </a>
                    </div>

                    <!-- Availability -->
                    <div class="
                            mt-5
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-zinc-200
                            bg-white/40
                            px-3
                            py-2.5
                            font-mono
                            text-[9px]
                            text-zinc-500

                            dark:border-zinc-800
                            dark:bg-zinc-900/40
                            dark:text-zinc-400
                        ">
                        <span class="relative flex h-2 w-2">
                            <span class="
                                    absolute
                                    inset-0
                                    animate-ping
                                    rounded-full
                                    bg-emerald-400
                                    opacity-50
                                "></span>

                            <span class="
                                    relative
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-emerald-500
                                "></span>
                        </span>

                        Available for remote & on-site opportunities
                    </div>
                </div>
            </div>

            <!-- Bottom Label -->
            <div class="
                    mt-14
                    flex
                    items-center
                    justify-between
                    border-t
                    border-zinc-200
                    pt-5
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-zinc-400

                    dark:border-zinc-800
                ">
                <span>
                    IT / WEB / SYSTEMS
                </span>

                <span>
                    EGD / ABOUT / 2026
                </span>
            </div>
        </div>
    </section>
</template>