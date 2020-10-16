<template>
	<div class="app-container">
		<div class="nav-container">
			<div class="logo">
				N
			</div>
			<nav class="nav">
				<ol class="nav-group">
					<li>HELLO</li>
					<li>WHO</li>
					<li>WHAT</li>
					<li>WHY</li>
					<li>WHERE</li>
				</ol>
			</nav>
		</div>
		<div class="row">
			<div class="box left">
				<div class="lead">I'm Nigel, <br> Software Engineer</div>
				<button class="btn">Contact Me</button>
			</div>
			<div class="box right">
				<ParticleNetwork />
			</div>
		</div>
		<div class="row">
			<div class="box"></div>
			<div class="box"></div>
		</div>
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
		.nav-container {
			display: flex;
			align-items: center;
			top: 0;
			left: 0;
			position: fixed;
			padding: 20px;
			.logo {
				font-size: 44px;
			}
			.nav {
				margin-left: 30px;
				width: 100%;
				.nav-group {
					display: flex;
					list-style: none;
					padding: 0;
					> li {
						padding: 0 32px;
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
				width: 50%;
				&.left {
					padding-left: 40px;
					.lead {
						// margin-top: -80px;
						font-size: 64px;
					}
					.btn {
						width: 200px;;
						z-index: 1;
						overflow: hidden;
						position: relative;
						transition: all 200ms ease;
						text-align: center;
						cursor: pointer;
						border: 3px solid #1d1d1d;
						background-color: transparent;
						text-transform: uppercase;
						font-family: 'Blender Pro';
						letter-spacing: 2px;;
						font-size: 16px;
						margin-top: 28px;
						color: #1d1d1d;
						padding: 10px 40px;
						&:before {
							z-index: -1;
							width: 10%;
							height: 100%;
							background: #1d1d1d;
							content: "";
							position: absolute;
							left: 0%;
							top: 0%;
							transform: translate(-50%,-50%) rotate(45deg);
							transition: all 0.2s ease;
						}
						&:hover, &:focus {
							color: #fff;
							&:before {
								z-index: -1;
								width: 200%;
								height: 1000%;
							}
						}
					}
				}
				&.right {
					overflow: hidden;
					background-color: #f4f4f4;
					// background: rgb(34,38,41);
					// background: linear-gradient(225deg, rgba(34,38,41,1) 0%, rgba(29,29,29,1) 100%);
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
				}
			}
		}
	}
	#particle {
		opacity: 0.3;
		height: 100%;
		width: 100%;
	}
</style>
