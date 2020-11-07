<template>
	<div id="portfolio">
		<section id="home" class="section section-c-2">
			<div class="column">
				<div class="wrapper wrapper-text lead-wrapper">
					<div>
						<div class="lead">I'm Nigel, <br> Web Developer</div>
						<button class="btn">Contact Me</button>
					</div>
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-animation">
					<ParticleNetwork />
					<div class="label animation-label animation-label-right">01a PARTICLE NETWORK</div>
				</div>
			</div>
		</section>
		<section id="hello" class="section section-c-1">
			<div class="column">
				<div class="wrapper wrapper-text">
					<div>
						<div class="label description-label">01b HELLO</div>
						<div class="description">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="who" class="section section-c-2">
			<div class="column">
				<div class="wrapper wrapper-animation">
					<CircleAnimation />
					<div class="label animation-label animation-label-left">02a TRANSFORMS</div>
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-text">
					<div>
						<div class="label description-label">02b WHO</div>
						<div class="description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="what" class="section section-c-2">
			<div class="column">
				<div class="wrapper wrapper-text">
					<div>
						<div class="label description-label">03b WHAT</div>
						<div class="description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
					</div>
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-animation">
					<SineLines />
					<div class="label animation-label animation-label-right">03a HELIX</div>
				</div>
			</div>
		</section>
		<section id="why" class="section section-c-2">
			<div class="column">
				<div class="wrapper wrapper-animation">
					<GridSystem />
					<div class="label animation-label animation-label-left">04a SCENE</div>
				</div>
			</div>
			<div class="column">
				<div class="wrapper wrapper-text">
					<div class="text">
						<div class="label description-label">04b WHY</div>
						<div class="description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="contact" class="section section-c-1">
			<div class="column">
				<div class="wrapper wrapper-text">
					<!-- <SineLines /> -->
					<button class="btn">SAY HELLO</button>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import SineLines from '@/components/visualizations/SineLines.vue'
import ParticleNetwork from '@/components/visualizations/ParticleNetworkForce.vue'
import CircleAnimation from '@/components/visualizations/CircleAnimation.vue'

// import ForceMap from '@/components/visualizations/ForceMap.vue'
// import Cube from '@/components/visualizations/Cube.vue'
import GridSystem from '@/components/visualizations/GridSystem.vue'

export default {
	components: {
		SineLines,
		ParticleNetwork,
		CircleAnimation,
		// ForceMap,
		// Cube,
		GridSystem
	}
}
</script>
<style lang="scss">
	#home {
		height: 100vh;
		#particle {
			position: absolute;
		}
		// position: relative;
		background-color: #f8f8f8;
		overflow: hidden;
		.lead-wrapper {
			// margin-top: -100px;
			// top: 50%;
			// left: 5%;
			// position: absolute;
			margin-left: -100px;
			.lead {
				line-height: 1.2;
				font-size: 60px;
			}
		}
		@media (max-width: 900px) {
			height: 200vh;
			.lead-wrapper {
				// margin-top: -60px;
				// left: 10%;
				.lead {
					font-size: 44px;
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
			.wrapper-text {
				padding: 5% 10%;
			}
			.lead-wrapper {
				margin-left: -20px;
				margin-top: 20px;
				// left: 10%;
				.lead {
					font-size: 44px;
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
		background-color: #3D3C3E;
		.wrapper-text {
			color: #f1f1f1;
		}
	}
	#who {
		.wrapper-animation {
			overflow: hidden;
			#chart {
				position: absolute;
				opacity: 0.4;
			}
		}
	}
	#contact {
		background-color: #f8f8f8;
		height: 360px;
		// background: hsla(186, 33%, 94%, 1);
		// background: linear-gradient(135deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
		// background: -moz-linear-gradient(135deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
		// background: -webkit-linear-gradient(135deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
		@media (max-width: 900px) {
			height: 100vw;
		}
	}
</style>