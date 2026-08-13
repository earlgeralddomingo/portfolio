<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
    Construction,
    X,
    ExternalLink,
    Github,
    ArrowUpRight
} from 'lucide-vue-next'

import hrtsImage from '../../assets/image/hrts.svg'
import climsImage from '../../assets/image/clims.svg'
import arcguideImage from '../../assets/image/arcguide.svg'
import rdsAutoworkzImage from '../../assets/image/rdsLogo.jpg'
import cssGeneratorImage from '../../assets/image/cssGenerator.gif'

// ========================================
// Categories
// ========================================

const categories = [
    'All',
    'Academic',
    'Personal',
    'Client Projects',
    'Graphic Design',
    'Videos',
    'Under Development'
]

const selectedCategory = ref('All')

// ========================================
// Project Data
// ========================================

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
            'HTML',
            'CSS',
            'PHP',
            'MySQL',
            'Bootstrap',
            'JavaScript'
        ],

        role: 'FULL-STACK DEVELOPER',

        features: [
            'Employee support request submission',
            'Ticket tracking and management',
            'IT-related concern organization',
            'Request status monitoring',
            'Database-driven ticket records'
        ],

        highlights: [
            'Designed and developed the system architecture',
            'Implemented the backend using PHP and MySQL',
            'Created the user interface using Bootstrap and JavaScript',
            'Worked on database structure and ticket management logic'
        ],

        github: '',
        liveDemo: ''
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
            'HTML',
            'CSS',
            'PHP',
            'MySQL',
            'Bootstrap',
            'JavaScript'
        ],

        role: 'FULL-STACK DEVELOPER',

        features: [
            'Member record management',
            'Share capital management',
            'Loan application processing',
            'Loan calculation',
            'Cooperative member tracking'
        ],

        highlights: [
            'Developed the system using PHP and MySQL',
            'Implemented loan calculation logic',
            'Created database-driven member management',
            'Designed the application interface using Bootstrap'
        ],

        github: '',
        liveDemo: ''
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

        role: 'WEB DEVELOPER',

        features: [
            'Tourism destination showcase',
            'Travel information',
            'Destination resources',
            'Responsive web interface',
            'Database integration'
        ],

        highlights: [
            'Designed the overall website structure',
            'Developing a modern and responsive interface',
            'Implementing tourism-related content management',
            'Working on the backend and database integration'
        ],

        github: '',
        liveDemo: ''
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

        role: 'WEB DEVELOPER',

        features: [
            'Automotive service showcase',
            'Responsive design',
            'Service information sections',
            'Gallery presentation',
            'Contact section',
            'Mobile navigation'
        ],

        highlights: [
            'Designed the website structure and user interface',
            'Developed the site using Vue.js',
            'Implemented responsive layouts with Tailwind CSS',
            'Created interactive navigation and visual effects',
            'Focused on a modern automotive-oriented visual style'
        ],

        github: '',
        liveDemo: ''
    },

    {
        title: 'CSS Grid Generator',

        type: 'PERSONAL PROJECT',

        category: 'Personal',

        status: 'Under Development',

        image: cssGeneratorImage,

        description:
            'A browser-based CSS Grid generator that allows users to visually configure grid layouts and instantly generate the corresponding CSS code.',

        technologies: [
            'Vue.js',
            'Tailwind CSS',
            'JavaScript',
            'CSS'
        ],

        role: 'FRONT-END DEVELOPER',

        features: [
            'Visual CSS Grid configuration',
            'Column and row controls',
            'Custom column and row gaps',
            'Live grid preview',
            'Generated CSS output',
            'Copy generated CSS'
        ],

        highlights: [
            'Designed and developed the interface using Vue.js',
            'Implemented reactive grid configuration controls',
            'Created a real-time visual grid preview',
            'Implemented automatic CSS generation',
            'Added clipboard functionality for generated CSS'
        ],

        github: '',
        liveDemo: ''
    }
]

// ========================================
// Videos
// ========================================

const videos = []

// ========================================
// Selected Project
// ========================================

const selectedProject = ref(null)

