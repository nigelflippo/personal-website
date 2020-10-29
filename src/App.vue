<template>
	<div class="app-container">
		<div class="logo">
			\N\
		</div>
		<div class="menu-container" @click="handleToggle" >
			<div class="hamburger" :class="{ 'toggled': toggled }">
				<div class="bar bar-one"></div>
				<div class="bar bar-two"></div>
				<div class="bar bar-three"></div>
			</div>
		</div>
		<div class="overlay" :class="{ 'toggled': toggled }">
			<nav class="nav">
				<ol class="nav-group">
					<li>01b HELLO</li>
					<li>02b WHO</li>
					<li>03b WHAT</li>
					<li>04b WHY</li>
				</ol>
			</nav>
		</div>
		<section id="hero" class="section">
			<div class="column">
				<div class="wrapper wrapper-text">
					<div class="lead">I'm Nigel, <br> Web Developer</div>
					<button class="btn">Contact Me</button>
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-animation">
					<div class="label animation-label">01a PARTICLE NETWORK</div>
					<ParticleNetwork />
				</div>
			</div>
		</section>
		<!-- <section id="blurb" class="section">
			<div class="wrapper wrapper-text">
				<div class="label description-label">01b HELLO</div>
				<div class="description">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
			</div>
		</section> -->
		<section id="about" class="section">
			<div class="column">
				<div class="wrapper wrapper-animation">
					<div id="cube-wrapper">  
						<div class="cube">
							<div class="front"></div>
							<div class="back"></div>
							<div class="top"></div>
							<div class="bottom"></div>
							<div class="left"></div>
							<div class="right"></div>
						</div>
					</div>
					<div class="label animation-label">02a CUBE</div>
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-text">
					<div class="label description-label">02b WHO</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>
			</div>
		</section>
		<section id="work" class="section">
			<div class="column">
				<div class="wrapper wrapper-text">
					<div class="label description-label">03b WHAT</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-animation">
					<div class="label animation-label">03a FORCE DIRECTION</div>
					<ForceMap />
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import ParticleNetwork from './components/ParticleNetwork.vue'
import ForceMap from './components/ForceMap.vue'

