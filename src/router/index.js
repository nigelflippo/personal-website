import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		}
	]
})
router.beforeEach((to, from, next) => {
	store.dispatch('setIsLoading', true)
	next()
})
router.afterEach(() => {
	setTimeout(() => store.dispatch('setIsLoading', false), 1800)
})

export default router