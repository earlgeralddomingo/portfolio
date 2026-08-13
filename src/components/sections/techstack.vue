<script setup>
import {
    MonitorCog,
    Code2,
    Wrench,
    Palette,
    Monitor,
    HardDrive,
    Bug,
    Printer,
    Network,
    Wifi,
    Camera,
    Headphones,
    Cpu,
    Globe,
    Braces,
    Database,
    FileCode2,
    Layout,
    Wind,
    Layers,
    Terminal,
    Server,
    FolderCog,
    Github,
    MonitorSmartphone,
    MousePointer2,
    FileSpreadsheet,
    Image,
    Figma,
    Video,
    Scissors,
    CheckCircle2,
} from 'lucide-vue-next'

const techStack = [
    {
        category: 'IT SUPPORT',
        description: 'Systems, troubleshooting & infrastructure',
        icon: MonitorCog,
        accent: 'teal',
        items: [
            {
                name: 'Windows 10/11',
                icon: Monitor,
            },
            {
                name: 'Hardware Troubleshooting',
                icon: HardDrive,
            },
            {
                name: 'Software Troubleshooting',
                icon: Bug,
            },
            {
                name: 'Printer Support',
                icon: Printer,
            },
            {
                name: 'Network Troubleshooting',
                icon: Network,
            },
            {
                name: 'LAN / Wi-Fi',
                icon: Wifi,
            },
            {
                name: 'CCTV',
                icon: Camera,
            },
            {
                name: 'Remote Support',
                icon: Headphones,
            },
            {
                name: 'PC Maintenance',
                icon: Cpu,
            },
        ],
    },

    {
        category: 'WEB DEVELOPMENT',
        description: 'Web applications & development',
        icon: Code2,
        accent: 'amber',
        items: [
            {
                name: 'HTML',
                icon: Globe,
            },
            {
                name: 'CSS',
                icon: FileCode2,
            },
            {
                name: 'JavaScript',
                icon: Braces,
            },
            {
                name: 'PHP',
                icon: Code2,
            },
            {
                name: 'MySQL',
                icon: Database,
            },
            {
                name: 'Vue.js',
                icon: Layers,
            },
            {
                name: 'Tailwind CSS',
                icon: Wind,
            },
            {
                name: 'Bootstrap',
                icon: Layout,
            },
        ],
    },

    {
        category: 'TOOLS & WORKFLOW',
        description: 'Development, IT support & productivity',
        icon: Wrench,
        accent: 'teal',
        items: [
            {
                name: 'VS Code',
                icon: Terminal,
            },
            {
                name: 'XAMPP',
                icon: Server,
            },
            {
                name: 'phpMyAdmin',
                icon: Database,
            },
            {
                name: 'GitHub',
                icon: Github,
            },
            {
                name: 'AnyDesk',
                icon: MonitorSmartphone,
            },
            {
                name: 'TeamViewer',
                icon: MonitorSmartphone,
            },
            {
                name: 'Microsoft Office',
                icon: FileSpreadsheet,
            },
        ],
    },

    {
        category: 'DESIGN & MEDIA',
        description: 'Basic design, UI/UX & media editing',
        icon: Palette,
        accent: 'amber',
        items: [
            {
                name: 'Photoshop',
                icon: Image,
            },
            {
                name: 'Canva',
                icon: Palette,
            },
            {
                name: 'Figma',
                icon: Figma,
            },
            {
                name: 'DaVinci Resolve',
                icon: Video,
            },
            {
                name: 'CapCut',
                icon: Scissors,
            },
        ],
    },
]
</script>

