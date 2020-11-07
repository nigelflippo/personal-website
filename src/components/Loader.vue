<template>
	<div class="loader-container">
		<!-- <div class="logo">\N\</div> -->
		<div class="bar">
			<div class="bar-overlay"></div>
		</div>
	</div>
</template>
<script>
export default {
	computed: {
		path () {
			return this.$route.path
		}
	}
}
</script>
<style lang="scss">
	.loader-container {
		position: fixed;
		overflow: hidden;
		height: 100vh;
		width: 100%;
		background-color: rgba(24,24,24,1);
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		z-index: -102;
		.logo {
			font-family: 'Blender Pro';
			font-size: 60px;
			color: #f1f1f1;
		}
		.bar {
			// border-radius: 4px;
			height: 5px;
			width: 60%;
			background-color: #666;
			overflow: hidden;
			position: relative;
			.bar-overlay {
				position: absolute;
				// border-radius: 4px;
				height: 100%;
				width: 100%;
				background-color: #f1f1f1;
				// background: hsla(175, 79%, 63%, 1);
				// background: linear-gradient(135deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
				// background: -moz-linear-gradient(135deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
				// background: -webkit-linear-gradient(135deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
				transform: translateX(-160%);
				animation: loading 1.2s cubic-bezier(.17,.67,.83,.67) forwards;
			}
			@keyframes loading {
				to { transform: translateX(0); }
			}
		}
		@media (max-width: 576px) {
			.logo {
				font-size: 50px;
			}
			.bar {
				width: 70%;
			}
		}
	}
</style>