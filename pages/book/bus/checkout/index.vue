<template>
	<div class="Checkout">
		<section class="constraint">
			<div class="TopLeft">
				<div class="Reservations">
					<h2>
						Bus seats
					</h2>

					<div class="Placements">
						<div class="Seats">
							<!-- <div class="LeftCols start"> -->
							<div class="Col" v-for="(col, index) in splitSeatsIntoRowsAndColumns" :key="index">
								<button class="Seat center" v-for="seat in col" :key="seat.position" @click="decideSeat(seat.label)"
									:disabled="occupied(seat.label)"
									:class="{ 'occupied': occupied(seat.label), 'selected': selected(seat.label) }">
									<!-- <img :src="`/svg/classes/${sofa.selected ? sofa.class + '-white' : sofa.class}.svg`" alt=""
											class="Class"> -->

									<span>
										{{ seat.label }}
									</span>
								</button>
								<!-- <button class="Seat center" v-for="seat in col" :key="seat" :disabled="occupied(seat)"
										:class="{ 'occupied': occupied(seat), 'selected': selected(seat) }" @click="decideSeat(seat)">

										<span>
											{{ seat }}
										</span>
									</button> -->
							</div>
							<!-- </div> -->
							<!--  -->
						</div>
					</div>

					<div class="Guide start">
						<!-- <div class="Sofa col-center">
							<div class="Box center">
								<img src="/svg/classes/sofa.svg" alt="">
								
								<span>
									S*
								</span>
							</div>

							<p>
								Sofa
							</p>
						</div> -->

						<div class="Table col-center">
							<div class="Box center">
								<img src="/svg/classes/table.svg" alt="">

								<span>
									00
								</span>
							</div>

							<p>
								Normal
							</p>
						</div>

						<div class="Selected col-center">
							<div class="Box selected center">
								<span>
									00
								</span>
							</div>

							<p>
								Selected
							</p>
						</div>

						<div class="Reserved col-center">
							<div class="Box reserved center">
								<span>
									00
								</span>
							</div>

							<p>
								Occupied
							</p>
						</div>
					</div>
				</div>

				<div class="ReservationsFare" v-if="selectedSeats.length > 0">
					<h2>
						Booked Seat(s)
					</h2>

					<div class="Fares">
						<div class="Fare start" v-for="seat in selectedSeats" :key="seat">
							<div>
								{{ seat }}
							</div>

							<div>
								Tsh {{ data?.price }}
							</div>
						</div>
					</div>

					<div class="TotalFare col-end">
						<p>
							Total Fare
						</p>

						<span>
							Tsh {{ data?.price * selectedSeats.length }}
						</span>
					</div>
				</div>

				<div class="ReservationsDare">
					<h2>
						Reservation Date
					</h2>

					<div class="Date">
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
									Date
								</span>

								<input type="date">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="BottomRight">
				<div class="Description">
					<h2>
						Bus Details
					</h2>

					<div class="Details">
						<div class="Main">
							<div class="Top">
								<div class="Left">
									<div class="top start">
										<h2>
											Leaving on.
										</h2>

										<span>{{ $moment(data?.date).format("MMM Do YYYY") }}</span>
									</div>

									<div class="bottom">
										<div>
											<span class="BusName">
												{{ data?.company }}
											</span>

											<div class="PlateNumber">
												<span>Plate no: {{ data?.plate }}</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="Bottom">
								<div class="From">
									<span class="Place">
										{{ data?.origin }}
									</span>

									<div class="TimeStop">
										<span>
											{{ data?.time }}
										</span>
									</div>
								</div>

								<div class="Mid ">
									<img src="/svg/ticket-mid.svg" alt="">

									<span>
										{{ calculateTimeDifference(data?.departureTime, data?.arrivalTime).hours }}hrs
										{{ calculateTimeDifference(data?.departureTime, data?.arrivalTime).minutes }}min
									</span>
								</div>

								<div class="To">
									<span class="Place">
										{{ data?.destination }}
									</span>

									<div class="TimeStop">
										<span>
											{{ data?.arrivalTime }}
										</span>
									</div>
								</div>
							</div>
						</div>

						<div class="Main" v-if="data?.type !== 'ONE-WAY'">
							<div class="Top">
								<div class="Left">
									<div class="top start">
										<h2>
											Returning on.
										</h2>

										<span>Oct 31,2023</span>
									</div>

									<div class="bottom">
										<div class="Box"></div>

										<div>
											<span class="BusName">
												Tahmeed express
											</span>

											<div class="PlateNumber">
												<span>Plate no: 231345455</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="Bottom">
								<div class="From">
									<span class="Place">
										Kaskazini Pemba
									</span>

									<div class="TimeStop">
										<span>
											09:00am
										</span>
									</div>
								</div>

								<div class="Mid ">
									<img src="/svg/ticket-mid.svg" alt="">

									<span>
										2hr55min
									</span>
								</div>

								<div class="To">
									<span class="Place">
										{{}}
									</span>

									<div class="TimeStop">
										<span>
											09:00am
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="TicketInfo">
					<h2>
						Takeoff & Dropoff Point
					</h2>

					<div class="Points lg:between">
						<div class="Leaving">
							<span>
								Leaving
							</span>

							<div>
								<span>
									Takeoff
								</span>

								<p>
									{{ data?.tripLocations[0].location }}
								</p>
							</div>

							<div>
								<span>
									Dropoff
								</span>

								<p>
									{{ data?.tripLocations[0].location }}
								</p>
							</div>
						</div>

						<div class="Returning">
							<span>
								Returning
							</span>

							<div>
								<span>
									Takeoff
								</span>

								<p>
									{{ data?.tripLocations[0].location }}
								</p>
							</div>

							<div>
								<span>
									Dropoff
								</span>

								<p>
									{{ data?.tripLocations[1].location }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="Footer" v-if="totalPrice > 0">
			<div class="Container constraint between">
				<div class="Left">
					<p>Total fare</p>

					<h4>
						Tsh {{ totalPrice }}
					</h4>
				</div>

				<div class="Right">
					<button @click="pushFinalCheckout">
						Proceed to Checkout
					</button>
				</div>
			</div>
		</div>

		<div class="SeatMap center" v-if="seatMap" @click="seatMap = false">
			<div class="Image">
				<img src="/images/seatmap.png" alt="An image showing the sitting positions">
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	async asyncData({ route, $axios }) {
		try {
			const data = await $axios.$post('/ticket/uts-seats/', {
				routeID: route.query.routeID,
				tripID: route.query.tripID
			}, {
				headers: {
					"Access-Control-Allow-Origin": "*"
				}
			});

			console.log(data)

			return { data: data.bus };
		} catch (error) {
			console.log(error);
		}
	},

	data() {
		return {
			seats: [
				[
					"1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A", "11A",
				],
				[
					"1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "10B", "11B",
				],
				[
					"1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "11C",
				],
				[
					"1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "11D"
				]
			],
			selectedSeats: [],
			occupiedSeats: [],


			// data: {
			// 	plate: "T759DRT",
			// 	date: "2024-01-30",
			// 	time: "07:00 AM",
			// 	departureTime: "07:00 AM",
			// 	arrivalTime: "05:00 PM",
			// 	operatorID: "OP002",
			// 	company: "Shabiby",
			// 	origin: "Mwanza",
			// 	price: "30000",
			// 	type: "ONE-WAY",
			// 	tripLocations: [
			// 		{
			// 			locationID: "29",
			// 			location: "Kituoni"
			// 		},
			// 		{
			// 			locationID: "1",
			// 			location: "Magufuli Bus Terminal"
			// 		}
			// 	],
			// 	availableSeats: [
			// 		"1A",
			// 		"1B",
			// 		"1C",
			// 		"1D",
			// 		"2C",
			// 		"2D",
			// 		"3A",
			// 		"3B",
			// 		"3C",
			// 		"3D",
			// 		"4A",
			// 		"4B",
			// 		"4C",
			// 		"4D",
			// 		"7A",
			// 		"7B",
			// 		"7C",
			// 		"7D",
			// 		"9D",
			// 		"10A",
			// 		"10B",
			// 		"10C",
			// 		"10D",
			// 		"11A",
			// 		"11B",
			// 		"11C",
			// 		"11D"
			// 	],
			// 	bookedSeats: [],
			// 	reservedSeats: [],
			// 	normalSeats: "44",
			// 	normalColumns: "4",
			// 	restaurants: [],
			// 	hotels: []
			// },

			modalOpened: false,
			seatMap: false,
			modalType: 'form'
		}
	},

	computed: {
		groupedItems() {
			const sequence = [
				"1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A", "11A",
				"1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "10B", "11B",
				"1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "11C",
				"1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "11D"
			];

			const groupedItems = [];

			// Group items by their suffixes
			sequence.forEach(item => {
				const key = item.charAt(item.length - 1); // Get the last character (suffix)
				if (!groupedItems[key]) {
					groupedItems[key] = [];
				}
				groupedItems[key].push(item);
			});

			return groupedItems;
		},

		getUnoccupiedSeats() {
			const unavailableSeats = [];
			this.splitSeatsIntoRowsAndColumns.forEach(rows => {
				rows.forEach(seat => {
					const found = this.data.availableSeats.includes(seat.label);
					if (!found) {
						unavailableSeats.push(seat.label);
						// console.log(seat);
					}
					// console.log(found);
				});
			});

			console.log(unavailableSeats)
			return unavailableSeats;
		},

		totalPrice() {
			let price = 0
			this.selectedSeats.forEach((tk) => {
				price = this.data.price * this.selectedSeats.length
			})

			return price;
		},

		splitSeatsIntoRowsAndColumns() {
			// Find the highest row and column numbers
			let highestRow = 0;
			let highestColumn = 0;

			this.data?.seats.forEach(seat => {
				const [row, column] = seat.position.split('_').map(Number);
				if (row > highestRow) highestRow = row;
				if (column > highestColumn) highestColumn = column;
			});

			// Initialize the 2D array with empty arrays for each column
			const columns = Array.from({ length: highestColumn }, () => []);

			// Place seats into appropriate columns and rows
			this.data?.seats.forEach(seat => {
				const [row, column] = seat.position.split('_').map(Number);
				columns[column - 1][row - 1] = seat;
			});

			console.log(columns)
			return columns;
		}
	},

	methods: {
		...mapMutations(['setTempBusBooking', 'updateBookedSeats', 'updateTripDetails']),

		calculateTimeDifference(startTime, endTime) {
			const startMoment = this.$moment(startTime, 'hh:mm A');
			const endMoment = this.$moment(endTime, 'hh:mm A');

			const duration = this.$moment.duration(endMoment.diff(startMoment));

			const hours = duration.hours();
			const minutes = duration.minutes();

			return { hours, minutes };
		},

		submitForm() {
			this.modalType = 'success'
		},

		toggleModal() {
			this.modalOpened = !this.modalOpened
		},

		findUnavailableSeats(seats, availableSeats) {
			const unavailableSeats = [];

			availableSeats.forEach(seat => {
				let found = false;
				for (let i = 0; i < seats.length; i++) {
					if (seats[i].includes(seat)) {
						found = true;
						// console.log(seat);
						break;
					}
					if (!found) {
						console.log("unavailable", seat);
						unavailableSeats.push(seat);
					}
				}
			});

			return unavailableSeats;
		},

		// getUnoccupiedSeats() {
		// 	const unavailableSeats = [];
		// 	this.seats.forEach(rows => {
		// 		rows.forEach(seat => {
		// 			const found = this.data.availableSeats.includes(seat);
		// 			if (!found) {
		// 				unavailableSeats.push(seat);
		// 				// console.log(seat);
		// 			}
		// 			// console.log(found);
		// 		});
		// 	});

		// 	return unavailableSeats;
		// },

		occupied(seat) {
			if (this.getUnoccupiedSeats) {
				// console.log(this.getUnoccupiedSeats?.includes(seat));
				return this.getUnoccupiedSeats?.includes(seat);
			}
		},

		selected(seat) {
			return this.selectedSeats.includes(seat);
		},

		decideSeat(seat) {
			if (this.selectedSeats.includes(seat)) {
				console.log("unselecting", seat);
				this.selectedSeats = this.selectedSeats.filter(selectedSeat => selectedSeat !== seat);
			} else {
				console.log("selecting", seat);
				this.selectedSeats.push(seat);
			}
		},

		pushFinalCheckout() {
			const { plate, price, tripLocations } = this.data

			this.updateBookedSeats(this.selectedSeats)
			console.log("Data", this.data)
			this.updateTripDetails(this.data)
			this.$router.push(`/book/bus/checkout/passenger-details?plate=${plate}&price=${price}&pickUp=${tripLocations[0].locationID}&dropOff=${tripLocations[1].locationID}&date=${this.$route.query.date}`)
		}

		// splitSeatsIntoRowsAndColumns(seatingData) {
		// 	// Find the highest row and column numbers
		// 	let highestRow = 0;
		// 	let highestColumn = 0;

		// 	seatingData.forEach(seat => {
		// 		const [row, column] = seat.position.split('_').map(Number);
		// 		if (row > highestRow) highestRow = row;
		// 		if (column > highestColumn) highestColumn = column;
		// 	});

		// 	// Initialize the 2D array with empty arrays for each column
		// 	const columns = Array.from({ length: highestColumn }, () => []);

		// 	// Place seats into appropriate columns and rows
		// 	seatingData.forEach(seat => {
		// 		const [row, column] = seat.position.split('_').map(Number);
		// 		columns[column - 1][row - 1] = seat;
		// 	});

		// 	return columns;
		// }
	},

	mounted() {
		const mobile = window.matchMedia('(max-width: 1023px)')
		const spans = document.querySelector(".Spans")
		const footer = document.querySelector('footer')

		footer.style.display = "none"

		// const seatingRows = this.splitSeatsIntoRowsAndColumns(this.data?.seats);

		// console.log(seatingRows);

		// let highestRow = 0;
		// let highestColumn = 0;

		// // Iterate through each seat object
		// this.data?.seats.forEach(seat => {
		// 	// Split the position string by underscore to get row and column numbers
		// 	const [row, column] = seat.position.split('_').map(Number);

		// 	// Update highestRow and highestColumn if necessary
		// 	if (row > highestRow) {
		// 		highestRow = row;
		// 	}
		// 	if (column > highestColumn) {
		// 		highestColumn = column;
		// 	}
		// });

		// console.log("Highest Row:", highestRow);
		// console.log("Highest Column:", highestColumn);

		// console.log(this.getUnoccupiedSeats);

		// const unavailableSeats = this.findUnavailableSeats(this.seats, this.data.availableSeats);
		// console.log(unavailableSeats);
	}
}
</script>

