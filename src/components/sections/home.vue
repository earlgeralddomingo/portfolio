<script setup>
import {
    ArrowDown,
    ArrowUpRight,
    Code2,
    FileText,
    Globe2,
    MonitorCog,
    Network,
    Wrench,
} from 'lucide-vue-next'

import profileImage from '../../assets/image/egd.png'
</script>

<template>
    <section id="home" class="
        relative
        flex
        min-h-[calc(100svh-68px)]
        scroll-mt-[68px]
        items-start
        justify-center
        overflow-hidden
        bg-[#F7F7F5]
        px-5
        pt-12
        pb-8
        text-zinc-900
        transition-colors
        duration-500

        dark:bg-[#0D1210]
        dark:text-white

        sm:px-8
        sm:pt-14

        lg:items-center
        lg:px-10
        lg:py-6

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
                    -top-28
                    h-96
                    w-96
                    rounded-full
                    bg-teal-200/20
                    blur-[90px]

                    dark:bg-teal-900/15
                "></div>

            <div class="
                    absolute
                    -bottom-32
                    left-1/4
                    h-64
                    w-64
                    rounded-full
                    bg-amber-200/15
                    blur-[90px]

                    dark:bg-amber-900/10
                "></div>

            <div class="
                    absolute
                    inset-0
                    opacity-[0.03]

                    dark:opacity-[0.04]
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

        <!-- Main -->
        <div class="
                relative
                z-10
                mx-auto
                flex
                w-full
                max-w-[1120px]
                items-center
                justify-center
            ">
            <div class="
                    grid
                    w-full
                    items-center
                    gap-6

                    lg:grid-cols-[48px_minmax(0,1fr)_360px]
                    lg:gap-7

                    xl:grid-cols-[52px_minmax(0,1fr)_400px]
                    xl:gap-8
                ">
                <!-- Identity Rail -->
                <aside class="
                        hidden
                        h-[350px]
                        flex-col
                        items-center
                        justify-between
                        border-r
                        border-zinc-200
                        pr-4

                        dark:border-zinc-800

                        lg:flex
                    ">
                    <div class="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-zinc-200
                            bg-white
                            text-[9px]
                            font-bold
                            text-teal-700
                            shadow-sm

                            dark:border-zinc-800
                            dark:bg-zinc-900
                            dark:text-teal-400
                        ">
                        EGD
                    </div>

                    <div class="
                            flex
                            rotate-[-90deg]
                            items-center
                            gap-2
                            whitespace-nowrap
                            font-mono
                            text-[7px]
                            uppercase
                            tracking-[0.28em]
                            text-zinc-400
                        ">
                        <span class="
                                h-px
                                w-6
                                bg-zinc-300

                                dark:bg-zinc-700
                            "></span>

                        IT / WEB / SYSTEMS
                    </div>

                    <div class="
                            flex
                            flex-col
                            items-center
                            gap-2
                        ">
                        <span class="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-teal-500
                                shadow-[0_0_0_4px_rgba(20,184,166,0.08)]
                            "></span>

                        <span class="
                                h-10
                                w-px
                                bg-gradient-to-b
                                from-teal-500
                                to-transparent
                            "></span>
                    </div>
                </aside>

                <!-- Main Content -->
                <div class="
                        order-2
                        min-w-0
                        text-center

                        lg:order-1
                        lg:text-left
                    ">
                    <div class="
                            mb-3
                            flex
                            justify-center

                            lg:justify-start
                        ">
                        <span class="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-teal-200
                                bg-teal-50/70
                                px-2.5
                                py-1
                                font-mono
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                text-teal-700

                                dark:border-teal-900
                                dark:bg-teal-950/40
                                dark:text-teal-400
                            ">
                            <span class="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-teal-500
                                "></span>

                            Available for opportunities
                        </span>
                    </div>

                    <p class="
                            mb-2
                            font-mono
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.25em]
                            text-teal-700

                            dark:text-teal-400
                        ">
                        IT Support

                        <span class="
                                mx-1.5
                                text-zinc-300

                                dark:text-zinc-700
                            ">
                            /
                        </span>

                        Web Development
                    </p>

                    <h1 class="
                            text-[3.1rem]
                            font-black
                            leading-[0.86]
                            tracking-[-0.06em]

                            sm:text-[3.8rem]

                            lg:text-[4.3rem]

                            xl:text-[4.8rem]
                        ">
                        <span class="
                                block
                                text-zinc-950

                                dark:text-white
                            ">
                            Hi, I'm
                        </span>

                        <span class="
                                block
                                text-teal-700

                                dark:text-teal-400
                            ">
                            Earl Gerald
                        </span>

                        <span class="
                                block
                                text-zinc-800

                                dark:text-zinc-300
                            ">
                            Domingo<span class="text-amber-500">.</span>
                        </span>
                    </h1>

                    <div class="
                            mt-4
                            max-w-xl
                        ">
                        <p class="
                                text-sm
                                font-medium
                                leading-5
                                text-zinc-700

                                dark:text-zinc-300

                                sm:text-base
                            ">
                            I keep systems working
                            <span class="
                                    text-teal-700

                                    dark:text-teal-400
                                ">
                                &amp;
                            </span>
                            build the tools that make them better.
                        </p>

                        <p class="
                                mx-auto
                                mt-1.5
                                max-w-lg
                                text-[11px]
                                leading-5
                                text-zinc-500

                                dark:text-zinc-500

                                lg:mx-0

                                sm:text-xs
                            ">
                            From troubleshooting hardware and networks to
                            developing practical business applications, I
                            combine hands-on IT support with web development.
                        </p>
                    </div>

                    <!-- Skill Cards -->
                    <div class="
                            mx-auto
                            mt-4
                            grid
                            max-w-lg
                            grid-cols-3
                            gap-1.5

                            lg:mx-0
                        ">
                        <div class="
                                rounded-lg
                                border
                                border-zinc-200
                                bg-white/60
                                p-2
                                text-left
                                backdrop-blur-sm
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:border-teal-200

                                dark:border-zinc-800
                                dark:bg-zinc-900/50

                                dark:hover:border-teal-900
                            ">
                            <MonitorCog class="
                                    mb-1.5
                                    h-3.5
                                    w-3.5
                                    text-teal-700

                                    dark:text-teal-400
                                " />

                            <p class="
                                    text-[9px]
                                    font-semibold
                                    text-zinc-800

                                    dark:text-zinc-200
                                ">
                                IT Support
                            </p>

                            <p class="
                                    mt-0.5
                                    font-mono
                                    text-[7px]
                                    text-zinc-400
                                ">
                                HARDWARE
                            </p>
                        </div>

                        <div class="
                                rounded-lg
                                border
                                border-zinc-200
                                bg-white/60
                                p-2
                                text-left
                                backdrop-blur-sm
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:border-teal-200

                                dark:border-zinc-800
                                dark:bg-zinc-900/50

                                dark:hover:border-teal-900
                            ">
                            <Network class="
                                    mb-1.5
                                    h-3.5
                                    w-3.5
                                    text-teal-700

                                    dark:text-teal-400
                                " />

                            <p class="
                                    text-[9px]
                                    font-semibold
                                    text-zinc-800

                                    dark:text-zinc-200
                                ">
                                Networking
                            </p>

                            <p class="
                                    mt-0.5
                                    font-mono
                                    text-[7px]
                                    text-zinc-400
                                ">
                                SYSTEMS
                            </p>
                        </div>

                        <div class="
                                rounded-lg
                                border
                                border-zinc-200
                                bg-white/60
                                p-2
                                text-left
                                backdrop-blur-sm
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:border-amber-200

                                dark:border-zinc-800
                                dark:bg-zinc-900/50

                                dark:hover:border-amber-900
                            ">
                            <Code2 class="
                                    mb-1.5
                                    h-3.5
                                    w-3.5
                                    text-amber-600

                                    dark:text-amber-400
                                " />

                            <p class="
                                    text-[9px]
                                    font-semibold
                                    text-zinc-800

                                    dark:text-zinc-200
                                ">
                                Development
                            </p>

                            <p class="
                                    mt-0.5
                                    font-mono
                                    text-[7px]
                                    text-zinc-400
                                ">
                                WEB APPS
                            </p>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="
                            mt-4
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-2.5

                            lg:justify-start
                        ">
                        <a href="#projects" class="
                                group
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                bg-teal-700
                                px-4
                                py-2
                                text-[11px]
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-teal-900/10
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:bg-teal-800

                                dark:bg-teal-500
                                dark:text-zinc-950

                                dark:hover:bg-teal-400
                            ">
                            Explore My Work

                            <ArrowUpRight class="
                                    h-3
                                    w-3
                                    transition-transform
                                    duration-300

                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                " />
                        </a>

                        <a href="/Earl_Gerald_Domingo_IT_Staff.pdf" target="_blank" rel="noopener noreferrer" class="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-zinc-300
                                bg-white/60
                                px-4
                                py-2
                                text-[11px]
                                font-semibold
                                text-zinc-700
                                backdrop-blur-sm
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:bg-white

                                dark:border-zinc-700
                                dark:bg-zinc-900/60
                                dark:text-zinc-300

                                dark:hover:bg-zinc-900
                            ">
                            <FileText class="h-3 w-3" />

                            Resume
                        </a>

                        <a href="#contact" class="
                                text-[11px]
                                font-semibold
                                text-zinc-500
                                transition-colors

                                hover:text-teal-700

                                dark:text-zinc-500
                                dark:hover:text-teal-400
                            ">
                            Let's talk →
                        </a>
                    </div>
                </div>

                <!-- Profile -->
                <div class="
                        order-1
                        flex
                        justify-center

                        lg:order-2
                    ">
                    <div class="
                            relative
                            h-[230px]
                            w-[230px]

                            sm:h-[270px]
                            sm:w-[270px]

                            lg:h-[310px]
                            lg:w-[310px]

                            xl:h-[350px]
                            xl:w-[350px]
                        ">
                        <!-- Rings -->
                        <div class="
                                absolute
                                inset-[-14px]
                                rounded-full
                                border
                                border-teal-700/10

                                dark:border-teal-400/10
                            "></div>

                        <div class="
                                absolute
                                inset-[-27px]
                                rounded-full
                                border
                                border-dashed
                                border-amber-500/20
                                animate-[spin_40s_linear_infinite]

                                dark:border-amber-400/10
                            "></div>

                        <div class="
                                absolute
                                inset-[-43px]
                                rounded-full
                                border
                                border-teal-500/5

                                dark:border-teal-400/5
                            "></div>

                        <div class="
                                absolute
                                inset-0
                                rounded-full
                                bg-teal-300/20
                                blur-[55px]

                                dark:bg-teal-700/15
                            "></div>

                        <!-- Image -->
                        <div class="
                                absolute
                                inset-0
                                overflow-hidden
                                rounded-full
                                border-[6px]
                                border-white
                                bg-white
                                shadow-[0_20px_60px_rgba(15,23,42,0.12)]

                                dark:border-zinc-900
                                dark:bg-zinc-900
                                dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                            ">
                            <img :src="profileImage" alt="Earl Gerald Domingo" class="
                                    h-full
                                    w-full
                                    object-cover
                                " />

                            <div class="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-teal-950/15
                                    via-transparent
                                    to-white/5

                                    dark:from-black/25
                                "></div>
                        </div>

                        <!-- IT Support Badge -->
                        <div class="
                                absolute
                                -left-5
                                top-5
                                flex
                                items-center
                                gap-1.5
                                rounded-lg
                                border
                                border-zinc-200
                                bg-white/90
                                px-2
                                py-1.5
                                shadow-lg
                                backdrop-blur-md

                                dark:border-zinc-800
                                dark:bg-zinc-900/90

                                sm:-left-7
                            ">
                            <div class="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-md
                                    bg-teal-50
                                    text-teal-700

                                    dark:bg-teal-950
                                    dark:text-teal-400
                                ">
                                <Wrench class="h-3 w-3" />
                            </div>

                            <div>
                                <p class="
                                        font-mono
                                        text-[6px]
                                        uppercase
                                        tracking-[0.12em]
                                        text-zinc-400
                                    ">
                                    Primary
                                </p>

                                <p class="
                                        text-[9px]
                                        font-bold
                                        text-zinc-800

                                        dark:text-zinc-200
                                    ">
                                    IT Support
                                </p>
                            </div>
                        </div>

                        <!-- Web Development Badge -->
                        <div class="
                                absolute
                                -right-5
                                bottom-7
                                flex
                                items-center
                                gap-1.5
                                rounded-lg
                                border
                                border-zinc-200
                                bg-white/90
                                px-2
                                py-1.5
                                shadow-lg
                                backdrop-blur-md

                                dark:border-zinc-800
                                dark:bg-zinc-900/90

                                sm:-right-7
                            ">
                            <div class="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-md
                                    bg-amber-50
                                    text-amber-700

                                    dark:bg-amber-950
                                    dark:text-amber-400
                                ">
                                <Globe2 class="h-3 w-3" />
                            </div>

                            <div>
                                <p class="
                                        font-mono
                                        text-[6px]
                                        uppercase
                                        tracking-[0.12em]
                                        text-zinc-400
                                    ">
                                    Secondary
                                </p>

                                <p class="
                                        text-[9px]
                                        font-bold
                                        text-zinc-800

                                        dark:text-zinc-200
                                    ">
                                    Web Development
                                </p>
                            </div>
                        </div>

                        <!-- Bottom Label -->
                        <div class="
                                absolute
                                -bottom-6
                                left-1/2
                                -translate-x-1/2
                                whitespace-nowrap
                                rounded-full
                                border
                                border-zinc-200
                                bg-white/80
                                px-2.5
                                py-1
                                font-mono
                                text-[7px]
                                uppercase
                                tracking-[0.18em]
                                text-zinc-400
                                backdrop-blur-md

                                dark:border-zinc-800
                                dark:bg-zinc-900/80
                            ">
                            BUILD • SUPPORT • SOLVE
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="
                absolute
                bottom-4
                left-1/2
                hidden
                -translate-x-1/2
                items-center
                gap-1.5
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-zinc-400

                lg:flex
            ">
            <ArrowDown class="h-2.5 w-2.5 animate-bounce" />

            Scroll to explore
        </div>

        <!-- Side Label -->
        <div class="
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
            ">
            EGD / PORTFOLIO / 2026
        </div>
    </section>
</template>