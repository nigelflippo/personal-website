<template>
	<div id="cube-wrapper">  
		<div class="cube">
			<div class="front"></div>
			<div class="back"></div>
			<div class="top"></div>
			<div class="bottom"></div>
			<div class="left"></div>
			<div class="right"></div>
		</div>
	</div>
</template>
<style lang="scss">
	#cube-wrapper {
		height: 200px;
		width: 200px;
		perspective: 100000px;
		.cube {
			@function hslColor($hue: 0, $saturation: 70%, $lightness: 70%) {
				@return hsl($hue, $saturation, $lightness);
			}

			@for $i from 1 through 6 {
				> div:nth-child(#{$i}) {
					$color: hslColor($hue: $i * 60);
					background: $color;
				}
			}
			&:hover {
				animation-play-state: paused;
			}
			transform-style: preserve-3d;
			transition: all 0.4s ease;
			animation: rotatecube 16s infinite;
			animation-play-state: running;
			transform: rotateX(50deg) rotateY(50deg);
			--size: 120px;
			width: var(--size);
			height: var(--size);
		}
		@keyframes rotatecube {
			0% {
				transform: rotateX(0deg) rotateY(0deg);
			}
			50% {
				transform: rotateX(540deg) rotateY(360deg);
			}
			100% {
				transform: rotateX(0deg) rotateY(0deg);
			}
		}
		.cube div {
			opacity: 0.5;
			width: 100%;
			height: 100%;
			position: absolute;
		}
		.front {
			transform: translateZ(calc(var(--size) / 2));
			-webkit-transform: translateZ(calc(var(--size) / 2));
		}
		.back {
			transform: translateZ(calc((var(--size) * -1) / 2)) rotateY(180deg);
			-webkit-transform: translateZ(calc((var(--size) * -1) / 2)) rotateY(180deg);
		}
		.top {
			transform: translateY(calc((var(--size) * -1) / 2)) rotateX(90deg);
			-webkit-transform: translateY(calc((var(--size) * -1) / 2)) rotateX(90deg);
		}
		.bottom {
			transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
			-webkit-transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
		}
		.left {
			transform: translateX(calc((var(--size) * -1) / 2)) rotateY(-90deg);
			-webkit-transform: translateX(calc((var(--size) * -1) / 2)) rotateY(-90deg);
		}
		.right {
			transform: translateX(calc(var(--size) / 2)) rotateY(90deg);
			-webkit-transform: translateX(calc(var(--size) / 2)) rotateY(90deg);
		}
	}
</style>