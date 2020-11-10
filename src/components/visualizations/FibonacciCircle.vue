<template>
	<transition name="reset" mode="out-in">
		<div class="anim-container" :key="counter">
			<div v-for="(n, index) of 40" :class="`circle circle-${n}`" :key="index"></div>
		</div>
	</transition>
</template>
<script>
export default {
	computed: {
		playState () {
			return this.isPlaying ? 'running' : 'paused'
		}
	},
	created () {
		document.body.style.setProperty('--play-state', this.playState)
	},
	data () {
		return {
			isPlaying: true,
			counter: 0
		}
	},
	methods: {
		onMouseOver () {
			this.isPlaying = true
		},
		onMouseOut () {
			this.isPlaying = false
			this.counter++
		}
	},
	watch: {
		isPlaying () {
			document.body.style.setProperty('--play-state', this.playState)
		}
	}
}
</script>
<style lang="scss">
	.reset-enter-active, .reset-leave-active {
		transition: opacity 0.3s ease;
	}
	.reset-enter {
		opacity: 0;
	}
	.reset-leave-to {
		opacity: 0;
	}
	.anim-container {
		// --play-state: paused;
		// &:hover {
		// 	--play-state: running;
		// }
		opacity: 0.8;
		overflow: hidden;
		height: 100%;
		width: 100%;
		position: relative;
		@function hslColor($hue: 0, $saturation: 70%, $lightness: 70%) {
			@return hsl($hue, $saturation, $lightness);
		}
		@mixin lines($n) {
			animation: spin 3s infinite ease-in-out #{0.05s * $n} forwards alternate var(--play-state);
		}
		.circle {
			top: 50%;
			left: 50%;
			position: absolute;
			border-radius: 50%;
			border: 3px solid;
			$base-size: 8px;
			@for $i from 1 through 40 {
				&-#{$i} {
					$color: hslColor($hue: 0, $saturation: 0, $lightness: ($i * 2));
					// $color: hslColor($hue: ($i * 14) + 150);
					// $color: hslColor($hue: $i * 5);
					border-color: $color transparent transparent;
					height: #{$i * $base-size};
					width: #{$i * $base-size};
					margin-left: -#{$i * ($base-size / 2)};
					margin-top: -#{$i * ($base-size / 2)};
					@include lines($i);
				}
			}
		}
		@keyframes spin {
			to { transform: rotate(540deg); }
		}
	}
</style>