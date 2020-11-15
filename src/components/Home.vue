<template>
		<div class="body">
			<div id="intro" class="section intro">
				<ParticleNetwork />
				<div class="label label-right">
					<div class="text">INTRODUCTION</div>
					<div class="num">01</div>
				</div>
				<div class="text-wrapper">
					<div>
						<div class="header">I'm Nigel, Developer</div>
						<div class="line-deco"></div>
						<div class="text">
							<p>Software engineer and musician with a tacit understanding of patterns both contrapuntal and programmatic. Years of relevant industry experience and a love for the practiced application of programming paradigms and principals.</p>
						</div>
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
			<div id="what" class="section what">
				<div class="label label-right">
					<div class="text">PORTFOLIO</div>
					<div class="num">02</div>
				</div>
				<SineLines />
				<div class="text-wrapper">
					<div>
						<div class="header">My Work</div>
						<div class="line-deco"></div>
						<div class="text">
							<p>Data visualizations, interactive and engaging simulations, and aesthetically pleasing user interfaces. Declarative solutions, with a functional fondness for creating and refactoring scalable architectures. Micro services and patterned applications that respond intuitively to the end user.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="why" class="section why">
				<div class="label label-right">
					<div class="text">MOTIVATIONS</div>
					<div class="num">03</div>
				</div>
				<FibonacciCircle />
				<div class="text-wrapper">
					<div>
						<div class="header">Moving Forward</div>
						<div class="line-deco"></div>
						<div class="text">
							<p>The conveyance of information through digital media. The betterment and continued growth of the tech community. The consumption and utilization of web resources to learn, teach, and deliver expertly executed products. Open source contribution and the enterprisement of new technologies, frameworks, and libraries.</p>
						</div>
					</div>
				</div>
			</div>
			<div id="contact" class="section contact">
				<div class="label label-right">
					<div class="text">SOLUTIONS</div>
					<div class="num">04</div>
				</div>
				<ThreeDee />
				<div class="text-wrapper">
					<div>
						<div class="header">Say Hello</div>
						<div class="line-deco"></div>
						<div class="text">
							<p>Architecting solutions and bridging gaps between bits and business. Future-first thought with a personal touch.</p>
							<p>Say hi, let's build something together.</p>
						</div>
						<button class="btn">Contact Me</button>
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
		cursor: pointer;
		z-index: -1;
		opacity: 0.6;
	}
	.line-deco {
		width: 60px;
		height: 3px;
		margin-bottom: 20px;
		background-color: #292929;
	}
</style>