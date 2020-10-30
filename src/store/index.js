import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isPageScrolled: false,
		isLoading: false
	},
	getters: {
		isPageScrolled: state => state.isPageScrolled,
		isLoading: state => state.isLoading
	},
	mutations: {
		setPageScrolled (state, isPageScrolled) {
			state.isPageScrolled = isPageScrolled
		},
		setIsLoading (state, isLoading) {
			state.isLoading = isLoading
		}
	},
	actions: {
		setPageScrolled ({ commit }, isPageScrolled) {
			commit('setPageScrolled', isPageScrolled)
		},
		setIsLoading ({ commit }, isLoading) {
			commit('setIsLoading', isLoading)
		}
	}
})

export default store