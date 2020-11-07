import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isPageScrolled: false,
		isLoading: false,
		isToggled: false
	},
	getters: {
		isPageScrolled: state => state.isPageScrolled,
		isLoading: state => state.isLoading,
		isToggled: state => state.isToggled
	},
	mutations: {
		setPageScrolled (state, isPageScrolled) {
			state.isPageScrolled = isPageScrolled
		},
		setIsLoading (state, isLoading) {
			state.isLoading = isLoading
		},
		setIsToggled (state, isToggled) {
			state.isToggled = isToggled
		}
	},
	actions: {
		setPageScrolled ({ commit }, isPageScrolled) {
			commit('setPageScrolled', isPageScrolled)
		},
		setIsLoading ({ commit }, isLoading) {
			commit('setIsLoading', isLoading)
		},
		setIsToggled ({ commit }, isToggled) {
			commit('setIsToggled', isToggled)
		}
	}
})

export default store