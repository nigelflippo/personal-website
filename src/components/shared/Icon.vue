<template>
	<div v-html="icon" class="icon" :class="`icon-${type}`"></div>
</template>
<script>
export default {
	computed: {
		icon () {
			return require(`../../assets/icon-${this.type}.svg`)
		}
	},
	props: {
		type: {
			type: String,
			required: true
		}
	}
}
</script>