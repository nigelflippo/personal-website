<template>
	<div class="loader-container">
		<div class="loader"></div>
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
		height: 100%;
		width: 100%;
		background-color: rgba(24,24,24,1);
		align-items: center;
		z-index: -102;
		position: relative;
		@function hslColor($hue: 0, $saturation: 70%, $lightness: 70%) {
			@return hsl($hue, $saturation, $lightness);
		}
		.loader {
			box-shadow: 0px 0px 0px 0px #fff;
			animation: shrink 0.1s ease 2s;
			$base-size: 160px;
			top: 50%;
			left: 50%;
			position: relative;
			border-radius: 50%;
			border: 8px solid;
			height: $base-size;
			width: $base-size;
			margin-left: -($base-size / 2);
			margin-top: -($base-size / 2);
			border-color: #333;
			&:before {
				content: "";
				top: 50%;
				left: 50%;
				position: absolute;
				border-radius: 50%;
				border: 8px solid;
				border-color: #f8f8f8 transparent transparent;
				height: $base-size;
				width: $base-size;
				margin-left: -($base-size / 2);
				margin-top: -($base-size / 2);
				animation: spinny 1s ease-in-out forwards alternate;
			}
			
		}
		@keyframes shrink {
			to { box-shadow: 1px 1px 10px 10px #fff ; }
		}
		@keyframes spinny {
			to { transform: rotate(720deg) }
		}
	}
</style>