<template>
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
</template>
<script>
import Cube from '@/components/visualizations/Cube'
export default {
	components: {
		Cube
	}
}
</script>
<style lang="scss">
	#who {
		.wrapper-animation {
			background-color: #f1f1f1;
			#cube-wrapper {
				position: absolute;
				top: 50%;
				left: 50%;
				margin-left: -100px;
				margin-top: -100px;
			}
		}
	}
</style>