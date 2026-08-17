<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import {
    ArrowUpRight,
    Check,
    Construction,
    ExternalLink,
    Github,
    X,
    Layers3,
    Sparkles,
} from 'lucide-vue-next'

import hrtsImage from '../../assets/image/hrts.svg'
import climsImage from '../../assets/image/clims.svg'
import arcguideImage from '../../assets/image/arcguide.svg'
import rdsAutoworkzImage from '../../assets/image/rdsLogo.jpg'
import cssGeneratorImage from '../../assets/image/cssgenerator.gif'

const categories = [
    'All',
    'Academic',
    'Personal',
    'Client Projects',
    'Graphic Design',
    'Videos',
    'Under Development',
]

const selectedCategory = ref('All')
const selectedProject = ref(null)

const projects = [
    {
        title: 'Human Resources Ticketing System',
        shortTitle: 'HR Ticketing System',
        type: 'ACADEMIC PROJECT',
        category: 'Academic',
        status: 'Completed',
        availability: 'ONLINE',
        appType: 'WEB APP',
        image: hrtsImage,
        description:
            'A web-based Human Resources ticketing system developed to streamline employee support requests, improve request tracking, and organize IT-related concerns.',
        technologies: [
            'HTML',
            'CSS',
            'PHP',
            'MySQL',
            'Bootstrap',
            'JavaScript',
        ],
        role: 'FULL-STACK DEVELOPER',
        features: [
            'Employee support request submission',
            'Ticket tracking and management',
            'IT-related concern organization',
            'Request status monitoring',
            'Database-driven ticket records',
        ],
        highlights: [
            'Designed and developed the system architecture',
            'Implemented the backend using PHP and MySQL',
            'Created the user interface using Bootstrap and JavaScript',
            'Worked on database structure and ticket management logic',
        ],
        github: '',
        liveDemo: '',
    },

    {
        title: 'Cooperative Loan Management System',
        shortTitle: 'Loan Management System',
        type: 'ACADEMIC PROJECT',
        category: 'Academic',
        status: 'Completed',
        availability: 'ONLINE',
        appType: 'WEB APP',
        image: climsImage,
        description:
            'A cooperative loan management system developed to manage member records, share capital, loan applications, and loan calculations.',
        technologies: [
            'HTML',
            'CSS',
            'PHP',
            'MySQL',
            'Bootstrap',
            'JavaScript',
        ],
        role: 'FULL-STACK DEVELOPER',
        features: [
            'Member record management',
            'Share capital management',
            'Loan application processing',
            'Loan calculation',
            'Cooperative member tracking',
        ],
        highlights: [
            'Developed the system using PHP and MySQL',
            'Implemented loan calculation logic',
            'Created database-driven member management',
            'Designed the application interface using Bootstrap',
        ],
        github: '',
        liveDemo: '',
    },

    {
        title: 'ArcGuide Tourism Hub',
        shortTitle: 'ArcGuide Tourism Hub',
        type: 'PERSONAL PROJECT',
        category: 'Personal',
        status: 'Under Development',
        availability: 'ONLINE',
        appType: 'WEB PLATFORM',
        image: arcguideImage,
        description:
            'A tourism platform focused on showcasing destinations, travel information, and useful resources through a modern web interface.',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL',
        ],
        role: 'WEB DEVELOPER',
        features: [
            'Tourism destination showcase',
            'Travel information',
            'Destination resources',
            'Responsive web interface',
            'Database integration',
        ],
        highlights: [
            'Designed the overall website structure',
            'Developing a modern and responsive interface',
            'Implementing tourism-related content management',
            'Working on the backend and database integration',
        ],
        github: '',
        liveDemo: '',
    },

    {
        title: 'RDS Autoworkz',
        shortTitle: 'RDS Autoworkz',
        type: 'CLIENT PROJECT',
        category: 'Client Projects',
        status: 'Under Development',
        availability: 'ONLINE',
        appType: 'BUSINESS WEBSITE',
        image: rdsAutoworkzImage,
        description:
            'A responsive automotive service website for RDS Autoworkz, designed to showcase car repainting, detailing, engine detailing, dent removal, and interior detailing services.',
        technologies: [
            'Vue.js',
            'Tailwind CSS',
            'JavaScript',
            'HTML',
        ],
        role: 'WEB DEVELOPER',
        features: [
            'Automotive service showcase',
            'Responsive design',
            'Service information sections',
            'Gallery presentation',
            'Contact section',
            'Mobile navigation',
        ],
        highlights: [
            'Designed the website structure and user interface',
            'Developed the site using Vue.js',
            'Implemented responsive layouts with Tailwind CSS',
            'Created interactive navigation and visual effects',
            'Focused on a modern automotive-oriented visual style',
        ],
        github: '',
        liveDemo: '',
    },

    {
        title: 'CSS Grid Generator',
        shortTitle: 'CSS Grid Generator',
        type: 'PERSONAL PROJECT',
        category: 'Personal',
        status: 'Completed',
        availability: 'ONLINE',
        appType: 'DEVELOPER TOOL',
        image: cssGeneratorImage,
        description:
            'A browser-based CSS generator toolkit that helps developers visually create and configure CSS layouts while instantly generating clean, ready-to-use CSS code.',
        technologies: [
            'Vue.js',
            'Tailwind CSS',
            'JavaScript',
            'CSS',
        ],
        role: 'FRONT-END DEVELOPER',
        features: [
            'Visual CSS layout configuration',
            'CSS Grid generator',
            'Flexbox generator',
            'Columns generator',
            'CSS variables generator',
            'Live preview',
            'Generated CSS output',
            'Copy generated CSS',
        ],
        highlights: [
            'Designed and developed the interface using Vue.js',
            'Implemented reactive configuration controls',
            'Created real-time visual previews',
            'Implemented automatic CSS generation',
            'Added clipboard functionality for generated CSS',
            'Built multiple CSS utility generators into one developer toolkit',
        ],
        github: '',
        liveDemo: '',
    },
]

