<template>
    <div
        class="h-64 bg-light flex items-center justify-center relative"
        @mouseenter="showView = true"
        @mouseleave="showView = false"
    >
        <g-image :src="logo" class="w-6/12 mx-auto" :alt="logo" />
        <div
            :class="
                `h-full w-full z-10 absolute bg-blue flex items-center justify-center duration-500 ${
                    showView ? 'opacity-100' : 'opacity-0'
                }`
            "
        >
            <div>
                <!-- <g-image src="~/assets/img/view.svg" :class="`w-3/4 mx-auto ${showView ? 'fadeUp' : 'fadeDown'}`" /> -->
                <div :class="`w-10/12 mx-auto ${showView ? 'fadeUp' : 'fadeDown'}`">
                    <p class="desc">
                        {{ text }}
                    </p>
                    <div class="mt-4 font-normal">
                        <a class="view flex items-center" :href="link" target="_blank"
                            >View Site

                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 34 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="ml-1"
                            >
                                <path
                                    d="M24.9913 9.46086L7.07129 27.3809"
                                    stroke="#E8F6EC"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25.3809 23.2134L25.3809 9.07124L11.2387 9.07125"
                                    stroke="#E8F6EC"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortFolio',
    data() {
        return {
            showView: false,
        }
    },
    props: {
        logo: String,
        text: String,
        link: String,
    },
}
</script>

<style>
.desc {
    color: #e8f6ec;
    font-size: 15px;
    line-height: 24px;
}

.view {
    color: #e8f6ec;
    font-size: 18px;
}
</style>
