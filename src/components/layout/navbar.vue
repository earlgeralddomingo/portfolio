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

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
        darkMode.value = true
        document.documentElement.classList.add('dark')
    }
})

const menuOpen = ref(false)
const gearRotation = ref(0)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
    gearRotation.value += 180
}
</script>

<template>
    <header class="fixed top-0 left-0 z-50 w-full">

        <nav class="
                w-full
                border-b border-gray-200
                bg-white/80
                px-6 py-4
                font-sans
                text-gray-900
                backdrop-blur-xl

                dark:border-gray-800
                dark:bg-gray-950/80
                dark:text-white
            ">

            <div class="
                    mx-auto
                    flex
                    max-w-7xl
                    items-center
                    justify-between
                    px-4
                    lg:px-8
                ">

                <!-- Logo -->
                <a href="#home" class="text-xl font-semibold tracking-tight">
                    <span class="text-indigo-500">EGD</span>
                    <span class="text-violet-400">.</span>
                </a>

                <!-- Desktop Navigation -->
                <ul class="hidden items-center gap-2 md:flex">
                    <li v-for="link in navLinks" :key="link.name">
                        <a :href="link.href" class="
                                rounded-lg
                                px-4 py-2
                                text-sm
                                text-gray-600
                                transition-all
                                duration-300

                                hover:bg-zinc-200
                                hover:text-gray-900

                                dark:text-gray-300
                                dark:hover:bg-gray-800
                                dark:hover:text-white
                            ">
                            {{ link.name }}
                        </a>
                    </li>
                </ul>

                <!-- Actions -->
                <div class="mr-2 flex items-center gap-2">

                    <!-- Theme Toggle -->
                    <button type="button" @click="toggleTheme" :aria-label="darkMode
                            ? 'Switch to light mode'
                            : 'Switch to dark mode'
                        " class="
                            relative
                            flex
                            h-7 w-14
                            items-center
                            rounded-full
                            bg-gray-200
                            p-1
                            transition-colors
                            duration-300

                            dark:bg-gray-800
                        ">
                        <span class="
                                flex
                                h-5 w-5
                                items-center
                                justify-center
                                rounded-full
                                bg-white
                                shadow-md
                                transition-transform
                                duration-300

                                dark:bg-gray-700
                            " :class="darkMode
                                    ? 'translate-x-7'
                                    : 'translate-x-0'
                                ">
                            <Moon v-if="darkMode" class="h-3.5 w-3.5 text-gray-300" />

                            <Sun v-else class="h-3.5 w-3.5 text-yellow-500" />
                        </span>
                    </button>

                    <!-- Mobile Menu -->
                    <button type="button" @click="toggleMenu" class="
                            flex
                            h-7 w-7
                            items-center
                            justify-center
                            rounded-lg
                            text-gray-500
                            transition

                            hover:bg-gray-100
                            hover:text-gray-700

                            dark:text-gray-400
                            dark:hover:bg-gray-800
                            dark:hover:text-white

                            md:hidden
                        ">
                        <Settings class="
                                h-4.5 w-4.5
                                transition-transform
                                duration-700
                                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                            " :style="{
                                transform: `rotate(${gearRotation}deg)`
                            }" />
                    </button>

                </div>
            </div>

            <!-- Mobile Navigation -->
            <Transition name="mobile-menu">
                <div v-if="menuOpen" class="
                        mt-4
                        border-t
                        border-gray-200
                        pt-4

                        dark:border-gray-800

                        md:hidden
                    ">
                    <ul class="flex flex-col gap-1">

                        <li v-for="link in navLinks" :key="link.name">
                            <a :href="link.href" @click="menuOpen = false" class="
                                    block
                                    rounded-lg
                                    px-4 py-3
                                    text-sm
                                    text-gray-600
                                    transition

                                    hover:bg-slate-200
                                    hover:text-gray-900

                                    dark:text-gray-300
                                    dark:hover:bg-gray-800
                                    dark:hover:text-white
                                ">
                                {{ link.name }}
                            </a>
                        </li>

                    </ul>
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
        opacity 0.35s ease,
        transform 0.35s ease,
        max-height 0.35s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
    opacity: 1;
    max-height: 300px;
    transform: translateY(0);
}
</style>