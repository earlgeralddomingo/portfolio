<script setup>
import {
    MonitorCog,
    Code2,
    Wrench,
    Palette,
} from 'lucide-vue-next'

const techStack = [
    {
        category: 'IT SUPPORT',
        description: 'Systems, troubleshooting & infrastructure',
        icon: MonitorCog,
        items: [
            'Windows 10/11',
            'Hardware Troubleshooting',
            'Software Troubleshooting',
            'Printer Support',
            'Network Troubleshooting',
            'LAN / Wi-Fi',
            'CCTV',
            'Remote Support',
            'PC Maintenance',
        ],
    },

    {
        category: 'WEB DEVELOPMENT',
        description: 'Web applications & development',
        icon: Code2,
        items: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL',
            'Vue.js',
            'Tailwind CSS',
            'Bootstrap',
        ],
    },

    {
        category: 'TOOLS & WORKFLOW',
        description: 'Development, IT support & productivity',
        icon: Wrench,
        items: [
            'VS Code',
            'XAMPP',
            'phpMyAdmin',
            'GitHub',
            'AnyDesk',
            'TeamViewer',
            'Microsoft Office',
        ],
    },

    {
        category: 'DESIGN & MEDIA',
        description: 'Basic design, UI/UX & media editing',
        icon: Palette,
        items: [
            'Photoshop',
            'Canva',
            'Figma',
            'DaVinci Resolve',
            'CapCut',
        ],
    },
]
</script>

<template>
    <section id="techstack" class="
            flex
            min-h-screen
            items-center
            bg-slate-50
            px-6
            py-16
            dark:bg-gray-950
            sm:px-8
            lg:px-12
        ">
        <div class="mx-auto w-full max-w-6xl">

            <!-- ================================= -->
            <!-- Section Label -->
            <!-- ================================= -->

            <div class="
                    mb-5
                    flex
                    items-center
                    gap-3
                    font-mono
                    text-sm
                    font-semibold
                    tracking-wide
                    text-indigo-500
                    sm:text-base
                ">
                <span class="
                        h-2
                        w-2
                        rounded-full
                        bg-indigo-500
                    "></span>

                <span>TECH STACK</span>
            </div>


            <!-- ================================= -->
            <!-- Heading -->
            <!-- ================================= -->

            <div class="max-w-3xl">

                <h2 class="
                        text-3xl
                        font-bold
                        leading-none
                        tracking-tight
                        text-slate-950
                        dark:text-white
                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                    ">
                    TOOLS I

                    <span class="text-indigo-500">
                        WORK
                    </span>

                    <span class="block">
                        WITH
                    </span>
                </h2>


                <p class="
                        mt-4
                        max-w-2xl
                        font-mono
                        text-xs
                        leading-6
                        text-slate-600
                        dark:text-gray-400
                        sm:text-sm
                        sm:leading-7
                    ">
                    A practical set of technologies and tools I use for
                    technical support, troubleshooting, system maintenance,
                    web development, and creative work.
                </p>

            </div>


            <!-- ================================= -->
            <!-- Tech Stack Cards -->
            <!-- ================================= -->

            <div class="
                    mt-8
                    grid
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-2
                ">

                <!-- ================================= -->
                <!-- Card -->
                <!-- ================================= -->

                <div v-for="(stack, index) in techStack" :key="stack.category" class="
                        group
                        rounded-xl
                        border
                        border-slate-200
                        bg-white/70
                        p-5
                        backdrop-blur-sm
                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-indigo-200
                        hover:shadow-lg
                        hover:shadow-indigo-100/40

                        dark:border-gray-800
                        dark:bg-gray-900/70
                        dark:hover:border-indigo-800
                        dark:hover:shadow-indigo-950/30
                    ">

                    <!-- ================================= -->
                    <!-- Card Header -->
                    <!-- ================================= -->

                    <div class="
                            flex
                            items-start
                            justify-between
                            gap-4
                        ">

                        <!-- Icon + Information -->

                        <div class="
                                flex
                                min-w-0
                                items-start
                                gap-3
                            ">

                            <!-- Category Icon -->

                            <div class="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-indigo-50
                                    text-indigo-500
                                    transition-all
                                    duration-300

                                    group-hover:bg-indigo-100
                                    group-hover:scale-105

                                    dark:bg-indigo-950
                                    dark:text-indigo-400
                                    dark:group-hover:bg-indigo-900
                                ">
                                <component :is="stack.icon" class="h-5 w-5" />
                            </div>


                            <!-- Category Information -->

                            <div class="min-w-0">

                                <h3 class="
                                        font-mono
                                        text-xs
                                        font-semibold
                                        tracking-wide
                                        text-slate-900
                                        dark:text-white
                                        sm:text-sm
                                    ">
                                    {{ stack.category }}
                                </h3>


                                <p class="
                                        mt-1
                                        font-mono
                                        text-[9px]
                                        leading-4
                                        text-slate-500
                                        dark:text-gray-400
                                        sm:text-[10px]
                                    ">
                                    {{ stack.description }}
                                </p>

                            </div>

                        </div>


                        <!-- Number -->

                        <span class="
                                shrink-0
                                font-mono
                                text-[10px]
                                text-violet-400
                                sm:text-xs
                            ">
                            0{{ index + 1 }}
                        </span>

                    </div>


                    <!-- ================================= -->
                    <!-- Divider -->
                    <!-- ================================= -->

                    <div class="
                            my-4
                            h-px
                            bg-slate-200
                            dark:bg-gray-800
                        "></div>


                    <!-- ================================= -->
                    <!-- Technologies -->
                    <!-- TWO COLUMNS -->
                    <!-- ================================= -->

                    <div class="
                            grid
                            grid-cols-2
                            gap-1.5
                        ">

                        <span v-for="item in stack.items" :key="item" class="
                                rounded-lg
                                border
                                border-slate-200
                                bg-slate-50
                                px-2
                                py-1.5
                                font-mono
                                text-[9px]
                                leading-4
                                text-slate-600
                                transition-all
                                duration-300

                                hover:border-indigo-200
                                hover:bg-indigo-50
                                hover:text-indigo-600

                                dark:border-gray-700
                                dark:bg-gray-950
                                dark:text-gray-400
                                dark:hover:border-indigo-700
                                dark:hover:bg-indigo-950
                                dark:hover:text-indigo-400

                                sm:text-[10px]
                            ">
                            {{ item }}
                        </span>

                    </div>

                </div>

            </div>


            <!-- ================================= -->
            <!-- Bottom Statement -->
            <!-- ================================= -->

            <div class="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-mono
                    text-[9px]
                    text-slate-500
                    dark:text-gray-400
                    sm:text-[10px]
                ">

                <span class="
                        h-2
                        w-2
                        rounded-full
                        bg-violet-400
                    "></span>

                Continuously learning and expanding my technical toolkit.

            </div>

        </div>
    </section>
</template>