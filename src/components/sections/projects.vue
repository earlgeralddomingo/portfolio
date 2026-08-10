<script setup>
import { ref, computed } from 'vue'
import { Construction } from 'lucide-vue-next'

import hrtsImage from '../../assets/image/hrts.svg'
import climsImage from '../../assets/image/clims.svg'
import arcguideImage from '../../assets/image/arcguide.svg'
import rdsAutoworkzImage from '../../assets/image/rdsLogo.jpg'


const categories = [
    'All',
    'Academic',
    'Personal',
    'Client Projects',
    'Under Development',
    'Videos'
]


const selectedCategory = ref('All')


const projects = [
    {
        title: 'Human Resources Ticketing System',
        type: 'ACADEMIC PROJECT',
        category: 'Academic',
        status: 'Completed',

        image: hrtsImage,

        description:
            'A web-based Human Resources ticketing system developed to streamline employee support requests, improve request tracking, and organize IT-related concerns.',

        technologies: [
            'PHP',
            'MySQL',
            'Bootstrap',
            'JavaScript'
        ],

        role: 'FULL-STACK DEVELOPER'
    },


    {
        title: 'Cooperative Loan Management System',
        type: 'ACADEMIC PROJECT',
        category: 'Academic',
        status: 'Completed',

        image: climsImage,

        description:
            'A cooperative loan management system developed to manage member records, share capital, loan applications, and loan calculations.',

        technologies: [
            'PHP',
            'MySQL',
            'Bootstrap',
            'JavaScript'
        ],

        role: 'FULL-STACK DEVELOPER'
    },


    {
        title: 'ArcGuide Tourism Hub',
        type: 'PERSONAL PROJECT',
        category: 'Personal',
        status: 'Under Development',

        image: arcguideImage,

        description:
            'A tourism platform focused on showcasing destinations, travel information, and useful resources through a modern web interface.',

        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL'
        ],

        role: 'WEB DEVELOPER'
    },


    {
        title: 'RDS Autoworkz',
        type: 'CLIENT PROJECT',
        category: 'Client Projects',
        status: 'Under Development',

        image: rdsAutoworkzImage,

        description:
            'A responsive automotive service website for RDS Autoworkz, designed to showcase car repainting, car detailing, engine detailing, dent removal, and interior detailing services.',

        technologies: [
            'Vue.js',
            'Tailwind CSS',
            'JavaScript',
            'HTML'
        ],

        role: 'WEB DEVELOPER'
    }
]


/* ================================================= */
/* VIDEOS */
/* ================================================= */

const videos = [
    // Add your videos here when available.
    // Example:
    //
    // {
    //     id: '123456789',
    //     title: 'Mobile Legends Gameplay',
    //     type: 'TIKTOK CONTENT'
    // }
]


/* ================================================= */
/* FILTERED PROJECTS */
/* ================================================= */

const filteredProjects = computed(() => {

    /* ========================= */
    /* ALL */
    /* ========================= */

    if (selectedCategory.value === 'All') {
        return projects
    }


    /* ========================= */
    /* UNDER DEVELOPMENT */
    /* ========================= */

    if (selectedCategory.value === 'Under Development') {

        return projects.filter(
            project => project.status === 'Under Development'
        )

    }


    /* ========================= */
    /* NORMAL CATEGORIES */
    /* ========================= */

    return projects.filter(
        project => project.category === selectedCategory.value
    )

})


/* ================================================= */
/* SHOW VIDEOS */
/* ================================================= */

const showVideos = computed(() => {

    return selectedCategory.value === 'Videos'

})
</script>


