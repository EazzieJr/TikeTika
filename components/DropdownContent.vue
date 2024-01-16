<template>
	<transition name="dropdown-content">
		<div v-if="active"
			class="origin-top-right absolute right-0 left-0 mt-2 w-full bg-white rounded pt-4 pb-8">
			<slot />
		</div>
	</transition>
</template>

<script>
export default {
	name: "DropdownContent",
	inject: ["sharedState"],
	computed: {
		active() {
			return this.sharedState.active;
		}
	}
};
</script>

<style>
.dropdown-content {
	box-shadow: 0px 1px 3px 0px rgba(50, 50, 71, 0.10), 0px 0px 1px 0px rgba(12, 26, 75, 0.20);
}

.dropdown-content-enter-active,
.dropdown-content-leave-active {
	transition: all 0.2s;
}

.dropdown-content-enter,
.dropdown-content-leave-to {
	opacity: 0;
	transform: translateY(-5px);
}
</style>
