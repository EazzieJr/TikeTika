<template>
	<div class="BookHotel">
		<div class="MobileHeader between md:hidden">
			<button class="Sort center" @click="sortModal = true">
				<img src="/svg/sort.svg" alt="">

				<span>
					Sort
				</span>
			</button>

			<button class="Filter center" @click="filterModal = true">
				<img src="/svg/filter.svg" alt="">

				<span>
					filter
				</span>
			</button>
		</div>

		<header>
			<form @submit.prevent="submit" action="">
				<div class="Destination">
					<div class="Input">
						<span>
							{{ $t('To Where') }}?
						</span>

						<input type="text" placeholder="Jo' Burg" v-model="search.origin">
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
									{{ $t('Check in Date') }}
								</span>

								<input type="date" v-model="search.date">
							</div>
						</div>

						<div class="Input">
							<span>
								{{ $t('Check out Date') }}
							</span>

							<input type="date" v-model="search.returnDate">
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

		<section class="ResultsAndFilter">
			<div class="Container">
				<div class="Top hidden md:end">
					<span>
						Sort
					</span>

					<div class="Sorts start">
						<button :class="{ 'active': sort == sortBy }" v-for="sort in sorts" :key="sort" @click="sortBy = sort">
							{{ sort }}
						</button>
					</div>
				</div>

				<div class="Bottom">
					<div class="DesktopFilter">
						<div class="Header between">
							<span>
								Filters
							</span>

							<button class="reset">
								Reset
							</button>
						</div>

						<div class="Filters">
							<div class="Category" v-for="(filter, parentIndex) in filters" :key="filter.title">
								<div class="Top between" @click="filter.toggled = !filter.toggled">
									<span>
										{{ filter.title }}
									</span>

									<svg :class="{ 'rotate-180': filter.toggled }" width="16" height="16" viewBox="0 0 16 16" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M13.2788 5.9668L8.93208 10.3135C8.41875 10.8268 7.57875 10.8268 7.06542 10.3135L2.71875 5.9668"
											stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</div>

								<div class="FilterValues" v-if="filter.toggled">
									<div class="Value start" v-for="(value, index) in filter.values" :key="value.title"
										@click="toggleValue(parentIndex, index)">
										<div class="CheckBox" :class="{ 'selected': value.selected }"></div>

										<span>
											{{ value.title }}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- <div class="Results" v-if="result?.length > 0"> -->
					<div class="Results" >
						<HotelResult />
						<!-- <BusResult v-for="(data, index) in filteredResults" :key="index" :data="data" :date="$route.query.date" /> -->
					</div>

					<!-- <div class="Empty center w-full" v-else>
						<h2 class="text-3xl font-bold grow text-center">
							No Available Hotels.
						</h2>
					</div> -->
				</div>
			</div>
		</section>

		<div class="MobileFilterModal" v-if="filterModal" @click.self="filterModal = false">
			<div class="MobileFilter">
				<span>
					Filters
				</span>

				<div class="Filters">
					<div class="Category" v-for="filter in filters" :key="filter.title">
						<div class="Top between" @click="filter.toggled = !filter.toggled">
							<span>
								{{ filter.title }}
							</span>

							<svg :class="{ 'rotate-180': filter.toggled }" width="16" height="16" viewBox="0 0 16 16" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M13.2788 5.9668L8.93208 10.3135C8.41875 10.8268 7.57875 10.8268 7.06542 10.3135L2.71875 5.9668"
									stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
						</div>

						<div class="FilterValues" v-if="filter.toggled">
							<div class="Value start" v-for="value in filter.values" :key="value.title"
								@click="value.selected = !value.selected">
								<div class="CheckBox" :class="{ 'selected': value.selected }"></div>

								<span>
									{{ value.title }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="MobileSortModal" v-if="sortModal" @click.self="sortModal = false">
			<div class="MobileSort">
				<span>
					Filters
				</span>

				<div class="Filters">
					<div class="Category" v-for="sort in sorts" :key="sort" @click="sortBy = sort">
						<span :class="{ 'active': sort == sortBy }">
							{{ sort }}
						</span>
					</div>
				</div>
			</div>
		</div>

		<!-- <CustomFilter /> -->

		<!-- <div class="inDev">
			Currently In Development
		</div> -->
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
	async asyncData({ $axios, params, route }) {
		const { regionID, checkInDate, checkOutDate } = route.query
		const search = {
			regionID, checkInDate, checkOutDate
		}

		try {
			const data = await $axios.$post(`/search/?type=hotel`, search)
			console.log(data)

			if (data.dount === 0) {
				return {
					result: []
				}
			}

			return {
				result: data.hotels
			}
		} catch (error) {
			console.log(error, error.code)
		}

		// try {
		// 	const response = await $axios.post(`/search/?type=bus`, {
		// 		origin,
		// 		destination,
		// 		date: "2024-02-27"
		// 		//date: formattedDate
		// 	})

		// 	console.log("Response:", response.data.buses)

		// 	if(response.data.buses.length === 0) {
		// 		return {
		// 			result: []
		// 		}
		// 	}

		// 	return {
		// 		result: response.data.buses
		// 	}
		// } catch (error) {
		// 	console.log(error)
		// }
	},

	data() {
		return {
			search: {
				origin: "",
				destination: "",
				start: '2023-12-12',
				end: '2023-12-12',
			},

			tripTypes: [
				"One Way",
				"Round Trip"
			],

			classes: [
				"Semi Luxury",
				"VIP"
			],

			filters: [
				{
					title: "Budget",
					values: [
						{
							title: "Tahmeed Express",
							selected: false
						},
						{
							title: "Dar Express",
							selected: false
						},
						{
							title: "BM Coach",
							selected: false
						},
						{
							title: "Kilimajaro Express",
							selected: false
						},
						{
							title: "Abood Luxury",
							selected: false
						},
					],
					toggled: false
				},

				{
					title: "Property type",
					values: [
						{
							title: "Normal",
							selected: false
						},
						{
							title: "Semi Luxury",
							selected: false
						},
						{
							title: "Luxury",
							selected: false
						},
						{
							title: "VIP",
							selected: false
						},
						{
							title: "Abood Luxury",
							selected: false
						},
					],
					toggled: false
				},

				{
					title: "Facilities",
					values: [
						{
							title: "9:00AM - 12:00PM",
							selected: false
						},
						{
							title: "1:00pm - 4:00PM",
							selected: false
						},
						{
							title: "5:00PM - 8:00PM",
							selected: false
						},
						{
							title: "9:00PM - 12:00AM",
							selected: false
						},
					],
					toggled: false
				}
			],

			classOrder: { 'vip': 1, 'Luxury': 2, 'Semi Luxury': 3 },

			sorts: [
				"Cheapest",
				"VIP"
			],

			selectedTripType: "One Way",
			selectedClassType: "VIP",
			sortBy: null,
			filterModal: false,
			sortModal: false
		}
	},

	computed: {
		...mapState(["selectedBooking"]),

		// Computed property to get filtered results
		filteredResults() {
			let filteredData = [...this.result];
			this.filters.forEach(filter => {
				filter.values.forEach(value => {
					if (value.selected) {
						console.log(value.title);
						// Filter the data based on the selected filters
						filteredData = filteredData.filter(item => {
							// Assuming 'operator', 'cabinType', 'time' are properties in your data
							return item.operator === value.title || item.cabin === value.title || item.time === value.title;
						});
					}
				});
			});

			console.log(filteredData);
			return filteredData;
		}
	},

	watch: {
		sortBy(newVal, oldVal) {
			if (newVal == "Cheapest") {
				this.result.sort((a, b) => parseInt(a.normalPrice, 10) - parseInt(b.normalPrice, 10))
			} else if (newVal == "VIP") {
				this.result.sort((a, b) => {
					return this.classOrder[a.cabin] - this.classOrder[b.cabin]
				})
			}
		}
	},

	methods: {
		toggleValue(parentIndex, valueIndex) {
			// Toggle the selected value and update siblings' toggled property
			this.filters[parentIndex].values.forEach((value, index) => {
				if (index === valueIndex) {
					value.selected = !value.selected; // Toggle the selected value
				} else {
					console.log(value.title);
					value.selected = false; // Set other values to false
				}
			});
		}
	}
}
</script>

