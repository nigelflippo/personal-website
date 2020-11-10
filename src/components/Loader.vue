<template>
	<div class="loader-container">
		<!-- <div v-for="(n, index) of 10" :class="`loader loader-${n}`" :key="index"></div> -->
		<div class="loader"></div>
		
		<!-- <div class="bar">
			<div class="bar-overlay"></div>
		</div> -->
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
		// display: flex;
		// justify-content: center;
		// flex-direction: column;
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
				// $color: hslColor($hue: $i * 36);
				border-color: #f8f8f8 transparent transparent;
				height: $base-size;
				width: $base-size;
				margin-left: -($base-size / 2);
				margin-top: -($base-size / 2);
				animation: spinny 1s ease-in-out forwards alternate;
			}
			
			// @include lines($i);
			// @for $i from 1 through 2 {
			// 	&-#{$i} {
			// 		$color: hslColor($hue: $i * 36);
			// 		border-color: #f8f8f8 transparent transparent;
			// 		height: #{$i * $base-size};
			// 		width: #{$i * $base-size};
			// 		margin-left: -#{$i * ($base-size / 2)};
			// 		margin-top: -#{$i * ($base-size / 2)};
			// 		@include lines($i);
			// 	}
			// }
		}
		// .loader {
		// 	top: 50%;
		// 	left: 50%;
		// 	position: absolute;
		// 	border: 3px solid;
		// 	width: 200px;
		// 	height: 200px;
		// 	margin-left: -100px;
		// 	margin-top: -100px;
		// 	border-radius: 50%;
		// 	animation: spin 1s linear infinite;
		// 	border-color: #f8f8f8 transparent transparent;
		// }
		// .loader-2 {
		// 	top: 50%;
		// 	left: 50%;
		// 	position: absolute;
		// 	border: 3px solid;
		// 	width: 60px;
		// 	height: 60px;
		// 	margin-left: -30px;
		// 	margin-top: -30px;
		// 	border-radius: 50%;
		// 	animation: spin 3s linear infinite;
		// 	border-color: #f8f8f8 transparent transparent;
		// }
		@keyframes shrink {
			to { box-shadow: 1px 1px 10px 10px #fff ; }
		}
		@keyframes spinny {
			to { transform: rotate(720deg) }
		}
		// .logo {
		// 	font-family: 'Blender Pro';
		// 	font-size: 60px;
		// 	color: #f1f1f1;
		// }
		// .bar {
		// 	// border-radius: 4px;
		// 	height: 5px;
		// 	width: 60%;
		// 	background-color: #666;
		// 	overflow: hidden;
		// 	position: relative;
		// 	.bar-overlay {
		// 		position: absolute;
		// 		// border-radius: 4px;
		// 		height: 100%;
		// 		width: 100%;
		// 		background-color: #f1f1f1;
		// 		// background: hsla(175, 79%, 63%, 1);
		// 		// background: linear-gradient(135deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
		// 		// background: -moz-linear-gradient(135deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
		// 		// background: -webkit-linear-gradient(135deg, hsla(175, 79%, 63%, 1) 0%, hsla(82, 96%, 57%, 1) 100%);
		// 		transform: translateX(-160%);
		// 		animation: loading 1.2s cubic-bezier(.17,.67,.83,.67) forwards;
		// 	}
		// 	@keyframes loading {
		// 		to { transform: translateX(0); }
		// 	}
		// }
		// @media (max-width: 576px) {
		// 	.logo {
		// 		font-size: 50px;
		// 	}
		// 	.bar {
		// 		width: 70%;
		// 	}
		// }
	}
</style>