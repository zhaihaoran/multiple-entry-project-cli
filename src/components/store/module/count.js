export default {
    state: {
        count: 1
    },
    mutations: {
        add(state) {
            state.count += 1;
        },
        reduce(state) {
            state.count -= 1;
        }
    }
};
