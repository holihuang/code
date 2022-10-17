type AddState = {
    count: number;
}

type AddAction = {
    type: string;
}

export default {
    namespace: 'add',
    state: {
        count: 0,
    },
    reducers: {
        add(state: AddState, action: AddAction) {
            const { count } = state;
            return {
                ...state,
                count: count + 1,
            }
        }
    },
    effects: {},
}