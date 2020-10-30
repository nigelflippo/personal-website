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
			mobileInteractionParticle: null,
			animationFrame: undefined,
			width: window.innerWidth || document.documentElement.clientWidth,
			height: window.outerHeight || document.documentElement.clientHeight
		}
	},
	mounted () {
		this.drawChart()
	},
	methods: {
		setColorSpectrum (amount) {
			// const hueDelta = Math.trunc(360 / amount)
			const getHslaColor = (hue, saturation, lightness, alpha) => {
				return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
			}
			for (let i = 0; i < amount; i++) {
				// const hue = i * hueDelta
				const hue = Math.floor(i / amount * 100) + 100 
				const saturation = 100
				const lightness = 50
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
			this.width = window.innerWidth || document.documentElement.clientWidth
			this.height = window.outerHeight || document.documentElement.clientHeight
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
			const onTouchMove = e => {
				if (!this.interactionParticle) {
					createInteractionParticle()
				}
				this.interactionParticle.x = e.changedTouches[0].clientX
				this.interactionParticle.y = e.changedTouches[0].clientY
			}
			const onTouchEnd = () => {
				removeInteractionParticle()
			}
			const onMouseDown = () => {
				this.mobileInteractionParticle = initParticle(this.interactionParticle.x, this.interactionParticle.y, true)
				this.particles.push(this.mobileInteractionParticle)
				// start mobile particle removal countdown
			}

			canvas.addEventListener('mousemove', onMouseMove)
			canvas.addEventListener('mouseout', removeInteractionParticle)
			canvas.addEventListener('touchmove', onTouchMove)
			canvas.addEventListener('touchend', onTouchEnd)
			canvas.addEventListener('mousedown', onMouseDown)
			canvas.addEventListener('mouseup', removeInteractionParticle)

			const getLimitedRandom = function(min, max, roundToInteger) {
				let number = Math.random() * (max - min) + min
				if (roundToInteger) {
					number = Math.round(number)
				}
				return number
			}

			const initParticle = (xCoord, yCoord, isActive) => {
				return {
					active: isActive || false,
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

					let lineWidth = 6
					let coords = {
						from: { x: 0, y: 0 },
						to: { x: 0, y: this.height }
					}
					// if (this.width < 576) {
					// 	lineWidth = 8
					// 	coords.from.x = 0
					// 	coords.from.y = this.height
					// 	coords.to.x = this.width
					// 	coords.to.y = this.height
					// }
					ctx.beginPath()
					ctx.strokeStyle = this.currColor
					ctx.lineWidth = lineWidth
					ctx.moveTo(coords.from.x, coords.from.y)
					ctx.lineTo(coords.to.x, coords.to.y)
					// ctx.moveTo(0, 0)
					// ctx.lineTo(this.width, 0)
					ctx.stroke()
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
							let lineColor = options.lineColor
							if (distance < options.lineDistance) {
								const color = this.currColor
								if (this.interactionParticle || this.mobileInteractionParticle) {
									if (p2 === this.interactionParticle || p2 === this.mobileInteractionParticle) {
										lineColor = color
										p1.active = true
									}
									if (p1 === this.interactionParticle || p1 === this.mobileInteractionParticle) {
										lineColor = color
										p2.active = true
									}
									if (p1.active && !p2.active) {
										p2.active = true
										lineColor = color
									} else if (!p1.active && p2.active) {
										p1.active = true
										lineColor = color
									} else if (p1.active && p2.active) {
										lineColor = color
									}
								} else {
									p1.active = false
									p2.active = false
									lineColor = options.lineColor
								}
								ctx.beginPath()
								ctx.strokeStyle = lineColor
								ctx.globalAlpha = (options.lineDistance - distance) / options.lineDistance * p1.opacity * p2.opacity
								ctx.lineWidth = 1
								ctx.moveTo(p1.x, p1.y)
								ctx.lineTo(p2.x, p2.y)
								ctx.stroke()
							} else {
								if (p1 === this.interactionParticle || p1 === this.mobileInteractionParticle) {
									p2.active = false
								}
								if (p2 === this.interactionParticle || p2 === this.mobileInteractionParticle) {
									p1.active = false
								}
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