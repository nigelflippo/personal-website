<template>
	<div class="circle-container">
		<div class="circle-wrapper" @click="handleClick">
			<div v-for="(n, index) in 25" :key="index" :class="[`cube cube-${n}`, className ]"></div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			className: ''
		}
	},
	methods: {
		handleClick () {
			if (this.className === 'rotate') {
				this.className = 'square'
			} else if (this.className === 'square') {
				this.className = ''
			} else {
				this.className = 'rotate'
			}
		}
	}
}
</script>
<style lang="scss">
	// hover to rotate, click to expand
	.circle-container {
		height: 100%;
		width: 100%;
		// background-color: rgba(24,24,24,1);
		display: flex;
		justify-content: center;
		align-items: center;
		.circle-wrapper {
			cursor: pointer;
			border-radius: 50%;
			height: 300px;
			width: 300px;
			animation: circular 15s linear infinite paused;
			transform-origin: center;
			&:hover {
				animation-play-state: running;
			}
			$cubes: 25;
			$cube-size: 24px;
			.cube {
				top: 50%;
				left: 50%;
				position: absolute;
				border-radius: 4px;
				margin-left: -$cube-size / 2;
				margin-top: -$cube-size / 2;
				height: $cube-size;
				width: $cube-size;
				@function hslColor($hue: 0, $saturation: 70%, $lightness: 70%) {
					@return hsl($hue, $saturation, $lightness);
				}
				@for $i from 1 through $cubes {
					&-#{$i} {
						z-index: $i;
						transition: all 0.3s ease-in-out #{$i * 0.075s};
						$color-1: hslColor($hue: $i * (360 / 100) + 0);
						$color-2: hslColor($hue: ($i + 10) * (360 / 100) + 0);
						background: linear-gradient(135deg, $color-1 0%, $color-2 100%);
						&:hover {
							background: linear-gradient(135deg, darken($color-1, 10) 0%, darken($color-2, 10) 100%);
						}
					}
				}
				@mixin circle($i, $name) {
					$rotation: $i * (360 / $cubes);
					&.rotate {
						border-radius: 50%;
						transform: rotate(#{$rotation}deg) translate(120px) scale(1.2);
					}
					&.square {
						// border-radius: 50%;
						transform: translate(0) scale(1.2);
						// transform: rotate(#{360 / $cubes}deg) translate(125px) scale(1.2);
						// border-radius: 50%;
					}
				}
				@for $i from 1 through $cubes {
					&-#{$i} {
						@include circle($i, rotate-#{$i});
					}
				}
				@keyframes circular {
					to { transform: rotate(360deg); }
				}
				$spacer: 28px;
				$spacer-lg: $spacer * 2;
				&-1 {
					transform: translateX($spacer-lg) translateY($spacer-lg);
				}
				&-2 {
					transform: translateX($spacer) translateY($spacer-lg);
				}
				&-3 {
					transform: translateX(0) translateY($spacer-lg);
				}
				&-4 {
					transform: translateX(-$spacer) translateY($spacer-lg);
				}
				&-5 {
					transform: translateX(-$spacer-lg) translateY($spacer-lg);
				}
				&-6 {
					transform: translateX($spacer-lg) translateY($spacer);
				}
				&-7 {
					transform: translateX($spacer) translateY($spacer);
				}
				&-8 {
					transform: translateX(0) translateY($spacer);
				}
				&-9 {
					transform: translateX(-$spacer) translateY($spacer);
				}
				&-10 {
					transform: translateX(-$spacer-lg) translateY($spacer);
				}
				&-11 {
					transform: translateX($spacer-lg) translateY(0);
				}
				&-12 {
					transform: translateX($spacer) translateY(0);
				}
				&-13 {
					transform: translateX(0px) translateY(0);
				}
				&-14 {
					transform: translateX(-$spacer) translateY(0);
				}
				&-15 {
					transform: translateX(-$spacer-lg) translateY(0);
				}
				&-16 {
					transform: translateX($spacer-lg) translateY(-$spacer);
				}
				&-17 {
					transform: translateX($spacer) translateY(-$spacer);
				}
				&-18 {
					transform: translateX(0) translateY(-$spacer);
				}
				&-19 {
					transform: translateX(-$spacer) translateY(-$spacer);
				}
				&-20 {
					transform: translateX(-$spacer-lg) translateY(-$spacer);
				}
				&-21 {
					transform: translateX($spacer-lg) translateY(-$spacer-lg);
				}
				&-22 {
					transform: translateX($spacer) translateY(-$spacer-lg);
				}
				&-23 {
					transform: translateX(0) translateY(-$spacer-lg);
				}
				&-24 {
					transform: translateX(-$spacer) translateY(-$spacer-lg);
				}
				&-25 {
					transform: translateX(-$spacer-lg) translateY(-$spacer-lg);
				}
			}
			@media (max-width: 900px) {
				animation-play-state: running;
			}
		}
	}
</style>