<style lang="postcss" scoped>
.Checkout {
	@apply py-12 lg:py-14 xl:pt-16 md:pb-20 xl:pb-40 bg-[#FAFAFA] min-h-[100svh];

	section {
		@apply space-y-8 md:space-y-0 md:space-x-6 md:flex;

		.TopLeft {
			@apply shrink-0 w-full md:max-w-[300px] lg:max-w-[340px] xl:max-w-[408px] space-y-8;

			.Reservations {
				@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 lg:pb-16 h-fit bg-white;

				h2 {
					@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
				}

				.Placements {
					@apply space-y-6 lg:space-y-8 mt-8 pb-12 lg:pb-16 border-b border-dashed border-[#C2C2C2];

					.Seats {
						@apply flex justify-between;

						/* >div {
							@apply grid grid-cols-2 gap-3; */

						>div {
							@apply space-y-3;

							button {
								@apply w-12 lg:w-16 h-12 lg:h-16 rounded relative;
								border: 0.5px solid #EBEBEB;

								img {
									@apply absolute top-0.5 lg:top-1 left-0.5 lg:left-1 w-2 lg:w-auto;
								}

								span {
									@apply block text-[#0A0A0A] font-bold text-lg lg:text-2xl
								}

								&.selected {
									@apply bg-primary border border-primary;

									span {
										@apply text-white
									}
								}

								&.occupied {
									@apply bg-[#EBEBEB];

									span {
										@apply text-white
									}
								}
							}
						}
					}
				}
			}

			.Guide {
				@apply space-x-4 mt-4;

				>div {
					@apply space-y-1;

					.Box {
						@apply w-9 h-9 rounded relative;
						border: 0.5px solid #EBEBEB;

						img {
							@apply absolute top-0.5 lg:top-1 left-0.5 lg:left-1 w-2;
						}

						span {
							@apply block text-[#0A0A0A] font-bold text-sm
						}

						&.selected {
							@apply bg-primary border border-primary;

							span {
								@apply text-white
							}
						}

						&.reserved {
							@apply bg-[#EBEBEB];

							span {
								@apply text-white
							}
						}
					}

					p {
						@apply text-[#484848] text-[8px] font-bold leading-[125%]
					}

					/* } */
				}
			}

			.ReservationsFare {
				@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 lg:pb-16 h-fit bg-white;

				h2 {
					@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
				}

				.Fares {
					@apply mt-5 mb-7 space-y-[18px] lg:space-y-[22px];

					.Fare {
						@apply font-bold leading-[100%] text-sm xl:text-lg text-primary-black;

						div {
							@apply first:pr-4 last:pl-3;

							&:nth-child(1) {
								@apply border-r border-dashed border-border
							}
						}
					}
				}

				.TotalFare {
					@apply space-y-2 pt-3 lg:pt-4 border-t border-dashed border-[#c2c2c2];

					p {
						@apply text-xs lg:text-sm font-bold
					}

					span {
						@apply block text-xl lg:text-2xl text-primary !leading-[150%] font-bold
					}
				}
			}

			.ReservationsDare {
				@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 lg:pb-16 h-fit bg-white;

				h2 {
					@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
				}

				.Date {
					@apply py-3 px-6 bg-white rounded border border-border mt-4;

					.Input {
						@apply rounded-none flex justify-start items-start !space-x-3;

						svg {
							@apply w-6 xl:w-8 h-6 xl:h-8 shrink-0
						}

						.Cont {
							@apply space-y-2 !m-0;

							span {
								@apply block text-[#646464] font-bold text-[8px] lg:text-xs !leading-[125%];
							}

							input {
								@apply text-[#1D1D1D] font-bold lg:font-medium text-lg !leading-[133.33%] pb-1 md:pb-0 !w-fit;

								&::-webkit-calendar-picker-indicator {
									@apply hidden
								}
							}
						}
					}
				}
			}
		}

		.BottomRight {
			@apply space-y-8 grow;

			.Description {
				@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 h-fit bg-white space-y-4 lg:space-y-8;
				box-shadow: 0px 2px 45px 0px rgba(0, 0, 0, 0.03);

				>h2 {
					@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
				}

				.Details {
					@apply space-y-8 lg:space-y-0 lg:flex;

					.Main {
						@apply w-full lg:w-1/2 xl:w-[45%] space-y-2 md:space-y-4 lg:space-y-6 pb-6;

						.Top {
							@apply flex justify-between;

							.Left {
								@apply space-y-3;

								.top {
									@apply space-x-1 lg:space-x-2;

									h2 {
										@apply font-bold text-[#0A0A0A] md:text-lg lg:text-xl xl:text-2xl md:leading-[150%] lg:leading-[150%]
									}

									span {
										@apply text-secondary text-[8px] lg:text-base font-bold;
									}
								}

								.bottom {
									@apply space-x-2 flex;

									.Box {
										@apply bg-primary rounded w-4 lg:w-6 xl:w-8 h-4 lg:h-6 xl:h-8
									}

									>div {
										@apply space-y-4;

										.BusName {
											@apply text-xs lg:text-base xl:text-lg leading-[150%] lg:leading-[133.33%] font-medium block;
										}

										.PlateNumber {
											@apply bg-[#F7F7F7] rounded-full py-2 xl:py-2.5 px-3 xl:px-4 w-fit;

											span {
												@apply text-[#0A0A0A] block text-[8px] xl:text-[10px] leading-[125%] xl:leading-[100%] font-bold
											}
										}
									}
								}
							}
						}

						.Bottom {
							@apply flex justify-between space-x-2;

							.From,
							.To {
								@apply space-y-3;

								.Place {
									@apply block font-medium text-xs md:text-base lg:text-base text-secondary leading-[100%] md:leading-[150%] lg:leading-[150%]
								}

								.TimeStop {
									@apply space-y-2 xl:space-y-3;

									span {
										@apply block text-[#0A0A0A] font-bold text-xs lg:text-lg leading-[100%]
									}
								}
							}

							.Mid {
								@apply shrink-0 space-y-1;

								img {
									@apply w-14 md:w-auto
								}

								span {
									@apply block text-[8px] leading-[125%] font-bold text-secondary text-center
								}
							}
						}
					}
				}
			}

			.TicketInfo {
				@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 pb-8 lg:pb-12 shrink-0 w-full bg-white;

				h2 {
					@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-[#0A0A0A] !leading-[150%] font-bold
				}

				.Points {
					@apply mt-4 lg:mt-5 space-y-8 lg:space-y-0 lg:divide-x divide-dashed divide-[#C7C7C7];

					>div {
						@apply space-y-4 lg:w-1/2;

						>span {
							@apply block text-secondary font-bold text-sm lg:text-lg leading-[100%] lg:leading-[150%]
						}

						>div {
							@apply space-y-2 border border-[#EBEBEB] rounded-sm py-2 px-3;

							span {
								@apply text-[8px] lg:text-[10px] !leading-[120%] text-secondary font-bold block
							}

							p {
								@apply text-[#0A0A0A] font-medium text-lg lg:text-base !leading-[130%]
							}
						}

						&.Leaving {
							@apply lg:pr-11;
						}

						&.Returning {
							@apply lg:pl-11;
						}
					}
				}
			}
		}
	}

	.Footer {
		@apply fixed bottom-0 left-0 right-0 bg-white py-6 lg:py-8;

		.Container {
			.Left {
				@apply space-y-1 lg:space-y-4;

				p {
					@apply md:text-right text-[8px] leading-[125%] lg:text-[18px] lg:leading-[100%] font-bold text-secondary
				}

				h4 {
					@apply text-xl lg:text-[32px] leading-[130%] lg:leading-[143%] font-bold text-primary
				}
			}

			.Right {
				button {
					@apply rounded bg-primary text-white py-4 lg:py-6 px-6 lg:px-12 text-xs lg:text-lg font-bold !leading-[100%];
				}
			}
		}
	}

	.Form {
		@apply w-full space-y-8 lg:space-y-12 xl:space-y-16 mt-6 lg:mt-9 xl:mt-12;

		.Inputs {
			@apply space-y-4 lg:space-y-5 xl:space-y-6 w-full;
		}

		button {
			@apply rounded bg-primary w-full text-white py-4 lg:py-6 px-6 lg:px-12 text-xs lg:text-lg font-bold leading-[100%];
		}
	}

	>.SeatMap {
		@apply fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-25 z-50 px-5 lg:px-0;

		.Image {
			@apply lg:w-4/5 max-w-[1200px];

			img {
				@apply w-full
			}
		}
	}

	.inDev {
		@apply fixed top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-center text-[#484848] text-3xl font-bold;
	}
}
</style>