<template>
	<div>
		<label v-for="(option, index) in filterOptions" :key="index">
			<input type="checkbox" :class="option.class" :data-filter="option.filter" :data-value="option.value"
				@change="handleCheckboxChange" />
			{{ option.label }}
		</label>

		<div id="item-list">
			<div v-for="(item, index) in filteredItems" :key="index">
				{{ item.name }} - {{ item.color }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			filterOptions: [
				{ label: 'Electronics', filter: 'category', value: 'electronics', class: 'filter-checkbox' },
				{ label: 'Clothing', filter: 'category', value: 'clothing', class: 'filter-checkbox' },
				{ label: 'Red', filter: 'color', value: 'red', class: 'filter-checkbox' },
				{ label: 'Blue', filter: 'color', value: 'blue', class: 'filter-checkbox' },
			],
			items: [
				{ name: 'Item 1', category: 'electronics', color: 'red' },
				{ name: 'Item 2', category: 'clothing', color: 'blue' },
				{ name: 'Item 3', category: 'electronics', color: 'blue' },
				{ name: 'Item 4', category: 'clothing', color: 'red' },
			],
			selectedFilters: {},
		};
	},
	computed: {
		filteredItems() {
			return this.items.filter((item) => {
				return Object.keys(this.selectedFilters).every((filter) => {
					const itemValue = item[filter];
					return !this.selectedFilters[filter] || itemValue === this.selectedFilters[filter];
				});
			});
		},
	},
	methods: {
		handleCheckboxChange() {
			this.selectedFilters = {};
			this.filterOptions.forEach((option) => {
				const value = option.value;
				const filter = option.filter;
				const checkbox = document.querySelector(`input[data-value="${value}"][data-filter="${filter}"]`);
				this.selectedFilters[filter] = checkbox.checked ? value : null;
			});
		},
	},
};
</script>

<style scoped>
/* Add some basic styling for demonstration purposes */
label {
	display: block;
}
</style>
