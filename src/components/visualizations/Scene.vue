<template>
	<div id="scene">
		<button @click="handleRotate">ROTATE</button>
		<button @click="handleFlip">FLIP</button>
		<div class="scene-container" :class="{ 'rotate': isRotated, 'flip': isFlipped }">
			<div class="beach">
				<div class="plane plane-one"></div>
				<div class="plane plane-two"></div>
				<div class="plane plane-three"></div>
				<div class="plane plane-four"></div>
				<div class="plane plane-five"></div>
				<div class="plane plane-six"></div>
				<!-- <div class="plane plane-seven"></div>
				<div class="plane plane-eight"></div>
				<div class="plane plane-nine"></div>
				<div class="plane plane-ten"></div>
				<div class="plane plane-eleven"></div> -->
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			isRotated: false,
			isFlipped: false
		}
	},
	methods: {
		handleRotate () {
			this.isRotated = !this.isRotated
		},
		handleFlip () {
			this.isFlipped = !this.isFlipped
		}
	}
}
</script>
<style lang="scss">
	#scene {
		position: absolute;
		left: 50%;
		top: 50%;
		height: 400px;
		width: 400px;
		margin-left: -200px;
		margin-top: -200px;
		.scene-container {
			height: 100%;
			width: 100%;
			position: relative;
			transform: rotateX(54.7deg) rotateZ(45deg);
			transform-style: preserve-3d;
			transition: all 3s ease;
			&.rotate {
				transform: rotateX(54.7deg) rotateZ(135deg);
			}
			&.flip {
				transform: rotateX(360deg);
			}
			.beach {
				position: absolute;
				.plane {
					// border: 1px solid rgba(0, 0, 0, 0.1);
					$background: rgba(0, 206, 209, 0.6);
					background: $background;
					position: absolute;
					height: 100%;
					width: 100%;
					transform-style: preserve-3d;
					&-one {
						background: darken($background, 10);
						transform: translateY(0) rotateX(90deg);
						height: 40px;
						width: 400px;
					}
					&-two {
						animation: tide 1s infinite alternate;
						background: darken($background, 10);
						transform: translateY(400px) rotateX(90deg) scaleY(1);
						height: 40px;
						width: 400px;
						@keyframes tide {
							to {
								transform: translateY(400px) rotateX(90deg) scaleY(0.9);
							}
						}
					}
					&-three {
						background: darken($background, 10);
						transform: rotateX(90deg) rotateY(90deg) translateX(200px) translateZ(200px);
						height: 40px;
						width: 400px;
					}
					&-four {
						background: darken($background, 10);
						transform: rotateX(90deg) rotateY(90deg) translateX(200px) translateZ(-200px);
						height: 40px;
						width: 400px;
					}
					&-five {
						animation: surge 1s infinite alternate;
						transform: translateY(20px) translateZ(20px) rotateX(0deg);
						height: 400px;
						width: 400px;
					}
					&-six {
						background: darken($background, 15);
						transform: translateY(20px) translateZ(-20px) rotateX(0deg);
						height: 400px;
						width: 400px;
					}
					&-seven {
						background: #666;
						transform: translateY(20px) translateZ(30px) rotateX(90deg);
						height: 100px;
						width: 100px;
					}
					&-eight {
						background: #666;
						transform: translateY(60px) translateZ(30px) rotateX(90deg);
						height: 100px;
						width: 100px;
					}
					&-nine {
						background: #666;
						transform: translateY(40px) translateX(-20px) translateZ(30px) rotateX(90deg) rotateY(90deg);
						height: 100px;
						width: 40px;
					}
					&-ten {
						background: darken(#666, 10);
						transform: translateY(40px) translateX(80px) translateZ(30px) rotateX(90deg) rotateY(90deg);
						height: 100px;
						width: 40px;
					}
					&-eleven {
						background: lighten(#666, 5);
						transform: translateY(70px) translateZ(80px) rotateX(180deg);
						height: 40px;
						width: 100px;
					}
					@keyframes surge {
						from {
							transform: translateY(20px) translateZ(20px) rotateX(0deg);
						}
						to {
							transform: translateY(20px) translateZ(16px) rotateX(0deg);
						}
					}
				}
			}
		}
	}
</style>