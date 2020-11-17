<template>
	<transition name="reset" mode="out-in">
		<div class="spiral-container">
			<div class="spiral-wrapper">
				<div v-for="(n, index) of 50" :class="`semi-circle semi-circle-${n}`" :key="index"></div>
			</div>
		</div>
	</transition>
</template>
<script>
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
	.spiral-container {
		opacity: 0.8;
		overflow: hidden;
		height: 100%;
		width: 100%;
		position: relative;
		.spiral-wrapper {
			height: 100%;
			width: 100%;
		}
		@function hslColor($hue: 0, $saturation: 70%, $lightness: 70%) {
			@return hsl($hue, $saturation, $lightness);
		}
		@mixin lines($n) {
			animation: spin 3s infinite ease-in-out #{0.05s * $n} forwards alternate;
		}
		.semi-circle {
			top: 50%;
			left: 50%;
			position: absolute;
			border-radius: 50%;
			border: 3px solid;
			$base-size: 8px;
			@for $i from 1 through 50 {
				&-#{$i} {
					$color: hslColor($hue: 0, $saturation: 0, $lightness: ($i * 2));
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