<template>
	<div class="Bus">
		<header class="md:end">
			<div class="Search start">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
						stroke="#484848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M22 22L20 20" stroke="#484848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<input type="text" placeholder="Search for a Ticket">
			</div>
		</header>

		<div class="Data">
			.Empty
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: []
		}
	}
}
</script>

<style lang="postcss" scoped>
.Bus {
	@apply mt-8 md:mt-1;
	
	header {
		.Search {
			@apply rounded-lg border border-[#EBEBEB] w-full overflow-hidden pl-4 md:pl-5 xl:pl-6 max-w-[400px];

			input {
				@apply w-full p-4 md:p-5 xl:p-6 leading-[157%] lg:!leading-[133%] text-sm lg:text-base xl:text-lg font-medium text-[#0A0A0A] placeholder:text-secondary
			}
		}
	}
}
</style>