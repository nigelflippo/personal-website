<template>
<nav class="nav-container">
	<div class="menu-container" :class="{ 'toggled': isToggled }">
		<div class="menu-wrapper">
			<ol class="nav-group">
				<li v-for="({ name, id }, index) in sections" :key="index">
					<a @click.stop="handleLink(id)">
						{{ name }}
					</a>
				</li>
			</ol>
			<div class="btn-wrapper" @click="handleToggle">
				<div class="dot dot-1"></div>
				<div class="dot dot-2"></div>
				<div class="dot dot-3"></div>
			</div>
		</div>
	</div>
</nav>
</template>
<script>
export default {
	created () {
		const hash = window.location.hash
		if (hash && hash !== '#/') {
			this.$nextTick(() => {
				const el = document.querySelector(hash).scrollIntoView()
				if (el) {
					el.scrollIntoView()
				}
			})
		}
	},
	data () {
		return {
			isToggled: false,
			sections: [
				{
					id: 'who',
					name: '01'
				},
				{
					id: 'what',
					name: '02'
				},
				{
					id: 'why',
					name: '03'
				},
				{
					id: 'contact',
					name: '04'
				}
			]
		}
	},
	methods: {
		handleToggle () {
			this.isToggled = !this.isToggled
		},
		handleLink (hash) {
			this.handleToggle()
			window.location.hash = ''
			window.location.hash = `#${hash}`
		}
	}
}
</script>
<style lang="scss">
	.menu-container {
		z-index: 101;
		transform: translateX(-198px);
		transition: all 0.3s ease;
		top: 10%;
		position: fixed;
		height: 40px;
		width: 250px;
		background-color: #333;
		border-radius: 4px;
		&.toggled {
			transform: translateX(-40px);
			.menu-wrapper .btn-wrapper .dot {
				&-1 {
					background-color: hsl(10, 80%, 70%);
				}
				&-2 {
					background-color: hsl(90, 80%, 70%);
				}
				&-3 {
					background-color: hsl(160, 80%, 70%);
				}
			}
		}
		.menu-wrapper {
			padding: 0px 10px 0px 60px;
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: space-between;
			.nav-group {
				display: inline-flex;
				align-items: center;
				padding: 0;
				margin: 0;
				height: 100%;
				list-style: none;
				color: #EEF0F2;
				li a {
					font-size: 18px;
					cursor: pointer;
					padding: 0px 6px;
					&:hover {
						color: #666;
					}
				}
			}
			.btn-wrapper {
				cursor: pointer;
				display: flex;
				height: 100%;
				width: 34px;
				justify-content: space-between;
				align-items: center;
				&:hover {
					.dot {
						&-1 {
							background-color: hsl(10, 80%, 70%);
						}
						&-2 {
							background-color: hsl(90, 80%, 70%);
						}
						&-3 {
							background-color: hsl(160, 80%, 70%);
						}
					}
				}
				.dot {
					background-color: #EEF0F2;
					height: 8px;
					width: 8px;
					border-radius: 50%;
					&-1 {
						transition: all 0.3s ease 0.1s;
					}
					&-2 {
						transition: all 0.3s ease 0.2s;
					}
					&-3 {
						transition: all 0.3s ease 0.3s;
					}
				}
			}
		}
	}
</style>