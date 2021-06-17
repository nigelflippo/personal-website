<template>
	<div class="nav-container">
		<div class="menu-container" @click="handleToggle" >
			<div class="hamburger" :class="{ 'toggled': isToggled }">
				<div class="bar bar-one"></div>
				<div class="bar bar-two"></div>
				<div class="bar bar-three"></div>
			</div>
		</div>
		<div class="overlay" :class="{ 'toggled': isToggled }">
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
		<div class="three-dot">
		</div>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
	computed: {
		...mapGetters([
			'isToggled'
		])
	},
	data () {
		return {
			sections: [
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
		...mapActions([
			'setIsToggled'
		]),
		handleToggle () {
			this.toggled = !this.toggled
			this.setIsToggled(this.toggled)
		},
		handleLink (hash) {
			this.handleToggle()
			window.location.hash = `#${hash}`
		}
	}
}
</script>
<style lang="scss">
	.nav-container {
		position: relative;
	}
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
			font-size: 64px;
			color: #f1f1f1;
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
				font-size: 52px;
				list-style: none;
				color: #f1f1f1;
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
		@media screen and (max-width: 900px) {
			.logo {
				top: 20px;
				font-size: 38px;
			}
			.nav .nav-group {
				font-size: 38px;
				li {
					padding: 2px 0px;
				}
			}
		}
	}
	.menu-container {
		z-index: 101;
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