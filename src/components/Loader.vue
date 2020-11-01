<template>
	<div class="loader-container">
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
		overflow: hidden;
		height: 100vh;
		width: 100%;
		background-color: rgba(24,24,24,1);
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		z-index: 102;
		.bar {
			border-radius: 4px;
			height: 4px;
			width: 60%;
			background-color: #666;
			overflow: hidden;
			.bar-overlay {
				border-radius: 4px;
				height: 100%;
				width: 100%;
				background-color: #f1f1f1;
				transform: translateX(-160%);
				animation: loading 1.2s cubic-bezier(.17,.67,.83,.67) forwards;
			}
			@keyframes loading {
				to { transform: translateX(0); }
			}
		}
	}
</style>