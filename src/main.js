// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
    head.meta.push({
        name: 'og:url',
        content: 'https://berrywoodcap.com/',
    })

    head.meta.push({
        name: 'twitter:site',
        content: '@capitalb',
    })

    head.meta.push({
        name: 'og:image',
        content: '/assets/graph-img.png',
    })

    head.meta.push({
        name: 'og:image:secure_url',
        content: '/assets/graph-img.png',
    })

    head.meta.push({
        name: 'og:image:type',
        content: 'image/png',
    })

    head.meta.push({
        name: 'og:image:width',
        content: '500',
    })

    head.meta.push({
        name: 'og:image:height',
        content: '500',
    })

    head.meta.push({
        name: 'og:locale',
        content: 'en_US',
    })

    head.meta.push({
        name: 'twitter:image:alt',
        content: 'CapitalB logo on a black background',
    })

    head.meta.push({
        name: 'robots',
        content: 'index, follow',
    })

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)

    Vue.directive('click-outside', {
        bind: function(el, binding, vnode) {
            el.clickOutsideEvent = function(event) {
                // here I check that click was outside the el and its children
                if (!(el == event.target || el.contains(event.target))) {
                    // and if it did, call method provided in attribute value
                    vnode.context[binding.expression](event)
                }
            }
            document.body.addEventListener('click', el.clickOutsideEvent)
        },
        unbind: function(el) {
            document.body.removeEventListener('click', el.clickOutsideEvent)
        },
    })
}