const videos = []

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') {
        return projects
    }

    if (selectedCategory.value === 'Under Development') {
        return projects.filter(
            project => project.status === 'Under Development',
        )
    }

    return projects.filter(
        project => project.category === selectedCategory.value,
    )
})

const showVideos = computed(
    () => selectedCategory.value === 'Videos',
)

const openProject = project => {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
}

const closeProject = () => {
    selectedProject.value = null
    document.body.style.overflow = ''
}

const handleKeydown = event => {
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
    <section id="projects" class="
            relative
            overflow-hidden
            bg-[#F7F7F5]
            px-5
            py-24
            text-zinc-900
            transition-colors
            duration-500
            dark:bg-[#0D1210]
            dark:text-white
            sm:px-8
            lg:px-10
            lg:py-32
            xl:px-14
        ">
        <div class="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
            " aria-hidden="true">
            <div class="
                    absolute
                    -left-32
                    top-0
                    h-96
                    w-96
                    rounded-full
                    bg-teal-200/15
                    blur-[100px]
                    dark:bg-teal-900/10
                "></div>

            <div class="
                    absolute
                    -right-32
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-amber-200/10
                    blur-[100px]
                    dark:bg-amber-900/10
                "></div>

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

        <div class="
                relative
                z-10
                mx-auto
                max-w-[1120px]
            ">
            <div class="
                    grid
                    gap-8
                    lg:grid-cols-[1fr_auto]
                    lg:items-end
                ">
                <div>
                    <div class="
                            mb-5
                            flex
                            items-center
                            gap-3
                            font-mono
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.22em]
                            text-teal-700
                            dark:text-teal-400
                        ">
                        <span class="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-teal-500
                                shadow-[0_0_0_4px_rgba(20,184,166,0.08)]
                            "></span>

                        Selected Work

                        <span class="
                                h-px
                                w-8
                                bg-teal-300
                                dark:bg-teal-900
                            "></span>
                    </div>

                    <h2 class="
                            max-w-3xl
                            text-4xl
                            font-black
                            leading-[0.95]
                            tracking-[-0.055em]
                            text-zinc-950
                            dark:text-white
                            sm:text-5xl
                            lg:text-6xl
                        ">
                        Things I've
                        <span class="text-teal-700 dark:text-teal-400">
                            built.
                        </span>
                    </h2>

                    <p class="
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-6
                            text-zinc-500
                            dark:text-zinc-400
                            sm:text-base
                            sm:leading-7
                        ">
                        A collection of systems, websites, and tools built
                        around practical problems, useful interfaces, and
                        hands-on technology.
                    </p>
                </div>

                <div class="
                        hidden
                        items-center
                        gap-3
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-zinc-400
                        dark:text-zinc-600
                        lg:flex
                    ">
                    <span class="text-teal-600 dark:text-teal-400">
                        05
                    </span>

                    <span>/</span>

                    PROJECTS
                </div>
            </div>

            <div class="
                    mt-10
                    overflow-x-auto
                    pb-2
                    scrollbar-none
                ">
                <div class="
                        inline-flex
                        min-w-max
                        items-center
                        gap-1
                        rounded-xl
                        border
                        border-zinc-200
                        bg-white/60
                        p-1
                        backdrop-blur-sm
                        dark:border-zinc-800
                        dark:bg-zinc-900/40
                    ">
                    <button v-for="category in categories" :key="category" type="button"
                        @click="selectedCategory = category" class="
                            rounded-lg
                            px-3
                            py-2
                            font-mono
                            text-[9px]
                            font-medium
                            transition-all
                            duration-300
                            sm:px-4
                            sm:text-[10px]
                        " :class="selectedCategory === category
                            ? `
                                    bg-teal-700
                                    text-white
                                    shadow-sm
                                    dark:bg-teal-500
                                    dark:text-zinc-950
                                `
                            : `
                                    text-zinc-500
                                    hover:bg-zinc-100
                                    hover:text-zinc-900
                                    dark:text-zinc-500
                                    dark:hover:bg-zinc-800
                                    dark:hover:text-zinc-200
                                `
                            ">
                        {{ category }}
                    </button>
                </div>
            </div>

            <div v-if="!showVideos" class="
                    mt-10
                    grid
                    gap-5
                    md:grid-cols-2
                ">
                <article v-for="(project, index) in filteredProjects" :key="project.title" class="
                        group
                        relative
                        flex
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-white/70
                        backdrop-blur-sm
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:border-teal-200
                        hover:shadow-[0_20px_60px_rgba(15,118,110,0.08)]
                        dark:border-zinc-800
                        dark:bg-zinc-900/50
                        dark:hover:border-teal-900
                        dark:hover:shadow-[0_20px_60px_rgba(20,184,166,0.05)]
                    ">
                    <div class="
                            relative
                            h-48
                            overflow-hidden
                            border-b
                            border-zinc-200
                            bg-zinc-100
                            dark:border-zinc-800
                            dark:bg-zinc-950
                            sm:h-52
                        ">
                        <img :src="project.image" :alt="`${project.title} project preview`" class="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-[1.04]
                            " />

                        <div class="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/50
                                via-transparent
                                to-black/5
                            "></div>

                        <div class="
                                absolute
                                left-5
                                top-5
                                flex
                                items-center
                                gap-2
                            ">
                            <span class="
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-black/25
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[8px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]
                                    text-white
                                    backdrop-blur-md
                                ">
                                {{ project.type }}
                            </span>
                        </div>

                        <div class="
                                absolute
                                right-5
                                top-5
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/20
                                bg-black/25
                                font-mono
                                text-[9px]
                                text-white
                                backdrop-blur-md
                            ">
                            {{ String(index + 1).padStart(2, '0') }}
                        </div>

                        <div class="
                                absolute
                                bottom-5
                                left-5
                            ">
                            <span v-if="project.status === 'Completed'" class="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-emerald-300/20
                                    bg-emerald-500/15
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[8px]
                                    font-medium
                                    text-emerald-100
                                    backdrop-blur-md
                                ">
                                <span class="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-emerald-400
                                    "></span>

                                COMPLETED
                            </span>

                            <span v-else class="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-amber-300/20
                                    bg-amber-500/15
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[8px]
                                    font-medium
                                    text-amber-100
                                    backdrop-blur-md
                                ">
                                <Construction class="h-3 w-3" />

                                IN DEVELOPMENT
                            </span>
                        </div>
                    </div>

                    <div class="
                            flex
                            flex-1
                            flex-col
                            p-5
                            sm:p-6
                        ">
                        <div>
                            <div class="
                                    mb-3
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-2
                                ">
                                <span class="
                                        flex
                                        items-center
                                        gap-2
                                        font-mono
                                        text-[8px]
                                        uppercase
                                        tracking-[0.16em]
                                        text-zinc-400
                                        dark:text-zinc-500
                                    ">
                                    <span class="
                                            h-1
                                            w-1
                                            rounded-full
                                            bg-teal-500
                                        "></span>

                                    {{ project.category }}
                                </span>

                                <span class="
                                        h-3
                                        w-px
                                        bg-zinc-200
                                        dark:bg-zinc-800
                                    "></span>

                                <span class="
                                        inline-flex
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        px-2
                                        py-1
                                        font-mono
                                        text-[7px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.1em]
                                    " :class="project.availability === 'ONLINE'
                                        ? `
                                                bg-emerald-50
                                                text-emerald-600
                                                dark:bg-emerald-950/40
                                                dark:text-emerald-400
                                            `
                                        : `
                                                bg-zinc-100
                                                text-zinc-500
                                                dark:bg-zinc-800
                                                dark:text-zinc-400
                                            `
                                        ">
                                    <span class="h-1.5 w-1.5 rounded-full" :class="project.availability === 'ONLINE'
                                        ? 'bg-emerald-500'
                                        : 'bg-zinc-400'
                                        "></span>

                                    {{ project.availability }}
                                </span>

                                <span class="
                                        inline-flex
                                        items-center
                                        rounded-full
                                        border
                                        border-zinc-200
                                        bg-zinc-50
                                        px-2
                                        py-1
                                        font-mono
                                        text-[7px]
                                        font-medium
                                        uppercase
                                        tracking-[0.1em]
                                        text-zinc-500
                                        dark:border-zinc-800
                                        dark:bg-zinc-950
                                        dark:text-zinc-500
                                    ">
                                    {{ project.appType }}
                                </span>
                            </div>

                            <h3 class="
                                    text-xl
                                    font-bold
                                    leading-tight
                                    tracking-[-0.03em]
                                    text-zinc-950
                                    transition-colors
                                    duration-300
                                    group-hover:text-teal-700
                                    dark:text-white
                                    dark:group-hover:text-teal-400
                                    sm:text-2xl
                                ">
                                {{ project.title }}
                            </h3>

                            <p class="
                                    mt-3
                                    text-[11px]
                                    leading-5
                                    text-zinc-500
                                    dark:text-zinc-400
                                    sm:text-xs
                                ">
                                {{ project.description }}
                            </p>
                        </div>

                        <div class="
                                mt-5
                                flex
                                flex-wrap
                                gap-1.5
                            ">
                            <span v-for="technology in project.technologies" :key="technology" class="
                                    rounded-md
                                    border
                                    border-zinc-200
                                    bg-zinc-50
                                    px-2
                                    py-1.5
                                    font-mono
                                    text-[8px]
                                    text-zinc-500
                                    transition-colors
                                    duration-300
                                    group-hover:border-teal-100
                                    dark:border-zinc-800
                                    dark:bg-zinc-950
                                    dark:text-zinc-500
                                    dark:group-hover:border-teal-950
                                ">
                                {{ technology }}
                            </span>
                        </div>

                        <div class="
                                mt-5
                                flex
                                items-end
                                justify-between
                                gap-4
                                border-t
                                border-zinc-200
                                pt-5
                                dark:border-zinc-800
                            ">
                            <div>
                                <span class="
                                        block
                                        font-mono
                                        text-[8px]
                                        uppercase
                                        tracking-[0.15em]
                                        text-zinc-400
                                        dark:text-zinc-600
                                    ">
                                    Role
                                </span>

                                <span class="
                                        mt-1.5
                                        block
                                        font-mono
                                        text-[9px]
                                        font-semibold
                                        text-teal-700
                                        dark:text-teal-400
                                    ">
                                    {{ project.role }}
                                </span>
                            </div>

                            <button type="button" @click="openProject(project)" class="
                                    group/button
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    rounded-lg
                                    bg-zinc-950
                                    px-3.5
                                    py-2
                                    font-mono
                                    text-[8px]
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-teal-700
                                    dark:bg-white
                                    dark:text-zinc-950
                                    dark:hover:bg-teal-400
                                ">
                                View Project

                                <ArrowUpRight class="
                                        h-3
                                        w-3
                                        transition-transform
                                        duration-300
                                        group-hover/button:-translate-y-0.5
                                        group-hover/button:translate-x-0.5
                                    " />
                            </button>
                        </div>
                    </div>
                </article>

                <div v-if="filteredProjects.length === 0" class="md:col-span-2">
                    <div class="
                            flex
                            min-h-72
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-dashed
                            border-zinc-200
                            bg-white/40
                            text-center
                            dark:border-zinc-800
                            dark:bg-zinc-900/30
                        ">
                        <div class="
                                mb-5
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-zinc-200
                                bg-white
                                dark:border-zinc-800
                                dark:bg-zinc-950
                            ">
                            <Layers3 class="
                                    h-4
                                    w-4
                                    text-zinc-300
                                    dark:text-zinc-700
                                " />
                        </div>

                        <h3 class="
                                font-mono
                                text-sm
                                font-semibold
                                text-zinc-700
                                dark:text-zinc-300
                            ">
                            No projects found
                        </h3>

                        <p class="
                                mt-2
                                max-w-sm
                                font-mono
                                text-[10px]
                                leading-5
                                text-zinc-400
                            ">
                            Nothing is currently available under
                            <span class="text-teal-600 dark:text-teal-400">
                                {{ selectedCategory }}
                            </span>.
                        </p>
                    </div>
                </div>
            </div>

            <div v-else class="
                    mt-10
                    grid
                    gap-6
                    md:grid-cols-2
                ">
                <article v-for="video in videos" :key="video.id" class="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-white/70
                        p-5
                        dark:border-zinc-800
                        dark:bg-zinc-900/50
                    ">
                    <div class="
                            relative
                            aspect-[9/16]
                            max-h-[600px]
                            overflow-hidden
                            rounded-xl
                            bg-black
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

                    <div class="mt-5">
                        <p class="
                                font-mono
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                text-teal-600
                                dark:text-teal-400
                            ">
                            {{ video.type }}
                        </p>

                        <h3 class="
                                mt-2
                                text-lg
                                font-semibold
                                text-zinc-900
                                dark:text-white
                            ">
                            {{ video.title }}
                        </h3>
                    </div>
                </article>

                <div v-if="videos.length === 0" class="md:col-span-2">
                    <div class="
                            flex
                            min-h-72
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-dashed
                            border-zinc-200
                            bg-white/40
                            text-center
                            dark:border-zinc-800
                            dark:bg-zinc-900/30
                        ">
                        <div class="
                                mb-5
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-zinc-200
                                bg-white
                                dark:border-zinc-800
                                dark:bg-zinc-950
                            ">
                            <Sparkles class="
                                    h-4
                                    w-4
                                    text-zinc-300
                                    dark:text-zinc-700
                                " />
                        </div>

                        <h3 class="
                                font-mono
                                text-sm
                                font-semibold
                                text-zinc-700
                                dark:text-zinc-300
                            ">
                            No videos yet
                        </h3>

                        <p class="
                                mt-2
                                max-w-sm
                                font-mono
                                text-[10px]
                                leading-5
                                text-zinc-400
                            ">
                            Video content will appear here once it becomes
                            available.
                        </p>
                    </div>
                </div>
            </div>

            <div class="
                    mt-14
                    flex
                    flex-col
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-zinc-200
                    pt-8
                    dark:border-zinc-800
                    sm:flex-row
                ">
                <div class="
                        flex
                        items-center
                        gap-3
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-zinc-400
                        dark:text-zinc-600
                    ">
                    <span class="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-teal-500
                        "></span>

                    Building practical solutions
                </div>

                <div class="
                        font-mono
                        text-[9px]
                        text-zinc-400
                        dark:text-zinc-600
                    ">
                    {{ filteredProjects.length }} PROJECT{{
                        filteredProjects.length === 1 ? '' : 'S'
                    }}
                    DISPLAYED
                </div>
            </div>
        </div>
    </section>

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
                    bg-[#0D1210]/85
                    p-4
                    backdrop-blur-md
                    sm:p-6
                " @click.self="closeProject">
                <Transition appear enter-active-class="transition duration-300 ease-out"
                    enter-from-class="translate-y-6 scale-[0.97] opacity-0"
                    enter-to-class="translate-y-0 scale-100 opacity-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="translate-y-0 scale-100 opacity-100"
                    leave-to-class="translate-y-6 scale-[0.97] opacity-0">
                    <div v-if="selectedProject" class="
                            relative
                            max-h-[90vh]
                            w-full
                            max-w-5xl
                            overflow-y-auto
                            rounded-2xl
                            border
                            border-zinc-200
                            bg-[#F7F7F5]
                            shadow-2xl
                            dark:border-zinc-800
                            dark:bg-[#0D1210]
                        ">
                        <button type="button" aria-label="Close project details" @click="closeProject" class="
                                absolute
                                right-5
                                top-5
                                z-20
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/20
                                bg-black/30
                                text-white
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:bg-teal-600
                            ">
                            <X class="h-4 w-4" />
                        </button>

                        <div class="
                                relative
                                h-64
                                overflow-hidden
                                bg-zinc-100
                                dark:bg-zinc-900
                                sm:h-80
                            ">
                            <img :src="selectedProject.image" :alt="`${selectedProject.title} project preview`" class="
                                    h-full
                                    w-full
                                    object-cover
                                " />

                            <div class="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-black/70
                                    via-black/10
                                    to-transparent
                                "></div>

                            <div class="
                                    absolute
                                    bottom-6
                                    left-6
                                    right-16
                                    sm:bottom-8
                                    sm:left-8
                                ">
                                <div class="
                                        mb-3
                                        flex
                                        flex-wrap
                                        gap-2
                                    ">
                                    <span class="
                                            rounded-full
                                            border
                                            border-white/20
                                            bg-black/30
                                            px-3
                                            py-1.5
                                            font-mono
                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.15em]
                                            text-white
                                            backdrop-blur-md
                                        ">
                                        {{ selectedProject.type }}
                                    </span>

                                    <span v-if="
                                        selectedProject.status ===
                                        'Completed'
                                    " class="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-emerald-300/30
                                            bg-emerald-500/15
                                            px-3
                                            py-1.5
                                            font-mono
                                            text-[8px]
                                            text-emerald-100
                                            backdrop-blur-md
                                        ">
                                        <Check class="h-3 w-3" />

                                        COMPLETED
                                    </span>

                                    <span v-else class="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-amber-300/30
                                            bg-amber-500/15
                                            px-3
                                            py-1.5
                                            font-mono
                                            text-[8px]
                                            text-amber-100
                                            backdrop-blur-md
                                        ">
                                        <Construction class="h-3 w-3" />

                                        IN DEVELOPMENT
                                    </span>
                                </div>

                                <h2 class="
                                        max-w-3xl
                                        text-2xl
                                        font-black
                                        leading-tight
                                        tracking-[-0.04em]
                                        text-white
                                        sm:text-4xl
                                    ">
                                    {{ selectedProject.title }}
                                </h2>
                            </div>
                        </div>

                        <div class="
                                p-6
                                sm:p-8
                                lg:p-10
                            ">
                            <div class="
                                    grid
                                    gap-10
                                    lg:grid-cols-[1fr_260px]
                                ">
                                <div>
                                    <p class="
                                            text-sm
                                            leading-7
                                            text-zinc-600
                                            dark:text-zinc-400
                                            sm:text-base
                                        ">
                                        {{ selectedProject.description }}
                                    </p>

                                    <div v-if="
                                        selectedProject.features?.length
                                    " class="mt-10">
                                        <div class="
                                                mb-5
                                                flex
                                                items-center
                                                gap-3
                                            ">
                                            <span class="
                                                    h-px
                                                    w-6
                                                    bg-teal-500
                                                "></span>

                                            <h3 class="
                                                    font-mono
                                                    text-[9px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-zinc-400
                                                    dark:text-zinc-500
                                                ">
                                                Key Features
                                            </h3>
                                        </div>

                                        <div class="
                                                grid
                                                gap-3
                                                sm:grid-cols-2
                                            ">
                                            <div v-for="feature in selectedProject.features" :key="feature" class="
                                                    flex
                                                    items-start
                                                    gap-3
                                                    rounded-xl
                                                    border
                                                    border-zinc-200
                                                    bg-white/70
                                                    p-4
                                                    dark:border-zinc-800
                                                    dark:bg-zinc-900/50
                                                ">
                                                <span class="
                                                        mt-1
                                                        flex
                                                        h-5
                                                        w-5
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-teal-500/10
                                                        text-teal-600
                                                        dark:text-teal-400
                                                    ">
                                                    <Check class="h-3 w-3" />
                                                </span>

                                                <span class="
                                                        text-xs
                                                        leading-5
                                                        text-zinc-600
                                                        dark:text-zinc-400
                                                    ">
                                                    {{ feature }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="
                                        selectedProject.highlights?.length
                                    " class="mt-10">
                                        <div class="
                                                mb-5
                                                flex
                                                items-center
                                                gap-3
                                            ">
                                            <span class="
                                                    h-px
                                                    w-6
                                                    bg-amber-500
                                                "></span>

                                            <h3 class="
                                                    font-mono
                                                    text-[9px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-zinc-400
                                                    dark:text-zinc-500
                                                ">
                                                Development Highlights
                                            </h3>
                                        </div>

                                        <ul class="space-y-3">
                                            <li v-for="highlight in selectedProject.highlights" :key="highlight" class="
                                                    flex
                                                    items-start
                                                    gap-3
                                                    text-xs
                                                    leading-6
                                                    text-zinc-600
                                                    dark:text-zinc-400
                                                ">
                                                <span class="
                                                        mt-2
                                                        h-1.5
                                                        w-1.5
                                                        shrink-0
                                                        rounded-full
                                                        bg-amber-500
                                                    "></span>

                                                {{ highlight }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <aside>
                                    <div class="
                                            rounded-2xl
                                            border
                                            border-zinc-200
                                            bg-white/70
                                            p-5
                                            dark:border-zinc-800
                                            dark:bg-zinc-900/50
                                        ">
                                        <div>
                                            <span class="
                                                    font-mono
                                                    text-[8px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-zinc-400
                                                    dark:text-zinc-600
                                                ">
                                                Role
                                            </span>

                                            <p class="
                                                    mt-2
                                                    font-mono
                                                    text-[9px]
                                                    font-semibold
                                                    text-teal-700
                                                    dark:text-teal-400
                                                ">
                                                {{ selectedProject.role }}
                                            </p>
                                        </div>

                                        <div class="
                                                my-5
                                                h-px
                                                bg-zinc-200
                                                dark:bg-zinc-800
                                            "></div>

                                        <div>
                                            <span class="
                                                    font-mono
                                                    text-[8px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-zinc-400
                                                    dark:text-zinc-600
                                                ">
                                                Category
                                            </span>

                                            <p class="
                                                    mt-2
                                                    text-xs
                                                    font-medium
                                                    text-zinc-700
                                                    dark:text-zinc-300
                                                ">
                                                {{ selectedProject.category }}
                                            </p>
                                        </div>

                                        <div class="
                                                my-5
                                                h-px
                                                bg-zinc-200
                                                dark:bg-zinc-800
                                            "></div>

                                        <div>
                                            <span class="
                                                    font-mono
                                                    text-[8px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-zinc-400
                                                    dark:text-zinc-600
                                                ">
                                                Availability
                                            </span>

                                            <div class="
                                                    mt-2
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    rounded-full
                                                    px-2.5
                                                    py-1.5
                                                    font-mono
                                                    text-[8px]
                                                    font-semibold
                                                " :class="selectedProject.availability ===
                                                    'ONLINE'
                                                    ? `
                                                            bg-emerald-50
                                                            text-emerald-600
                                                            dark:bg-emerald-950/40
                                                            dark:text-emerald-400
                                                        `
                                                    : `
                                                            bg-zinc-100
                                                            text-zinc-500
                                                            dark:bg-zinc-800
                                                            dark:text-zinc-400
                                                        `
                                                    ">
                                                <span class="h-1.5 w-1.5 rounded-full" :class="selectedProject.availability ===
                                                    'ONLINE'
                                                    ? 'bg-emerald-500'
                                                    : 'bg-zinc-400'
                                                    "></span>

                                                {{ selectedProject.availability }}
                                            </div>
                                        </div>

                                        <div class="
                                                my-5
                                                h-px
                                                bg-zinc-200
                                                dark:bg-zinc-800
                                            "></div>

                                        <div>
                                            <span class="
                                                    font-mono
                                                    text-[8px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-zinc-400
                                                    dark:text-zinc-600
                                                ">
                                                Application Type
                                            </span>

                                            <p class="
                                                    mt-2
                                                    text-xs
                                                    font-medium
                                                    text-zinc-700
                                                    dark:text-zinc-300
                                                ">
                                                {{ selectedProject.appType }}
                                            </p>
                                        </div>

                                        <div class="
                                                my-5
                                                h-px
                                                bg-zinc-200
                                                dark:bg-zinc-800
                                            "></div>

                                        <div>
                                            <span class="
                                                    font-mono
                                                    text-[8px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-zinc-400
                                                    dark:text-zinc-600
                                                ">
                                                Technologies
                                            </span>

                                            <div class="
                                                    mt-3
                                                    flex
                                                    flex-wrap
                                                    gap-1.5
                                                ">
                                                <span v-for="technology in selectedProject.technologies"
                                                    :key="technology" class="
                                                        rounded-md
                                                        border
                                                        border-zinc-200
                                                        bg-white
                                                        px-2
                                                        py-1.5
                                                        font-mono
                                                        text-[8px]
                                                        text-zinc-500
                                                        dark:border-zinc-700
                                                        dark:bg-zinc-950
                                                        dark:text-zinc-400
                                                    ">
                                                    {{ technology }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-if="
                                        selectedProject.github ||
                                        selectedProject.liveDemo
                                    " class="
                                            mt-4
                                            flex
                                            flex-col
                                            gap-2
                                        ">
                                        <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank"
                                            rel="noopener noreferrer" class="
                                                inline-flex
                                                items-center
                                                justify-center
                                                gap-2
                                                rounded-lg
                                                border
                                                border-zinc-200
                                                px-4
                                                py-3
                                                font-mono
                                                text-[9px]
                                                font-semibold
                                                text-zinc-600
                                                transition-all
                                                duration-300
                                                hover:border-teal-200
                                                hover:bg-teal-50
                                                hover:text-teal-700
                                                dark:border-zinc-800
                                                dark:text-zinc-400
                                                dark:hover:border-teal-900
                                                dark:hover:bg-teal-950
                                                dark:hover:text-teal-400
                                            ">
                                            <Github class="h-4 w-4" />

                                            View Source

                                            <ExternalLink class="h-3 w-3" />
                                        </a>

                                        <a v-if="selectedProject.liveDemo" :href="selectedProject.liveDemo"
                                            target="_blank" rel="noopener noreferrer" class="
                                                inline-flex
                                                items-center
                                                justify-center
                                                gap-2
                                                rounded-lg
                                                bg-teal-700
                                                px-4
                                                py-3
                                                font-mono
                                                text-[9px]
                                                font-semibold
                                                text-white
                                                transition-all
                                                duration-300
                                                hover:bg-teal-800
                                                dark:bg-teal-500
                                                dark:text-zinc-950
                                                dark:hover:bg-teal-400
                                            ">
                                            Live Demo

                                            <ExternalLink class="h-3 w-3" />
                                        </a>
                                    </div>
                                </aside>
                            </div>

                            <div class="
                                    mt-10
                                    flex
                                    justify-end
                                    border-t
                                    border-zinc-200
                                    pt-6
                                    dark:border-zinc-800
                                ">
                                <button type="button" @click="closeProject" class="
                                        rounded-lg
                                        border
                                        border-zinc-200
                                        px-4
                                        py-2.5
                                        font-mono
                                        text-[9px]
                                        font-semibold
                                        text-zinc-500
                                        transition-all
                                        duration-300
                                        hover:border-teal-200
                                        hover:bg-teal-50
                                        hover:text-teal-700
                                        dark:border-zinc-800
                                        dark:text-zinc-400
                                        dark:hover:border-teal-900
                                        dark:hover:bg-teal-950
                                        dark:hover:text-teal-400
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