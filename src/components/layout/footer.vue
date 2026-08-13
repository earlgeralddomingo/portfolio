<template>
    <footer class="
            relative
            overflow-hidden
            border-t
            border-zinc-200
            bg-[#F7F7F5]
            px-5
            py-8
            text-zinc-900
            transition-colors
            duration-500

            dark:border-zinc-800
            dark:bg-[#0D1210]
            dark:text-white

            sm:px-8
            sm:py-9

            lg:px-10
            lg:py-10

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
                    -bottom-32
                    left-1/3
                    h-64
                    w-64
                    rounded-full
                    bg-teal-200/10
                    blur-[90px]

                    dark:bg-teal-900/10
                "></div>

            <div class="
                    absolute
                    -right-24
                    -top-24
                    h-56
                    w-56
                    rounded-full
                    bg-amber-200/10
                    blur-[90px]

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

        <!-- Main -->
        <div class="
                relative
                z-10
                mx-auto
                flex
                max-w-[1120px]
                flex-col
                gap-6

                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:gap-8
            ">
            <!-- Identity -->
            <div class="
                    flex
                    items-center
                    justify-center
                    gap-3

                    lg:justify-start
                ">
                <a href="#home" class="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-zinc-200
                        bg-white
                        text-[9px]
                        font-bold
                        tracking-tight
                        text-teal-700
                        shadow-sm
                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:border-teal-200

                        dark:border-zinc-800
                        dark:bg-zinc-900
                        dark:text-teal-400

                        dark:hover:border-teal-900
                    ">
                    EGD
                </a>

                <div class="text-left">
                    <p class="
                            text-xs
                            font-semibold
                            tracking-tight
                            text-zinc-800

                            dark:text-zinc-200
                        ">
                        Earl Gerald Domingo
                    </p>

                    <p class="
                            mt-0.5
                            font-mono
                            text-[7px]
                            uppercase
                            tracking-[0.2em]
                            text-zinc-400
                        ">
                        IT / WEB / SYSTEMS
                    </p>
                </div>
            </div>

            <!-- Navigation -->
            <nav class="
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-5
                    gap-y-2

                    lg:justify-end
                " aria-label="Footer navigation">
                <a href="#home" class="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-zinc-500
                        transition-colors
                        duration-300

                        hover:text-teal-700

                        dark:text-zinc-500
                        dark:hover:text-teal-400
                    ">
                    Home
                </a>

                <a href="#about" class="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-zinc-500
                        transition-colors
                        duration-300

                        hover:text-teal-700

                        dark:text-zinc-500
                        dark:hover:text-teal-400
                    ">
                    About
                </a>

                <a href="#skills" class="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-zinc-500
                        transition-colors
                        duration-300

                        hover:text-teal-700

                        dark:text-zinc-500
                        dark:hover:text-teal-400
                    ">
                    Skills
                </a>

                <a href="#projects" class="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-zinc-500
                        transition-colors
                        duration-300

                        hover:text-teal-700

                        dark:text-zinc-500
                        dark:hover:text-teal-400
                    ">
                    Projects
                </a>

                <a href="#contact" class="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-zinc-500
                        transition-colors
                        duration-300

                        hover:text-teal-700

                        dark:text-zinc-500
                        dark:hover:text-teal-400
                    ">
                    Contact
                </a>
            </nav>
        </div>

        <!-- Bottom -->
        <div class="
                relative
                z-10
                mx-auto
                mt-6
                flex
                max-w-[1120px]
                flex-col
                items-center
                justify-between
                gap-2
                border-t
                border-zinc-200
                pt-4

                dark:border-zinc-800

                sm:flex-row
            ">
            <p class="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.16em]
                    text-zinc-400
                ">
                BUILD • SUPPORT • SOLVE
            </p>

            <p class="
                    text-[9px]
                    text-zinc-400
                ">
                © {{ new Date().getFullYear() }}
                <span class="mx-1 text-teal-600 dark:text-teal-400">•</span>
                All rights reserved.
            </p>
        </div>
    </footer>
</template>