// ========================================
// Computed
// ========================================

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') {
        return projects
    }

    if (selectedCategory.value === 'Under Development') {
        return projects.filter(
            project => project.status === 'Under Development'
        )
    }

    return projects.filter(
        project => project.category === selectedCategory.value
    )
})

const showVideos = computed(() => {
    return selectedCategory.value === 'Videos'
})

// ========================================
// Modal Functions
// ========================================

const openProject = (project) => {
    selectedProject.value = project

    document.body.style.overflow = 'hidden'
}

const closeProject = () => {
    selectedProject.value = null

    document.body.style.overflow = ''
}

// ========================================
// Keyboard Support
// ========================================

const handleKeydown = (event) => {
    if (event.key === 'Escape' && selectedProject.value) {
        closeProject()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
})
</script>

<template>

    <!-- ======================================== -->
    <!-- Projects Section -->
    <!-- ======================================== -->

    <section id="projects" class="
            bg-slate-50
            px-6
            py-20
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

                <span>PROJECTS</span>

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

                    PROJECT

                    <span class="text-indigo-500">
                        HIGHLIGHTS
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
                    A selection of academic, personal, and client projects
                    focused on solving real-world problems through technology.
                </p>

            </div>

            <!-- ======================================== -->
            <!-- Category Filter -->
            <!-- ======================================== -->

            <div class="mt-8 flex flex-wrap gap-2">

                <button v-for="category in categories" :key="category" type="button"
                    @click="selectedCategory = category" class="
                        rounded-full
                        border
                        px-3
                        py-1.5
                        font-mono
                        text-[10px]
                        transition-all
                        duration-300
                        sm:px-4
                        sm:py-2
                        sm:text-xs
                    " :class="selectedCategory === category
                        ? 'border-indigo-300 bg-indigo-500 text-white shadow-md shadow-indigo-200/40 dark:border-indigo-500 dark:shadow-indigo-950/40'
                        : 'border-slate-200 bg-white/70 text-slate-500 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-400 dark:hover:border-indigo-800 dark:hover:bg-indigo-950 dark:hover:text-indigo-400'
                        ">
                    {{ category }}
                </button>

            </div>

            <!-- ======================================== -->
            <!-- Project Cards -->
            <!-- ======================================== -->

            <div v-if="!showVideos" class="
                    mt-8
                    grid
                    gap-5
                    md:grid-cols-2
                    lg:grid-cols-3
                ">

                <article v-for="(project, index) in filteredProjects" :key="project.title" class="
                        group
                        flex
                        h-full
                        flex-col
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

                    <!-- ======================================== -->
                    <!-- Project Image -->
                    <!-- ======================================== -->

                    <div class="
                            mb-5
                            h-40
                            overflow-hidden
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-50
                            dark:border-gray-800
                            dark:bg-gray-950
                        ">

                        <img :src="project.image" :alt="`${project.title} project preview`" class="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            " />

                    </div>

                    <!-- ======================================== -->
                    <!-- Card Top -->
                    <!-- ======================================== -->

                    <div class="
                            flex
                            items-start
                            justify-between
                            gap-4
                        ">

                        <div class="min-w-0">

                            <p class="
                                    font-mono
                                    text-[10px]
                                    font-semibold
                                    tracking-[0.15em]
                                    text-violet-400
                                ">
                                {{ project.type }}
                            </p>

                            <h3 class="
                                    mt-2
                                    font-mono
                                    text-base
                                    font-semibold
                                    leading-6
                                    text-slate-900
                                    dark:text-white
                                ">
                                {{ project.title }}
                            </h3>

                        </div>

                        <span class="
                                shrink-0
                                font-mono
                                text-xs
                                text-slate-300
                                dark:text-gray-600
                            ">
                            {{ String(index + 1).padStart(2, '0') }}
                        </span>

                    </div>

                    <!-- ======================================== -->
                    <!-- Online + Status -->
                    <!-- ======================================== -->

                    <div class="
                            mt-4
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        ">

                        <!-- Online -->

                        <span class="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-emerald-200
                                bg-emerald-50
                                px-2.5
                                py-1
                                font-mono
                                text-[10px]
                                font-medium
                                text-emerald-600
                                dark:border-emerald-900
                                dark:bg-emerald-950/40
                                dark:text-emerald-400
                            ">

                            <span class="relative flex h-2 w-2">

                                <span class="
                                        absolute
                                        inline-flex
                                        h-full
                                        w-full
                                        animate-ping
                                        rounded-full
                                        bg-emerald-400
                                        opacity-75
                                    "></span>

                                <span class="
                                        relative
                                        inline-flex
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-emerald-500
                                    "></span>

                            </span>

                            ONLINE

                        </span>

                        <!-- Under Development -->

                        <span v-if="project.status === 'Under Development'" class="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-amber-200
                                bg-amber-50
                                px-2.5
                                py-1
                                font-mono
                                text-[10px]
                                text-amber-600
                                dark:border-amber-900
                                dark:bg-amber-950/40
                                dark:text-amber-400
                            ">

                            <Construction class="
                                    h-3
                                    w-3
                                    animate-pulse
                                " />

                            <span class="animate-pulse">
                                {{ project.status }}
                            </span>

                        </span>

                        <!-- Completed -->

                        <span v-else class="
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

                            {{ project.status }}

                        </span>

                    </div>

                    <!-- ======================================== -->
                    <!-- Divider -->
                    <!-- ======================================== -->

                    <div class="
                            my-4
                            h-px
                            bg-slate-200
                            dark:bg-gray-800
                        "></div>

                    <!-- ======================================== -->
                    <!-- Description -->
                    <!-- ======================================== -->

                    <p class="
                            font-mono
                            text-xs
                            leading-6
                            text-slate-500
                            dark:text-gray-400
                        ">
                        {{ project.description }}
                    </p>

                    <!-- ======================================== -->
                    <!-- Technologies -->
                    <!-- ======================================== -->

                    <div class="mt-5 flex flex-wrap gap-2">

                        <span v-for="technology in project.technologies" :key="technology" class="
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-50
                                px-2.5
                                py-1
                                font-mono
                                text-[10px]
                                text-slate-600
                                transition-all
                                duration-300
                                group-hover:border-indigo-100
                                dark:border-gray-700
                                dark:bg-gray-950
                                dark:text-gray-400
                                dark:group-hover:border-indigo-900
                            ">
                            {{ technology }}
                        </span>

                    </div>

                    <!-- ======================================== -->
                    <!-- Bottom -->
                    <!-- ======================================== -->

                    <div class="mt-auto pt-5">

                        <div class="
                                mb-4
                                h-px
                                bg-slate-200
                                dark:bg-gray-800
                            "></div>

                        <div class="
                                flex
                                items-center
                                justify-between
                                gap-4
                            ">

                            <!-- Role -->

                            <div class="min-w-0">

                                <span class="
                                        block
                                        font-mono
                                        text-[10px]
                                        text-slate-400
                                        dark:text-gray-500
                                    ">
                                    ROLE
                                </span>

                                <span class="
                                        mt-1
                                        block
                                        truncate
                                        font-mono
                                        text-[10px]
                                        font-medium
                                        text-indigo-500
                                    ">
                                    {{ project.role }}
                                </span>

                            </div>

                            <!-- See More -->

                            <button type="button" @click="openProject(project)" class="
                                    inline-flex
                                    shrink-0
                                    items-center
                                    gap-1.5
                                    rounded-lg
                                    border
                                    border-indigo-200
                                    bg-indigo-50
                                    px-3
                                    py-2
                                    font-mono
                                    text-[10px]
                                    font-semibold
                                    text-indigo-600
                                    transition-all
                                    duration-300
                                    hover:border-indigo-300
                                    hover:bg-indigo-500
                                    hover:text-white
                                    hover:shadow-md
                                    hover:shadow-indigo-200/40
                                    dark:border-indigo-900
                                    dark:bg-indigo-950/40
                                    dark:text-indigo-400
                                    dark:hover:border-indigo-500
                                    dark:hover:bg-indigo-500
                                    dark:hover:text-white
                                ">

                                See More

                                <ArrowUpRight class="
                                        h-3.5
                                        w-3.5
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                    " />

                            </button>

                        </div>

                    </div>

                </article>

                <!-- ======================================== -->
                <!-- No Projects -->
                <!-- ======================================== -->

                <div v-if="filteredProjects.length === 0" class="
                        col-span-full
                        flex
                        flex-col
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-dashed
                        border-slate-200
                        bg-white/50
                        py-16
                        text-center
                        dark:border-gray-800
                        dark:bg-gray-900/50
                    ">

                    <div class="
                            mb-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            dark:border-gray-800
                            dark:bg-gray-950
                        ">

                        <span class="
                                h-2
                                w-2
                                rounded-full
                                bg-slate-300
                                dark:bg-gray-600
                            "></span>

                    </div>

                    <p class="
                            font-mono
                            text-sm
                            font-semibold
                            text-slate-600
                            dark:text-gray-300
                        ">
                        No projects yet
                    </p>

                    <p class="
                            mt-2
                            max-w-sm
                            font-mono
                            text-xs
                            leading-5
                            text-slate-400
                        ">
                        There are currently no projects available under

                        <span class="
                                font-semibold
                                text-slate-500
                                dark:text-gray-300
                            ">
                            {{ selectedCategory }}
                        </span>.
                    </p>

                </div>

            </div>

            <!-- ======================================== -->
            <!-- Videos -->
            <!-- ======================================== -->

            <div v-else class="
                    mt-8
                    grid
                    gap-5
                    md:grid-cols-2
                    lg:grid-cols-3
                ">

                <article v-for="(video, index) in videos" :key="video.id" class="
                        group
                        flex
                        h-full
                        flex-col
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

                    <!-- TikTok Preview -->

                    <div class="
                            relative
                            h-80
                            overflow-hidden
                            rounded-lg
                            border
                            border-slate-200
                            bg-slate-950
                            dark:border-gray-800
                        ">

                        <iframe
                            :src="`https://www.tiktok.com/player/v1/${video.id}?autoplay=1&loop=1&muted=1&controls=1&description=0&music_info=0`"
                            class="
                                absolute
                                inset-0
                                h-full
                                w-full
                            " frameborder="0" allow="autoplay; fullscreen" allowfullscreen loading="lazy"
                            :title="video.title"></iframe>

                    </div>

                    <!-- Video Information -->

                    <div class="mt-5">

                        <p class="
                                font-mono
                                text-[10px]
                                font-semibold
                                tracking-[0.15em]
                                text-violet-400
                            ">
                            {{ video.type }}
                        </p>

                        <h3 class="
                                mt-2
                                font-mono
                                text-base
                                font-semibold
                                leading-6
                                text-slate-900
                                dark:text-white
                            ">
                            {{ video.title }}
                        </h3>

                    </div>

                    <!-- Video Bottom -->

                    <div class="
                            mt-auto
                            flex
                            items-center
                            justify-between
                            border-t
                            border-slate-200
                            pt-4
                            dark:border-gray-800
                        ">

                        <span class="
                                font-mono
                                text-[10px]
                                text-slate-400
                                dark:text-gray-500
                            ">
                            VIDEO
                        </span>

                        <span class="
                                font-mono
                                text-[10px]
                                font-medium
                                text-indigo-500
                            ">
                            CONTENT
                        </span>

                    </div>

                </article>

                <!-- ======================================== -->
                <!-- No Videos -->
                <!-- ======================================== -->

                <div v-if="videos.length === 0" class="
                        col-span-full
                        flex
                        flex-col
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-dashed
                        border-slate-200
                        bg-white/50
                        py-16
                        text-center
                        dark:border-gray-800
                        dark:bg-gray-900/50
                    ">

                    <div class="
                            mb-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            dark:border-gray-800
                            dark:bg-gray-950
                        ">

                        <span class="
                                h-2
                                w-2
                                rounded-full
                                bg-slate-300
                                dark:bg-gray-600
                            "></span>

                    </div>

                    <p class="
                            font-mono
                            text-sm
                            font-semibold
                            text-slate-600
                            dark:text-gray-300
                        ">
                        No videos yet
                    </p>

                    <p class="
                            mt-2
                            max-w-sm
                            font-mono
                            text-xs
                            leading-5
                            text-slate-400
                        ">
                        Video content will appear here once
                        it becomes available.
                    </p>

                </div>

            </div>

            <!-- ======================================== -->
            <!-- Bottom Statement -->
            <!-- ======================================== -->

            <div class="
                    mt-8
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

                Building practical solutions through technology.

            </div>

        </div>

    </section>


    <!-- ======================================== -->
    <!-- Project Details Modal -->
    <!-- ======================================== -->

    <Teleport to="body">

        <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">

            <div v-if="selectedProject" class="
                    fixed
                    inset-0
                    z-[100]
                    flex
                    items-center
                    justify-center
                    bg-slate-950/70
                    p-4
                    backdrop-blur-sm
                    sm:p-6
                " @click.self="closeProject">

                <!-- ======================================== -->
                <!-- Modal -->
                <!-- ======================================== -->

                <Transition appear enter-active-class="transition duration-300 ease-out"
                    enter-from-class="translate-y-4 scale-95 opacity-0"
                    enter-to-class="translate-y-0 scale-100 opacity-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="translate-y-0 scale-100 opacity-100"
                    leave-to-class="translate-y-4 scale-95 opacity-0">

                    <div v-if="selectedProject" class="
                            relative
                            max-h-[90vh]
                            w-full
                            max-w-4xl
                            overflow-y-auto
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            shadow-2xl
                            dark:border-gray-800
                            dark:bg-gray-950
                        ">

                        <!-- ======================================== -->
                        <!-- Close Button -->
                        <!-- ======================================== -->

                        <button type="button" aria-label="Close project details" @click="closeProject" class="
                                absolute
                                right-4
                                top-4
                                z-10
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-200
                                bg-white/90
                                text-slate-500
                                shadow-sm
                                backdrop-blur
                                transition-all
                                duration-300
                                hover:border-indigo-200
                                hover:bg-indigo-50
                                hover:text-indigo-600
                                dark:border-gray-700
                                dark:bg-gray-900/90
                                dark:text-gray-400
                                dark:hover:border-indigo-800
                                dark:hover:bg-indigo-950
                                dark:hover:text-indigo-400
                            ">

                            <X class="h-4 w-4" />

                        </button>

                        <!-- ======================================== -->
                        <!-- Modal Image -->
                        <!-- ======================================== -->

                        <div class="
                                h-56
                                overflow-hidden
                                border-b
                                border-slate-200
                                bg-slate-50
                                sm:h-72
                                dark:border-gray-800
                                dark:bg-gray-900
                            ">

                            <img :src="selectedProject.image" :alt="`${selectedProject.title} project preview`" class="
                                    h-full
                                    w-full
                                    object-cover
                                " />

                        </div>

                        <!-- ======================================== -->
                        <!-- Modal Content -->
                        <!-- ======================================== -->

                        <div class="p-6 sm:p-8">

                            <!-- Type + Online + Status -->

                            <div class="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-2
                                ">

                                <!-- Type -->

                                <span class="
                                        rounded-full
                                        border
                                        border-violet-200
                                        bg-violet-50
                                        px-2.5
                                        py-1
                                        font-mono
                                        text-[10px]
                                        font-semibold
                                        tracking-[0.12em]
                                        text-violet-500
                                        dark:border-violet-900
                                        dark:bg-violet-950/40
                                        dark:text-violet-400
                                    ">
                                    {{ selectedProject.type }}
                                </span>

                                <!-- Online -->

                                <span class="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-emerald-200
                                        bg-emerald-50
                                        px-2.5
                                        py-1
                                        font-mono
                                        text-[10px]
                                        font-medium
                                        text-emerald-600
                                        dark:border-emerald-900
                                        dark:bg-emerald-950/40
                                        dark:text-emerald-400
                                    ">

                                    <span class="relative flex h-2 w-2">

                                        <span class="
                                                absolute
                                                inline-flex
                                                h-full
                                                w-full
                                                animate-ping
                                                rounded-full
                                                bg-emerald-400
                                                opacity-75
                                            "></span>

                                        <span class="
                                                relative
                                                inline-flex
                                                h-2
                                                w-2
                                                rounded-full
                                                bg-emerald-500
                                            "></span>

                                    </span>

                                    ONLINE

                                </span>

                                <!-- Under Development -->

                                <span v-if="selectedProject.status === 'Under Development'" class="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-amber-200
                                        bg-amber-50
                                        px-2.5
                                        py-1
                                        font-mono
                                        text-[10px]
                                        text-amber-600
                                        dark:border-amber-900
                                        dark:bg-amber-950/40
                                        dark:text-amber-400
                                    ">

                                    <Construction class="
                                            h-3
                                            w-3
                                            animate-pulse
                                        " />

                                    {{ selectedProject.status }}

                                </span>

                                <!-- Completed -->

                                <span v-else class="
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

                                    {{ selectedProject.status }}

                                </span>

                            </div>

                            <!-- Title -->

                            <h2 class="
                                    mt-4
                                    max-w-3xl
                                    font-mono
                                    text-2xl
                                    font-bold
                                    leading-tight
                                    text-slate-950
                                    sm:text-3xl
                                    md:text-4xl
                                    dark:text-white
                                ">
                                {{ selectedProject.title }}
                            </h2>

                            <!-- Description -->

                            <p class="
                                    mt-5
                                    max-w-3xl
                                    font-mono
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    dark:text-gray-400
                                ">
                                {{ selectedProject.description }}
                            </p>

                            <!-- ======================================== -->
                            <!-- Project Information -->
                            <!-- ======================================== -->

                            <div class="
                                    mt-8
                                    grid
                                    gap-6
                                    sm:grid-cols-2
                                ">

                                <!-- Role -->

                                <div>

                                    <p class="
                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            tracking-[0.15em]
                                            text-slate-400
                                            dark:text-gray-500
                                        ">
                                        ROLE
                                    </p>

                                    <p class="
                                            mt-2
                                            font-mono
                                            text-sm
                                            font-semibold
                                            text-indigo-500
                                        ">
                                        {{ selectedProject.role }}
                                    </p>

                                </div>

                                <!-- Category -->

                                <div>

                                    <p class="
                                            font-mono
                                            text-[10px]
                                            font-semibold
                                            tracking-[0.15em]
                                            text-slate-400
                                            dark:text-gray-500
                                        ">
                                        CATEGORY
                                    </p>

                                    <p class="
                                            mt-2
                                            font-mono
                                            text-sm
                                            font-semibold
                                            text-slate-700
                                            dark:text-gray-300
                                        ">
                                        {{ selectedProject.category }}
                                    </p>

                                </div>

                            </div>

                            <!-- ======================================== -->
                            <!-- Divider -->
                            <!-- ======================================== -->

                            <div class="
                                    my-8
                                    h-px
                                    bg-slate-200
                                    dark:bg-gray-800
                                "></div>

                            <!-- ======================================== -->
                            <!-- Features + Highlights -->
                            <!-- ======================================== -->

                            <div v-if="
                                selectedProject.features?.length ||
                                selectedProject.highlights?.length
                            " class="
                                    grid
                                    gap-8
                                    sm:grid-cols-2
                                ">

                                <!-- Features -->

                                <div v-if="selectedProject.features?.length">

                                    <h3 class="
                                            font-mono
                                            text-sm
                                            font-semibold
                                            text-slate-900
                                            dark:text-white
                                        ">
                                        Key Features
                                    </h3>

                                    <ul class="mt-4 space-y-3">

                                        <li v-for="feature in selectedProject.features" :key="feature" class="
                                                flex
                                                items-start
                                                gap-3
                                                font-mono
                                                text-xs
                                                leading-5
                                                text-slate-600
                                                dark:text-gray-400
                                            ">

                                            <span class="
                                                    mt-1.5
                                                    h-1.5
                                                    w-1.5
                                                    shrink-0
                                                    rounded-full
                                                    bg-indigo-400
                                                "></span>

                                            {{ feature }}

                                        </li>

                                    </ul>

                                </div>

                                <!-- Highlights -->

                                <div v-if="selectedProject.highlights?.length">

                                    <h3 class="
                                            font-mono
                                            text-sm
                                            font-semibold
                                            text-slate-900
                                            dark:text-white
                                        ">
                                        Development Highlights
                                    </h3>

                                    <ul class="mt-4 space-y-3">

                                        <li v-for="highlight in selectedProject.highlights" :key="highlight" class="
                                                flex
                                                items-start
                                                gap-3
                                                font-mono
                                                text-xs
                                                leading-5
                                                text-slate-600
                                                dark:text-gray-400
                                            ">

                                            <span class="
                                                    mt-1.5
                                                    h-1.5
                                                    w-1.5
                                                    shrink-0
                                                    rounded-full
                                                    bg-violet-400
                                                "></span>

                                            {{ highlight }}

                                        </li>

                                    </ul>

                                </div>

                            </div>

                            <!-- ======================================== -->
                            <!-- Technologies -->
                            <!-- ======================================== -->

                            <div class="mt-8">

                                <h3 class="
                                        font-mono
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                        dark:text-white
                                    ">
                                    Technologies
                                </h3>

                                <div class="mt-4 flex flex-wrap gap-2">

                                    <span v-for="technology in selectedProject.technologies" :key="technology" class="
                                            rounded-full
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-3
                                            py-1.5
                                            font-mono
                                            text-[10px]
                                            text-slate-600
                                            dark:border-gray-700
                                            dark:bg-gray-900
                                            dark:text-gray-400
                                        ">
                                        {{ technology }}
                                    </span>

                                </div>

                            </div>

                            <!-- ======================================== -->
                            <!-- Links -->
                            <!-- ======================================== -->

                            <div v-if="
                                selectedProject.github ||
                                selectedProject.liveDemo
                            " class="
                                    mt-8
                                    flex
                                    flex-wrap
                                    gap-3
                                ">

                                <!-- GitHub -->

                                <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank"
                                    rel="noopener noreferrer" class="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-lg
                                        border
                                        border-slate-200
                                        bg-white
                                        px-4
                                        py-2.5
                                        font-mono
                                        text-xs
                                        font-semibold
                                        text-slate-700
                                        transition-all
                                        duration-300
                                        hover:border-indigo-200
                                        hover:bg-indigo-50
                                        hover:text-indigo-600
                                        dark:border-gray-700
                                        dark:bg-gray-900
                                        dark:text-gray-300
                                        dark:hover:border-indigo-800
                                        dark:hover:bg-indigo-950
                                        dark:hover:text-indigo-400
                                    ">

                                    <Github class="h-4 w-4" />

                                    View Source

                                    <ExternalLink class="h-3.5 w-3.5" />

                                </a>

                                <!-- Live Demo -->

                                <a v-if="selectedProject.liveDemo" :href="selectedProject.liveDemo" target="_blank"
                                    rel="noopener noreferrer" class="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-lg
                                        bg-indigo-500
                                        px-4
                                        py-2.5
                                        font-mono
                                        text-xs
                                        font-semibold
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-indigo-600
                                        hover:shadow-lg
                                        hover:shadow-indigo-200/40
                                        dark:hover:bg-indigo-400
                                    ">

                                    <ExternalLink class="h-4 w-4" />

                                    Live Demo

                                </a>

                            </div>

                            <!-- ======================================== -->
                            <!-- Close -->
                            <!-- ======================================== -->

                            <div class="
                                    mt-8
                                    flex
                                    justify-end
                                    border-t
                                    border-slate-200
                                    pt-6
                                    dark:border-gray-800
                                ">

                                <button type="button" @click="closeProject" class="
                                        rounded-lg
                                        border
                                        border-slate-200
                                        px-4
                                        py-2.5
                                        font-mono
                                        text-xs
                                        font-semibold
                                        text-slate-600
                                        transition-all
                                        duration-300
                                        hover:border-indigo-200
                                        hover:bg-indigo-50
                                        hover:text-indigo-600
                                        dark:border-gray-700
                                        dark:text-gray-400
                                        dark:hover:border-indigo-800
                                        dark:hover:bg-indigo-950
                                        dark:hover:text-indigo-400
                                    ">
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>

                </Transition>

            </div>

        </Transition>

    </Teleport>

</template>