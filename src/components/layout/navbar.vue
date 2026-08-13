<script setup>
import { ref, onMounted } from 'vue'
import { Sun, Moon, Settings } from 'lucide-vue-next'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#techstack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const darkMode = ref(false)
const menuOpen = ref(false)
const gearRotation = ref(0)

const toggleTheme = () => {
    darkMode.value = !darkMode.value

    document.documentElement.classList.toggle(
        'dark',
        darkMode.value
    )

    localStorage.setItem(
        'theme',
        darkMode.value ? 'dark' : 'light'
    )
}

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
    gearRotation.value += 180
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
        darkMode.value = true
        document.documentElement.classList.add('dark')
    }
})
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50">
        <nav class="
                border-b
                border-zinc-200/80
                bg-[#F7F7F5]/90
                font-sans
                text-zinc-900
                backdrop-blur-xl
                transition-colors
                duration-500

                dark:border-zinc-800/80
                dark:bg-[#0D1210]/90
                dark:text-white
            ">
            <div class="
                    mx-auto
                    flex
                    h-[68px]
                    max-w-[1280px]
                    items-center
                    justify-between
                    px-5

                    sm:px-8

                    lg:px-10

                    xl:px-14
                ">
                <!-- Logo -->
                <a href="#home" class="
                        group
                        flex
                        items-center
                        gap-2
                    ">
                    <span class="
                            text-lg
                            font-black
                            tracking-[-0.05em]
                            text-zinc-900
                            transition-colors
                            duration-300

                            group-hover:text-teal-700

                            dark:text-white
                            dark:group-hover:text-teal-400
                        ">
                        EGD
                    </span>

                    <span class="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-amber-500
                            transition-transform
                            duration-300

                            group-hover:scale-125
                        "></span>
                </a>

                <!-- Desktop Navigation -->
                <div class="
                        hidden
                        items-center
                        gap-1

                        md:flex
                    ">
                    <ul class="flex items-center gap-1">
                        <li v-for="link in navLinks" :key="link.name">
                            <a :href="link.href" class="
                                    group
                                    relative
                                    flex
                                    items-center
                                    rounded-lg
                                    px-3.5
                                    py-2
                                    text-[12px]
                                    font-medium
                                    text-zinc-500
                                    transition-all
                                    duration-300

                                    hover:bg-white
                                    hover:text-teal-700

                                    dark:text-zinc-400
                                    dark:hover:bg-zinc-900
                                    dark:hover:text-teal-400
                                ">
                                {{ link.name }}

                                <span class="
                                        absolute
                                        bottom-1.5
                                        left-1/2
                                        h-px
                                        w-0
                                        -translate-x-1/2
                                        bg-teal-600
                                        transition-all
                                        duration-300

                                        group-hover:w-5

                                        dark:bg-teal-400
                                    "></span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Actions -->
                <div class="flex items-center gap-2">
                    <!-- Theme Toggle -->
                    <button type="button" @click="toggleTheme" :aria-label="darkMode
                            ? 'Switch to light mode'
                            : 'Switch to dark mode'
                        " class="
                            relative
                            flex
                            h-7
                            w-14
                            items-center
                            rounded-full
                            border
                            border-zinc-200
                            bg-white
                            p-1
                            shadow-sm
                            transition-all
                            duration-300

                            hover:border-zinc-300

                            dark:border-zinc-800
                            dark:bg-zinc-900

                            dark:hover:border-zinc-700
                        ">
                        <span class="
                                absolute
                                left-1
                                h-5
                                w-5
                                rounded-full
                                bg-zinc-100
                                shadow-sm
                                transition-transform
                                duration-300

                                dark:bg-zinc-800
                            " :class="darkMode
                                    ? 'translate-x-7'
                                    : 'translate-x-0'
                                "></span>

                        <span class="
                                relative
                                z-10
                                flex
                                w-full
                                items-center
                                justify-between
                                px-0.5
                            ">
                            <Sun class="
                                    h-3
                                    w-3
                                    transition-colors
                                    duration-300
                                " :class="darkMode
                                        ? 'text-zinc-600'
                                        : 'text-amber-500'
                                    " />

                            <Moon class="
                                    h-3
                                    w-3
                                    transition-colors
                                    duration-300
                                " :class="darkMode
                                        ? 'text-teal-400'
                                        : 'text-zinc-400'
                                    " />
                        </span>
                    </button>

                    <!-- Mobile Menu -->
                    <button type="button" @click="toggleMenu" :aria-expanded="menuOpen"
                        aria-label="Toggle navigation menu" class="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-transparent
                            text-zinc-500
                            transition-all
                            duration-300

                            hover:border-zinc-200
                            hover:bg-white
                            hover:text-teal-700

                            dark:text-zinc-400
                            dark:hover:border-zinc-800
                            dark:hover:bg-zinc-900
                            dark:hover:text-teal-400

                            md:hidden
                        ">
                        <Settings class="
                                h-4
                                w-4
                                transition-transform
                                duration-700
                                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                            " :style="{
                                transform: `rotate(${gearRotation}deg)`,
                            }" />
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <Transition name="mobile-menu">
                <div v-if="menuOpen" class="
                        border-t
                        border-zinc-200/80
                        bg-[#F7F7F5]/95
                        px-5
                        pb-5
                        pt-3
                        backdrop-blur-xl

                        dark:border-zinc-800/80
                        dark:bg-[#0D1210]/95

                        md:hidden
                    ">
                    <div class="
                            mx-auto
                            max-w-[1280px]
                        ">
                        <div class="
                                mb-2
                                flex
                                items-center
                                justify-between
                                px-3
                            ">
                            <span class="
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-zinc-400
                                ">
                                Navigation
                            </span>

                            <span class="
                                    font-mono
                                    text-[8px]
                                    text-teal-600

                                    dark:text-teal-400
                                ">
                                EGD / 2026
                            </span>
                        </div>

                        <ul class="flex flex-col gap-1">
                            <li v-for="link in navLinks" :key="link.name">
                                <a :href="link.href" @click="menuOpen = false" class="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-xl
                                        border
                                        border-transparent
                                        px-3
                                        py-3
                                        transition-all
                                        duration-300

                                        hover:border-zinc-200
                                        hover:bg-white

                                        dark:hover:border-zinc-800
                                        dark:hover:bg-zinc-900
                                    ">
                                    <span class="
                                            text-sm
                                            font-medium
                                            text-zinc-600
                                            transition-colors
                                            duration-300

                                            group-hover:text-teal-700

                                            dark:text-zinc-300
                                            dark:group-hover:text-teal-400
                                        ">
                                        {{ link.name }}
                                    </span>

                                    <span class="
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-zinc-200
                                            transition-all
                                            duration-300

                                            group-hover:bg-amber-500
                                            group-hover:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]

                                            dark:bg-zinc-800
                                            dark:group-hover:bg-amber-400
                                        "></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </nav>
    </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    overflow: hidden;
    transition:
        opacity 0.3s ease,
        transform 0.3s ease,
        max-height 0.35s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-8px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
}
</style>