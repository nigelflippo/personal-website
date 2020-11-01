<template>
	<div class="scene-container">
		<div class="btn-container">
			<button @click="rotateLeft" class="btn btn-left"></button>
			<button @click="rotateRight" class="btn btn-right"></button>
		</div>
		<div class="grid-container">
			<div class="render-el">
				<div class="plane plane-y-1 grid">
					<div class="c-1-s-10 bg-aqua darken"></div>
				</div>
				<div class="plane plane-y-11 grid">
					<div class="c-1-s-10 bg-aqua"></div>
				</div>
				<div class="plane plane-x-1 grid">
					<div class="c-1-s-10 r-10-s-1 bg-aqua"></div>
				</div>
				<div class="plane plane-x-11 grid">
					<div class="c-1-s-10 r-10-s-1 bg-aqua darken"></div>
				</div>
				<div class="plane plane-z-1 grid">
					<div class="c-1-s-10 r-1-s-10 bg-aqua darken-2"></div>
				</div>
				<div class="plane plane-z-2 grid">
					<div class="c-1-s-10 r-1-s-10 bg-top"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	created () {
		document.body.style.setProperty('--angle-of-rotation', `${this.angleOfRotation}deg`)
	},
	data () {
		return {
			angleOfRotation: 45
		}
	},
	methods: {
		rotateLeft () {
			this.angleOfRotation += 90
		},
		rotateRight () {
			this.angleOfRotation -= 90
		}
	},
	watch: {
		angleOfRotation () {
			document.body.style.setProperty('--angle-of-rotation', `${this.angleOfRotation}deg`)
		}
	}
}
</script>
<style lang="scss">
	.scene-container {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn-container {
		z-index: 100;
		align-items: center;
		position: absolute;
		top: 100px;
		left: 50px;
		.btn {
			cursor: pointer;
			width: 40px;
			height: 40px;
			background-color: transparent;
			border: none;
			position: relative;
			&:before, &:after {
				content: "";
				height: 4px;
				width: 14px;
				border-radius: 2px;
				background-color: #333;
				position: absolute;
			}
			&.btn-left {
				transform: rotate(180deg);
				&:before {
					transform: translateX(-6px) translateY(-7px) rotate(45deg);
				}
				&:after {
					transform: translateX(-6px) translateY(1px) rotate(-45deg);
				}
			}
			&.btn-right {
				&:before {
					transform: translateX(-6px) translateY(-5px) rotate(45deg);
				}
				&:after {
					transform: translateX(-6px) translateY(3px) rotate(-45deg);
				}
			}
		}
	}
	.grid-container {
		perspective: 100000px;
		--container-size: 300px;
		@media screen and (max-width: 576px) {
			--container-size: 200px;
		}
		height: var(--container-size);
		width: var(--container-size);
		position: relative;
		top: -10%;
		$grid: 10;
		// @keyframes float {
			// 	from { transform: rotateX(54.7deg) rotateZ(var(--angle-of-rotation)) translateZ(0px); }
		// 	to { transform: rotateX(54.7deg) rotateZ(var(--angle-of-rotation)) translateZ(20px); }
		// }
		.render-el {
			transition: all 1s;
			transform: rotateX(54.7deg) rotateZ(var(--angle-of-rotation));
			transform-style: preserve-3d;
			height: 100%;
			width: 100%;
		}
		.grid {
			display: grid;
			grid-template-rows: repeat($grid, 1fr);
			grid-template-columns: repeat($grid, 1fr);
			@mixin coords($x, $y) {
				grid-row: $x;
				grid-column: $y;
			}
			@mixin row($x, $y) {
				grid-row: $x / span $y;
			}
			@mixin col($x, $y) {
				grid-column: $x / span $y;
			}
			@for $i from 1 through $grid {
				@for $j from 1 through $grid {
					.cx-#{$i}-#{$j} { @include coords($i, $j) }
					.r-#{$i}-s-#{$j} { @include row($i, $j) }
					.c-#{$i}-s-#{$j} { @include col($i, $j) }
				}
			}
		}
		.plane {
			background: none;
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			// x plane
			&-x-1 { transform: translateX(50%) rotateY(-90deg) rotateZ(90deg); }
			&-x-2 { transform: translateX(40%) rotateY(-90deg) rotateZ(90deg); }
			&-x-3 { transform: translateX(30%) rotateY(-90deg) rotateZ(90deg); }
			&-x-4 { transform: translateX(20%) rotateY(-90deg) rotateZ(90deg); }
			&-x-5 { transform: translateX(10%) rotateY(-90deg) rotateZ(90deg); }
			&-x-6 { transform: translateX(0%) rotateY(-90deg) rotateZ(90deg); }
			&-x-7 { transform: translateX(-10%) rotateY(-90deg) rotateZ(90deg); }
			&-x-8 { transform: translateX(-20%) rotateY(-90deg) rotateZ(90deg); }
			&-x-9 { transform: translateX(-30%) rotateY(-90deg) rotateZ(90deg); }
			&-x-10 { transform: translateX(-40%) rotateY(-90deg) rotateZ(90deg); }
			&-x-11 { transform: translateX(-50%) rotateY(-90deg) rotateZ(90deg); }
			// y plane
			&-y-1 { transform: translateY(50%) rotateX(90deg); }
			&-y-2 { transform: translateY(40%) rotateX(90deg); }
			&-y-3 { transform: translateY(30%) rotateX(90deg); }
			&-y-4 { transform: translateY(20%) rotateX(90deg); }
			&-y-5 { transform: translateY(10%) rotateX(90deg); }
			&-y-6 { transform: translateY(0%) rotateX(90deg); }
			&-y-7 { transform: translateY(-10%) rotateX(90deg); }
			&-y-8 { transform: translateY(-20%) rotateX(90deg); }
			&-y-9 { transform: translateY(-30%) rotateX(90deg); }
			&-y-10 { transform: translateY(-40%) rotateX(90deg); }
			&-y-11 { transform: translateY(-50%) rotateX(90deg); }
			// z plane
			&-z-1 { transform: rotateX(90deg) translateY(-50%) rotateX(-90deg); }
			&-z-2 { transform: rotateX(90deg) translateY(-40%) rotateX(-90deg); }
			&-z-3 { transform: rotateX(90deg) translateY(-30%) rotateX(-90deg); }
			&-z-4 { transform: rotateX(90deg) translateY(-20%) rotateX(-90deg); }
			&-z-5 { transform: rotateX(90deg) translateY(-10%) rotateX(-90deg); }
			&-z-6 { transform: rotateX(90deg) translateY(0%) rotateX(-90deg); }
			&-z-7 { transform: rotateX(90deg) translateY(10%) rotateX(-90deg); }
			&-z-8 { transform: rotateX(90deg) translateY(20%) rotateX(-90deg); }
			&-z-9 { transform: rotateX(90deg) translateY(30%) rotateX(-90deg); }
			&-z-10 { transform: rotateX(90deg) translateY(40%) rotateX(-90deg); }
			&-z-11 { transform: rotateX(90deg) translateY(50%) rotateX(-90deg); }
		}
		.bg-aqua {
			background-color: aquamarine;
			opacity: 0.4;
			&.darken {
				background-color: darken(aquamarine, 15);
			}
			&.darken-2 {
				background-color: darken(aquamarine, 30);
			}
		}
		.bg-top {
			background: rgba(173,255,228,0.6);
			background: linear-gradient(225deg, rgba(173,255,228,0.4) 0%, rgba(127,255,212,0.6) 100%);
		}
		.floating {
			animation: float 3s ease-in-out alternate infinite;
		}
	}
	@media screen and (max-width:576px) {
		.btn-container {
			top: 10%;
			left: 10%;
		}
	}
</style>