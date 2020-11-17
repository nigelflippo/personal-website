<template>
	<transition name="sine" mode="out-in">
		<div class="sine-container">
			<div v-for="(n, index) in 100" :key="index" class="sine-wrapper">
				<div :class="`dot dot-${n}`"></div>
			</div>
		</div>
	</transition>
</template>
<script>
</script>
<style lang="scss">
	$easing: cubic-bezier(0.37, 0, 0.63, 1);
	$speed: 0.6s;
	$delayStagger: 0.1s;
	.sine-enter-active, .sine-leave-active {
		transition: opacity 0.3s ease;
	}
	.sine-enter {
		opacity: 0;
	}
	.sine-leave-to {
		opacity: 0;
	}
	.sine-container {
		cursor: pointer;
		left: -50px;
		overflow: hidden;
		height: 100%;
		width: 100%;
		position: absolute;
		display: grid;
		grid-template-columns: 1;
		grid-template-rows: repeat(100, 1fr);
		.sine-wrapper {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.4s linear;
			.dot {
				transition: all 0.3s ease;
				background-color: #666;
				height: 10px;
				width: 10px;
				border-radius: 50%;
				opacity: 0.5;
				@function hslColor($hue: 0, $saturation: 70%, $lightness: 70%) {
					@return hsl($hue, $saturation, $lightness);
				}
				@mixin lines($n) {
					animation:
						scale $speed infinite $easing #{$n * $delayStagger + ($speed / 2)} alternate both,
						translate $speed infinite $easing #{$n * $delayStagger} alternate forwards;
				}
				@for $i from 1 through 100 {
					&-#{$i} {
						$color: hslColor($hue: $i * 10);
						background: $color;
						@include lines($i);
					}
				}
			}

			@keyframes scale {
				from {
					opacity: 0.1;
				}
				to {
					opacity: 1;
				}
			}
			@keyframes translate {
				to {
					-webkit-transform: translateX(100px);
					transform: translateX(100px);
				}
			}
		}
	}
</style>