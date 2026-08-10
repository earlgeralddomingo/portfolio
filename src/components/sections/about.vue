<script setup>
import aboutIMG from '../../assets/image/egd.png'
const skills = [
    'IT Support',
    'Windows',
    'Networking',
    'PHP',
    'MySQL',
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'Tailwind CSS',
]

const stats = [
    {
        value: '3+',
        label: 'YEARS',
        description: 'Hands-on Experience',
        icon: 'person',
    },
    {
        value: 'BSIT',
        label: 'DEGREE',
        description: 'Graduate',
        icon: 'education',
    },
    {
        value: 'IT',
        label: 'SUPPORT',
        description: 'Specialist',
        icon: 'headset',
    },
    {
        value: 'WEB',
        label: 'DEVELOPMENT',
        description: 'PHP • MySQL',
        icon: 'laptop',
    },
]

</script>

<template>
    <section id="about" class="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div class="relative mx-auto max-w-7xl">

            <!-- Section Label -->
            <div
                class="mb-8 flex items-center gap-3 font-mono text-base font-semibold tracking-wide text-indigo-500 sm:text-lg">
                <span class="h-2 w-2 rounded-full bg-indigo-500"></span>

                <span>ABOUT ME</span>
            </div>


            <!-- Two Column Layout -->
            <div class="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">

                <!-- ========================= -->
                <!-- LEFT COLUMN - ABOUT -->
                <!-- ========================= -->
                <div class="max-w-4xl">

                    <!-- Heading -->
                    <h2
                        class="max-w-3xl text-3xl font-bold leading-none tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
                        IT SUPPORT

                        <span class="block">
                            <span class="text-indigo-500">&</span>
                            WEB DEVELOPER
                        </span>
                    </h2>


                    <!-- Description -->
                    <p class="mt-5 max-w-2xl font-mono text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
                        IT professional with a strong foundation in technical support,
                        troubleshooting, networking, and web development. I enjoy solving
                        problems, optimizing systems, and building clean, functional web
                        applications that deliver real value.
                    </p>


                    <!-- Skills -->
                    <div class="mt-5 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-2">
                        <template v-for="(skill, index) in skills" :key="skill">

                            <span class="font-mono text-[11px] text-slate-700 sm:text-xs">
                                {{ skill }}
                            </span>

                            <span v-if="index !== skills.length - 1" class="text-xs text-violet-400">
                                •
                            </span>

                        </template>
                    </div>


                    <!-- Stats -->
                    <div
                        class="mt-7 grid max-w-3xl grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-white/70 backdrop-blur-sm sm:grid-cols-4">

                        <div v-for="(stat, index) in stats" :key="stat.label" class="relative p-4 sm:p-5" :class="{
                            'border-b border-slate-200 sm:border-b-0': index < 2,
                            'border-r border-slate-200': index % 2 === 0,
                            'sm:border-r': index < 3,
                            'sm:border-r-0': index === 3,
                        }">

                            <!-- Icon -->
                            <div class="mb-3 text-indigo-500">

                                <!-- Person -->
                                <svg v-if="stat.icon === 'person'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                                </svg>


                                <!-- Laptop -->
                                <svg v-if="stat.icon === 'laptop'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <rect x="4" y="4" width="16" height="11" rx="1" />

                                    <path d="M2 19h20" />
                                    <path d="M8 19l1-2h6l1 2" />
                                </svg>


                                <!-- Headset -->
                                <svg v-if="stat.icon === 'headset'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />

                                    <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4Z" />

                                    <path d="M20 14h-3v5h2a1 1 0 0 1-1-1v-4Z" />

                                    <path d="M17 19c0 1.1-.9 2-2 2h-2" />
                                </svg>


                                <!-- Education -->
                                <svg v-if="stat.icon === 'education'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path d="m3 9 9-5 9 5-9 5-9-5Z" />

                                    <path d="M7 11v5c3 2 7 2 10 0v-5" />

                                    <path d="M21 10v6" />
                                </svg>

                            </div>


                            <!-- Value -->
                            <div class="font-mono text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                                {{ stat.value }}
                            </div>


                            <!-- Label -->
                            <div class="mt-0.5 font-mono text-[10px] font-semibold text-slate-900 sm:text-xs">
                                {{ stat.label }}
                            </div>


                            <!-- Description -->
                            <div class="mt-1 font-mono text-[10px] text-slate-500 sm:text-xs">
                                {{ stat.description }}
                            </div>

                        </div>

                    </div>

                </div>



                <!-- ========================= -->
                <!-- RIGHT COLUMN - OPEN TO -->
                <!-- ========================= -->
                <div class="lg:pt-8">

                    <!-- Section Label -->
                    <div
                        class="mb-5 flex items-center gap-3 font-mono text-base font-semibold tracking-wide text-violet-400 sm:text-lg">
                        <span class="h-2 w-2 rounded-full bg-violet-400"></span>

                        <span>OPEN TO</span>
                    </div>


                    <!-- Opportunity List -->
                    <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-2">

                        <!-- IT Support -->
                        <a href="#contact"
                            class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50">
                            <div>
                                <p class="font-mono text-xs font-semibold text-slate-900">
                                    IT Support
                                </p>

                                <p class="mt-0.5 font-mono text-[10px] text-slate-500">
                                    Hardware & Software
                                </p>
                            </div>

                            <span
                                class="ml-2 text-sm text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>


                        <!-- Technical Support -->
                        <a href="#contact"
                            class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50">
                            <div>
                                <p class="font-mono text-xs font-semibold text-slate-900">
                                    Technical Support
                                </p>

                                <p class="mt-0.5 font-mono text-[10px] text-slate-500">
                                    Troubleshooting
                                </p>
                            </div>

                            <span
                                class="ml-2 text-sm text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>


                        <!-- Help Desk -->
                        <a href="#contact"
                            class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50">
                            <div>
                                <p class="font-mono text-xs font-semibold text-slate-900">
                                    Help Desk
                                </p>

                                <p class="mt-0.5 font-mono text-[10px] text-slate-500">
                                    User Support
                                </p>
                            </div>

                            <span
                                class="ml-2 text-sm text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>


                        <!-- System Administration -->
                        <a href="#contact"
                            class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50">
                            <div>
                                <p class="font-mono text-xs font-semibold text-slate-900">
                                    System Admin
                                </p>

                                <p class="mt-0.5 font-mono text-[10px] text-slate-500">
                                    Windows & Maintenance
                                </p>
                            </div>

                            <span
                                class="ml-2 text-sm text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>


                        <!-- Network Support -->
                        <a href="#contact"
                            class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50">
                            <div>
                                <p class="font-mono text-xs font-semibold text-slate-900">
                                    Network Support
                                </p>

                                <p class="mt-0.5 font-mono text-[10px] text-slate-500">
                                    LAN & Connectivity
                                </p>
                            </div>

                            <span
                                class="ml-2 text-sm text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>


                        <!-- Web Development -->
                        <a href="#contact"
                            class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/50">
                            <div>
                                <p class="font-mono text-xs font-semibold text-slate-900">
                                    Web Development
                                </p>

                                <p class="mt-0.5 font-mono text-[10px] text-slate-500">
                                    PHP, MySQL & Vue.js
                                </p>
                            </div>

                            <span
                                class="ml-2 text-sm text-violet-400 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                    </div>



                    <!-- Availability -->
                    <div class="mt-4 flex items-center gap-2 font-mono text-[10px] text-slate-500 sm:text-xs">
                        <span class="relative flex h-2 w-2">

                            <!-- Ripple 1 -->
                            <span class="ripple absolute inset-0 rounded-full bg-green-400"></span>

                            <!-- Ripple 2 -->
                            <span class="ripple ripple-delay absolute inset-0 rounded-full bg-green-400"></span>

                            <!-- Center Dot -->
                            <span class="relative h-2 w-2 rounded-full bg-green-500"></span>

                        </span>

                        Open to remote & on-site opportunities
                    </div>





                </div>


            </div>

        </div>
    </section>
</template>

<style scoped>
.ripple {
    animation: ripple 2s ease-out infinite;
}

.ripple-delay {
    animation-delay: 1s;
}

@keyframes ripple {
    0% {
        transform: scale(1);
        opacity: 0.7;
    }

    100% {
        transform: scale(4);
        opacity: 0;
    }
}
</style>
