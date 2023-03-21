<template>
    <Layout :importPanel="panel" @clearPanel="clearPanel" @stopAnimation="stopAnimation = true">
        <section class="min-h-screen bg">
            <div class="h-56 w-full"></div>
            <div class="flex w-11/12 mx-auto flex-col justify-center h-full lg:mt-10">
                <h1 class="text-gray-1 font-bold mb-2 lg:mb-6 markazi">
                    {{ $page.content.main_text }} <br />
                    <Typewriter :words="$page.content.list" />
                </h1>
                <div class="h-64 mt-10">
                    <button class="btn px-10 md:px-16 hover:bg-dark-blue" @click="openPanel">Learn more</button>
                </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>
query{
    content: homePage(id: 1){
        main_text
        background_image
        list{
            content
        }
    }
}
</page-query>

<script>
import Typewriter from '~/components/typewriter'
export default {
    metaInfo: {
        title: 'VC for Black-led Businesses',

        meta: [
            {
                name: 'og:title',
                content: 'CapitalB - VC for Black-led Businesses',
            },
            {
                name: 'description',
                content:
                    'We are a venture capital firm that invests in African technology Start-ups with the potential to build and create impact.',
            },
            {
                name: 'og:description',
                content:
                    'We are a venture capital firm that invests in African technology Start-ups with the potential to build and create impact.',
            },
            {
                name: 'twitter:title',
                content: 'CapitalB - VC for Black-led Businesses',
            },
            {
                name: 'keywords',
                content: 'venture capital, VC, angel investor',
            },
            {
                name: 'revisit-after',
                content: '90 days',
            },
        ],
    },
    data() {
        return {
            panel: '',
        }
    },

    components: {
        Typewriter,
    },

    mounted() {
        var bgImage = new Image()

        bgImage.src = this.$page.content.background_image

        bgImage.addEventListener('load', () => {
            document.querySelector('.bg').style.backgroundImage = `url(${this.$page.content.background_image})`
        })
    },
    methods: {
        clearPanel() {
            this.panel = ''
            this.stopAnimation = false
        },

        openPanel() {
            this.panel = 'about'
            this.stopAnimation = true
        },
    },
}
</script>

<style scoped>
h1 {
    line-height: 115px;
    font-size: 130px;
    color: white;
}

.bg {
    background-color: rgba(86, 105, 121);
    /* background-blend-mode: darken; */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.background {
    background: url('../assets/img/background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

h1 div {
    color: rgb(255, 201, 137);
}

.btn {
    font-size: 20px;
    color: white;
    background: theme('colors.blue');
    border: 2px solid white;
    border-radius: 5px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    height: 75px;
    transition: 500ms;
}

.btn:hover {
    background: theme('colors.dark-blue');
}

/* @media screen and (max-width: 900px) {
    h1 {
        font-size: 90px;
        line-height: 100px;
    }

    .btn {
        height: 60px;
        font-size: 17px;
    }
} */

@media screen and (max-width: 640px) {
    h1 {
        font-size: 80px;
        line-height: 90px;
    }
}

h2 {
    line-height: 29px;
}

h3 {
    font-size: 32px;
}

.pitch-section {
    border: 1px solid #d3dce6;
}

.pitch-section h4 {
    line-height: 77px;
    font-size: 48px;
}

.animated {
    animation-duration: 1.6s;
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes bounce {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}
.bounce {
    animation-name: bounce;
}
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        visibility: hidden;
    }
}

.fadeOut {
    animation: fadeOut 1s ease-in 1 normal both;
}

.portfolio {
    will-change: opacity, transform, display;
}

.type-cursor {
    height: 90px;
    width: 4px;
    background-color: rgb(255, 201, 137);
    animation: blink 1s ease-in infinite normal both;
}

@keyframes blink {
    from {
        visibility: hidden;
    }

    to {
        visibility: visible;
    }
}
</style>
