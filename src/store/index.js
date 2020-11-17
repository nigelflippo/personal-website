import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLoading: false
	},
	getters: {
		isLoading: state => state.isLoading
	},
	mutations: {
		setIsLoading (state, isLoading) {
			state.isLoading = isLoading
		}
	},
	actions: {
		setIsLoading ({ commit }, isLoading) {
			commit('setIsLoading', isLoading)
		}
	}
})

export default store