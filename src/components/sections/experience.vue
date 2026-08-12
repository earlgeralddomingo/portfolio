<script setup>
import { ref } from 'vue'
import {
    BriefcaseBusiness,
    GraduationCap,
    ChevronDown
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
            'Used remote support tools such as AnyDesk and TeamViewer.'
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
            'Microsoft Office'
        ]
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
            'Performed troubleshooting and technical tasks as needed.'
        ],

        technologies: [
            'Windows',
            'Hardware',
            'Software Support',
            'Networking',
            'Microsoft Office'
        ]
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
            'Created technical documentation and a system manual for the HRTS.'
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
            'CCTV'
        ]
    }
]


const expandedExperience = ref(null)


const toggleExperience = (index) => {
    expandedExperience.value =
        expandedExperience.value === index ? null : index
}
</script>


<template>
    <section id="experience" class="
            bg-white
            px-6 py-20
            dark:bg-gray-950
            sm:px-8
            lg:px-12
            lg:py-24
        ">
        <div class="mx-auto max-w-7xl">


            <!-- ======================================== -->
            <!-- Section Label -->
            <!-- ======================================== -->

            <div class="
                    mb-8
                    flex
                    items-center
                    gap-3
                    font-mono
                    text-base
                    font-semibold
                    tracking-wide
                    text-indigo-500
                    sm:text-lg
                ">
                <span class="
                        h-2
                        w-2
                        rounded-full
                        bg-indigo-500
                    "></span>

                <span>EXPERIENCE</span>
            </div>



            <!-- ======================================== -->
            <!-- Heading -->
            <!-- ======================================== -->

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
                    PROFESSIONAL

                    <span class="text-indigo-500">
                        JOURNEY
                    </span>
                </h2>


                <p class="
                        mt-5
                        max-w-2xl
                        font-mono
                        text-xs
                        leading-6
                        text-slate-600
                        dark:text-gray-400
                        sm:text-sm
                        sm:leading-7
                    ">
                    A timeline of my professional, freelance, and hands-on
                    IT experience, including technical support and system
                    development.
                </p>

            </div>



            <!-- ======================================== -->
            <!-- Experience Timeline -->
            <!-- ======================================== -->

            <div class="relative mt-12">


                <!-- Timeline Line -->

                <div class="
                        absolute
                        left-[19px]
                        top-2
                        hidden
                        h-[calc(100%-8px)]
                        w-px
                        bg-slate-200
                        dark:bg-gray-800
                        sm:block
                    "></div>



                <!-- Experience Items -->

                <div class="space-y-6">

                    <article v-for="(experience, index) in experiences" :key="experience.title" class="
                            relative
                            sm:pl-14
                        ">


                        <!-- Timeline Icon -->

                        <div class="
                                absolute
                                left-0
                                top-6
                                hidden
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-indigo-200
                                bg-indigo-50
                                text-indigo-500
                                shadow-sm
                                dark:border-indigo-900
                                dark:bg-indigo-950
                                dark:text-indigo-400
                                sm:flex
                            ">
                            <component :is="experience.icon" class="h-4 w-4" />
                        </div>



                        <!-- Experience Card -->

                        <div class="
                                group
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50/70
                                p-5
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-indigo-200
                                hover:bg-white
                                hover:shadow-lg
                                hover:shadow-indigo-100/40
                                dark:border-gray-800
                                dark:bg-gray-900/70
                                dark:hover:border-indigo-800
                                dark:hover:bg-gray-900
                                dark:hover:shadow-indigo-950/30
                            ">


                            <!-- Card Header -->

                            <button type="button" class="
                                    flex
                                    w-full
                                    items-start
                                    justify-between
                                    gap-5
                                    text-left
                                " @click="toggleExperience(index)">

                                <div class="min-w-0">


                                    <!-- Mobile Icon -->

                                    <div class="
                                            mb-4
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-indigo-200
                                            bg-indigo-50
                                            text-indigo-500
                                            dark:border-indigo-900
                                            dark:bg-indigo-950
                                            dark:text-indigo-400
                                            sm:hidden
                                        ">
                                        <component :is="experience.icon" class="h-4 w-4" />
                                    </div>



                                    <!-- Type -->

                                    <p class="
                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            tracking-[0.15em]
                                            text-violet-400
                                        ">
                                        {{ experience.type }}
                                    </p>



                                    <!-- Job Title -->

                                    <h3 class="
                                            mt-2
                                            font-mono
                                            text-base
                                            font-semibold
                                            leading-6
                                            text-slate-900
                                            dark:text-white
                                            sm:text-lg
                                        ">
                                        {{ experience.title }}
                                    </h3>



                                    <!-- Company -->

                                    <p class="
                                            mt-1
                                            font-mono
                                            text-xs
                                            font-medium
                                            text-indigo-500
                                        ">
                                        {{ experience.company }}
                                    </p>

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
                                            text-[10px]
                                            text-slate-400
                                            dark:text-gray-500
                                            sm:text-xs
                                        ">
                                        {{ experience.date }}
                                    </span>


                                    <ChevronDown class="
                                            h-4
                                            w-4
                                            text-slate-400
                                            transition-transform
                                            duration-300
                                        " :class="{
                                            'rotate-180':
                                                expandedExperience === index
                                        }" />

                                </div>

                            </button>



                            <!-- Basic Information -->

                            <div class="
                                    mt-4
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-2
                                ">


                                <!-- Status -->

                                <span class="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-indigo-200
                                        bg-indigo-50
                                        px-2.5
                                        py-1
                                        font-mono
                                        text-[10px]
                                        text-indigo-600
                                        dark:border-indigo-900
                                        dark:bg-indigo-950/40
                                        dark:text-indigo-400
                                    ">
                                    <span class="
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-indigo-400
                                        "></span>

                                    {{ experience.status }}
                                </span>



                                <!-- Location -->

                                <span class="
                                        rounded-full
                                        border
                                        border-slate-200
                                        bg-white
                                        px-2.5
                                        py-1
                                        font-mono
                                        text-[10px]
                                        text-slate-500
                                        dark:border-gray-700
                                        dark:bg-gray-950
                                        dark:text-gray-400
                                    ">
                                    {{ experience.location }}
                                </span>

                            </div>



                            <!-- Description -->

                            <p class="
                                    mt-4
                                    max-w-3xl
                                    font-mono
                                    text-xs
                                    leading-6
                                    text-slate-500
                                    dark:text-gray-400
                                ">
                                {{ experience.description }}
                            </p>



                            <!-- Expanded Content -->

                            <Transition enter-active-class="transition-all duration-300 ease-out"
                                enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-[600px] opacity-100"
                                leave-active-class="transition-all duration-200 ease-in"
                                leave-from-class="max-h-[600px] opacity-100" leave-to-class="max-h-0 opacity-0">

                                <div v-if="expandedExperience === index" class="
                                        mt-5
                                        overflow-hidden
                                        border-t
                                        border-slate-200
                                        pt-5
                                        dark:border-gray-800
                                    ">


                                    <!-- Responsibilities -->

                                    <div>

                                        <p class="
                                                font-mono
                                                text-[10px]
                                                font-semibold
                                                tracking-[0.15em]
                                                text-slate-400
                                                dark:text-gray-500
                                            ">
                                            RESPONSIBILITIES
                                        </p>


                                        <ul class="
                                                mt-3
                                                space-y-2
                                            ">

                                            <li v-for="responsibility in experience.responsibilities"
                                                :key="responsibility" class="
                                                    flex
                                                    items-start
                                                    gap-3
                                                    font-mono
                                                    text-xs
                                                    leading-5
                                                    text-slate-500
                                                    dark:text-gray-400
                                                ">

                                                <span class="
                                                        mt-2
                                                        h-1
                                                        w-1
                                                        shrink-0
                                                        rounded-full
                                                        bg-indigo-400
                                                    "></span>


                                                <span>
                                                    {{ responsibility }}
                                                </span>

                                            </li>

                                        </ul>

                                    </div>



                                    <!-- Technologies -->

                                    <div class="mt-6">

                                        <p class="
                                                font-mono
                                                text-[10px]
                                                font-semibold
                                                tracking-[0.15em]
                                                text-slate-400
                                                dark:text-gray-500
                                            ">
                                            TOOLS & TECHNOLOGIES
                                        </p>


                                        <div class="
                                                mt-3
                                                flex
                                                flex-wrap
                                                gap-2
                                            ">

                                            <span v-for="technology in experience.technologies" :key="technology" class="
                                                    rounded-full
                                                    border
                                                    border-slate-200
                                                    bg-slate-50
                                                    px-2.5
                                                    py-1
                                                    font-mono
                                                    text-[10px]
                                                    text-slate-600
                                                    dark:border-gray-700
                                                    dark:bg-gray-950
                                                    dark:text-gray-400
                                                ">
                                                {{ technology }}
                                            </span>

                                        </div>

                                    </div>


                                </div>

                            </Transition>


                        </div>

                    </article>

                </div>

            </div>



            <!-- ======================================== -->
            <!-- Bottom Statement -->
            <!-- ======================================== -->

            <div class="
                    mt-10
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-center
                    font-mono
                    text-[10px]
                    text-slate-500
                    dark:text-gray-400
                    sm:text-xs
                ">

                <span class="
                        h-2
                        w-2
                        rounded-full
                        bg-violet-400
                    "></span>

                Growing through hands-on experience and continuous learning.

            </div>


        </div>
    </section>
</template>