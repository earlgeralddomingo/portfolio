<script setup>
import { ref } from 'vue'

import {
    Mail,
    Linkedin,
    Phone,
    MapPin,
    Copy,
    ExternalLink,
    X,
} from 'lucide-vue-next'

// =================================================
// CONTACT DATA
// =================================================

const email = 'earlgeralddomingo.basc@gmail.com'

const phone = '+63 9XX XXX XXXX'
// Replace with your actual number.

const location = 'San Miguel, Bulacan, Philippines'

const linkedinUrl =
    'https://www.linkedin.com/in/earl-gerald-domingo-479682316/'


// =================================================
// MODAL STATE
// =================================================

const showGmailModal = ref(false)
const showPhoneModal = ref(false)


// =================================================
// COPY STATE
// =================================================

const copiedEmail = ref(false)
const copiedPhone = ref(false)


// =================================================
// COPY EMAIL
// =================================================

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email)

        copiedEmail.value = true

        setTimeout(() => {
            copiedEmail.value = false
        }, 2000)
    } catch (error) {
        console.error('Failed to copy email:', error)
    }
}


// =================================================
// COPY PHONE
// =================================================

const copyPhone = async () => {
    try {
        await navigator.clipboard.writeText(phone)

        copiedPhone.value = true

        setTimeout(() => {
            copiedPhone.value = false
        }, 2000)
    } catch (error) {
        console.error('Failed to copy phone number:', error)
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


// =================================================
// CALL PHONE
// =================================================

const callPhone = () => {
    window.location.href = `tel:${phone.replace(/\s+/g, '')}`
}
</script>


<template>

    <!-- ================================================= -->
    <!-- CONTACT SECTION -->
    <!-- ================================================= -->

    <section id="contact" class="
            bg-slate-50
            px-6 py-16
            dark:bg-gray-950
            sm:px-8
            lg:px-12
            lg:py-20
        ">

        <div class="
                mx-auto
                flex
                min-h-[70vh]
                max-w-6xl
                items-center
            ">

            <div class="
                    grid
                    w-full
                    items-center
                    gap-10
                    lg:grid-cols-2
                    lg:gap-16
                ">

                <!-- ========================================= -->
                <!-- LEFT COLUMN -->
                <!-- ========================================= -->

                <div class="text-center lg:text-left">

                    <!-- Section Label -->

                    <div class="
                            mb-6
                            flex
                            items-center
                            justify-center
                            gap-3
                            font-mono
                            text-base
                            font-semibold
                            tracking-wide
                            text-indigo-500
                            sm:text-lg
                            lg:justify-start
                        ">

                        <span class="
                                h-2
                                w-2
                                rounded-full
                                bg-indigo-500
                            "></span>

                        <span>CONTACT</span>

                    </div>


                    <!-- Heading -->

                    <h2 class="
                            text-4xl
                            font-bold
                            tracking-tight
                            text-slate-950
                            dark:text-white
                            sm:text-5xl
                            lg:text-6xl
                        ">
                        Let's

                        <span class="text-indigo-500">
                            connect.
                        </span>

                    </h2>


                    <!-- Description -->

                    <p class="
                            mx-auto
                            mt-5
                            max-w-xl
                            font-mono
                            text-sm
                            leading-7
                            text-slate-600
                            dark:text-gray-400
                            sm:text-base
                            lg:mx-0
                        ">
                        Whether you are looking for technical support,
                        a web development partner, or someone to help
                        build and improve a digital solution, I'd be happy
                        to hear from you.
                    </p>


                    <!-- Availability -->

                    <div class="
                            mt-7
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-emerald-200
                            bg-emerald-50
                            px-4 py-2
                            dark:border-emerald-900
                            dark:bg-emerald-950/40
                        ">

                        <span class="
                                h-2
                                w-2
                                animate-pulse
                                rounded-full
                                bg-emerald-500
                            "></span>

                        <span class="
                                font-mono
                                text-xs
                                font-medium
                                text-emerald-600
                                dark:text-emerald-400
                            ">
                            OPEN TO OPPORTUNITIES
                        </span>

                    </div>


                    <!-- Location -->

                    <div class="
                            mt-6
                            flex
                            items-center
                            justify-center
                            gap-2
                            font-mono
                            text-xs
                            text-slate-500
                            dark:text-gray-500
                            lg:justify-start
                        ">

                        <MapPin class="
                                h-4
                                w-4
                                shrink-0
                                text-indigo-400
                            " />

                        <span>
                            {{ location }}
                        </span>

                    </div>


                    <!-- Bottom Statement -->

                    <div class="
                            mt-5
                            flex
                            items-center
                            justify-center
                            gap-2
                            font-mono
                            text-[10px]
                            text-slate-400
                            dark:text-gray-500
                            sm:text-xs
                            lg:justify-start
                        ">

                        <span class="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-violet-400
                            "></span>

                        Available for IT support and web development
                        opportunities.

                    </div>

                </div>


                <!-- ========================================= -->
                <!-- RIGHT COLUMN -->
                <!-- ========================================= -->

                <div class="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white/60
                        p-6
                        shadow-sm
                        backdrop-blur-sm
                        dark:border-gray-800
                        dark:bg-gray-900/60
                        sm:p-8
                    ">

                    <!-- ================================= -->
                    <!-- CONNECT -->
                    <!-- ================================= -->

                    <div class="text-center">

                        <span class="
                                font-mono
                                text-[10px]
                                font-semibold
                                tracking-[0.15em]
                                text-slate-400
                                dark:text-gray-500
                            ">
                            CONNECT
                        </span>


                        <!-- Contact Buttons -->

                        <div class="
                                mt-4
                                flex
                                flex-wrap
                                items-center
                                justify-center
                                gap-3
                            ">

                            <!-- ============================= -->
                            <!-- Gmail -->
                            <!-- ============================= -->

                            <button type="button" @click="showGmailModal = true" class="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-white
                                    px-5 py-2.5
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-indigo-300
                                    hover:bg-indigo-50
                                    hover:text-indigo-600
                                    hover:shadow-md
                                    dark:border-gray-700
                                    dark:bg-gray-950
                                    dark:text-gray-300
                                    dark:hover:border-indigo-700
                                    dark:hover:bg-indigo-950
                                    dark:hover:text-indigo-400
                                ">

                                <Mail class="h-4 w-4" />

                                <span>Gmail</span>

                            </button>


                            <!-- ============================= -->
                            <!-- LinkedIn -->
                            <!-- ============================= -->

                            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-white
                                    px-5 py-2.5
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-indigo-300
                                    hover:bg-indigo-50
                                    hover:text-indigo-600
                                    hover:shadow-md
                                    dark:border-gray-700
                                    dark:bg-gray-950
                                    dark:text-gray-300
                                    dark:hover:border-indigo-700
                                    dark:hover:bg-indigo-950
                                    dark:hover:text-indigo-400
                                ">

                                <Linkedin class="h-4 w-4" />

                                <span>LinkedIn</span>

                                <ExternalLink class="h-3.5 w-3.5 opacity-50" />

                            </a>


                            <!-- ============================= -->
                            <!-- Phone -->
                            <!-- ============================= -->

                            <button type="button" @click="showPhoneModal = true" class="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-white
                                    px-5 py-2.5
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-indigo-300
                                    hover:bg-indigo-50
                                    hover:text-indigo-600
                                    hover:shadow-md
                                    dark:border-gray-700
                                    dark:bg-gray-950
                                    dark:text-gray-300
                                    dark:hover:border-indigo-700
                                    dark:hover:bg-indigo-950
                                    dark:hover:text-indigo-400
                                ">

                                <Phone class="h-4 w-4" />

                                <span>Phone</span>

                            </button>

                        </div>

                    </div>


                    <!-- ================================= -->
                    <!-- Divider -->
                    <!-- ================================= -->

                    <div class="
                            my-6
                            h-px
                            bg-slate-200
                            dark:bg-gray-800
                        "></div>


                    <!-- ================================= -->
                    <!-- Contact Information -->
                    <!-- ================================= -->

                    <div class="space-y-4">

                        <!-- Location -->

                        <div class="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-slate-200
                                bg-white/70
                                p-3
                                dark:border-gray-800
                                dark:bg-gray-950/50
                            ">

                            <div class="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-indigo-50
                                    text-indigo-500
                                    dark:bg-indigo-950
                                    dark:text-indigo-400
                                ">
                                <MapPin class="h-4 w-4" />
                            </div>

                            <div>

                                <p class="
                                        font-mono
                                        text-[9px]
                                        uppercase
                                        tracking-wider
                                        text-slate-400
                                        dark:text-gray-500
                                    ">
                                    LOCATION
                                </p>

                                <p class="
                                        font-mono
                                        text-xs
                                        font-medium
                                        text-slate-700
                                        dark:text-gray-300
                                    ">
                                    {{ location }}
                                </p>

                            </div>

                        </div>

                    </div>


                    <!-- ================================= -->
                    <!-- Divider -->
                    <!-- ================================= -->

                    <div class="
                            my-6
                            h-px
                            bg-slate-200
                            dark:bg-gray-800
                        "></div>


                    <!-- ================================= -->
                    <!-- Call To Action -->
                    <!-- ================================= -->

                    <div>

                        <p class="
                                font-mono
                                text-xs
                                leading-6
                                text-slate-500
                                dark:text-gray-400
                                sm:text-sm
                            ">
                            Have a project, opportunity, or technical
                            challenge in mind? Let's start a conversation.
                        </p>


                        <!-- Get In Touch -->

                        <button type="button" @click="showGmailModal = true" class="
                                mt-5
                                inline-flex
                                items-center
                                rounded-full
                                bg-indigo-500
                                px-6 py-3
                                font-mono
                                text-xs
                                font-semibold
                                text-white
                                shadow-md
                                shadow-indigo-200/40
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-indigo-600
                                hover:shadow-lg
                                hover:shadow-indigo-200/50
                                dark:shadow-indigo-950/40
                            ">

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

        <div v-if="showGmailModal" @click.self="showGmailModal = false" class="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-slate-900/20
                px-5 py-8
                backdrop-blur-sm
                dark:bg-black/60
            ">

            <div class="
                    relative
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/95
                    p-7
                    shadow-2xl
                    shadow-slate-900/10
                    backdrop-blur-xl
                    dark:border-gray-800
                    dark:bg-gray-900/95
                    dark:shadow-black/30
                    sm:p-8
                ">

                <!-- Close -->

                <button type="button" @click="showGmailModal = false" aria-label="Close email modal" class="
                        absolute
                        right-5
                        top-5
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        text-slate-400
                        transition-all
                        duration-200
                        hover:bg-slate-200
                        hover:text-slate-700
                        dark:hover:bg-gray-800
                        dark:hover:text-white
                    ">
                    <X class="h-4 w-4" />
                </button>


                <!-- Label -->

                <p class="
                        font-mono
                        text-[10px]
                        font-semibold
                        tracking-[0.2em]
                        text-indigo-500
                    ">
                    GET IN TOUCH
                </p>


                <!-- Heading -->

                <h3 class="
                        mt-4
                        text-2xl
                        font-bold
                        tracking-tight
                        text-slate-950
                        dark:text-white
                        sm:text-3xl
                    ">
                    Let's

                    <span class="text-indigo-500">
                        connect
                    </span>
                </h3>


                <!-- Description -->

                <p class="
                        mt-3
                        max-w-sm
                        font-mono
                        text-xs
                        leading-6
                        text-slate-500
                        dark:text-gray-400
                        sm:text-sm
                    ">
                    I'm open to opportunities, collaborations,
                    and building great digital experiences.
                </p>


                <!-- Email + Copy -->

                <div class="
                        mt-7
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        p-3
                        shadow-sm
                        dark:border-gray-700
                        dark:bg-gray-950
                    ">

                    <Mail class="
                            h-4
                            w-4
                            shrink-0
                            text-indigo-500
                        " />

                    <span class="
                            min-w-0
                            flex-1
                            truncate
                            font-mono
                            text-xs
                            font-semibold
                            text-slate-700
                            dark:text-gray-300
                            sm:text-sm
                        ">
                        {{ email }}
                    </span>


                    <button type="button" @click="copyEmail" class="
                            inline-flex
                            shrink-0
                            items-center
                            gap-1.5
                            rounded-lg
                            bg-indigo-500
                            px-4 py-2
                            font-mono
                            text-xs
                            font-medium
                            text-white
                            shadow-sm
                            transition-all
                            duration-200
                            hover:bg-indigo-600
                            hover:shadow-md
                        ">

                        <Copy class="h-3.5 w-3.5" />

                        {{ copiedEmail ? 'Copied!' : 'Copy' }}

                    </button>

                </div>


                <!-- Open Gmail -->

                <button type="button" @click="openMailApp" class="
                        mt-4
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-5 py-3
                        font-mono
                        text-xs
                        font-semibold
                        text-slate-700
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-indigo-300
                        hover:bg-indigo-50
                        hover:text-indigo-600
                        hover:shadow-md
                        dark:border-gray-700
                        dark:bg-gray-950
                        dark:text-gray-300
                        dark:hover:border-indigo-700
                        dark:hover:bg-indigo-950
                        dark:hover:text-indigo-400
                    ">

                    <Mail class="h-4 w-4" />

                    Open Gmail

                    <ExternalLink class="h-3.5 w-3.5" />

                </button>


                <!-- Modal Footer -->

                <div class="
                        mt-5
                        flex
                        items-center
                        justify-center
                        gap-2
                    ">

                    <span class="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-indigo-400
                        "></span>

                    <span class="
                            font-mono
                            text-[10px]
                            text-slate-400
                            dark:text-gray-500
                        ">
                        AVAILABLE FOR OPPORTUNITIES
                    </span>

                </div>

            </div>

        </div>

    </Transition>


    <!-- ================================================= -->
    <!-- PHONE MODAL -->
    <!-- ================================================= -->

    <Transition name="modal">

        <div v-if="showPhoneModal" @click.self="showPhoneModal = false" class="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-slate-900/20
                px-5 py-8
                backdrop-blur-sm
                dark:bg-black/60
            ">

            <div class="
                    relative
                    w-full
                    max-w-md
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/95
                    p-7
                    shadow-2xl
                    shadow-slate-900/10
                    backdrop-blur-xl
                    dark:border-gray-800
                    dark:bg-gray-900/95
                    dark:shadow-black/30
                    sm:p-8
                ">

                <!-- Close -->

                <button type="button" @click="showPhoneModal = false" aria-label="Close phone modal" class="
                        absolute
                        right-5
                        top-5
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        text-slate-400
                        transition-all
                        duration-200
                        hover:bg-slate-200
                        hover:text-slate-700
                        dark:hover:bg-gray-800
                        dark:hover:text-white
                    ">
                    <X class="h-4 w-4" />
                </button>


                <!-- Label -->

                <p class="
                        font-mono
                        text-[10px]
                        font-semibold
                        tracking-[0.2em]
                        text-indigo-500
                    ">
                    PHONE
                </p>


                <!-- Heading -->

                <h3 class="
                        mt-4
                        text-2xl
                        font-bold
                        tracking-tight
                        text-slate-950
                        dark:text-white
                        sm:text-3xl
                    ">
                    Let's

                    <span class="text-indigo-500">
                        talk.
                    </span>
                </h3>


                <!-- Description -->

                <p class="
                        mt-3
                        max-w-sm
                        font-mono
                        text-xs
                        leading-6
                        text-slate-500
                        dark:text-gray-400
                        sm:text-sm
                    ">
                    Prefer a direct conversation? You can reach
                    me through my mobile number.
                </p>


                <!-- Phone + Copy -->

                <div class="
                        mt-7
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        p-3
                        shadow-sm
                        dark:border-gray-700
                        dark:bg-gray-950
                    ">

                    <Phone class="
                            h-4
                            w-4
                            shrink-0
                            text-indigo-500
                        " />

                    <span class="
                            min-w-0
                            flex-1
                            truncate
                            font-mono
                            text-sm
                            font-semibold
                            text-slate-700
                            dark:text-gray-300
                        ">
                        {{ phone }}
                    </span>


                    <button type="button" @click="copyPhone" class="
                            inline-flex
                            shrink-0
                            items-center
                            gap-1.5
                            rounded-lg
                            bg-indigo-500
                            px-4 py-2
                            font-mono
                            text-xs
                            font-medium
                            text-white
                            shadow-sm
                            transition-all
                            duration-200
                            hover:bg-indigo-600
                            hover:shadow-md
                        ">

                        <Copy class="h-3.5 w-3.5" />

                        {{ copiedPhone ? 'Copied!' : 'Copy' }}

                    </button>

                </div>


                <!-- Call Now -->

                <button type="button" @click="callPhone" class="
                        mt-4
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-indigo-500
                        px-5 py-3
                        font-mono
                        text-xs
                        font-semibold
                        text-white
                        shadow-md
                        shadow-indigo-200/40
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-indigo-600
                        hover:shadow-lg
                        hover:shadow-indigo-200/50
                        dark:shadow-indigo-950/40
                    ">

                    <Phone class="h-4 w-4" />

                    CALL NOW

                </button>


                <!-- Modal Footer -->

                <div class="
                        mt-5
                        flex
                        items-center
                        justify-center
                        gap-2
                    ">

                    <span class="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-indigo-400
                        "></span>

                    <span class="
                            font-mono
                            text-[10px]
                            text-slate-400
                            dark:text-gray-500
                        ">
                        AVAILABLE FOR OPPORTUNITIES
                    </span>

                </div>

            </div>

        </div>

    </Transition>

</template>


<style scoped>
/* ================================================= */
/* MODAL TRANSITION */
/* ================================================= */

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>