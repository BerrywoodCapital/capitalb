<template>
    <div class="flex items-bottom flex-wrap h-48 md:h-48 lg:h-56 xl:h-32">
        {{ displayText.join('') }}
        <div class="type-cursor ml-2 hidden md:block"></div>
    </div>
</template>

<script>
export default {
    props: ['words'],
    data() {
        return {
            displayText: [],
            currentWord: '',
            wordIdx: 0,
            speed: 70,
            timeoutSpeed: this.TYPE_SPEED * 0.8,
            deleteSpeed: 70,
            timeout: '',
            stopAnimation: false,
        }
    },
    computed: {
        // can adjust speeds based on other factors if needed
        TYPE_SPEED() {
            return this.speed
        },
        DELETE_SPEED() {
            return this.deleteSpeed
        },
        // timeoutSpeed() {
        //     return this.TYPE_SPEED * 0.8
        // },
    },
    watch: {
        stopAnimation: function(newValue) {
            console.log(newValue)
            if (newValue === true) {
                clearTimeout(this.timeout)
            } else {
                clearTimeout(this.timeout)
                this.timeout = setInterval(this.type, 50)
            }
        },
    },

    mounted() {
        this.start()
        this.timeout = setInterval(this.type, 50)
    },

    methods: {
        start() {
            if (this.words && this.words.length > 0) {
                this.currentWord = this.words[this.wordIdx].content.split('')
                this.wordIdx++
                this.animate = setTimeout(this.type, this.timeoutSpeed)
            }
        },
        type(word) {
            // if typing...
            if (this.currentWord.length > 0) {
                this.displayText.push(this.currentWord.shift())
                // if done typing, then delete
            } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
                this.timeoutSpeed = this.DELETE_SPEED
                // console.log(this.currentWord.length, this.displayText.length)
                if (this.words[this.wordIdx === 0 ? 0 : this.wordIdx - 1].content.length === this.displayText.length) {
                    clearTimeout(this.timeout)
                    setTimeout(() => {
                        this.displayText.pop()
                        this.timeout = setInterval(this.type, this.DELETE_SPEED)
                    }, 500)
                } else {
                    this.displayText.pop()
                }
                // if done typing & deleting
            } else if (this.currentWord.length === 0 && this.displayText.length === 0) {
                // change words
                clearTimeout(this.timeout)
                setTimeout(() => {
                    this.timeout = setInterval(this.type, this.TYPE_SPEED)
                    if (this.wordIdx < this.words.length) {
                        this.currentWord = this.words[this.wordIdx].content.split('')
                        this.wordIdx++
                        this.timeoutSpeed = this.TYPE_SPEED
                        this.displayText.push(this.currentWord.shift())
                    } else {
                        // reset
                        this.wordIdx = 0
                        this.currentWord = this.words[this.wordIdx].content.split('')
                        this.displayText.push(this.currentWord.shift())
                        this.wordIdx = 1
                    }
                }, 500)
            }
            // this.timeout = setTimeout(this.type, this.timeoutSpeed)
        },
    },
}
</script>

<style></style>
