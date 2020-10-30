<template>
	<div class="app-container">
		<Nav />
		<transition name="slide" mode="out-in">
			<Loader v-if="isLoading" />
			<router-view v-else></router-view>
		</transition>
	</div>
</template>
<script>
import Loader from '@/components/Loader'
import Nav from '@/components/Nav.vue'

import { mapGetters } from 'vuex'
export default {
	components: {
		Loader,
		Nav
	},
	computed: {
		...mapGetters([
			'isLoading'
		])
	}
}
</script>
<style lang="scss">
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
		height: 100vh;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	.slide-enter-active, .slide-leave-active {
		transition: opacity 0.3s ease;
	}
	.slide-enter {
		opacity: 0;
	}
	.slide-leave-to {
		opacity: 0;
	}
	.app-container {
		display: flex;
		flex-direction: column;
		font-family: 'Blender Pro';
		.bg-white-2 {
			background-color: #f8f8f8;
		}
		.logo {
			position: absolute;
			top: 15px;
			left: 15px;
			font-size: 44px;
		}
		.section {
			display: flex;
			width: 100%;
			.column {
				display: flex;
				width: 50%;
				min-height: 50vw;
				height: 100%;
				&-vh {
					height: 100vh;
				}
			}
			.wrapper {
				position: relative;
				width: 100%;
			}
			.wrapper-text {
				padding: 5% 20%;
				margin: auto;
			}
			.label {
				font-family: 'Blender Pro';
				font-size: 20px;
				&.description-label {
					margin-bottom: 12px;
				}
				&.animation-label {
					cursor: pointer;
					position: absolute;
					bottom: 10%;
					z-index: 100;
					&-left {
						left: 10%;
					}
					&-right {
						right: 10%;
					}
				}
			}
			.description {
				font-size: 20px;
				line-height: 1.8;
			}
		}

		@media (max-width: 900px) {
			.section {
				flex-direction: column;
				.column {
					width: 100%;
					min-height: 100vw;
				}
				.label {
					font-size: 16px;
					&.animation-label {
						bottom: 5%;
					}
				}
				.description {
					font-size: 16px;
				}
			}
		}
	}
</style>
