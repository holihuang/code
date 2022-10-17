type ToggleCollpasedState = {
    isCollapsed: boolean;
};
type ToggleCollpasedAction = {

}
export default {
    state: {
        isCollpased: false,
    },
    reducers: {
        toggleCollpased(state: ToggleCollpasedState, action: ToggleCollpasedAction) {
            const { isCollpased } = state;
            return {
                ...state,
                isCollpased: !isCollpased,
            }
        },
    },
    effects: {

    },
}