<template>

    <section id="projects" class="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div class="mx-auto max-w-7xl">

            <!-- ========================= -->
            <!-- Section Label -->
            <!-- ========================= -->

            <div
                class="mb-8 flex items-center gap-3 font-mono text-base font-semibold tracking-wide text-indigo-500 sm:text-lg">

                <span class="h-2 w-2 rounded-full bg-indigo-500"></span>

                <span>
                    PROJECTS
                </span>

            </div>


            <!-- ========================= -->
            <!-- Heading -->
            <!-- ========================= -->

            <div class="max-w-3xl">

                <h2
                    class="text-3xl font-bold leading-none tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">

                    PROJECT

                    <span class="text-indigo-500">
                        HIGHLIGHTS
                    </span>

                </h2>


                <p class="mt-5 max-w-2xl font-mono text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">

                    A selection of academic, personal, and client projects
                    focused on solving real-world problems through technology.

                </p>

            </div>


            <!-- ========================= -->
            <!-- Category Filter -->
            <!-- ========================= -->

            <div class="mt-8 flex flex-wrap gap-2">

                <button v-for="category in categories" :key="category" type="button"
                    @click="selectedCategory = category"
                    class="rounded-full border px-3 py-1.5 font-mono text-[10px] transition-all duration-300 sm:px-4 sm:py-2 sm:text-xs"
                    :class="selectedCategory === category
                        ? 'border-indigo-300 bg-indigo-500 text-white shadow-md shadow-indigo-200/40'
                        : 'border-slate-200 bg-white/70 text-slate-500 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600'
                        ">

                    {{ category }}

                </button>

            </div>


            <!-- ================================================= -->
            <!-- PROJECT CARDS -->
            <!-- ================================================= -->

            <div v-if="!showVideos" class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                <!-- ========================= -->
                <!-- PROJECT CARD -->
                <!-- ========================= -->

                <article v-for="(project, index) in filteredProjects" :key="project.title"
                    class="group flex h-full flex-col rounded-xl border border-slate-200 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40">

                    <!-- ========================= -->
                    <!-- Project Image -->
                    <!-- ========================= -->

                    <div class="mb-5 h-40 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">

                        <img :src="project.image" :alt="`${project.title} project preview`"
                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    </div>


                    <!-- ========================= -->
                    <!-- Card Top -->
                    <!-- ========================= -->

                    <div class="flex items-start justify-between gap-4">

                        <div>

                            <p class="font-mono text-[10px] font-semibold tracking-[0.15em] text-violet-400">

                                {{ project.type }}

                            </p>


                            <h3 class="mt-2 font-mono text-base font-semibold leading-6 text-slate-900">

                                {{ project.title }}

                            </h3>

                        </div>


                        <!-- Project Number -->

                        <span class="font-mono text-xs text-slate-300">

                            {{ String(index + 1).padStart(2, '0') }}

                        </span>

                    </div>


                    <!-- ========================= -->
                    <!-- Status -->
                    <!-- ========================= -->

                    <div class="mt-4">

                        <!-- Under Development -->

                        <span v-if="project.status === 'Under Development'"
                            class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 font-mono text-[10px] text-amber-600">

                            <Construction class="h-3 w-3 animate-pulse" />

                            <span class="animate-pulse">

                                {{ project.status }}

                            </span>

                        </span>


                        <!-- Completed -->

                        <span v-else
                            class="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 font-mono text-[10px] text-indigo-600">

                            <span class="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>

                            {{ project.status }}

                        </span>

                    </div>


                    <!-- ========================= -->
                    <!-- Divider -->
                    <!-- ========================= -->

                    <div class="my-4 h-px bg-slate-200"></div>


                    <!-- ========================= -->
                    <!-- Description -->
                    <!-- ========================= -->

                    <p class="font-mono text-xs leading-6 text-slate-500">

                        {{ project.description }}

                    </p>


                    <!-- ========================= -->
                    <!-- Technologies -->
                    <!-- ========================= -->

                    <div class="mt-5 flex flex-wrap gap-2">

                        <span v-for="technology in project.technologies" :key="technology"
                            class="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] text-slate-600 transition-all duration-300 group-hover:border-indigo-100">

                            {{ technology }}

                        </span>

                    </div>


                    <!-- ========================= -->
                    <!-- Bottom -->
                    <!-- ========================= -->

                    <div class="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">

                        <span class="font-mono text-[10px] text-slate-400">

                            ROLE

                        </span>


                        <span class="font-mono text-[10px] font-medium text-indigo-500">

                            {{ project.role }}

                        </span>

                    </div>

                </article>


                <!-- ================================================= -->
                <!-- NO PROJECTS -->
                <!-- ================================================= -->

                <div v-if="filteredProjects.length === 0"
                    class="col-span-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white/50 py-16 text-center">

                    <!-- Empty Indicator -->

                    <div
                        class="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white">

                        <span class="h-2 w-2 rounded-full bg-slate-300"></span>

                    </div>


                    <!-- Empty Title -->

                    <p class="font-mono text-sm font-semibold text-slate-600">

                        No projects yet

                    </p>


                    <!-- Empty Description -->

                    <p class="mt-2 max-w-sm font-mono text-xs leading-5 text-slate-400">

                        There are currently no projects available under
                        <span class="font-semibold text-slate-500">
                            {{ selectedCategory }}
                        </span>.

                    </p>

                </div>

            </div>


            <!-- ================================================= -->
            <!-- VIDEOS -->
            <!-- ================================================= -->

            <div v-else class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                <!-- ========================= -->
                <!-- VIDEO CARDS -->
                <!-- ========================= -->

                <article v-for="(video, index) in videos" :key="video.id"
                    class="group flex h-full flex-col rounded-xl border border-slate-200 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40">

                    <!-- ========================= -->
                    <!-- TikTok Video Preview -->
                    <!-- ========================= -->

                    <div class="relative h-80 overflow-hidden rounded-lg border border-slate-200 bg-slate-950">

                        <iframe
                            :src="`https://www.tiktok.com/player/v1/${video.id}?autoplay=1&loop=1&muted=1&controls=1&description=0&music_info=0`"
                            class="absolute inset-0 h-full w-full" frameborder="0" allow="autoplay; fullscreen"
                            allowfullscreen loading="lazy" :title="video.title"></iframe>

                    </div>


                    <!-- ========================= -->
                    <!-- Video Information -->
                    <!-- ========================= -->

                    <div class="mt-5">

                        <p class="font-mono text-[10px] font-semibold tracking-[0.15em] text-violet-400">

                            {{ video.type }}

                        </p>


                        <h3 class="mt-2 font-mono text-base font-semibold leading-6 text-slate-900">

                            {{ video.title }}

                        </h3>

                    </div>


                    <!-- ========================= -->
                    <!-- Video Bottom -->
                    <!-- ========================= -->

                    <div class="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">

                        <span class="font-mono text-[10px] text-slate-400">

                            VIDEO

                        </span>


                        <span class="font-mono text-[10px] font-medium text-indigo-500">

                            CONTENT

                        </span>

                    </div>

                </article>


                <!-- ================================================= -->
                <!-- NO VIDEOS -->
                <!-- ================================================= -->

                <div v-if="videos.length === 0"
                    class="col-span-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white/50 py-16 text-center">

                    <!-- Empty Indicator -->

                    <div
                        class="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white">

                        <span class="h-2 w-2 rounded-full bg-slate-300"></span>

                    </div>


                    <!-- Empty Title -->

                    <p class="font-mono text-sm font-semibold text-slate-600">

                        No videos yet

                    </p>


                    <!-- Empty Description -->

                    <p class="mt-2 max-w-sm font-mono text-xs leading-5 text-slate-400">

                        Video content will appear here once
                        it becomes available.

                    </p>

                </div>

            </div>


            <!-- ========================= -->
            <!-- Bottom Statement -->
            <!-- ========================= -->

            <div
                class="mt-8 flex items-center justify-center gap-2 text-center font-mono text-[10px] text-slate-500 sm:text-xs">

                <span class="h-2 w-2 rounded-full bg-violet-400"></span>

                Building practical solutions through technology.

            </div>

        </div>

    </section>

</template>