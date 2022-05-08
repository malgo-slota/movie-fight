//debouncing an input - waiting for some time to pass after last event to actually do smoething
const debounce = (func, delay=1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};