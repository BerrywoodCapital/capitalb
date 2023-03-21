<template>
    <div class="relative overflow-x-hidden">
        <header class="flex items-center justify-between h-24 mb-2 mx-auto px-5 md:px-16 z-30 absolute inset-x-0">
            <g-link to="/"><g-image src="~/assets/img/logo.svg" class="md:w-auto w-40"/></g-link>

            <nav
                :class="
                    `${
                        light ? 'text-white' : 'text-blue'
                    } font-medium duration-500 hidden md:flex items-center text-2xl`
                "
            >
                <button class="font-medium hover:text-dark-blue duration-500" @click="openPanel('about')">
                    About us
                </button>
                <button
                    class="font-medium hover:text-dark-blue duration-500 md:ml-10 mt-5 md:mt-0"
                    @click="openPanel('portfolio')"
                >
                    Portfolio
                </button>
                <button
                    class="font-medium md:ml-10 hover:text-dark-blue duration-500 mt-5 md:mt-0"
                    @click="openPanel('contact')"
                >
                    Contact us
                </button>
            </nav>
            <div class="md:hidden" @click="navOpen = true">
                <div :class="`${light ? 'bg-white' : 'bg-black'} h-1 w-8 rounded-full`"></div>
                <div :class="`${light ? 'bg-white' : 'bg-black'} h-1 w-8 rounded-full mt-1`"></div>
                <div :class="`${light ? 'bg-white' : 'bg-black'} h-1 w-8 rounded-full mt-1`"></div>
            </div>
            <div
                :class="
                    `absolute top-0 left-0 h-screen w-screen bg-white px-8 pt-6 transform duration-500 ${
                        navOpen ? 'translate-x-0' : 'translate-x-full'
                    }`
                "
            >
                <div class="flex items-center justify-between">
                    <g-link to="/"><g-image src="~/assets/img/logo-dark.svg" class="md:w-auto w-40"/></g-link>
                    <button class="text-red text-xl font-medium text-md  flex items-center" @click="closeNav">
                        <img src="@/assets/img/x.svg" alt="cancel" class=" w-4" />
                    </button>
                </div>

                <div class="flex flex-col mt-24 text-mobile-nav markazi text-blue">
                    <button class="font-medium hover:text-blue duration-500" @click="panel = 'about'">About us</button>
                    <button
                        class="font-medium hover:text-blue duration-500 md:ml-10 mt-8 md:mt-0"
                        @click="panel = 'portfolio'"
                    >
                        Portfolio
                    </button>
                    <button
                        class="font-medium md:ml-10 hover:text-blue duration-500 mt-8 md:mt-0"
                        @click="panel = 'contact'"
                    >
                        Contact us
                    </button>
                </div>
            </div>
        </header>
        <main>
            <slot />
        </main>
        <footer
            class="md:flex items-center justify-between bg-white mx-auto md:px-16 h-20 absolute bottom-0 inset-x-0 z-50 border-t b-2 border-smoke py-5 md:py-0"
        >
            <p class="text-sm font-normal text-center m-0 p-0">&copy; Early Capital B. All Rights Reserved</p>
            <g-image src="~/assets/img/footer-logo.svg" class="mx-auto mt-3 md:mt-0 md:mx-0 hidden md:block" />
            <g-link to="/privacy-policy"
                ><p class="text-sm font-normal text-center m-0 p-0 pb-2">Terms and conditions</p></g-link
            >
        </footer>

        <about :shouldShow="panel === 'about'" @clear-panel="clearPanel" />
        <portfolio :shouldShow="panel === 'portfolio'" @clear-panel="clearPanel" />
        <contact :shouldShow="panel === 'contact'" @clear-panel="clearPanel" />
    </div>
</template>

<script>
import SlideOutPanel from '~/components/slideOutPanel'
import About from '~/components/about'
import Portfolio from '~/components/portfolioSlider'
import Contact from '~/components/contact'
export default {
    name: 'Layout',
    components: {
        SlideOutPanel,
        About,
        Portfolio,
        Contact,
    },
    props: {
        importPanel: String,
        light: {
            type: Boolean,
            default: true,
        },
    },
    watch: {
        importPanel: function(newVal) {
            if (newVal != '') {
                this.panel = newVal
            }
        },
    },
    data() {
        return {
            panel: '',
            navOpen: false,
        }
    },

    methods: {
        clearPanel() {
            this.panel = ''
            this.$emit('clearPanel')
        },

        openPanel(param) {
            this.panel = param
            this.$emit('stopAnimation')
        },

        closeNav() {
            this.navOpen = false
        },
    },
}
</script>

<style>
@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-BoldItalic.ttf');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-Bold.ttf');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-Black-Italic.ttf');
    /* font-weight: bolder; */
    font-style: italic;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-Black.ttf');
    /* font-weight: bolder; */
    font-style: normal;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-LightItalic.ttf');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-Light.ttf');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-MediumItalic.ttf');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-Medium.ttf');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Visuelt Pro';
    src: url('/assets/VisueltPro/VisueltPro-Regular.ttf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Markazi Text';
    src: url('/assets/MarkaziText/MarkaziText-Bold.ttf');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Markazi Text';
    src: url('/assets/MarkaziText/MarkaziText-Medium.ttf');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Markazi Text';
    src: url('/assets/MarkaziText/MarkaziText-SemiBold.ttf');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Markazi Text';
    src: url('/assets/MarkaziText/MarkaziText-Regular.ttf');
    font-weight: normal;
    font-style: normal;
}

.markazi {
    font-family: 'Markazi Text' !important;
}

body {
    font-family: 'Visuelt Pro';
}

button {
    outline: none !important;
}

.fadeUp {
    animation: fadeUp 300ms ease-in 1 normal both;
}

@keyframes fadeUp {
    from {
        transform: translateY(10px);
        opacity: 0;
    }

    to {
        tranfrom: translateY(0px);
        opacity: 1;
    }
}

h2 {
    font-family: 'Markazi Text';
    font-weight: 600;
    font-size: 47px;
    line-height: 41px;
    color: theme('colors.blue');
    margin-bottom: 1rem;
    margin-top: 2rem;
}

.text p,
.text {
    font-size: 22px;
    line-height: 39px;
    color: #111111;
}

.sub-text {
    font-size: 19px;
    line-height: 161.8%;
    color: #333333;
}

nav {
    font-size: 23px;
}

button {
    outline: none;
}

.pitch h4 {
    font-size: 28px;
}

.pitch a {
    font-size: 42px;
}

@media screen and (max-width: 640px) {
    .pitch h4 {
        font-size: 20px;
    }
    .pitch a {
        font-size: 24px;
    }
}

.text-mobile-nav {
    font-weight: 600;
    font-size: 47px;
}

h1 {
    font-family: 'Markazi Text';
    color: #2895f0;
    font-size: 32px;
    margin-top: 20px;
}

p {
    font-family: 'Visuelt Pro';
    font-size: 18px;
    line-height: 35px;
    color: #111111;
    padding: 10px 0px;
}

ul {
    margin: 0;
    padding: 0;
    margin-bottom: 20px !important;
}

li {
    font-family: 'Visuelt Pro';
    font-size: 18px;
    line-height: 35px;
    color: #111111;
    margin-bottom: 26px;
}
</style>
