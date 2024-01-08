<template>
	<div class="DropdownItem" @click="click">
		<slot></slot>
	</div>
</template>

<script>
export default {
	methods: {
		click() {
			this.$emit('click')
		}
	}
}
</script>

<style lang="postcss" scoped>
.DropdownItem {
	@apply p-2.5 cursor-pointer text-sm xl:text-base !leading-[150%] capitalize;
}
</style>