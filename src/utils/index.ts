export const persist = (key: string, value: any) => {
    if(process.client) {
        value && localStorage.setItem(`${key}`, value)
        return localStorage.getItem(`${key}`) || value
    }
    return value
}