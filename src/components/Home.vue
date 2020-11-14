<template>
		<div class="body">
			<div class="section intro">
				<!-- <div class="logo">\N\</div> -->
				<ParticleNetwork />
				<div class="label label-right">
					<div class="text">INTRODUCTION</div>
					<div class="num">01</div>
				</div>
				<div class="text-wrapper">
					<div>
						<div class="header">I'm Nigel, Developer</div>
						<div class="line-deco"></div>
						<div class="text">Software engineer and musician with a tacit understanding of patterns both contrapuntal and programmatic. Years of relevant industry experience and a love for the practiced application of programming paradigms and principals.</div>
					</div>
				</div>
				<div class="icon-container">
					<div class="icon-wrapper">
						<Icon type="codepen" />
						<Icon type="github" />
						<Icon type="linkedin" />
					</div>
				</div>
			</div>
			<div class="section what">
				<div class="label label-right">
					<div class="text">PORTFOLIO</div>
					<div class="num">02</div>
				</div>
				<SineLines />
				<div class="text-wrapper">
					<div>
						<div class="header">My Work</div>
						<div class="line-deco"></div>
						<div class="text">Data visualizations, interactive and engaging simulations, and aesthetically pleasing user interfaces. Declarative solutions, with a functional fondness for creating and refactoring scalable architectures. Micro services and patterned applications that respond intuitively to the end user.</div>
					</div>
				</div>
			</div>
			<div class="section when">
				<div class="label label-right">
					<div class="text">MOTIVATIONS</div>
					<div class="num">03</div>
				</div>
				<FibonacciCircle />
				<div class="text-wrapper">
					<div>
						<div class="header">Moving Forward</div>
						<div class="line-deco"></div>
						<div class="text">The conveyance of information through digital media. The betterment and continued growth of the tech community. The consumption and utilization of web resources to learn, teach, and deliver expertly executed products. These are the aspirations of a software engineer, and the hope they hold.</div>
					</div>
				</div>
			</div>
			<div class="section why">
				<div class="label label-right">
					<div class="text">SOLUTIONS</div>
					<div class="num">04</div>
				</div>
				<ThreeDee />
				<div class="text-wrapper">
					<div>
						<div class="header">Moving Forward</div>
						<div class="line-deco"></div>
						<div class="text">The conveyance of information through digital media. The betterment and continued growth of the tech community. The consumption and utilization of web resources to learn, teach, and deliver expertly executed products. These are the aspirations of a software engineer, and the hope they hold.</div>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
import SineLines from '@/components/visualizations/SineLines'
import ParticleNetwork from '@/components/visualizations/ParticleNetworkForce'
import FibonacciCircle from '@/components/visualizations/FibonacciCircle'
import ThreeDee from '@/components/visualizations/ThreeDee'
import Icon from '@/components/shared/Icon'

export default {
	components: {
		SineLines,
		ParticleNetwork,
		FibonacciCircle,
		ThreeDee,
		Icon
	}
}
</script>
<style lang="scss">
	#particle {
		position: absolute;
		background-color: #FAFAFF;

		// background-color: #292929;
		cursor: pointer;
		z-index: -1;
		opacity: 0.6;
	}
	.logo {
		position: absolute;
		top: 20px;
		left: 20px;
		font-size: 44px;
		@media (max-width: 576px) {
			font-size: 38px;
			top: 10px;
			left: 10px;
		}
	}
	.line-deco {
		width: 60px;
		height: 3px;
		margin-bottom: 20px;
		background-color: #292929;
	}
	// #home {
	// 	height: 100vh;
	// 	background-color: #f8f8f8;
	// 	overflow: hidden;
	// 	.lead-wrapper {
	// 		left: 5%;
	// 		margin-left: -100px;
	// 		.lead {
	// 			line-height: 1.2;
	// 			font-size: 60px;
	// 		}
	// 	}
	// 	@media (max-width: 900px) {
	// 		.wrapper-text {
	// 			padding: 5% 10%;
	// 		}
	// 		.lead-wrapper {
	// 			margin-left: -20px;
	// 			.lead {
	// 				font-size: 44px;
	// 			}
	// 			.btn {
	// 				margin-top: 14px;
	// 				font-size: 14px;
	// 				padding: 8px 24px;
	// 				width: 160px;
	// 			}
	// 		}
	// 	}
	// 	@media (max-width: 700px) {
	// 		height: 200vh;
	// 		.wrapper-text {
	// 			padding: 5% 10%;
	// 		}
	// 		.lead-wrapper {
	// 			margin-left: -20px;
	// 			margin-top: 20px;
	// 			.lead {
	// 				font-size: 44px;
	// 			}
	// 			.btn {
	// 				margin-top: 14px;
	// 				font-size: 14px;
	// 				padding: 8px 24px;
	// 				width: 160px;
	// 			}
	// 		}
	// 	}
	// }
	// #hello {
	// 	background-color: #3D3C3E;
	// 	.column {
	// 		min-height: 300px;
	// 	}
	// 	.wrapper-text {
	// 		color: #f1f1f1;
	// 	}
	// }
	// #who {
	// 	.wrapper-animation {
	// 		overflow: hidden;
	// 		#chart {
	// 			position: absolute;
	// 			opacity: 0.4;
	// 		}
	// 	}
	// }
	// #contact {
	// 	background-color: #f8f8f8;
	// 	height: 360px;
	// 	@media (max-width: 576px) {
	// 		height: 100vw;
	// 	}
	// }
</style>