<template>
    <div v-if="state" :class="{ zoomOut: !lock }" class="fixed m-auto left-0 right-0 top-[-50%] bottom-0 z-50 flex items-center justify-center zoomIn">
        <div class="rounded-[.5rem] flex items-center px-[1rem] py-[.3rem] border" :class="{'bg-warning': status === 'warning','bg-success': status === 'success','bg-error': status === 'error', 'bg-info': status === 'default'}">
            <img v-if="status === 'success'" class="w-[2rem] h-[2rem]" src="../../assets/image/success.png" />
            <img v-if="status === 'error'" class="w-[2rem] h-[2rem]" src="../../assets/image/error.png" />
            <img v-if="status === 'warning'" class="w-[2rem] h-[2rem]" src="../../assets/image/warning.png" />
            <span class="text-[1.4rem]" :class="{'ml-2': status !== 'default'}">{{ title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
type MessageType = 'default' | 'success' | 'warning' | 'error'

interface MessageProps {
    tips?: string,
    type?: MessageType,
    visible?: boolean,
    duration?: number,
    id?: string,
}

const props = withDefaults(defineProps<MessageProps>(), {
    tips: '',
    type: 'default',
    visible: false,
    duration: 3000,
    id: 'message'
})

const state = ref(false)
const title = ref(props.tips)
const status = ref(props.type)
const lock = ref(false)
const timer1 = ref()
const timer2 = ref()

watch(() => props.visible, (val: boolean) => {
    state.value = val
    show()
})

const hide = () =>{
    timer1.value = setTimeout(() => {
        lock.value = false
    }, props.duration - 300)

    timer2.value = setTimeout(() => {
        state.value = false
        document.body.removeChild(document.querySelector('#' + props.id)!)
    }, props.duration)
}

const show = () => {
    if (state.value) {
        return
    }
    clearTimeout(timer1.value)
    clearTimeout(timer2.value)
    state.value = true
    lock.value = true
    hide()
}
onMounted(() => show())
</script>

<style scoped lang="scss">
.zoomIn {
    animation: zoomIn 0.3s linear;
}
.zoomOut {
    animation: zoomOut 0.3s linear;
}
@keyframes zoomIn {
    0%,30% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
@keyframes zoomOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
}
</style>
