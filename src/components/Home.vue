<template>
	<div>
		<section id="home" class="section">
			<div class="logo">\N\</div>
			<div class="column column-vh">
				<div class="lead-wrapper">
					<div class="lead">I'm Nigel, <br> Web Developer</div>
					<button class="btn">Contact Me</button>
				</div>
			</div>
			<div class="column column-vh bg-white-2">
				<ParticleNetwork />
				<div class="label animation-label animation-label-right">01a PARTICLE NETWORK</div>
			</div>
		</section>
		<Hello />
		<Who />
		<What />
	</div>
</template>
<script>
import ParticleNetwork from '@/components/visualizations/ParticleNetwork.vue'

import Hello from '@/components/Hello.vue'
import Who from '@/components/Who.vue'
import What from '@/components/What.vue'
export default {
	components: {
		ParticleNetwork,
		Hello,
		Who,
		What
	}
}
</script>
<style lang="scss">
	#home {
		overflow: hidden;
		.lead-wrapper {
			margin-top: -100px;
			top: 50%;
			left: 10%;
			position: absolute;
		}
		.lead {
			line-height: 1.2;
			font-size: 64px;
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
				font-size: 46px;
			}
			.btn {
				padding: 10px 32px;
				width: 180px;
			}
		}
	}
</style>