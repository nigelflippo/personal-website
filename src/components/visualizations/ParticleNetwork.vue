<template>
	<canvas id="particle" :style="`width: ${width}px; height: ${height}px;`"></canvas>
</template>
<script>

export default {
	created () {
		this.setColorSpectrum(100)
		window.addEventListener('resize', this.onResize)
	},
	data () {
		return {
			colorSpectrum: [],
			canvas: undefined,
			density: 20000,
			counter: 0,
			colorCounter: 0,
			interval: null,
			colorInterval: null,
			particles: [],
			interactionParticle: null,
			animationFrame: undefined,
			width: undefined,
			height: undefined
		}
	},
	mounted () {
		this.drawChart()
	},
	methods: {
		setChartRect () {
			let width = window.innerWidth || document.documentElement.clientWidth
			let height = 600
			this.width = width
			this.height = height
		},
		setColorSpectrum (amount) {
			const getHslaColor = (hue, saturation, lightness, alpha) => {
				return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
			}
			for (let i = 0; i < amount; i++) {
				const hue = Math.floor(i / amount * 200) + 140
				const saturation = 70
				const lightness = 70
				const alpha = 1.0
				this.colorSpectrum.push(getHslaColor(hue, saturation, lightness, alpha))
			}
			this.colorSpectrum = [...this.colorSpectrum, ...this.colorSpectrum.reverse()]
			this.colorInterval = setInterval(() => {
				this.currColor = this.colorSpectrum[this.colorCounter]
				this.colorCounter = (this.colorCounter + 1) % this.colorSpectrum.length
			}, 100)
		},
		onResize () {
			this.setChartRect()
			const scale = window.devicePixelRatio
			const canvas = document.getElementById('particle')
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
				lineColor: '#999',
				particleColor: '#999',
				opacity: 1
			}
			this.onResize()
			const canvas = document.querySelector('canvas')
			this.canvas = canvas
			const ctx = canvas.getContext('2d')

			const createInteractionParticle = e => {
				this.interactionParticle = initParticle(e.offsetX, e.offsetY)
				this.interactionParticle.velocity = {
					x: 0,
					y: 0
				}
				this.interactionParticle.color = this.currColor
				this.interactionParticle.active = true
				this.particles.push(this.interactionParticle)
			}
			const removeInteractionParticle = () => {
				const index = this.particles.indexOf(this.interactionParticle)
				if (index > -1) {
					this.interactionParticle = null
					this.particles.splice(index, 1)
				}
			}
			const onMouseMove = e => {
				if (!this.interactionParticle) {
					createInteractionParticle(e)
				}
				this.interactionParticle.x = e.offsetX
				this.interactionParticle.y = e.offsetY
			}
			const onMouseUp = () => {
				this.isMouseDown = false
				removeInteractionParticle()
			}
			const onMouseDown = () => {
				this.isMouseDown = true
				if (this.isMouseDown) {
					const particle = initParticle(this.interactionParticle.x, this.interactionParticle.y, true)
					this.particles.push(particle)
				}
			}

			canvas.addEventListener('mousemove', onMouseMove)
			canvas.addEventListener('mouseout', removeInteractionParticle)
			canvas.addEventListener('mousedown', onMouseDown)
			canvas.addEventListener('mouseup', onMouseUp)

			const getLimitedRandom = function(min, max, roundToInteger) {
				let number = Math.random() * (max - min) + min
				if (roundToInteger) {
					number = Math.round(number)
				}
				return number
			}

			const initParticle = (xCoord, yCoord) => {
				return {
					color: options.particleColor,
					radius: getLimitedRandom(1.5, 2.5),
					opacity: 0,
					x: xCoord || Math.random() * canvas.width,
					y: yCoord || Math.random() * canvas.height,
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
			
			const updateParticle = (p) => {
				p.opacity < 1
					? p.opacity += 0.05
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
					ctx.clearRect(0, 0, this.width, this.height)
					ctx.globalAlpha = 1
					for (let i = 0; i < this.particles.length; i++) {
						for (let j = this.particles.length - 1; j > i; j--) {
							const p1 = this.particles[i]
							const p2 = this.particles[j]
							const dx = p1.x - p2.x
							const dy = p1.y - p2.y
							const distance = Math.sqrt(
								Math.pow(dx, 2) +
								Math.pow(dy, 2)
							)
							let lineColor = this.currColor
							if (distance < options.lineDistance) {
								ctx.beginPath()
								ctx.strokeStyle = lineColor
								ctx.globalAlpha = (options.lineDistance - distance) / options.lineDistance * p1.opacity * p2.opacity
								ctx.lineWidth = 1
								ctx.moveTo(p1.x, p1.y)
								ctx.lineTo(p2.x, p2.y)
								ctx.stroke()
							}
						}
					}
	
					this.particles.forEach(particle => {
						updateParticle(particle)
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