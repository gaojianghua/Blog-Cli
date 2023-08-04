import message from '~/components/message/index'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            message
        }
    }
})
