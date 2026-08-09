<script setup>
import { ref } from 'vue'


// =================================================
// CONTACT DATA
// =================================================

const email = 'earlgeralddomingo.basc@gmail.com'

const linkedinUrl =
    'https://www.linkedin.com/in/earl-gerald-domingo-479682316/'


// =================================================
// MODAL STATE
// =================================================

const showGmailModal = ref(false)


// =================================================
// COPY STATE
// =================================================

const copied = ref(false)


// =================================================
// COPY EMAIL
// =================================================

const copyEmail = async () => {

    try {

        await navigator.clipboard.writeText(email)

        copied.value = true

        setTimeout(() => {

            copied.value = false

        }, 2000)

    } catch (error) {

        console.error('Failed to copy email:', error)

    }

}


// =================================================
// OPEN GMAIL
// =================================================

const openMailApp = () => {

    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

    window.open(
        gmailUrl,
        '_blank',
        'noopener,noreferrer'
    )

}
</script>


<template>

    <!-- ================================================= -->
    <!-- CONTACT SECTION -->
    <!-- ================================================= -->

    <section id="contact" class="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div class="mx-auto flex min-h-[70vh] max-w-6xl items-center">

            <div class="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">


                <!-- ========================================= -->
                <!-- LEFT COLUMN -->
                <!-- ========================================= -->

                <div class="text-center lg:text-left">


                    <!-- ================================= -->
                    <!-- Section Label -->
                    <!-- ================================= -->

                    <div
                        class="mb-6 flex items-center justify-center gap-3 font-mono text-base font-semibold tracking-wide text-indigo-500 sm:text-lg lg:justify-start">

                        <span class="h-2 w-2 rounded-full bg-indigo-500"></span>

                        <span>
                            CONTACT
                        </span>

                    </div>


                    <!-- ================================= -->
                    <!-- Heading -->
                    <!-- ================================= -->

                    <h2 class="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">

                        Let's

                        <span class="text-indigo-500">
                            connect.
                        </span>

                    </h2>


                    <!-- ================================= -->
                    <!-- Description -->
                    <!-- ================================= -->

                    <p class="mx-auto mt-5 max-w-xl font-mono text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">

                        Whether you are looking for technical support,
                        a web development partner, or someone to help
                        build and improve a digital solution, I'd be happy
                        to hear from you.

                    </p>


                    <!-- ================================= -->
                    <!-- Availability -->
                    <!-- ================================= -->

                    <div
                        class="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">

                        <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>

                        <span class="font-mono text-xs font-medium text-emerald-600">
                            OPEN TO OPPORTUNITIES
                        </span>

                    </div>


                    <!-- ================================= -->
                    <!-- Bottom Statement -->
                    <!-- ================================= -->

                    <div
                        class="mt-8 flex items-center justify-center gap-2 font-mono text-[10px] text-slate-400 sm:text-xs lg:justify-start">

                        <span class="h-1.5 w-1.5 rounded-full bg-violet-400"></span>

                        Available for IT support and web development
                        opportunities.

                    </div>

                </div>


                <!-- ========================================= -->
                <!-- RIGHT COLUMN -->
                <!-- ========================================= -->

                <div class="rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">


                    <!-- ================================= -->
                    <!-- CONNECT -->
                    <!-- ================================= -->

                    <div>

                        <span class="font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-400">
                            CONNECT
                        </span>


                        <!-- ================================= -->
                        <!-- Contact Buttons -->
                        <!-- ================================= -->

                        <div class="mt-4 flex flex-wrap gap-3">


                            <!-- ============================= -->
                            <!-- Gmail -->
                            <!-- ============================= -->

                            <button type="button" @click="showGmailModal = true"
                                class="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">

                                Gmail

                            </button>


                            <!-- ============================= -->
                            <!-- LinkedIn -->
                            <!-- ============================= -->

                            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer"
                                class="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">

                                LinkedIn

                            </a>

                        </div>

                    </div>


                    <!-- ================================= -->
                    <!-- Divider -->
                    <!-- ================================= -->

                    <div class="my-6 h-px bg-slate-200"></div>


                    <!-- ================================= -->
                    <!-- Call To Action -->
                    <!-- ================================= -->

                    <div>

                        <p class="font-mono text-xs leading-6 text-slate-500 sm:text-sm">

                            Have a project, opportunity, or technical
                            challenge in mind? Let's start a conversation.

                        </p>


                        <!-- ================================= -->
                        <!-- Get In Touch -->
                        <!-- ================================= -->

                        <button type="button" @click="showGmailModal = true"
                            class="mt-5 inline-flex items-center rounded-full bg-indigo-500 px-6 py-3 font-mono text-xs font-semibold text-white shadow-md shadow-indigo-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200/50">

                            GET IN TOUCH

                            <span class="ml-2">
                                →
                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================================================= -->
    <!-- GMAIL MODAL -->
    <!-- ================================================= -->

    <Transition name="modal">

        <div v-if="showGmailModal" @click.self="showGmailModal = false"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/20 px-5 py-8 backdrop-blur-sm">


            <!-- ============================================= -->
            <!-- MODAL -->
            <!-- ============================================= -->

            <div
                class="relative w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50/95 p-7 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-8">


                <!-- ========================================= -->
                <!-- Close Button -->
                <!-- ========================================= -->

                <button type="button" @click="showGmailModal = false" aria-label="Close contact modal"
                    class="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-slate-200 hover:text-slate-700">

                    <span class="text-xl leading-none">
                        ×
                    </span>

                </button>


                <!-- ========================================= -->
                <!-- Label -->
                <!-- ========================================= -->

                <p class="font-mono text-[10px] font-semibold tracking-[0.2em] text-indigo-500">

                    GET IN TOUCH

                </p>


                <!-- ========================================= -->
                <!-- Heading -->
                <!-- ========================================= -->

                <h3 class="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">

                    Let's

                    <span class="text-indigo-500">
                        connect
                    </span>

                </h3>


                <!-- ========================================= -->
                <!-- Description -->
                <!-- ========================================= -->

                <p class="mt-3 max-w-sm font-mono text-xs leading-6 text-slate-500 sm:text-sm">

                    I'm open to opportunities, collaborations,
                    and building great digital experiences.

                </p>


                <!-- ========================================= -->
                <!-- Email + Copy -->
                <!-- ========================================= -->

                <div class="mt-7 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">


                    <!-- Email -->

                    <span class="min-w-0 flex-1 truncate font-mono text-xs font-semibold text-slate-700 sm:text-sm">

                        {{ email }}

                    </span>


                    <!-- Copy -->

                    <button type="button" @click="copyEmail"
                        class="shrink-0 rounded-lg bg-indigo-500 px-4 py-2 font-mono text-xs font-medium text-white shadow-sm shadow-indigo-200/50 transition-all duration-200 hover:bg-indigo-600 hover:shadow-md">

                        {{ copied ? 'Copied!' : 'Copy' }}

                    </button>

                </div>


                <!-- ========================================= -->
                <!-- Open Gmail -->
                <!-- ========================================= -->

                <button type="button" @click="openMailApp"
                    class="mt-4 w-full rounded-xl border border-slate-200 bg-white px-5 py-3 font-mono text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md">

                    Open Gmail

                </button>


                <!-- ========================================= -->
                <!-- Modal Footer -->
                <!-- ========================================= -->

                <div class="mt-5 flex items-center justify-center gap-2">

                    <span class="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>

                    <span class="font-mono text-[10px] text-slate-400">
                        AVAILABLE FOR OPPORTUNITIES
                    </span>

                </div>

            </div>

        </div>

    </Transition>

</template>


<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>