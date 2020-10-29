<template>
	<div class="app-container">
		<div class="logo">\N\</div>
		<Nav />
		<Hero />
		<Hello />
		<Who />
		<What />
	</div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Hero from '@/components/Hero.vue'
import Hello from '@/components/Hello.vue'
import Who from '@/components/Who.vue'
import What from '@/components/What.vue'

export default {
	name: 'App',
	components: {
		Nav,
		Hero,
		Hello,
		Who,
		What
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

	.app-container {
		display: flex;
		flex-direction: column;
		font-family: 'Blender Pro';
		.logo {
			position: absolute;
			top: 20px;
			left: 20px;
			font-size: 44px;
		}
		.section {
			position: relative;
			display: flex;
			width: 100%;
			.column {
				display: flex;
				width: 50%;
				min-height: 50vw;
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
				font-size: 18px;
				line-height: 1.8;
			}
		}

		@media (max-width: 576px) {
			.section {
				height: 200vw;
				flex-direction: column;
				.column {
					width: 100%;
					min-height: 100vw;
				}
				.label {
					font-size: 18px;
				}
				.description {
					font-size: 16px;
				}
			}
		}
	}
</style>
