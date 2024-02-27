<template>
	<div class="Dropdown" v-clickaway="away" :class="customAnchor ? '' : 'relative'">
		<button class="w-full" @click.stop="toggle" type="button">
			<slot name="toggler"></slot>
		</button>

		<slot />
	</div>
</template>

<script>
export default {
	name: 'Dropdown',

	props: {
		name: String,
		label: String,
		customAnchor: Boolean
	},

	provide() {
		return {
			sharedState: this.sharedState,
		};
	},

	data() {
		return {
			sharedState: {
				active: false,
			},
		};
	},

	methods: {
		toggle() {
			this.sharedState.active = !this.sharedState.active;
			this.$emit('toggle', this.sharedState.active); // Emit the 'toggle' event
		},

		away() {
			if (this.sharedState.active) {
				this.sharedState.active = false;
				console.log('Clicked away');
			}
		},
	},
};
</script>

<style lang="postcss" scoped>
.Dropdown {
}
</style>
