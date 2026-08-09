<script setup>
import { FileText } from 'lucide-vue-next'
import profileImage from '../../assets/image/egd.png'
</script>

<template>
    <section id="home" class="min-h-screen bg-slate-50 px-6 pt-32 pb-20 sm:px-8 lg:px-12 lg:pt-40">
        <div class="mx-auto grid max-w-6xl items-center justify-items-center gap-12 lg:grid-cols-2 lg:gap-16">


<!-- ========================= -->
<!-- Left Column - Profile -->
<!-- ========================= -->
<div class="relative flex h-80 w-80 justify-center lg:h-[350px] lg:w-[350px]">

    <!-- Background Glow -->
    <div
        class="absolute inset-0 scale-110 rounded-full bg-gradient-to-r from-indigo-300 to-violet-300 opacity-30 blur-3xl"
    ></div>


    <!-- Ripple 1 -->
    <span
        class="absolute inset-0 rounded-full border-2 border-indigo-300/30 ripple"
    ></span>


    <!-- Ripple 2 -->
    <span
        class="absolute inset-0 rounded-full border-2 border-violet-300/25 ripple ripple-delay"
    ></span>


    <!-- Profile Image -->
    <div
        class="relative z-10 h-full w-full overflow-hidden rounded-full border border-gray-200 bg-white shadow-2xl"
    >
        <img
            :src="profileImage"
            alt="Earl Gerald"
            class="h-full w-full object-cover"
        />
    </div>

</div>




            <!-- ========================= -->
            <!-- Right Column - Introduction -->
            <!-- ========================= -->
            <div class="w-full max-w-xl text-center lg:text-left">

                <!-- Availability Badge -->
                <div
                    class="mb-5 inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs text-gray-600 backdrop-blur">
                    <span class="mr-2 h-2 w-2 rounded-full bg-green-500"></span>

                    Available for opportunities
                </div>


                <!-- Heading -->
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    Hi, I'm
                    <span class="text-indigo-500">
                        Earl Gerald
                    </span>
                </h1>


                <!-- Role -->
                <h2 class="mt-3 text-xl font-medium text-gray-600 sm:text-2xl">
                    IT Support Specialist
                    <span class="text-violet-400">&</span>
                    Web Developer
                </h2>


                <!-- Description -->
                <p
                    class="mx-auto mt-5 max-w-lg font-mono text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7 lg:mx-0">
                    IT Support Specialist with hands-on experience in freelance,
                    internship, and professional IT roles, specializing in
                    hardware, software, printer, and network troubleshooting
                    while creating reliable web applications with PHP, MySQL,
                    HTML, CSS, and JavaScript.
                </p>


                <!-- Tagline -->
                <p class="mt-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
                    Crafting Solutions
                </p>


                <!-- Action Buttons -->
                <!-- ========================= -->
                <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

                    <!-- Projects -->
                    <a href="#projects"
                        class="rounded-full border border-indigo-200 px-5 py-2.5 text-sm font-medium text-indigo-600 transition-all duration-300 hover:scale-105 hover:border-indigo-300 hover:bg-indigo-50">
                        View Projects
                    </a>

                    <a href="#contact"
                        class="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-zinc-100">
                        Contact Me
                    </a>
                    <!-- Resume -->
                    <a href="/Earl_Gerald_Domingo_IT_Staff.pdf" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200 px-5 py-2.5 text-sm font-medium text-violet-600 transition-all duration-300 hover:scale-105 hover:border-violet-300 hover:bg-violet-50">
                        <FileText class="h-4 w-4" />
                        Resume
                    </a>

                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>

.ripple {
    animation: profile-ripple 3s ease-out infinite;
}

.ripple-delay {
    animation-delay: 1.5s;
}

@keyframes profile-ripple {

    0% {
        transform: scale(1);
        opacity: 0;
    }

    15% {
        opacity: 0.6;
    }

    70% {
        opacity: 0.25;
    }

    100% {
        transform: scale(1.35);
        opacity: 0;
    }

}

</style>

