<template>
	<canvas id="particle" :style="`width: ${width}px; height: ${height}px`"></canvas>
</template>
<script>

export default {
	created () {
		window.addEventListener('resize', this.onResize)
	},
	data () {
		return {
			density: 10000,
			counter: 0,
			interval: null,
			particles: [],
			animationFrame: undefined,
			width: window.innerWidth || document.documentElement.clientWidth,
			height: window.innerHeight || document.documentElement.clientHeight
		}
	},
	mounted () {
		this.drawChart()
	},
	methods: {
		onResize () {
			this.width = window.innerWidth || document.documentElement.clientWidth
			this.height = window.innerHeight || document.documentElement.clientHeight
			const scale = window.devicePixelRatio
			const canvas = document.querySelector('canvas')
			const ctx = canvas.getContext('2d')
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			canvas.width = Math.floor(this.width * scale)
			canvas.height = Math.floor(this.height * scale)
			ctx.scale(scale, scale)
		},
		drawChart () {
			const options = {
				velocity: 1,
				density: this.density,
				lineDistance: 200,
				lineColor: '#1d1d1d',
				particleColor: '#1d1d1d',
				opacity: 1
			}
			this.onResize()
			const canvas = document.querySelector('canvas')
			const ctx = canvas.getContext('2d')
			var getLimitedRandom = function(min, max, roundToInteger) {
				var number = Math.random() * (max - min) + min;
				if (roundToInteger) {
					number = Math.round(number);
				}
				return number;
			};
			const initParticle = () => {
				return {
					radius: getLimitedRandom(1.5, 2.5),
					opacity: 0,
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					velocity: {
						x: (Math.random() - 0.5) * options.velocity,
						y: (Math.random() - 0.5) * options.velocity
					}
				}
			}

			const createParticles = (isInit) => {
				const quantity = canvas.width * canvas.height / options.density
				if (isInit) {
					this.particles = []
					clearInterval(this.interval)
					this.interval = setInterval(() => {
						if (this.counter < quantity - 1) {
							this.particles.push(initParticle())
						} else {
							clearInterval(this.interval)
						}
						this.counter++
					}, 150)
				} else {
					for (let i = 0; i < quantity; i++) {
						this.particles.push(initParticle())
					}
				}
			}
			createParticles()

			const drawParticle = (p) => {
				ctx.beginPath()
				ctx.fillStyle = options.particleColor
				ctx.globalAlpha = p.opacity
				ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI)
				ctx.fill()
			}
			
			const updateParticle = (p) => {
				p.opacity < 1
					? p.opacity += 0.01
					: p.opacity = 1
				if (p.x > canvas.width + 100 || p.x < -100) {
					p.velocity.x = -p.velocity.x
				}
				if (p.y > canvas.height + 100 || p.y < -100) {
					p.velocity.y = -p.velocity.y
				}
				p.x += p.velocity.x
				p.y += p.velocity.y
			}

			const updateParticles = () => {
				if (canvas) {
					ctx.clearRect(0, 0, window.innerWidth || document.documentElement.clientWidth, window.innerHeight || document.documentElement.clientHeight)
					ctx.globalAlpha = 1

					for (let i = 0; i < this.particles.length; i++) {
						for (let j = this.particles.length - 1; j > i; j--) {
							const p1 = this.particles[i]
							const p2 = this.particles[j]
							let distance = Math.min(Math.abs(p1.x - p2.x), Math.abs(p1.y - p2.y));
							if (distance > options.lineDistance) {
								continue;
							}
							distance = Math.sqrt(
								Math.pow(p1.x - p2.x, 2) +
								Math.pow(p1.y - p2.y, 2)
							)
							if (distance > options.lineDistance) {
								continue
							}
							ctx.beginPath()
							ctx.strokeStyle = options.lineColor
							ctx.globalAlpha = (options.lineDistance - distance) / options.lineDistance * p1.opacity * p2.opacity
							ctx.lineWidth = 0.5
							ctx.moveTo(p1.x, p1.y)
							ctx.lineTo(p2.x, p2.y)
							ctx.stroke()
						}
					}
	
					this.particles.forEach(particle => {
						updateParticle(particle)
						drawParticle(particle)
					})
					if (options.velocity !== 0) {
						this.animationFrame = requestAnimationFrame(updateParticles)
					}
				} else {
					cancelAnimationFrame(this.animationFrame)
				}
			}
			createParticles(true)
			this.animationFrame = requestAnimationFrame(updateParticles)
		}
	}
}
</script>