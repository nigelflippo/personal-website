<template>
	<div class="app-container">
		<div class="logo">
			\N\
		</div>
		<div class="menu-container">
			<div class="hamburger">
				<div class="bar bar-one"></div>
				<div class="bar bar-two"></div>
				<div class="bar bar-three"></div>
			</div>
		</div>
		<!-- <div class="nav-container">
			<nav class="nav">
				<ol class="nav-group">
					<li>HELLO</li>
					<li>WHO</li>
					<li>WHAT</li>
					<li>WHY</li>
					<li>WHERE</li>
				</ol>
			</nav>
		</div> -->
		<div class="row">
			<div class="box intro">
				<div class="lead">I'm Nigel, <br> Web Developer</div>
				<button class="btn">Contact Me</button>
				<!-- <div class="vert">BOULDER COLORADO</div> -->
			</div>
			<div class="box particle">
				<div class="title">01 PARTICLE NETWORK</div>
				<ParticleNetwork />
			</div>
		</div>
		<!-- <div class="row">
			<div class="box"></div>
			<div class="box"></div>
		</div> -->
	</div>
</template>

<script>
import ParticleNetwork from './components/ParticleNetwork.vue'

export default {
	name: 'App',
	components: {
		ParticleNetwork
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
		font-family: 'Blender Pro';
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.logo {
			position: absolute;
			top: 20px;
			left: 20px;
			font-size: 44px;
			perspective: 1000px;
			transform-style: preserve-3d;
		}
		.menu-container {
			z-index: 102;
			position: fixed;
			top: 20px;
			right: 20px;
			height: 54px;
			width: 54px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #666;
			.hamburger {
				height: 28px;
				width: 28px;
				align-items: center;
				justify-content: center;
				display: flex;
				flex-direction: column;
				.bar {
					width: 28px;
					height: 3px;
					background-color: #fff;
					&.bar-two {
						margin-top: 6px;
					}
					&.bar-three {
						margin-top: 6px;
					}
				}
			}
		}
		.nav-container {
			z-index: 102;
			display: flex;
			align-items: center;
			top: 0;
			left: 0;
			position: fixed;
			padding: 20px;
			.nav {
				margin-left: 30px;
				width: 100%;
				.nav-group {
					display: flex;
					list-style: none;
					padding: 0;
					> li {
						cursor: pointer;
						transition: all 0.4s ease;
						padding: 0 24px;
						font-size: 18px;
					}
				}
			}
			@media (max-width: 576px) {
				.nav .nav-group {
					display: none;
				}
			}
		}
		.row {
			height: 100vh;
			width: 100%;;
			display: flex;
			.box {
				display: flex;
				flex-direction: column;
				justify-content: center;
				position: relative;
				width: 50%;
				&.intro {
					padding-left: 40px;
					.lead {
						font-size: 50px;
					}
					.btn {
						width: 200px;;
						z-index: 1;
						overflow: hidden;
						// position: relative;
						transition: all 200ms ease;
						text-align: center;
						cursor: pointer;
						border: 3px solid #1d1d1d;
						background-color: transparent;
						text-transform: uppercase;
						font-family: 'Blender Pro';
						letter-spacing: 2px;
						font-size: 16px;
						margin-top: 24px;
						color: #1d1d1d;
						padding: 12px 36px;
					}
				}
				&.particle {
					overflow: hidden;
					background-color: #f8f8f8;
					.title {
						position: absolute;
						bottom: 20%;
						left: 10%;
						font-size: 18px;
					}
				}
			}
		}
		@media (max-width: 576px) {
			.row {
				height: 100%;
				flex-direction: column;
				.box {
					height: 100vh;
					width: 100%;
					&.left {
						width: 100%;
						.lead {
							font-size: 40px;
						}
					}
					&.right {
						width: 100%;
					}
				}
			}
		}
	}
	#particle {
		opacity: 1;
		height: 100%;
		width: 100%;
	}
</style>
