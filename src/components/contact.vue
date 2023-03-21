<template>
    <slide-out-panel :shouldShow="shouldShow" @close="$emit('clear-panel')">
        <div class="mx-auto px-8 duration-500 pb-24 mt-5 scrolling-touch overflow-y-scroll ">
            <h2 class="title markazi" style="margin-top: 0px">CONTACT US</h2>
            <form class="grid gap-8 md:w-10/12 mt-12 input-group" @submit.prevent="submit">
                <div>
                    <input
                        type="text"
                        v-model="fullname"
                        placeholder="Enter your fullname"
                        class="text-sm h-16 rounded-lg bg-snow w-full md:w-10/12 border border-smoke-dark px-6"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        v-model="phoneNumber"
                        placeholder="Phone number"
                        class="text-sm h-16 rounded-lg bg-snow w-full md:w-10/12 border border-smoke-dark px-6"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        v-model="email"
                        placeholder="Enter email"
                        class="text-sm h-16 rounded-lg bg-snow w-full md:w-10/12 border border-smoke-dark px-6"
                        required
                    />
                </div>
                <div>
                    <textarea
                        v-model="reason"
                        placeholder="Reason"
                        class="text-sm h-48 rounded-lg bg-snow w-full md:w-10/12 border border-smoke-dark px-6 pt-6"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        class="bg-blue duration-500 hover:bg-dark-blue text-light rounded-lg text-sm w-full md:w-10/12 h-16"
                    >
                        Submit
                    </button>
                </div>
                <template v-if="isSuccess !== ''">
                    <template v-if="isSuccess">
                        <p class="text-green text-center pr-24">Successfully submitted response</p>
                    </template>
                    <template v-else>
                        <p class="text-red text-center pr-24">Something is wrong, please try again</p>
                    </template>
                </template>
                <template v-if="loading">
                    <div class="flex justify-center pr-24">
                        <img src="@/assets/img/load.svg" class="w-10 " />
                    </div>
                </template>
            </form>
            <div class="h-24 w-full"></div>
        </div>
    </slide-out-panel>
</template>

<script>
import SlideOutPanel from '~/components/slideOutPanel'
import axios from 'axios'
export default {
    components: {
        SlideOutPanel,
    },
    props: {
        shouldShow: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            fullname: '',
            phoneNumber: '',
            email: '',
            reason: '',
            isSuccess: '',
            loading: false,
        }
    },

    methods: {
        submit() {
            const { fullname, phoneNumber, email, reason } = this
            this.loading = true
            axios
                .post(
                    'https://getform.io/f/1c30e72a-306f-4216-835d-5543959b6f91',
                    {
                        fullname,
                        phoneNumber,
                        email,
                        reason,
                    },
                    {
                        headers: {
                            Accept: 'application/json',
                        },
                    }
                )
                .then((data) => {
                    this.isSuccess = data.data.success ? 'true' : 'false'
                    ;(this.fullname = ''), (this.phoneNumber = ''), (this.email = ''), (this.reason = '')
                    this.loading = false
                })
        },
    },
}
</script>

<style scoped>
.input-group {
    width: 550px;
}

@media screen and (max-width: 768px) {
    .input-group {
        width: 500px;
    }
}

@media screen and (max-width: 640px) {
    .input-group {
        width: 100%;
    }
}

input,
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
}

input::placeholder textarea::placeholder {
    color: #303d46;
}

.rounded-lg {
    border-radius: 5px !important;
}

input:focus,
textarea:focus {
    border-color: #0568bb;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
</style>
