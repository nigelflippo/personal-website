<template>
	<section id="what" class="section">
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
	</section>
</template>
<script>
import ForceMap from '@/components/visualizations/ForceMap'
export default {
	components: {
		ForceMap
	}
}
</script>
<style lang="scss">
	#what {
		.wrapper-animation {
			overflow: hidden;
			background-color: #f1f1f1;
			#chart {
				position: absolute;
				opacity: 0.4;
			}
		}
	}
</style>