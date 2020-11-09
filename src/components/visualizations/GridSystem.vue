<template>
	<div class="scene-container">
		<div class="btn-container">
			<button @click="rotateLeft" class="btn-rotate btn-left"></button>
			<button @click="rotateRight" class="btn-rotate btn-right"></button>
		</div>
		<div class="float-container">
			<div class="grid-container">
				<div class="render-el">

					<div class="plane plane-y-1 grid">
						<div class="c-1-s-20 r-1-s-2 bg-aqua darken tide-side"></div>
					</div>
					<!-- <div class="plane plane-y-21 grid">
						<div class="c-1-s-20 bg-aqua tide-side"></div>
					</div> -->
					<div class="plane plane-x-1 grid">
						<div class="c-8-s-20 r-19-s-2 bg-aqua tide-side"></div>
					</div>
					<div class="plane plane-x-21 grid">
						<div class="c-8-s-20 r-19-s-2 bg-aqua darken tide-side"></div>
					</div>

					<!-- <div class="plane plane-z-1 grid tide-bottom">
						<div class="c-1-s-10 r-1-s-10 bg-aqua darken-2"></div>
					</div> -->
					<div class="plane plane-z-3 grid tide-top">
						<div class="c-1-s-20 r-1-s-20 bg-top"></div>
						<div class="plane plane-z-3 grid">
							<div class="c-1-s-20 r-7-s-1 wave"></div>
						</div>
					</div>
					
					<div class="plane plane-y-14 grid">
						<div class="c-1-s-20 r-1-s-3 bg-green"></div>
					</div>
					<div class="plane plane-x-1 grid">
						<div class="c-1-s-7 r-18-s-3 bg-green"></div>
					</div>
					<div class="plane plane-x-21 grid">
						<div class="c-1-s-7 r-18-s-3 bg-green"></div>
					</div>
					<div class="plane plane-z-4 grid">
						<div class="c-1-s-20 r-1-s-7 bg-green"></div>
					</div>
					<div class="plane plane-y-21 grid">
						<div class="c-1-s-20 r-1-s-3 bg-green"></div>
					</div>

					<!-- <div class="plane plane-y-21 grid">
						<div class="c-1-s-20 r-4-s-1 bg-brown"></div>
					</div>
					<div class="plane plane-y-20 grid">
						<div class="c-1-s-20 r-4-s-1 bg-brown"></div>
					</div>
					<div class="plane plane-z-5 grid">
						<div class="c-1-s-20 r-1-s-1 bg-brown"></div>
					</div>
					<div class="plane plane-x-1 grid">
						<div class="cx-17-1 bg-brown"></div>
					</div>
					<div class="plane plane-x-21 grid">
						<div class="cx-17-1 bg-brown"></div>
					</div> -->

					<!-- <div class="tree">
						<div class="tree-wrapper">
							<div class="tree-side tree-side-1"></div>
							<div class="tree-side tree-side-2"></div>
							<div class="tree-side tree-side-3"></div>
							<div class="tree-side tree-side-4"></div>
						</div>
						<div class="tree-wrapper tree-wrapper-middle">
							<div class="tree-side tree-side-1"></div>
							<div class="tree-side tree-side-2"></div>
							<div class="tree-side tree-side-3"></div>
							<div class="tree-side tree-side-4"></div>
						</div>
						<div class="tree-wrapper tree-wrapper-top">
							<div class="tree-side tree-side-1"></div>
							<div class="tree-side tree-side-2"></div>
							<div class="tree-side tree-side-3"></div>
							<div class="tree-side tree-side-4"></div>
						</div>
					</div> -->

					<!-- <div class="plane plane-y-5 grid">
						<div class="c-4-s-3 r-1-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-y-4 grid">
						<div class="c-4-s-3 r-1-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-x-5 grid">
						<div class="c-7-s-1 r-9-s-2 bg-gray bg-gray-lighten"></div>
					</div>
					<div class="plane plane-x-8 grid">
						<div class="c-7-s-1 r-9-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-z-3 grid">
						<div class="c-4-s-3 r-7-s-1 bg-gray bg-gray-lighten"></div>
					</div> -->

					<!-- <div class="plane plane-y-6 grid">
						<div class="c-2-s-1 r-1-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-y-5 grid">
						<div class="c-2-s-1 r-1-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-x-9 grid">
						<div class="c-6-s-1 r-9-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-x-10 grid">
						<div class="c-6-s-1 r-9-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-z-3 grid">
						<div class="c-1-s-3 r-5-s-2 bg-brown"></div>
					</div> -->

					<!-- <div class="plane plane-y-10 grid">
						<div class="c-1-s-2 r-3-s-2 bg-gray bg-gray-lighten"></div>
					</div>
					<div class="plane plane-y-8 grid">
						<div class="c-1-s-2 r-3-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-x-9 grid">
						<div class="c-2-s-2 r-7-s-2 bg-gray bg-gray-lighten"></div>
					</div>
					<div class="plane plane-x-11 grid">
						<div class="c-2-s-2 r-7-s-2 bg-gray"></div>
					</div>
					<div class="plane plane-z-5 grid">
						<div class="c-1-s-2 r-2-s-2 bg-gray bg-gray-lighten"></div>
					</div> -->
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
		overflow: hidden;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn-container {
		z-index: 100;
		width: 100%;
		align-items: center;
		position: absolute;
		// top: 50px;
		// right: 50px;
		.btn-rotate {
			padding: 5px;
			cursor: pointer;
			width: 50%;
			height: 200px;
			background-color: transparent;
			border: none;
			outline: none;
			position: relative;
			// &:before, &:after {
			// 	content: "";
			// 	height: 4px;
			// 	width: 14px;
			// 	border-radius: 2px;
			// 	background-color: #333;
			// 	position: absolute;
			// }
			// &.btn-left {
			// 	transform: rotate(180deg);
			// 	&:before {
			// 		transform: translateX(-6px) translateY(-7px) rotate(45deg);
			// 	}
			// 	&:after {
			// 		transform: translateX(-6px) translateY(1px) rotate(-45deg);
			// 	}
			// }
			// &.btn-right {
			// 	&:before {
			// 		transform: translateX(-6px) translateY(-5px) rotate(45deg);
			// 	}
			// 	&:after {
			// 		transform: translateX(-6px) translateY(3px) rotate(-45deg);
			// 	}
			// }
		}
	}
	.float-container {
		height: 100%;
		width: 100%;
		transform: translateY(-20px);
		animation: float 2s ease-in-out infinite alternate;
		@keyframes float {
			to { transform: translateY(2%); }
		}
	}
	.grid-container {
		perspective: 100000px;
		--container-size: 280px;
		@media screen and (max-width: 900px) {
			// --container-size: 200px;
			top: -10%;
		}
		height: var(--container-size);
		width: var(--container-size);
		position: relative;
		top: 15%;
		left: 50%;
		margin-left: calc(var(--container-size) / 2 * -1);
		$grid: 20;
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
			// transform-style: preserve-3d;
			background: none;
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			// $grid-limit: $grid / 2;
			// $grid-limit-neg: $grid-limit - $grid;
			// @mixin x($pos) {
			// 	transform: translateX($pos) rotateY(-90deg) rotateZ(90deg);
			// }
			// @for $i from $grid-limit-neg through $grid-limit {
			// 	$co: calc($i + $grid-limit + 1);
			// 	$pos: percentage($i * $grid-limit);
			// 	&-x-#{$co} { @include x($pos) }
			// 	&-y-#{$co} { transform: translateY($pos) rotateX(90deg); }
			// 	&-z-#{$co} { transform: rotateX(90deg) translateY($pos) rotateX(-90deg); }

			// }
			// x plane
			&-x-1 { transform: translateX(50%) rotateY(-90deg) rotateZ(90deg); }
			&-x-2 { transform: translateX(45%) rotateY(-90deg) rotateZ(90deg); }
			&-x-3 { transform: translateX(40%) rotateY(-90deg) rotateZ(90deg); }
			&-x-4 { transform: translateX(35%) rotateY(-90deg) rotateZ(90deg); }
			&-x-5 { transform: translateX(30%) rotateY(-90deg) rotateZ(90deg); }
			&-x-6 { transform: translateX(25%) rotateY(-90deg) rotateZ(90deg); }
			&-x-7 { transform: translateX(20%) rotateY(-90deg) rotateZ(90deg); }
			&-x-8 { transform: translateX(15%) rotateY(-90deg) rotateZ(90deg); }
			&-x-9 { transform: translateX(10%) rotateY(-90deg) rotateZ(90deg); }
			&-x-10 { transform: translateX(5%) rotateY(-90deg) rotateZ(90deg); }
			&-x-11 { transform: translateX(0%) rotateY(-90deg) rotateZ(90deg); }
			&-x-12 { transform: translateX(-5%) rotateY(-90deg) rotateZ(90deg); }
			&-x-13 { transform: translateX(-10%) rotateY(-90deg) rotateZ(90deg); }
			&-x-14 { transform: translateX(-15%) rotateY(-90deg) rotateZ(90deg); }
			&-x-15 { transform: translateX(-20%) rotateY(-90deg) rotateZ(90deg); }
			&-x-16 { transform: translateX(-25%) rotateY(-90deg) rotateZ(90deg); }
			&-x-17 { transform: translateX(-30%) rotateY(-90deg) rotateZ(90deg); }
			&-x-18 { transform: translateX(-35%) rotateY(-90deg) rotateZ(90deg); }
			&-x-19 { transform: translateX(-40%) rotateY(-90deg) rotateZ(90deg); }
			&-x-20 { transform: translateX(-45%) rotateY(-90deg) rotateZ(90deg); }
			&-x-21 { transform: translateX(-50%) rotateY(-90deg) rotateZ(90deg); }
			// // y plane
			&-y-1 { transform: translateY(50%) rotateX(90deg); }
			&-y-2 { transform: translateY(45%) rotateX(90deg); }
			&-y-3 { transform: translateY(40%) rotateX(90deg); }
			&-y-4 { transform: translateY(35%) rotateX(90deg); }
			&-y-5 { transform: translateY(30%) rotateX(90deg); }
			&-y-6 { transform: translateY(25%) rotateX(90deg); }
			&-y-7 { transform: translateY(20%) rotateX(90deg); }
			&-y-8 { transform: translateY(15%) rotateX(90deg); }
			&-y-9 { transform: translateY(10%) rotateX(90deg); }
			&-y-10 { transform: translateY(5%) rotateX(90deg); }
			&-y-11 { transform: translateY(0%) rotateX(90deg); }
			&-y-12 { transform: translateY(-5%) rotateX(90deg); }
			&-y-13 { transform: translateY(-10%) rotateX(90deg); }
			&-y-14 { transform: translateY(-15%) rotateX(90deg); }
			&-y-15 { transform: translateY(-20%) rotateX(90deg); }
			&-y-16 { transform: translateY(-25%) rotateX(90deg); }
			&-y-17 { transform: translateY(-30%) rotateX(90deg); }
			&-y-18 { transform: translateY(-35%) rotateX(90deg); }
			&-y-19 { transform: translateY(-40%) rotateX(90deg); }
			&-y-20 { transform: translateY(-45%) rotateX(90deg); }
			&-y-21 { transform: translateY(-50%) rotateX(90deg); }
			// // z plane
			&-z-1 { transform: rotateX(90deg) translateY(-50%) rotateX(-90deg); }
			&-z-2 { transform: rotateX(90deg) translateY(-45%) rotateX(-90deg); }
			&-z-3 { transform: rotateX(90deg) translateY(-40%) rotateX(-90deg); }
			&-z-4 { transform: rotateX(90deg) translateY(-35%) rotateX(-90deg); }
			&-z-5 { transform: rotateX(90deg) translateY(-30%) rotateX(-90deg); }
			&-z-6 { transform: rotateX(90deg) translateY(-25%) rotateX(-90deg); }
			&-z-7 { transform: rotateX(90deg) translateY(-20%) rotateX(-90deg); }
			&-z-8 { transform: rotateX(90deg) translateY(-15%) rotateX(-90deg); }
			&-z-9 { transform: rotateX(90deg) translateY(-10%) rotateX(-90deg); }
			&-z-10 { transform: rotateX(90deg) translateY(-5%) rotateX(-90deg); }
			&-z-11 { transform: rotateX(90deg) translateY(0%) rotateX(-90deg); }
			&-z-12 { transform: rotateX(90deg) translateY(5%) rotateX(-90deg); }
			&-z-13 { transform: rotateX(90deg) translateY(10%) rotateX(-90deg); }
			&-z-14 { transform: rotateX(90deg) translateY(15%) rotateX(-90deg); }
			&-z-15 { transform: rotateX(90deg) translateY(20%) rotateX(-90deg); }
			&-z-16 { transform: rotateX(90deg) translateY(25%) rotateX(-90deg); }
			&-z-17 { transform: rotateX(90deg) translateY(30%) rotateX(-90deg); }
			&-z-18 { transform: rotateX(90deg) translateY(35%) rotateX(-90deg); }
			&-z-19 { transform: rotateX(90deg) translateY(40%) rotateX(-90deg); }
			&-z-20 { transform: rotateX(90deg) translateY(45%) rotateX(-90deg); }
			&-z-21 { transform: rotateX(90deg) translateY(50%) rotateX(-90deg); }
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
		.bg-green {
			background: hsla(145, 84%, 73%, 1);
			background: linear-gradient(180deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%);
			background: -moz-linear-gradient(180deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%);
			background: -webkit-linear-gradient(180deg, hsla(145, 84%, 73%, 1) 0%, hsla(150, 61%, 48%, 1) 100%);
		}
		.bg-gray {
			background: #666;
			&-lighten {
				background: lighten(#666, 15)
			}
		}
		.bg-top {
			background: rgba(173,255,228,0.6);
			background: linear-gradient(225deg, rgba(173,255,228,0.4) 0%, rgba(127,255,212,0.6) 100%);
		}
		.bg-brown {
			background: hsla(29, 50%, 56%, 1);
			background: linear-gradient(135deg, hsla(29, 50%, 56%, 1) 0%, hsla(24, 24%, 57%, 1) 100%);
			background: -moz-linear-gradient(135deg, hsla(29, 50%, 56%, 1) 0%, hsla(24, 24%, 57%, 1) 100%);
			background: -webkit-linear-gradient(135deg, hsla(29, 50%, 56%, 1) 0%, hsla(24, 24%, 57%, 1) 100%);
		}
		.tide-top {
			animation: tide-top 2s ease-in-out alternate infinite;
		}
		.tide-bottom {
			animation: tide-bottom 2s ease-in-out alternate infinite;
		}
		.tide-side {
			animation: tide-side 2s ease-in-out alternate infinite;
		}
		.wave {
			background: #fff;
			animation: wave 4s ease-in-out forwards infinite;
			opacity: 0.6;
			transform: scaleY(0.1);
			@keyframes wave {
				to { opacity: 0; transform: scaleY(6) }
			}
		}
		@keyframes tide-top {
			from {
				transform: rotateX(90deg) translateY(-40%) rotateX(-90deg);
			}
			to {
				transform: rotateX(90deg) translateY(-37%) rotateX(-90deg);
			}
		}
		@keyframes tide-bottom {
			from {
				transform: rotateX(90deg) translateY(-50%) rotateX(-90deg);
			}
			to {
				transform: rotateX(90deg) translateY(-55%) rotateX(-90deg);
			}
		}
		@keyframes tide-side {
			from {
				transform: scaleY(1.0);
			}
			to {
				transform: scaleY(1.6);
			}
		}
		// .tree {
		// 	left: 50%;
		// 	top: 50%;
		// 	.tree-wrapper {
		// 		transform: translateZ(-90px) rotateX(270deg);
		// 		transform-style: preserve-3d;
		// 		position: relative;
		// 		&-middle {
		// 			transform: translateZ(-82px) rotateX(270deg);
		// 		}
		// 		&-top {
		// 			transform: translateZ(-74px) rotateX(270deg);
		// 		}
		// 	}
		// 	.tree-side {
		// 		transform-style: preserve-3d;
		// 		transform-origin: 50% 0;
		// 		position: absolute;
		// 		border-right: 8px solid transparent;
		// 		border-left: 8px solid transparent;
		// 		&-1 {
		// 			border-bottom: 20px solid hsla(100, 40%, 56%, 1);
		// 			transform: rotateY(90deg) rotateX(23deg);
		// 		}
		// 		&-2 {
		// 			border-bottom: 20px solid hsla(100, 40%, 56%, 1);
		// 			transform: rotateY(180deg) rotateX(23deg);
		// 		}
		// 		&-3 {
		// 			border-bottom: 20px solid hsla(80, 40%, 56%, 1);
		// 			transform: rotateY(270deg) rotateX(23deg);
		// 		}
		// 		&-4 {
		// 			border-bottom: 20px solid hsla(80, 40%, 56%, 1);
		// 			transform: rotateY(360deg) rotateX(23deg);
		// 		}
		// 	}
		// }
	}
</style>