<style lang="postcss" scoped>
.BookHotel {
	@apply pb-12 lg:pb-24 bg-[#FAFAFA];

	.MobileHeader {
		@apply bg-white w-full divide-x divide-border divide-dashed py-2;

		button {
			@apply w-1/2 py-5 space-x-2;

			span {
				@apply block text-primary font-bold text-sm capitalize
			}
		}
	}

	header {
		@apply md:py-8 bg-[#0A0A0A] px-5 hidden md:block space-y-3;

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
				@apply relative gap-4 basis-[40%];

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
				@apply w-1/2 bg-white py-2 lg:py-3 px-4 flex items-start justify-normal space-x-2 mt-4 md:mt-0 relative rounded;

				svg {
					@apply w-5 h-5 lg:w-8 shrink-0
				}

				.Inputs {
					@apply w-full overflow-hidden grid grid-cols-2;

					.Input {
						@apply rounded-none last:pl-6;

						&:nth-child(1) {
							@apply border-dotted border-r-[0.5px] border-[#8E8E8E] flex justify-start items-start !space-x-3;
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
		.Container {
			@apply max-w-[1126px] mx-auto md:pt-10 lg:pt-16 space-y-7 px-5;

			>.Top {
				@apply space-x-3;

				>span {
					@apply text-sm text-secondary font-medium;
				}

				.Sorts {
					@apply space-x-5 xl:space-x-4;

					button {
						@apply text-secondary font-bold xl:text-lg !leading-[100%] relative;

						&.active {
							@apply text-primary;

							&::after {
								@apply absolute -bottom-2 left-[50%] -translate-x-1/2 rounded-full w-1 h-1 bg-primary;
								content: '';
							}
						}
					}
				}
			}

			.Bottom {
				@apply md:flex md:space-x-5 xl:space-x-6;

				.DesktopFilter {
					@apply hidden md:block bg-white rounded-lg py-4 px-6 space-y-6 mb-5 w-[190px] lg:w-[240px] xl:w-[294px] h-fit sticky top-[100px];

					.Header {
						@apply border-b border-dashed border-border pb-5;

						span {
							@apply text-lg font-bold text-secondary w-full block
						}

						button {
							@apply text-sm font-bold text-primary
						}
					}

					.Filters {
						@apply space-y-6;

						.Category {
							@apply space-y-[18px];

							.Top {
								span {
									@apply font-bold text-primary-black leading-[133%];
								}
							}

							.FilterValues {
								@apply space-y-4;

								.Value {
									@apply space-x-2;

									input,
									span {
										@apply block
									}

									.CheckBox {
										@apply w-[18px] h-[18px] border border-[#C7C7C7] rounded;

										&.selected {
											@apply bg-primary
										}
									}

									input {
										@apply w-[18px] h-[18px] border border-border rounded
									}

									span {
										@apply text-[10px] font-bold text-primary-black
									}
								}
							}

							>span {
								@apply font-bold text-lg text-primary-black leading-[133%];
							}
						}
					}
				}

				.Results {
					@apply grow space-y-6 lg:space-y-8;
				}
			}
		}
	}

	.MobileFilterModal,
	.MobileSortModal {
		@apply fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-30 z-50 flex flex-col justify-end;

		.MobileFilter,
		.MobileSort {
			@apply bg-white rounded-lg py-4 px-6 space-y-6 mx-5 mb-5;

			>span {
				@apply border-b border-dashed border-border text-lg pb-3 font-bold text-secondary w-full block
			}

			.Filters {
				@apply space-y-6;

				.Category {
					@apply space-y-[18px];

					.Top {
						span {
							@apply font-bold text-lg text-primary-black leading-[133%];
						}
					}

					.FilterValues {
						@apply space-y-4;

						.Value {
							@apply space-x-2;

							input,
							span {
								@apply block
							}

							.CheckBox {
								@apply w-[18px] h-[18px] border border-[#C7C7C7] rounded;

								&.selected {
									@apply bg-primary
								}
							}

							input {
								@apply w-[18px] h-[18px] border border-border rounded
							}

							span {
								@apply text-xs font-bold text-primary-black
							}
						}
					}

					>span {
						@apply font-bold text-lg text-primary-black leading-[133%];

						&.active {
							@apply text-primary;

							&::after {
								@apply absolute -bottom-2 left-[50%] -translate-x-1/2 rounded-full w-1 h-1 bg-primary;
								content: '';
							}
						}
					}
				}
			}
		}
	}
}

.inDev {
	@apply fixed top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-center text-[#484848] text-3xl font-bold bg-white;
}
</style>