<template>
	<div class="nav-container">
		<div class="menu-container" @click="handleToggle" >
			<div class="hamburger" :class="{ 'toggled': toggled }">
				<div class="bar bar-one"></div>
				<div class="bar bar-two"></div>
				<div class="bar bar-three"></div>
			</div>
		</div>
		<div class="overlay" :class="{ 'toggled': toggled }">
			<div class="logo">\N\</div>
			<nav class="nav">
				<ol class="nav-group">
					<li v-for="({ name, id }, index) in sections" :key="index">
						<a @click.stop="handleLink(id)">
							{{ name }}
						</a>
					</li>
				</ol>
			</nav>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			toggled: false,
			sections: [
				{
					id: 'home',
					name: '00 HOME'
				},
				{
					id: 'hello',
					name: '01 HELLO'
				},
				{
					id: 'who',
					name: '02 WHO'
				},
				{
					id: 'what',
					name: '03 WHAT'
				},
				{
					id: 'why',
					name: '04 WHY'
				}
			]
		}
	},
	methods: {
		handleToggle () {
			this.toggled = !this.toggled
		},
		handleLink () {
			this.handleToggle()
		}
	}
}
</script>
<style lang="scss">
	.overlay {
		z-index: 101;
		position: fixed;
		height: 100vh;
		width: 100%;
		background-color: #1d1d1d;
		transform: translateX(100%);
		transition: transform 0.3s ease;
		.logo {
			left: 50px;
			position: absolute;
			font-size: 72px;
			color: #fff;
		}
		&.toggled {
			transform: translateX(0);
		}
		.nav {
			display: flex;
			height: 100%;
			.nav-group {
				padding: 0;
				margin: auto 50px;
				font-size: 72px;
				list-style: none;
				color: #fff;
				li {
					transition: color 0.3s ease;
					cursor: pointer;
					padding: 6px 0px;
					&:hover {
						color: #666;
					}
				}
			}
		}
		@media screen and (max-width: 576px) {
			.logo {
				top: 20px;
				font-size: 42px;
			}
			.nav .nav-group {
				font-size: 42px;
			}
		}
	}
	.menu-container {
		border-radius: 3px;
		cursor: pointer;
		z-index: 102;
		position: fixed;
		top: 20px;
		right: 20px;
		height: 48px;
		width: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #666468;
		.hamburger {
			height: 28px;
			width: 28px;
			align-items: center;
			justify-content: center;
			display: flex;
			flex-direction: column;
			&.toggled {
				.bar {
					background-color: #333234;
				}
			}
			.bar {
				border-radius: 2px;
				width: 24px;
				height: 3px;
				background-color: #fff;
				&.bar-two {
					margin-top: 6px;
				}
				&.bar-three {
					margin-top: 6px;
				}
			}
		}
	}
</style>