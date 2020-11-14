<template>
	<div class="three-dee">
		<div class="inner-3d-container">
			<div class="render">
				<div class="cube cube-1">
					<div class="cube-wrapper">
					<div class="side side-front"></div>
					<div class="side side-back"></div>
					<div class="side side-top"></div>
					<div class="side side-bottom"></div>
					<div class="side side-left"></div>
					<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-2">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-3">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-4">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-5">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-6">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-7">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-8">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-9">
					<div class="cube-wrapper">
						<div class="side side-front"></div>
						<div class="side side-back"></div>
						<div class="side side-top"></div>
						<div class="side side-bottom"></div>
						<div class="side side-left"></div>
						<div class="side side-right"></div>
					</div>
				</div>
				<div class="cube cube-10">
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
</template>
<style lang="scss">
.three-dee {
	overflow: hidden;
	opacity: 0.8;
	position: relative;
	height: 100%;
	width: 100%;
	.inner-3d-container {
		perspective: 1000px;
		top: 50%;
		left: 50%;
		position: absolute;
		border-radius: 50%;
		.render {
			// transform-origin: center;
			animation: spin3d 8s linear infinite forwards running;
			// -webkit-transform: rotateX(54.7deg);
			transform: rotateX(60deg) rotateZ(0deg);
			transform-style: preserve-3d;
			width: 100%;
			height: 100%;
		}
		@keyframes spin3d {
			to {
				// -webkit-transform: rotateX(60deg) rotateZ(360deg);
				transform: rotateX(60deg) rotateZ(-360deg);
			}
		}
		// @-webkit-keyframes spin3d {
		// 	to {
		// 		-webkit-transform: rotateX(54.7deg) rotateZ(360deg);
		// 		transform: rotateX(54.7deg) rotateZ(360deg);
		// 	}
		// }
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