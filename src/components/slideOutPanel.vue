<template>
    <div :class="`fixed top-0 w-full h-full z-40 duration-500 transform ${shouldShow ? 'visible' : 'invisible'}`">
        <div
            :class="
                `h-screen w-screen panel fixed top-0 left-0 duration-500 ${shouldShow ? 'opacity-100' : 'opacity-0'}`
            "
            @click="$emit('close')"
        ></div>

        <div
            :class="
                `h-screen bg-panel ml-auto bg-white fixed right-0 px-6 md:px-16 overflow-y-scroll overflow-x-hidden scrolling-touch transform duration-500  ${
                    shouldShow ? 'translate-x-0' : 'translate-x-full'
                }`
            "
        >
            <button
                class="text-red text-xl font-medium text-md absolute top-0 right-0 mt-8 pt-1 md:mt-16 md:pt-5 mr-10 md:mr-24 z-10 flex items-center"
                @click="$emit('close')"
            >
                Close <img src="@/assets/img/x.svg" alt="cancel" class="ml-2 w-4" />
            </button>
            <div class="h-16 w-full"></div>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlideOutPanel',

    props: {
        shouldShow: Boolean,
    },

    watch: {
        shouldShow(newVal) {
            if (newVal) {
                document.querySelector('body').style.overflow = 'hidden'
            } else {
                document.querySelector('body').style.overflow = 'auto'
            }
        },
    },
}
</script>

<style>
.panel {
    background: rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(10px);
}

.bg-panel {
    max-width: 80%;
}

@media screen and (max-width: 640px) {
    .bg-panel {
        max-width: 100vw !important;
        width: 100vw;
    }
}
</style>
