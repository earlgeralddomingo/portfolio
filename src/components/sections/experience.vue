<script setup>
import { ref } from 'vue'
import {
    BriefcaseBusiness,
    GraduationCap,
    ChevronDown,
    ArrowUpRight,
} from 'lucide-vue-next'

const experiences = [
    {
        title: 'Technical VA / Freelance IT Support',
        company: 'Freelance',
        type: 'FREELANCE',
        location: 'Hybrid (Remote & On-site)',
        date: '2020 — PRESENT',
        status: 'Ongoing',
        icon: BriefcaseBusiness,

        description:
            'Provided technical assistance and digital support for various personal and client-related tasks.',

        responsibilities: [
            'Provided remote technical support for Windows and software-related issues.',
            'Troubleshot common hardware, software, and system problems.',
            'Assisted with computer setup, configuration, and maintenance.',
            'Performed digital and administrative tasks for clients.',
            'Used remote support tools such as AnyDesk and TeamViewer.',
        ],

        technologies: [
            'Windows',
            'AnyDesk',
            'TeamViewer',
            'Hardware',
            'Software Support',
            'Networking',
            'Printer Setup',
            'VS Code',
            'Microsoft Office',
        ],
    },

    {
        title: 'IT Staff',
        company: 'Circle Asia Trading Corporation',
        type: 'IT EXPERIENCE',
        location: 'On-site',
        date: 'MAY 2026 — JUN 2026',
        status: 'Completed',
        icon: BriefcaseBusiness,

        description:
            'Provided day-to-day technical support and assisted with hardware, software, and general IT-related concerns.',

        responsibilities: [
            'Provided technical assistance to users and employees.',
            'Troubleshot hardware and software-related issues.',
            'Assisted with computer setup and configuration.',
            'Supported general IT operations and maintenance.',
            'Performed troubleshooting and technical tasks as needed.',
        ],

        technologies: [
            'Windows',
            'Hardware',
            'Software Support',
            'Networking',
            'Microsoft Office',
        ],
    },

    {
        title: 'IT Staff Intern',
        company: 'Metro North Medical Center Hospital',
        type: 'INTERNSHIP',
        location: 'On-site',
        date: 'FEB 2025 — MAY 2025',
        status: 'Completed',
        icon: GraduationCap,

        description:
            'Completed an IT internship focused on technical support, infrastructure assistance, troubleshooting, and web-based system development.',

        responsibilities: [
            'Developed a Human Resources Ticketing System using PHP and MySQL.',
            'Installed and configured desktop computers and printers.',
            'Assisted with network devices, CCTV, and wireless access points.',
            'Troubleshot hardware, software, and LAN-related issues.',
            'Created technical documentation and a system manual for the HRTS.',
        ],

        technologies: [
            'PHP',
            'MySQL',
            'Bootstrap',
            'JavaScript',
            'Networking',
            'Software Support',
            'Hardware',
            'Printer Setup',
            'CCTV',
        ],
    },
]

const expandedExperience = ref(null)

const toggleExperience = (index) => {
    expandedExperience.value =
        expandedExperience.value === index ? null : index
}
</script>

