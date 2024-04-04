export const persist = (key: string, value: any) => {
    if (process.client) {
        localStorage.setItem(`${key}`, value);
    }
    return value;
};
