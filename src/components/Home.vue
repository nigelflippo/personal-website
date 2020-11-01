<template>
	<div id="portfolio">
		<section id="home" class="section">
			<div class="lead-wrapper">
				<div class="lead">I'm Nigel, <br> Web Developer</div>
				<button class="btn">Contact Me</button>
			</div>
			<ParticleNetwork />
			<div class="label animation-label animation-label-right">01a PARTICLE NETWORK</div>
		</section>
		<section id="hello" class="section">
			<div class="wrapper wrapper-text">
				<div class="label description-label">01b HELLO</div>
				<div class="description">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
			</div>
		</section>
		<section id="who" class="section">
			<div class="column">
				<div class="wrapper wrapper-animation">
					<Cube />
					<div class="label animation-label animation-label-right">02a CUBE</div>
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
		<!-- <section id="what" class="section">
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
					<div class="label animation-label animation-label-left">03a FORCE DIRECTION</div>
					<ForceMap />
				</div>
			</div>
		</section> -->
		<section id="why" class="section">
			<div class="column">
				<div class="wrapper wrapper-animation">
					<GridSystem />
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-text">
					<div class="label description-label">04b WHY</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import ParticleNetwork from '@/components/visualizations/ParticleNetworkForce.vue'
// import ForceMap from '@/components/visualizations/ForceMap.vue'
import Cube from '@/components/visualizations/Cube.vue'
import GridSystem from '@/components/visualizations/GridSystem.vue'

export default {
	components: {
		ParticleNetwork,
		// ForceMap,
		Cube,
		GridSystem
	}
}
</script>
<style lang="scss">
	#home {
		background-color: #f8f8f8;
		overflow: hidden;
		.lead-wrapper {
			margin-top: -100px;
			top: 50%;
			left: 5%;
			position: absolute;
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
				border-radius: 4px;
				&:hover {
					background-color: #333234;
					color: #f1f1f1;
				}
			}
		}
		@media (max-width: 900px) {
			.lead-wrapper {
				margin-top: -60px;
				left: 10%;
				.lead {
					font-size: 42px;
				}
				.btn {
					margin-top: 14px;
					font-size: 14px;
					padding: 8px 24px;
					width: 160px;
				}
			}
		}
		@media (max-width: 576px) {
			.lead-wrapper {
				left: 10%;
				.lead {
					font-size: 42px;
				}
				.btn {
					margin-top: 14px;
					font-size: 14px;
					padding: 8px 24px;
					width: 160px;
				}
			}
		}
	}
	#hello {
		height: auto;
		background-color: #3D3C3E;
		.wrapper-text {
			color: #f1f1f1;
		}
		@media (max-width: 576px) {
			padding: 10% 0;
		}
	}
	#who {
		.wrapper-animation {
			#cube-wrapper {
				position: absolute;
				top: 50%;
				left: 50%;
				margin-left: -100px;
				margin-top: -100px;
			}
		}
	}
	#what {
		.wrapper-animation {
			overflow: hidden;
			#chart {
				position: absolute;
				opacity: 0.4;
			}
		}
	}
</style>