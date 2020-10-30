<template>
		<!-- <section id="home" class="section">
			<div class="lead-wrapper">
				<div class="lead">I'm Nigel, <br> Web Developer</div>
				<button class="btn">Contact Me</button>
			</div>
			<ParticleNetwork />
			<div class="label animation-label animation-label-right">01a PARTICLE NETWORK</div>
		</section> -->
		<section id="home" class="section">
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
</template>
<script>
import ParticleNetwork from '@/components/visualizations/ParticleNetwork.vue'
export default {
	components: {
		ParticleNetwork
	}
}
</script>
<style lang="scss">
	#home {
		position: relative;
		height: 100%;
		overflow: hidden;
		.lead-wrapper {
			margin-top: -100px;
			top: 50%;
			left: 10%;
			position: absolute;
		}
		// .wrapper-text {
		// 	padding-left: 10%;
		// 	width: 100%;
		// 	margin: auto;
		// }
		// .wrapper-animation {
		// 	overflow: hidden;
		// 	background-color: #f8f8f8;
		// 	.animation-label {
		// 		bottom: 15%;
		// 		left: 10%;
		// 	}
		// 	#particle {
		// 		opacity: 1;
		// 		height: 100%;
		// 		width: 100%;
		// 	}
		// }
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
			.lead {
				font-size: 44px;
			}
			.btn {
				padding: 10px 32px;
				width: 180px;
			}
		}
	}
</style>