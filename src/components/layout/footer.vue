<template>
    <footer class="
            border-t
            border-gray-200
            bg-white/80
            px-6 py-5
            backdrop-blur-xl

            dark:border-gray-800
            dark:bg-gray-950/80
        ">
        <div class="
                mx-auto
                flex
                max-w-7xl
                items-center
                justify-center
            ">

            <div class="
                    flex
                    items-center
                    gap-2
                    text-center
                ">

                <!-- Copyright -->
                <span class="
                        text-xs
                        text-gray-500

                        dark:text-gray-400
                    ">
                    © {{ new Date().getFullYear() }}
                </span>

                <!-- Brand -->
                <a href="#home" class="
                        text-sm
                        font-semibold
                        tracking-tight
                        transition-opacity
                        duration-300
                        hover:opacity-80
                    ">
                    <span class="text-indigo-500">
                        EGD
                    </span>

                    <span class="text-violet-400">
                        .
                    </span>
                </a>

                <!-- Rights -->
                <span class="
                        text-xs
                        text-gray-500

                        dark:text-gray-400
                    ">
                    All rights reserved.
                </span>

            </div>

        </div>
    </footer>
</template>