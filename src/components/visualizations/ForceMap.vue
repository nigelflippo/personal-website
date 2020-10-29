<template>
	<canvas id="chart" :style="`width: ${width}px; height: ${height}px`"></canvas>
</template>
<script>
import * as d3 from 'd3'
import elegansData from '@/data/elegans.json'

export default {
	created () {
		window.addEventListener('orientationchange', this.onOrientationChange)
	},
	data () {
		return {
			chartRect: undefined,
			width: undefined,
			height: undefined
		}
	},
	mounted () {
		this.drawChart()
	},
	methods: {
		onOrientationChange () {
			this.drawChart()
		},
		drawChart () {
			const data = elegansData
			const links = data.links.map(d => {
				return Object.create(d)
			})
			const nodes = data.nodes.map(d => {
				return Object.create(d)
			})
			const canvas = document.getElementById('chart')
			const context = canvas.getContext('2d')
			const simulation = d3.forceSimulation(nodes)
				.force('link', d3.forceLink(links).id(d => d.id))
				.force('charge', d3.forceManyBody())

			const drawLink = (d) => {
				context.moveTo(d.source.x, d.source.y)
				context.lineTo(d.target.x, d.target.y)
			}
			const drawNode = (d) => {
				context.moveTo(d.x + 2, d.y)
				context.arc(d.x, d.y, 2, 0, 2 * Math.PI)
			}
			const handleTick = () => {
				context.clearRect(0, 0, this.chartRect, this.chartRect)
				context.beginPath()
				links.forEach(d => drawLink(d))
				context.strokeStyle = '#bababa'
				context.stroke()
				context.beginPath()
				nodes.forEach(d => drawNode(d))
				context.fillStyle = '#333'
				context.fill()
				context.stroke()
			}
			simulation.on('tick', handleTick)

			const dragsubject = e => simulation.find(e.x, e.y, 100)
			const dragStarted = e => {
				if (!e.active) {
					simulation.alphaTarget(0.3).restart()
					e.subject.fx = e.subject.x
					e.subject.fy = e.subject.y
				}
			}
			const dragged = e => {
				e.subject.fx = e.x
				e.subject.fy = e.y
			}
			const dragStopped = e =>{
				if (!e.active) {
					simulation.alphaTarget(0)
					e.subject.fx = null
					e.subject.fy = null
				}
			}

			const resize = () => {
				let PIXEL_RATIO = window.devicePixelRatio
				let chartRect = (window.innerWidth || document.documentElement.clientWidth) / 2
				if (window.innerWidth < 576) {
					chartRect = window.innerWidth || document.documentElement.clientWidth
				}
				this.chartRect = chartRect
				this.width = chartRect
				this.height = chartRect
				canvas.width = Math.floor(this.width * PIXEL_RATIO)
				canvas.height = Math.floor(this.height * PIXEL_RATIO)
				context.scale(PIXEL_RATIO, PIXEL_RATIO)
				simulation.force('center', d3.forceCenter(this.width / 2, this.height / 2))
				simulation.alphaTarget(0.3).restart()
			}
			resize()
			d3.select(window)
				.on('resize', resize)
			return d3.select(canvas).call(d3.drag()
				.container(canvas)
				.subject(dragsubject)
				.on('start', dragStarted)
				.on('drag', dragged)
				.on('end', dragStopped))
		}
	}
}
</script>
