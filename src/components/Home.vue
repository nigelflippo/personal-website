<template>
	<div class="home">
		<div id="who" class="section who">
			<ParticleNetwork />
			<div class="label label-right">
				<div class="text">INTRODUCTION</div>
				<div class="num">01</div>
			</div>
			<div class="text-container">
				<div class="text-wrapper">
					<h1 class="header">I'm Nigel, Developer</h1>
					<div class="text">
						<p>Software engineer and musician with a tacit understanding of patterns both contrapuntal and programmatic. Years of relevant industry experience and a love for the practiced application of programming paradigms and principals.</p>
					</div>
				</div>
			</div>
			<div class="icon-container">
				<div class="icon-group">
					<a href="https://codepen.io/nigelflippo"><Icon type="codepen" /></a>
					<a href="https://github.com/nigelflippo"><Icon type="github" /></a>
					<a href="https://www.linkedin.com/in/nigelflippo/"><Icon type="linkedin" /></a>
				</div>
			</div>
		</div>
		<div id="what" class="section what">
			<div class="label label-right">
				<div class="text">PORTFOLIO</div>
				<div class="num">02</div>
			</div>
			<Sine />
			<div class="text-container">
				<div class="text-wrapper">
					<h1 class="header">My Work</h1>
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
			<Spiral />
			<div class="text-container">
				<div class="text-wrapper">
					<h1 class="header">Moving Forward</h1>
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
			<Ring />
			<div class="text-container">
				<div class="text-wrapper">
					<h1 class="header">Say Hello</h1>
					<div class="text">
						<p>Architecting solutions and bridging gaps between bits and business. Future-first thought with a personal touch.</p>
						<p>Say hi, let's build something together.</p>
					</div>
					<button class="btn">
						<a href="mailto:flippo.nigel@gmail.com">
							Contact Me
						</a>
					</button>
				</div>
			</div>
		</div>
		<div class="section footer">
			<div class="icon-container">
				<div class="icon-group">
					<a href="https://codepen.io/nigelflippo"><Icon type="codepen" /></a>
					<a href="https://github.com/nigelflippo"><Icon type="github" /></a>
					<a href="https://www.linkedin.com/in/nigelflippo/"><Icon type="linkedin" /></a>
				</div>
			</div>
			<div class="attr-container">
				<div class="name-wrapper">
					&copy; 2020 Nigel Flippo
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Sine from '@/components/visualizations/Sine'
import ParticleNetwork from '@/components/visualizations/ParticleNetwork'
import Spiral from '@/components/visualizations/Spiral'
import Ring from '@/components/visualizations/Ring'
import Icon from '@/components/shared/Icon'

export default {
	components: {
		Sine,
		ParticleNetwork,
		Spiral,
		Ring,
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
</style>