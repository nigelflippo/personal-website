<template>
	<transition name="line" mode="out-in">
		<!-- <div class="line-container" @click="handleTogglePlay" :key="counter"> -->
		<div class="line-container" :key="counter">
			<div v-for="(n, index) in 100" :key="index" class="line-wrapper">
				<div :class="`line line-${n}`"></div>
			</div>
		</div>
	</transition>
</template>
<script>
export default {
	computed: {
		// playState () {
		// 	return this.isPlaying ? 'running' : 'paused'
		// },
		numberOfElements () {
			return Math.ceil(this.width / 10)
		}
	},
	created () {
		// this.onResize()
		// window.addEventListener('resize', this.onResize)
		// document.body.style.setProperty('--play-state', this.playState)
	},
	// beforeDestroy () {
	// 	this.removeEventListeners()
	// },
	data () {
		return {
			width: undefined,
			// pos: 0,
			// interval: null,
			counter: 0,
			isPlaying: true
		}
	},
	methods: {
		// onResize () {
		// 	this.resetAnimation()
		// 	const width = window.innerWidth > 700
		// 		? window.innerWidth / 2
		// 		: window.innerWidth
		// 	this.width = width
		// },
		// removeEventListeners () {
		// 	const el = document.querySelector('.line-container')
		// 	el.removeEventListener('mouseover', this.handleMouseOver)
		// 	el.removeEventListener('mouseout', this.handleMouseOut)
		// },
		// bindEventListeners () {
		// 	const el = document.querySelector('.line-container')
		// 	el.addEventListener('mouseover', this.handleMouseOver)
		// 	el.addEventListener('mouseout', this.handleMouseOut)
		// },
		// handleMouseOver (event) {
		// 	document.querySelectorAll('.line-wrapper').forEach(el => {
		// 		const x = el.getBoundingClientRect() && el.getBoundingClientRect().x
		// 		const dx = Math.abs(event.target.getBoundingClientRect().x - x)
		// 		const dmax = 100
		// 		if (dx < dmax) {
		// 			if (dx !== 0) {
		// 				const scale = (dmax / dx) ** (1 / 6)
		// 				el.style.transform = `scale(${scale})`
		// 			} else {
		// 				el.style.transform = `scale(1.5)`
		// 			}
		// 		}
		// 	})
		// },
		// handleMouseOut () {
		// 	document.querySelectorAll('.line-wrapper').forEach(el => {
		// 		el.style.transform = 'scale(1)'
		// 	})
		// },
		// handleTogglePlay () {
		// 	this.isPlaying = !this.isPlaying
		// 	if (!this.isPlaying) {
		// 		this.resetAnimation()
		// 	}
		// },
		resetAnimation () {
			// clearInterval(this.interval)
			this.counter++
		}
	},
	watch: {
		// isPlaying () {
		// 	document.body.style.setProperty('--play-state', this.playState)
		// 	// if (window.innerWidth < 900) {
		// 	// 	this.interval = setInterval(() => {
		// 	// 		document.querySelectorAll('.line-wrapper').forEach(el => {
		// 	// 			const x = el.getBoundingClientRect() && el.getBoundingClientRect().x
		// 	// 			const dx = Math.abs(this.pos - x)
		// 	// 			const dmax = 100
		// 	// 			if (dx < dmax) {
		// 	// 				if (dx !== 0) {
		// 	// 					const scale = (dmax / dx) ** (1 / 4)
		// 	// 					el.style.transform = `scale(${scale})`
		// 	// 				} else {
		// 	// 					el.style.transform = `scale(2)`
		// 	// 				}
		// 	// 			}
		// 	// 		})
		// 	// 		this.pos = (this.pos + 10) % 500
		// 	// 	}, 100)
		// 	// }
		// 	// this.bindEventListeners()
		// }
	}
}
</script>
<style lang="scss">
	$easing: cubic-bezier(0.37, 0, 0.63, 1);
	$speed: 0.6s;
	$delayStagger: 0.1s;
	.line-enter-active, .line-leave-active {
		transition: opacity 0.3s ease;
	}
	.line-enter {
		opacity: 0;
	}
	.line-leave-to {
		opacity: 0;
	}
	.line-container {
		// --play-state-hover: paused;
		// &:hover {
		// 	--play-state-hover: running;
		// }
		cursor: pointer;
		// top: -50px;
		left: -50px;
		overflow: hidden;
		height: 100%;
		width: 100%;
		position: absolute;
		display: grid;
		grid-template-columns: 1;
		grid-template-rows: repeat(100, 1fr);
		.line-wrapper {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.4s linear;
			// &:hover {
			// 	~ div {
			// 		transform: scale(1.3);
			// 		@media (max-width: 900px) {
			// 		transform: scale(1.0);
						
			// 		}
			// 	}
			// }
			// @media (max-width: 900px) {
			// 	@keyframes sine {
			// 		from { transform: scale(1); }
			// 		to { transform: scale(1.4); }
			// 	}
			// 	animation: sine 1s $easing infinite forwards alternate;
			// }
			.line {
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