<template>
    <section id="experience" class="
            relative
            overflow-hidden
            bg-white
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
                    -right-40
                    top-20
                    h-96
                    w-96
                    rounded-full
                    bg-teal-200/15
                    blur-[120px]

                    dark:bg-teal-900/10
                "></div>

            <!-- Amber glow -->
            <div class="
                    absolute
                    -left-40
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-amber-200/10
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
            <!-- Header -->
            <div class="
                    mb-12
                    flex
                    flex-col
                    gap-5

                    lg:mb-16
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                ">
                <div>
                    <!-- Label -->
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

                        Experience

                        <span class="text-zinc-300 dark:text-zinc-700">
                            /
                        </span>

                        02
                    </div>

                    <!-- Heading -->
                    <h2 class="
                            text-4xl
                            font-black
                            leading-[0.9]
                            tracking-[-0.055em]
                            text-zinc-950

                            dark:text-white

                            sm:text-5xl

                            lg:text-6xl
                        ">
                        PROFESSIONAL

                        <span class="block text-teal-700 dark:text-teal-400">
                            JOURNEY.
                        </span>
                    </h2>
                </div>

                <!-- Description -->
                <p class="
                        max-w-md
                        font-mono
                        text-[10px]
                        leading-5
                        text-zinc-500

                        dark:text-zinc-500

                        sm:text-xs
                    ">
                    A timeline of my freelance, professional, and hands-on IT
                    experience — from technical support and infrastructure to
                    practical system development.
                </p>
            </div>

            <!-- Experience -->
            <div class="relative">
                <!-- Desktop Timeline -->
                <div class="
                        absolute
                        bottom-5
                        left-[7px]
                        top-5
                        hidden
                        w-px
                        bg-zinc-200

                        dark:bg-zinc-800

                        sm:block
                    "></div>

                <div class="space-y-5 sm:space-y-7">
                    <article v-for="(experience, index) in experiences" :key="experience.title" class="
                            group
                            relative
                            sm:pl-12
                        ">
                        <!-- Timeline Dot -->
                        <div class="
                                absolute
                                left-0
                                top-6
                                hidden
                                h-[15px]
                                w-[15px]
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-teal-300
                                bg-[#F7F7F5]
                                sm:flex

                                dark:border-teal-800
                                dark:bg-[#0D1210]
                            ">
                            <span class="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-teal-500
                                "></span>
                        </div>

                        <!-- Experience Container -->
                        <div class="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-zinc-200
                                bg-[#F7F7F5]/70
                                backdrop-blur-sm
                                transition-all
                                duration-300

                                hover:border-teal-200
                                hover:bg-white
                                hover:shadow-xl
                                hover:shadow-teal-900/5

                                dark:border-zinc-800
                                dark:bg-zinc-900/40

                                dark:hover:border-teal-900
                                dark:hover:bg-zinc-900
                            ">
                            <!-- Main Row -->
                            <button type="button" @click="toggleExperience(index)" class="
                                    flex
                                    w-full
                                    items-start
                                    gap-4
                                    p-5
                                    text-left

                                    sm:p-6
                                ">
                                <!-- Mobile Icon -->
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

                                        dark:bg-teal-950/60
                                        dark:text-teal-400

                                        sm:hidden
                                    ">
                                    <component :is="experience.icon" class="h-4 w-4" :stroke-width="1.5" />
                                </div>

                                <!-- Index -->
                                <div class="
                                        hidden
                                        pt-1
                                        font-mono
                                        text-[9px]
                                        text-zinc-300

                                        dark:text-zinc-700

                                        sm:block
                                    ">
                                    0{{ index + 1 }}
                                </div>

                                <!-- Main Information -->
                                <div class="min-w-0 flex-1">
                                    <!-- Type -->
                                    <div class="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-2
                                        ">
                                        <span class="
                                                font-mono
                                                text-[8px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.2em]
                                                text-teal-700

                                                dark:text-teal-400
                                            ">
                                            {{ experience.type }}
                                        </span>

                                        <span class="
                                                h-1
                                                w-1
                                                rounded-full
                                                bg-zinc-300

                                                dark:bg-zinc-700
                                            "></span>

                                        <span class="
                                                font-mono
                                                text-[8px]
                                                text-zinc-400
                                            ">
                                            {{ experience.location }}
                                        </span>
                                    </div>

                                    <!-- Title -->
                                    <h3 class="
                                            mt-2
                                            text-base
                                            font-bold
                                            tracking-tight
                                            text-zinc-900

                                            dark:text-white

                                            sm:text-lg
                                        ">
                                        {{ experience.title }}
                                    </h3>

                                    <!-- Company -->
                                    <p class="
                                            mt-1
                                            font-mono
                                            text-[10px]
                                            font-medium
                                            text-amber-600

                                            dark:text-amber-400
                                        ">
                                        {{ experience.company }}
                                    </p>

                                    <!-- Tags -->
                                    <div class="
                                            mt-3
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-2
                                        ">
                                        <!-- Status -->
                                        <span class="
                                                inline-flex
                                                items-center
                                                gap-1.5
                                                rounded-full
                                                border
                                                border-emerald-200
                                                bg-emerald-50
                                                px-2
                                                py-1
                                                font-mono
                                                text-[8px]
                                                text-emerald-700

                                                dark:border-emerald-900
                                                dark:bg-emerald-950/40
                                                dark:text-emerald-400
                                            ">
                                            <span class="
                                                    h-1.5
                                                    w-1.5
                                                    rounded-full
                                                    bg-emerald-500
                                                "></span>

                                            {{ experience.status }}
                                        </span>
                                    </div>
                                </div>

                                <!-- Date / Expand -->
                                <div class="
                                        flex
                                        shrink-0
                                        flex-col
                                        items-end
                                        gap-3
                                    ">
                                    <span class="
                                            font-mono
                                            text-[8px]
                                            font-medium
                                            text-zinc-400

                                            sm:text-[9px]
                                        ">
                                        {{ experience.date }}
                                    </span>

                                    <span class="
                                            flex
                                            h-7
                                            w-7
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-zinc-200
                                            text-zinc-400
                                            transition-all
                                            duration-300

                                            group-hover:border-teal-200
                                            group-hover:text-teal-600

                                            dark:border-zinc-800
                                            dark:group-hover:border-teal-900
                                            dark:group-hover:text-teal-400
                                        ">
                                        <ChevronDown class="
                                                h-3.5
                                                w-3.5
                                                transition-transform
                                                duration-300
                                            " :class="{
                                                'rotate-180':
                                                    expandedExperience === index,
                                            }" />
                                    </span>
                                </div>
                            </button>

                            <!-- Description -->
                            <div class="px-5 pb-5 sm:px-6">
                                <p class="
                                        max-w-3xl
                                        border-l
                                        border-zinc-200
                                        pl-4
                                        font-mono
                                        text-[10px]
                                        leading-5
                                        text-zinc-500

                                        dark:border-zinc-800
                                        dark:text-zinc-400

                                        sm:text-xs
                                    ">
                                    {{ experience.description }}
                                </p>
                            </div>

                            <!-- Expanded -->
                            <Transition enter-active-class="transition-all duration-300 ease-out"
                                enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[700px] opacity-100"
                                leave-active-class="transition-all duration-200 ease-in"
                                leave-from-class="max-h-[700px] opacity-100" leave-to-class="max-h-0 opacity-0">
                                <div v-if="expandedExperience === index" class="
                                        overflow-hidden
                                        border-t
                                        border-zinc-200
                                        bg-white/40
                                        px-5
                                        py-5

                                        dark:border-zinc-800
                                        dark:bg-black/10

                                        sm:px-6
                                        sm:py-6
                                    ">
                                    <div class="
                                            grid
                                            gap-8

                                            lg:grid-cols-[1fr_0.8fr]
                                        ">
                                        <!-- Responsibilities -->
                                        <div>
                                            <div class="
                                                    mb-3
                                                    flex
                                                    items-center
                                                    gap-3
                                                    font-mono
                                                    text-[8px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-zinc-400
                                                ">
                                                <span class="
                                                        h-px
                                                        w-6
                                                        bg-zinc-300

                                                        dark:bg-zinc-700
                                                    "></span>

                                                Responsibilities
                                            </div>

                                            <ul class="space-y-2.5">
                                                <li v-for="responsibility in experience.responsibilities"
                                                    :key="responsibility" class="
                                                        flex
                                                        items-start
                                                        gap-3
                                                        font-mono
                                                        text-[10px]
                                                        leading-5
                                                        text-zinc-500

                                                        dark:text-zinc-400

                                                        sm:text-xs
                                                    ">
                                                    <span class="
                                                            mt-2
                                                            h-1
                                                            w-1
                                                            shrink-0
                                                            rounded-full
                                                            bg-teal-500
                                                        "></span>

                                                    <span>
                                                        {{ responsibility }}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <!-- Technologies -->
                                        <div>
                                            <div class="
                                                    mb-3
                                                    flex
                                                    items-center
                                                    gap-3
                                                    font-mono
                                                    text-[8px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-zinc-400
                                                ">
                                                <span class="
                                                        h-px
                                                        w-6
                                                        bg-zinc-300

                                                        dark:bg-zinc-700
                                                    "></span>

                                                Tools & Technologies
                                            </div>

                                            <div class="
                                                    flex
                                                    flex-wrap
                                                    gap-1.5
                                                ">
                                                <span v-for="technology in experience.technologies" :key="technology"
                                                    class="
                                                        rounded-full
                                                        border
                                                        border-zinc-200
                                                        bg-[#F7F7F5]
                                                        px-2.5
                                                        py-1.5
                                                        font-mono
                                                        text-[9px]
                                                        text-zinc-500

                                                        dark:border-zinc-800
                                                        dark:bg-zinc-950
                                                        dark:text-zinc-400
                                                    ">
                                                    {{ technology }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- View Details -->
                                    <a href="#projects" class="
                                            group/link
                                            mt-6
                                            inline-flex
                                            items-center
                                            gap-2
                                            font-mono
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.15em]
                                            text-teal-700

                                            dark:text-teal-400
                                        ">
                                        Related Work

                                        <ArrowUpRight class="
                                                h-3
                                                w-3
                                                transition-transform
                                                duration-300

                                                group-hover/link:-translate-y-0.5
                                                group-hover/link:translate-x-0.5
                                            " />
                                    </a>
                                </div>
                            </Transition>
                        </div>
                    </article>
                </div>
            </div>

            <!-- Bottom -->
            <div class="
                    mt-12
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-zinc-200
                    pt-5
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-zinc-400

                    dark:border-zinc-800

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                ">
                <span>
                    EXPERIENCE / SUPPORT / DEVELOPMENT
                </span>

                <span class="flex items-center gap-2">
                    <span class="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-emerald-500
                        "></span>

                    Continuously learning
                </span>
            </div>
        </div>
    </section>
</template>