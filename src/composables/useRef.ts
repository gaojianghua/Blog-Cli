export const useRef = (value:any) => {
    const status = ref(value)
    return status.value
};
