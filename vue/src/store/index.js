import {createStore} from "vuex";

const store = createStore({
    state: {
        user: {
            data : {},
            token : 123
        }
    },
    getters : {},
    actions : {},
    mutations : {
        logout: state => {
            state.user.data = {};
            state.user.token = null;
        }
    },
    modules : {}
})

export default store;