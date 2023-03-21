<template>
    <slide-out-panel :shouldShow="shouldShow" @close="$emit('clear-panel')">
        <div class="w-11/12 lg:w-7/12 grid scrolling-touch overflow-y-scroll pb-24">
            <div class="text" v-html="$static.content.content"></div>
            <ul class="mt-10 grid">
                <li class="flex items-start" v-for="({ item }, i) in $static.content.about" :key="item">
                    <div class="md:w-auto w-16 mt-2">
                        <div class="list-bullet">
                            <img :src="require(`@/assets/img/${i + 1}.svg`)" alt="number 1" />
                        </div>
                    </div>
                    <p class="ml-5 text">{{ item }}</p>
                </li>
            </ul>
        </div>
    </slide-out-panel>
</template>

<static-query>
query{
    content: aboutPage(id: 1){
		    id
        about{
            item
        }
        content
  }
}
</static-query>

<script>
import SlideOutPanel from '~/components/slideOutPanel'
export default {
    name: 'about',
    components: {
        SlideOutPanel,
    },
    props: {
        shouldShow: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style>
.list-bullet {
    width: 40px;
    height: 40px;
    background: #e5e9f3;
    opacity: 0.7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
