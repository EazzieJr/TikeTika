<template>
	<div class="Events">
		<header>
			<form @submit.prevent="submit" action="">
				<div class="Destination">
					<div class="Input">
						<span>
							From Where?
						</span>

						<input type="text" placeholder="Jo' Burg">
					</div>
				</div>

				<div class="Date">
					<div class="Inputs">
						<div class="Input">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M29.2399 9.01318L24.7465 27.0532C24.4265 28.3999 23.2265 29.3332 21.8399 29.3332H4.31985C2.30651 29.3332 0.866535 27.3598 1.46653 25.4264L7.07986 7.3999C7.46652 6.14657 8.62654 5.27979 9.93321 5.27979H26.3332C27.5999 5.27979 28.6532 6.05312 29.0932 7.11979C29.3465 7.69312 29.3999 8.34652 29.2399 9.01318Z"
									stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10" />
								<path d="M21.333 29.3333H27.7063C29.4263 29.3333 30.773 27.88 30.653 26.16L29.333 8" stroke="#4F4F4F"
									stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M12.9062 8.50651L14.2929 2.74658" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
									stroke-linecap="round" stroke-linejoin="round" />
								<path d="M21.8398 8.52002L23.0932 2.7334" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
									stroke-linecap="round" stroke-linejoin="round" />
								<path d="M10.2666 16H20.9333" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
									stroke-linecap="round" stroke-linejoin="round" />
								<path d="M8.93359 21.3335H19.6003" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
									stroke-linecap="round" stroke-linejoin="round" />
							</svg>

							<div class="Cont">
								<span>
									Check Date
								</span>

								<input type="date" v-model="trip.date.start">
							</div>
						</div>
					</div>
				</div>

				<div class="Search">
					<button submit>
						Search
					</button>
				</div>
			</form>
		</header>

		<section class="constraint">
			<div class="Results">
				<EventResult v-for="(data, index) in events" :key="index" :data="data" />
			</div>

			<button class="More disabled:!bg-opacity-50" disabled>
				Show more Results
			</button>
		</section>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route }) {
		const { region } = route.query

		try {
			const response = await $axios.$post('search/?type=event', {
				region
			})
			console.log(response)

			if (response.events.length === 0) {
				return {
					events: []
				}
			}

			return {
				events: response.events
			}
		} catch (error) {
			console.log(error.message)
		}
	},

	data() {
		return {
			trip: {
				date: {
					start: '2023-12-12',
					end: '2023-12-12',
				}
			},
		}
	},

	async mounted() {
		// if (response.events.length === 0) {
		// 	return {
		// 		events: []
		// 	}
		// }

		console.log(this.events)
	}
}
</script>

<style lang="postcss" scoped>
.Events {
	@apply pb-12 lg:pb-24 bg-[#FAFAFA];

	header {
		@apply md:py-8 bg-[#0A0A0A] px-5;

		form {
			@apply w-full hidden md:flex justify-center items-center md:gap-x-4 max-w-[1048px] mx-auto;

			.Destination,
			.Date {
				.Input {
					@apply space-y-2 bg-white rounded overflow-hidden;

					span {
						@apply block text-[#646464] font-bold text-[8px] lg:text-xs !leading-[125%];
					}

					input {
						@apply text-[#1D1D1D] font-bold lg:font-medium text-lg !leading-[133.33%] pb-1 md:pb-0
					}
				}
			}

			.Destination {
				@apply relative;

				.Input {
					@apply py-2 lg:py-3 px-4 lg:px-6;
				}

				.Swap {
					@apply absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2;

					svg {
						@apply w-12
					}
				}
			}

			.Date {
				@apply w-full bg-white py-2 lg:py-3 px-4 flex items-start justify-normal space-x-2 mt-4 md:mt-0 relative rounded;

				svg {
					@apply w-5 h-5 lg:w-8 shrink-0
				}

				.Inputs {
					@apply w-full overflow-hidden grid grid-cols-2;

					.Input {
						@apply rounded-none flex justify-start items-start !space-x-3;

						&:nth-child(1) {
							@apply border-dotted border-r-[0.5px] border-[#8E8E8E];
						}

						svg {
							@apply w-6 xl:w-8 h-6 xl:h-8 shrink-0
						}

						.Cont {
							@apply space-y-2 !m-0;

							input {
								@apply !w-fit;

								&::-webkit-calendar-picker-indicator {
									@apply hidden
								}
							}
						}
					}
				}
			}

			.Search {
				@apply w-fit;

				button {
					@apply w-full md:w-fit text-sm lg:text-base xl:text-lg font-bold text-white !leading-[100%] py-5 lg:py-6 px-10 lg:px-16 rounded bg-primary
				}
			}
		}
	}

	section {
		.Results {
			@apply py-12 lg:py-14 xl:py-16 grid md:grid-cols-2 gap-6 lg:gap-y-8;
		}

		.More {
			@apply block mx-auto w-full max-w-[500px] py-4 lg:py-5 xl:py-6 rounded bg-primary text-white font-bold !leading-[100%] text-sm lg:text-base xl:text-lg
		}
	}
}
</style>