export default {
	name: 'App',
	components: {
		ParticleNetwork,
		ForceMap
	},
	data () {
		return {
			toggled: false
		}
	},
	methods: {
		handleToggle () {
			this.toggled = !this.toggled
		}
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
	#cube-wrapper {
		height: 200px;
		width: 200px;
		top: 50%;
		left: 50%;
		position: absolute;
		perspective: 1000px;
		.cube {
			@function hslColor($hue: 0, $saturation: 70%, $lightness: 70%) {
				@return hsl($hue, $saturation, $lightness);
			}

			@for $i from 1 through 6 {
				> div:nth-child(#{$i}) {
					$color: hslColor($hue: $i * 60);
					background: $color;
				}
			}
			&:hover {
				animation-play-state: paused;
			}
			transform-style: preserve-3d;
			transition: all 0.4s ease;
			animation: rotatecube 20s infinite;
			animation-play-state: running;
			transform: rotateX(50deg) rotateY(50deg);
			--size: 160px;
			width: var(--size);
			height: var(--size);
		}
		@keyframes rotatecube {
			0% {
				transform: rotateX(0deg) rotateY(0deg);
			}
			50% {
				transform: rotateX(540deg) rotateY(360deg);
			}
			100% {
				transform: rotateX(0deg) rotateY(0deg);
			}
		}
		.cube div {
			opacity: 0.5;
			width: 100%;
			height: 100%;
			position: absolute;
		}
		.front {
			transform: translateZ(calc(var(--size) / 2));
			-webkit-transform: translateZ(calc(var(--size) / 2));
		}
		.back {
			transform: translateZ(calc((var(--size) * -1) / 2)) rotateY(180deg);
			-webkit-transform: translateZ(calc((var(--size) * -1) / 2)) rotateY(180deg);
		}
		.top {
			transform: translateY(calc((var(--size) * -1) / 2)) rotateX(90deg);
			-webkit-transform: translateY(calc((var(--size) * -1) / 2)) rotateX(90deg);
		}
		.bottom {
			transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
			-webkit-transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
		}
		.left {
			transform: translateX(calc((var(--size) * -1) / 2)) rotateY(-90deg);
			-webkit-transform: translateX(calc((var(--size) * -1) / 2)) rotateY(-90deg);
		}
		.right {
			transform: translateX(calc(var(--size) / 2)) rotateY(90deg);
			-webkit-transform: translateX(calc(var(--size) / 2)) rotateY(90deg);
		}
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
		.overlay {
			z-index: 100;
			position: fixed;
			height: 100vh;
			width: 100%;
			background-color: #1d1d1d;
			transform: translateX(100%);
			transition: transform 0.4s ease;
			&.toggled {
				transform: translateX(0);
			}
			.nav {
				display: flex;
				height: 100%;
				.nav-group {
					padding: 0;
					margin: auto;
					font-size: 45px;
					list-style: none;
					color: #fff;
					li {
						transition: color 0.3s ease;
						cursor: pointer;
						padding: 6px 0px;
						&:hover {
							color: #666;
						}
					}
				}
			}
		}
		.menu-container {
			cursor: pointer;
			z-index: 102;
			position: fixed;
			top: 20px;
			right: 20px;
			height: 50px;
			width: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #666468;
			.hamburger {
				height: 28px;
				width: 28px;
				align-items: center;
				justify-content: center;
				display: flex;
				flex-direction: column;
				&.toggled {
					.bar {
						background-color: #333234;
					}
				}
				.bar {
					width: 24px;
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
		.section {
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
			.label {
				font-family: 'Blender Pro';
				font-size: 20px;
				&.description-label {
					margin-bottom: 12px;
				}
				&.animation-label {
					position: absolute;
				}
			}
			.description {
				font-size: 18px;
				line-height: 1.8;
			}
		}
		#hero {
			height: 100vh;
			.wrapper-text {
				padding-left: 10%;
				width: 100%;
				margin: auto;
			}
			.wrapper-animation {
				overflow: hidden;
				background-color: #f8f8f8;
				.animation-label {
					bottom: 15%;
					left: 10%;
				}
				#particle {
					opacity: 1;
					height: 100%;
					width: 100%;
				}
			}
			.lead {
				line-height: 1.2;
				font-size: 60px;
			}
			.btn {
				width: 200px;
				z-index: 1;
				overflow: hidden;
				transition: all 200ms ease;
				text-align: center;
				cursor: pointer;
				border: 3px solid #333234;
				background-color: transparent;
				text-transform: uppercase;
				font-family: 'Blender Pro';
				letter-spacing: 2px;
				font-size: 16px;
				margin-top: 24px;
				color: #333234;
				padding: 12px 36px;
				&:hover {
					background-color: #333234;
					color: #f1f1f1;
				}
			}
			@media (max-width: 576px) {
				height: 1000px;
				.column {
					height: 800px;
				}
				.lead {
					font-size: 44px;
				}
				.btn {
					padding: 10px 32px;
					width: 180px;
				}
			}
		}
		#blurb {
			height: auto;
			background-color: #3D3C3E;
			.wrapper-text {
				padding: 5% 20%;
				margin: auto;
				color: #f1f1f1;
			}
			@media (max-width: 576px) {
				padding: 10% 0;
			}
		}
		#about {
			.wrapper-text {
				margin: auto;
				padding: 0 20%;
			}
			.wrapper-animation {
				background-color: #f1f1f1;
				.animation-label {
					bottom: 15%;
					right: 10%;
				}
				#cube-wrapper {
					position: absolute;
					top: 50%;
					left: 50%;
					margin-left: -100px;
					margin-top: -100px;
				}
			}
		}
		#work {
			.wrapper-animation {
				overflow: hidden;
				background-color: #f1f1f1;
				.animation-label {
					bottom: 15%;
					left: 10%;
				}
				#chart {
					position: absolute;
					opacity: 0.4;
				}
			}
			.wrapper-text {
				margin: auto;
				padding: 0 20%;
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
			}
		}
	}
</style>
