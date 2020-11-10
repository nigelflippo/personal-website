<template>
	<transition name="fade" mode="out-in">
		<Loader v-if="isLoading" />
		<div v-else class="app-container">
			<Nav />
			<div class="inner-container" :class="{ 'menu-out': isToggled }">
				<Home />
			</div>
		</div>
	</transition>
</template>
<script>
import Loader from '@/components/Loader'
import Nav from '@/components/Nav.vue'
import Home from '@/components/Home.vue'
// import CircleAnimation from '@/components/visualizations/CircleAnimation.vue'

import { mapGetters } from 'vuex'
export default {
	components: {
		Loader,
		Nav,
		Home,
		// CircleAnimation
	},
	computed: {
		...mapGetters([
			// 'isLoading',
			'isToggled'
		])
	},
	created () {
		setTimeout(() => {
			this.isLoading = false
		}, 1500)
	},
	data () {
		return {
			isLoading: true
		}
	}
}
</script>
<style lang="scss">
	@import '@/styles/layout.scss';
	@import '@/styles/buttons.scss';
	@font-face {
		font-family: 'Blender Pro Book';
		src: url('./fonts/blenderpro/BlenderPro-Book.eot');
		src: local('Blender Pro Book'), local('BlenderPro-Book'),
			url('./fonts/blenderpro/BlenderPro-Book.eot?#iefix') format('embedded-opentype'),
			url('./fonts/blenderpro/BlenderPro-Book.woff2') format('woff2'),
			url('./fonts/blenderpro/BlenderPro-Book.woff') format('woff'),
			url('./fonts/blenderpro/BlenderPro-Book.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'Blender Pro';
		src: url('./fonts/blenderpro/BlenderPro-Medium.eot');
		src: local('Blender Pro Medium'), local('BlenderPro-Medium'),
			url('./fonts/blenderpro/BlenderPro-Medium.eot?#iefix') format('embedded-opentype'),
			url('./fonts/blenderpro/BlenderPro-Medium.woff2') format('woff2'),
			url('./fonts/blenderpro/BlenderPro-Medium.woff') format('woff'),
			url('./fonts/blenderpro/BlenderPro-Medium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	html {
		box-sizing: border-box;
		height: 100vh;
		width: 100%;
	}
	body {
		overflow-x: hidden;
		height: 100vh;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.4s ease;
	}
	.fade-enter {
		opacity: 0;
	}
	.fade-leave-to {
		opacity: 0;
	}
	.app-container {
		font-family: 'Blender Pro';
		.inner-container {
			transition: all 0.4s ease;
			transform: translateX(0);
			&.menu-out {
				transform: translateX(-20%);
			}
		}
	}
</style>
