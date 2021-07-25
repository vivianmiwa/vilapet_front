import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null
};

const store = new Vuex.Store({
    state,
    getters: { // pega o estado atual do estado
        user: (state) => {
            return state.user;
        }
    }, 
    actions: { // chama o mutations
        user(context, user){
            context.commit('user', user);
        }
    }, 
    mutations: { // muda o valor do estado
        user(state, user){
            state.user = user; // state.user recebe o usuário especificado
        }
    } 
});

export default store;