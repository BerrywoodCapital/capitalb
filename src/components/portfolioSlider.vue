<template>
    <slide-out-panel :shouldShow="shouldShow" @close="$emit('clear-panel')">
        <div class="mx-auto lg:px-8 duration-500 pb-24 mt-5 scrolling-touch min-h-screen overflow-y-scroll ">
            <h2 class="title markazi">OUR PORTFOLIO</h2>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 mt-12">
                <div
                    class="col-span-2 md:col-span-1"
                    v-for="({ item: { logo, link, text } }, index) in $static.content.list"
                    :key="text"
                >
                    <div
                        :class="
                            ` transform duration-200 portfolio ${
                                index < limit
                                    ? 'opacity-100 translate-y-0'
                                    : !makeAbsolute
                                    ? 'opacity-0 -translate-y-6'
                                    : 'hidden'
                            }`
                        "
                    >
                        <port-folio :logo="logo" :text="text" :link="link" />
                    </div>
                </div>
            </div>
            <div :class="`flex justify-center mt-12 mb-10 relative z-10 duration-100`">
                <template v-if="limit <= 9">
                    <button
                        class="text-white text-sm py-4 px-16 bg-blue hover:bg-dark-blue duration-500"
                        @click="increaseItems"
                    >
                        See more
                    </button>
                </template>
                <template v-else>
                    <button
                        class="text-white text-sm py-4 px-16 bg-blue hover:bg-dark-blue duration-500"
                        @click="reduceItems"
                    >
                        See Less
                    </button>
                </template>
            </div>
        </div>
    </slide-out-panel>
</template>

<static-query>
query{
    content: portfolioPage (id: 1){
        list{
            item {
                logo,
                link,
                text
            }
        }
    }
}
</static-query>

<script>
import PortFolio from '~/components/portfolio'
import SlideOutPanel from '~/components/slideOutPanel'
export default {
    components: {
        SlideOutPanel,
        PortFolio,
    },
    props: {
        shouldShow: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        reduceItems() {
            this.limit = 9
            setTimeout(() => {
                this.makeAbsolute = true
            }, 200)
        },
        increaseItems() {
            this.makeAbsolute = false
            setTimeout(() => {
                this.limit = 300
                // this.makeAbsolute =
            }, 200)
        },
    },
    data() {
        return {
            limit: 9,
            makeAbsolute: true,
            companies: [
                {
                    logo: 'bamboo.png',
                    link: 'https://investbamboo.com/',
                    text:
                        'Bamboo provides unrestricted access to over 3,000 stocks listed on the Nigerian stock exchange and U.S stock exchanges. You can get access to it from your phone or computer.',
                },
                {
                    logo: 'wallets-africa.png',
                    link: 'https://wallets.africa/',
                    text:
                        'Wallets Africa is making it easier to transact across Africa with just an app and a card. Send money locally and internationally, spend online locally and internationally - all from your mobile phone.',
                },
                {
                    logo: 'work-pay.png',
                    link: 'https://myworkpay.com/',
                    text:
                        'WorkPay provides you with a complete Payroll solution for small and medium-sized businesses in Africa.',
                },
                {
                    logo: 'bitsika.png',
                    link: 'https://bitsika.africa/',
                    text: 'Bitsika is an app that helps you handle all your financial transactions in one place.',
                },
                {
                    logo: 'one-pipe.png',
                    link: 'https://onepipe.io/',
                    text:
                        'Onepipe is integrating the services of various banks, incumbents, and fintechs into one unified API, then making it easily available to startups as a way to achieve cross-pollination and distribution of services.',
                },
                {
                    logo: 'evolve-credit.png',
                    link: 'https://www.evolvecredit.co/about',
                    text:
                        'Evolve Credit is dedicated to making the loan and finance marketplace more transparent for you. ',
                },
                {
                    logo: 'blue-berry.png',
                    link: 'https://blueberrypediatrics.com/',
                    text: 'Chat, call, or video with Pediatricians as often as you want with $0 visit fees.',
                },
                {
                    logo: 'okteto.png',
                    link: 'https://okteto.com/',
                    text:
                        'Okteto is a developer-first UI that gives you the shortcuts to easily manage your applications and development environments.',
                },
                {
                    logo: 'sketchbox.png',
                    link: 'https://www.sketchbox3d.com/',
                    text:
                        'Sketchbox combines best in class commercial technology with cutting-edge software to solve complex training challenges.',
                },
                {
                    logo: 'snackthis.png',
                    link: 'https://snackthis.co/',
                    text: 'SnackThis is a simple text animation tool that runs in the browser',
                },
                {
                    logo: 'akido.png',
                    link: 'https://www.akidolabs.com/',
                    text:
                        'Akido enables leading health institutions and innovators to use information to drive transformational change.',
                },
                {
                    logo: 'lab21.png',
                    link: 'https://lab21healthcare.com/',
                    text:
                        'Lab21 Healthcare specializes in the production and distribution of reagents and test kits for both IVD and blood grouping applications.',
                },
                {
                    logo: 'dc.png',
                    link: 'https://www.devcenter.co/',
                    text:
                        'Devcenter is an online networking community platform with 9k+ software developers, creatives, and technology professionals. ',
                },
            ],
        }
    },
}
</script>

<style></style>
