<template>
	<div class="ring-container">
		<div class="ring-wrapper">
			<div class="render-layer">
				<div v-for="(n, i) in 10" :key="i">
					<div :class="`cube cube-${n}`">
						<div class="cube-wrapper">
							<div class="side side-front"></div>
							<div class="side side-back"></div>
							<div class="side side-top"></div>
							<div class="side side-bottom"></div>
							<div class="side side-left"></div>
							<div class="side side-right"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.ring-container {
	overflow: hidden;
	opacity: 0.8;
	position: relative;
	height: 100%;
	width: 100%;
	.ring-wrapper {
		perspective: 1000px;
		top: 50%;
		left: 50%;
		position: absolute;
		border-radius: 50%;
		.render-layer {
			animation: spin3d 8s linear infinite forwards running;
			transform: rotateX(60deg) rotateZ(0deg);
			transform-style: preserve-3d;
			width: 100%;
			height: 100%;
		}
		@keyframes spin3d {
			to {
				transform: rotateX(60deg) rotateZ(-360deg);
			}
		}
		.cube {
			position: absolute;
			transform-style: preserve-3d;
			--size: 32px;
			top: 50%;
			left: 50%;
			margin-left: calc(var(--size) * -1 / 2);
			margin-top: calc(var(--size) * -1 / 2);
			height: var(--size);
			width: var(--size);
			@mixin circle($i) {
				$rotation: $i * (360 / 10);
				transform: rotate(#{$rotation}deg) translate(140px);
			}
			@for $i from 1 through 10 {
				&-#{$i} {
					@include circle($i);
					.cube-wrapper {
						width: 100%;
						height: 100%;
						transform-style: preserve-3d;
						animation: cube-flip 4s linear #{$i * 0.4s} infinite;
						transform-origin: 50% 50%;
						@keyframes cube-flip {
							to { transform: rotateY(360deg) rotateX(360deg); }
						}
					}
				}
			}
			.side {
				transform-style: preserve-3d;
				height: 100%;
				width: 100%;
				position: absolute;
				&-front {
					background: #bababa;
					transform: translateZ(calc(var(--size) / 2));
				}
				&-back {
					background: #bababa;
					transform: translateZ(calc((var(--size) * -1) / 2)) rotateY(180deg);
				}
				&-top {
					background: #333;
					transform: translateY(calc((var(--size) * -1) / 2)) rotateX(90deg);
				}
				&-bottom {
					background: #666;
					transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
				}
				&-left {
					background: #1c1c1c;
					transform: translateX(calc((var(--size) * -1) / 2)) rotateY(-90deg);
				}
				&-right {
					background: hsl(100, 80%, 70%);
					transform: translateX(calc(var(--size) / 2)) rotateY(90deg);
				}
			}
		}
	}
}
</style>