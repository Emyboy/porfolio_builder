
const saveState = (state: any) => {
    try {
        const storedState = JSON.stringify(state);
        localStorage.setItem("state", storedState);
    } catch (err) {
        return undefined;
    }
};

export default saveState;