<template>
    <section id="techstack" class="
            relative
            flex
            min-h-screen
            items-center
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
        ">
        <!-- Background -->
        <div class="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
            " aria-hidden="true">
            <div class="
                    absolute
                    -right-32
                    top-1/4
                    h-96
                    w-96
                    rounded-full
                    bg-teal-200/20
                    blur-[100px]

                    dark:bg-teal-900/15
                "></div>

            <div class="
                    absolute
                    -bottom-32
                    left-1/4
                    h-72
                    w-72
                    rounded-full
                    bg-amber-200/15
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
                w-full
                max-w-[1120px]
            ">
            <!-- Header -->
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
                                relative
                                flex
                                h-1.5
                                w-1.5
                            ">
                            <span class="
                                    absolute
                                    inline-flex
                                    h-full
                                    w-full
                                    animate-ping
                                    rounded-full
                                    bg-teal-400
                                    opacity-60
                                "></span>

                            <span class="
                                    relative
                                    inline-flex
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-teal-500
                                "></span>
                        </span>

                        Technical Toolkit
                    </div>

                    <h2 class="
                            max-w-3xl
                            text-[2.7rem]
                            font-black
                            leading-[0.9]
                            tracking-[-0.06em]

                            sm:text-4xl

                            md:text-5xl

                            lg:text-[4.2rem]
                        ">
                        <span class="
                                text-zinc-950

                                dark:text-white
                            ">
                            Tools I
                        </span>

                        <span class="
                                text-teal-700

                                dark:text-teal-400
                            ">
                            WORK
                        </span>

                        <span class="
                                block
                                text-zinc-800

                                dark:text-zinc-300
                            ">
                            WITH<span class="text-amber-500">.</span>
                        </span>
                    </h2>

                    <p class="
                            mt-5
                            max-w-2xl
                            text-xs
                            leading-6
                            text-zinc-500

                            dark:text-zinc-400

                            sm:text-sm
                            sm:leading-7
                        ">
                        A practical toolkit built around technical support,
                        troubleshooting, web development, system maintenance,
                        and creative work.
                    </p>
                </div>

                <div class="
                        hidden
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.22em]
                        text-zinc-300

                        dark:text-zinc-700

                        lg:block
                    ">
                    <span class="
                            text-teal-500
                        ">
                        04
                    </span>

                    <span class="mx-2">
                        /
                    </span>

                    TECH STACK
                </div>
            </div>

            <!-- Cards -->
            <div class="
                    mt-10
                    grid
                    gap-4

                    sm:grid-cols-2

                    lg:gap-5
                ">
                <article v-for="(stack, index) in techStack" :key="stack.category" class="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-white/70
                        p-5
                        backdrop-blur-sm
                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-teal-200
                        hover:shadow-xl
                        hover:shadow-teal-900/[0.05]

                        dark:border-zinc-800
                        dark:bg-zinc-900/50

                        dark:hover:border-teal-900
                        dark:hover:shadow-teal-950/20
                    ">
                    <div class="
                            absolute
                            inset-x-0
                            top-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-teal-500
                            to-transparent
                            opacity-0
                            transition-opacity
                            duration-300

                            group-hover:opacity-100
                        "></div>

                    <div class="
                            flex
                            items-start
                            justify-between
                            gap-4
                        ">
                        <div class="
                                flex
                                min-w-0
                                items-start
                                gap-3
                            ">
                            <div class="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-teal-100
                                    bg-teal-50
                                    text-teal-700
                                    transition-all
                                    duration-300

                                    group-hover:scale-105
                                    group-hover:border-teal-200
                                    group-hover:bg-teal-100

                                    dark:border-teal-900
                                    dark:bg-teal-950/50
                                    dark:text-teal-400

                                    dark:group-hover:border-teal-800
                                    dark:group-hover:bg-teal-950
                                ">
                                <component :is="stack.icon" class="h-4.5 w-4.5" />
                            </div>

                            <div class="min-w-0">
                                <h3 class="
                                        font-mono
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.12em]
                                        text-zinc-900

                                        dark:text-zinc-100

                                        sm:text-xs
                                    ">
                                    {{ stack.category }}
                                </h3>

                                <p class="
                                        mt-1
                                        max-w-xs
                                        text-[9px]
                                        leading-4
                                        text-zinc-400

                                        dark:text-zinc-500
                                    ">
                                    {{ stack.description }}
                                </p>
                            </div>
                        </div>

                        <span class="
                                shrink-0
                                font-mono
                                text-[9px]
                                font-semibold
                                text-teal-500

                                dark:text-teal-600
                            ">
                            {{ String(index + 1).padStart(2, '0') }}
                        </span>
                    </div>

                    <div class="
                            my-5
                            h-px
                            bg-zinc-100

                            dark:bg-zinc-800
                        "></div>

                    <div class="
                            grid
                            grid-cols-2
                            gap-1.5
                        ">
                        <div v-for="item in stack.items" :key="item.name" class="
                                group/item
                                flex
                                min-w-0
                                items-center
                                gap-2
                                rounded-lg
                                border
                                border-zinc-200
                                bg-[#F7F7F5]
                                px-2.5
                                py-2
                                transition-all
                                duration-200

                                hover:border-teal-200
                                hover:bg-teal-50

                                dark:border-zinc-800
                                dark:bg-zinc-950/70

                                dark:hover:border-teal-900
                                dark:hover:bg-teal-950/40
                            ">
                            <component :is="item.icon" class="
                                    h-3
                                    w-3
                                    shrink-0
                                    text-zinc-400
                                    transition-colors
                                    duration-200

                                    group-hover/item:text-teal-600

                                    dark:text-zinc-600
                                    dark:group-hover/item:text-teal-400
                                " />

                            <span class="
                                    min-w-0
                                    truncate
                                    font-mono
                                    text-[8px]
                                    leading-4
                                    text-zinc-600
                                    transition-colors
                                    duration-200

                                    group-hover/item:text-teal-700

                                    dark:text-zinc-400
                                    dark:group-hover/item:text-teal-400

                                    sm:text-[9px]
                                ">
                                {{ item.name }}
                            </span>
                        </div>
                    </div>

                    <div class="
                            mt-5
                            flex
                            items-center
                            justify-between
                        ">
                        <span class="
                                flex
                                items-center
                                gap-1.5
                                font-mono
                                text-[7px]
                                uppercase
                                tracking-[0.18em]
                                text-zinc-400

                                dark:text-zinc-600
                            ">
                            <CheckCircle2 class="
                                    h-2.5
                                    w-2.5
                                    text-teal-500
                                " />

                            {{ stack.items.length }} skills
                        </span>

                        <span class="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-teal-500
                                opacity-30
                                transition-all
                                duration-300

                                group-hover:scale-150
                                group-hover:opacity-100
                            "></span>
                    </div>
                </article>
            </div>

            <!-- Footer -->
            <div class="
                    mt-8
                    flex
                    flex-col
                    items-center
                    justify-between
                    gap-3
                    border-t
                    border-zinc-200
                    pt-6

                    dark:border-zinc-800

                    sm:flex-row
                ">
                <div class="
                        flex
                        items-center
                        gap-2
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-zinc-400

                        dark:text-zinc-600
                    ">
                    <span class="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-teal-500
                        "></span>

                    Continuously learning & expanding
                </div>

                <div class="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-zinc-400

                        dark:text-zinc-600
                    ">
                    {{techStack.reduce(
                        (total, stack) => total + stack.items.length,
                        0
                    )}}
                    TOOLS / TECHNOLOGIES
                </div>
            </div>
        </div>
    </section>
</template>