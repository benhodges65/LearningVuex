import { createStore } from 'vuex';

import productsModule from './products/index.js';
import cartModule from './cart/index.js';

const store = createStore({
    modules: {
        productList: productsModule,
        cartList: cartModule,
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
});

export default store;