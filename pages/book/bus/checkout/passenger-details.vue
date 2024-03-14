<template>
	<div class="PassengerDetails">
		<section class="constraint">
			<div class="Passengers">
				<div class="Passenger" v-for="(passenger, index) in passengersDetails" :key="index">
					<!-- <div class="Passenger"> -->
					<h2>
						Details for Passenger {{ index + 1 }}
					</h2>

					<div class="Inputs">
						<div class="Input">
							<input type="text" name="name" id="name" placeholder="Name" v-model="passengersDetails[index].name">
						</div>

						<div class="Dropdowns">
							<Dropdown class="z-20">
								<template #toggler>
									<div class="DropdownToggler between">
										<span class="">
											{{ passengersDetails[index].age ? passengersDetails[index].age : "Select Age" }}
										</span>

										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
												stroke="#0A0A0A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>
									</div>
								</template>

								<DropdownContent class="Content !h-[280px] overflow-y-auto !mt-4 border-[0.5px] border-[#EBEBEB]"
									data-lenis-prevent>
									<button type="button" class="Item py-3 px-3 text-base font-bold text-[#313131] block w-full text-left"
										v-for="age in ages" :key="age" @click="passengersDetails[index].age = age">
										<span>
											<!-- :class="{ 'bg-primary !text-white': search.origin === origin.regionID }" -->
											{{ age }}
										</span>
									</button>
								</DropdownContent>
							</Dropdown>

							<Dropdown>
								<template #toggler>
									<div class="DropdownToggler between">
										<span class="">
											{{ passengersDetails[index].gender ? passengersDetails[index].gender : "Gender" }}
										</span>

										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
												stroke="#0A0A0A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>
									</div>
								</template>

								<DropdownContent
									class="Content h-fit !max-h-[280px] overflow-y-auto !mt-4 border-[0.5px] border-[#EBEBEB]"
									data-lenis-prevent>
									<button type="button" class="Item py-3 px-3 text-base font-bold text-[#313131] block w-full text-left"
										v-for="gender in genders" :key="gender" @click="passengersDetails[index].gender = gender">
										<span>
											<!-- :class="{ 'bg-primary !text-white': search.origin === origin.regionID }" -->
											{{ gender }}
										</span>
									</button>
								</DropdownContent>
							</Dropdown>
						</div>

						<div class="Input">
							<input type="number" name="phone" id="phone" placeholder="Phone" v-model="passengersDetails[index].phone">
						</div>

						<div class="Input">
							<input type="email" name="email" id="email" placeholder="Email Address (Optional)"
								v-model="passengersDetails[index].email">
						</div>

						<div class="Dropdowns">
							<Dropdown class="z-20">
								<template #toggler>
									<div class="DropdownToggler between">
										<span class="">
											{{ passengersDetails[index].id ? passengersDetails[index].id : "ID Type" }}
										</span>

										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
												stroke="#0A0A0A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
												stroke-linejoin="round" />
										</svg>
									</div>
								</template>

								<DropdownContent class="Content !h-[280px] overflow-y-auto !mt-4 border-[0.5px] border-[#EBEBEB]"
									data-lenis-prevent>
									<button type="button" class="Item py-3 px-3 text-base font-bold text-[#313131] block w-full text-left"
										v-for="id in IDs" :key="id" @click="passengersDetails[index].id = id">
										<span>
											<!-- :class="{ 'bg-primary !text-white': search.origin === origin.regionID }" -->
											{{ id }}
										</span>
									</button>
								</DropdownContent>
							</Dropdown>

							<div class="Input">
								<input type="number" name="id" id="id" placeholder="ID Number (Optional)"
									v-model="passengersDetails[index].idNumber">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="BookingSummary">
				<header class="between">
					<h2>
						Booking Summary
					</h2>

					<button class="Change">
						Change
					</button>
				</header>

				<div class="Details">
					<div class="Main">
						<div class="Top">
							<div class="Left">
								<div class="top start">
									<h3>
										Leaving on.
									</h3>

									<span>{{ $moment(tripDetails?.date).format("MMM Do YYYY") }}</span>
								</div>

								<div class="bottom">
									<div>
										<span class="BusName">
											{{ tripDetails?.company }}
										</span>

										<!-- <div class="PlateNumber">
											<span>Plate no: {{ tripDetails?.plate }}</span>
										</div> -->
									</div>
								</div>
							</div>
						</div>

						<div class="Bottom">
							<div class="From">
								<span class="Place">
									{{ tripDetails?.origin }}
								</span>

								<div class="TimeStop">
									<p class="text-[8px] text-[#C7C7C7] mb-3">
										{{ tripDetails?.tripLocations[0]?.location }}
									</p>

									<span>
										{{ tripDetails?.time }}
									</span>
								</div>
							</div>

							<div class="Mid ">
								<img src="/svg/ticket-mid.svg" alt="">

								<span>
									{{ calculateTimeDifference(tripDetails?.departureTime, tripDetails?.arrivalTime).hours }}hrs
									{{ calculateTimeDifference(tripDetails?.departureTime, tripDetails?.arrivalTime).minutes }}min
								</span>
							</div>

							<div class="To">
								<span class="Place">
									{{ tripDetails?.destination }}
								</span>

								<div class="TimeStop">
									<p class="text-[8px] text-[#C7C7C7] mb-3">
										{{ tripDetails?.tripLocations[1]?.location }}
									</p>

									<span>
										{{ tripDetails?.arrivalTime }}
									</span>
								</div>
							</div>
						</div>
					</div>

					<div class="Main" v-if="tripDetails?.type !== 'ONE-WAY'">
						<div class="Top">
							<div class="Left">
								<div class="top start">
									<h3>
										Returning on.
									</h3>

									<span>Oct 31,2023</span>
								</div>

								<div class="bottom">
									<div class="Box"></div>

									<div>
										<span class="BusName">
											Tahmeed express
										</span>

										<!-- <div class="PlateNumber">
											<span>Plate no: 231345455</span>
										</div> -->
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

				<div class="BusFare">
					<span>
						Bus Fare
					</span>

					<div class="Ages space-y-4">
						<p class="text-sm lg:text-base text-secondary">
							Adult x 1
						</p>
						<p class="text-sm lg:text-base text-secondary">
							Child x 1
						</p>
						<p class="text-sm lg:text-base text-secondary">
							Senior x 1
						</p>
					</div>
				</div>

				<div class="TotalFare col-end">
					<p>
						Total Fare
					</p>

					<span>
						Tsh {{ totalPrice }}
					</span>
				</div>
			</div>
		</section>


		<Modal :title="title" :hint="hint" :type="modalType" @close="toggleModal" v-if="modalOpened">
			<form @submit.prevent="submitForm" class="Form">
				<div class="Inputs">
					<InputField type="numeric" placeholder="Mobile money number" v-model="payPhone" />
				</div>

				<div class="Options">
					<p class="text-sm lg:text-lg font-medium text-secondary !leading-[150%]">
						1. Tuma Pesa <br>
						2. Lipa Bili <br>
						3. Malipo ya Serikali <br>
						4. Ingiza namba x <br>
						5. Kumbukumbu nambari y <br>
						6. PIN 
					</p>
				</div>

				<button>
					Pay Now
				</button>
			</form>
		</Modal>


		<div class="Footer">
			<div class="Container constraint between">
				<div class="Left">
					<p>Total fare</p>

					<h4>
						Tsh {{ totalPrice }}
					</h4>
				</div>

				<div class="Right">
					<button @click="checkout">
						Checkout
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			modalOpened: false,
			modalType: "form",
			passengersDetails: [],
			payPhone: "",
			ages: [
				"Adult", "Child", "Senior", "Middle aged", "Infant", "Teenager", "Young Adult", "Elderly", "Baby", "Toddler"
			],

			genders: [
				"Male", "Female", "Other"
			],

			IDs: [
				"National ID", "Passport", "Voter's ID", "Driver's License", "Student ID", "Employee ID", "Other"
			]
		}
	},

	computed: {
		...mapState(['bookedBusSeats', 'tripDetails']),

		totalPrice() {
			return parseInt(this.$route.query.price, 10) * this.bookedBusSeats.length
		},

		title() {
			return this.modalType == 'form' ? "Checkout" : "Congratulations"
		},

		hint() {
			return this.modalType == 'form' ? "Make payment through your mobile money number" : "Payment successfully made"
		},
	},

	methods: {
		checkout() {
			this.modalOpened = true
		},

		calculateTimeDifference(startTime, endTime) {
			const startMoment = this.$moment(startTime, 'hh:mm A');
			const endMoment = this.$moment(endTime, 'hh:mm A');

			const duration = this.$moment.duration(endMoment.diff(startMoment));

			const hours = duration.hours();
			const minutes = duration.minutes();

			return { hours, minutes };
		},

		toggleModal() {
			console.log(this.passengersDetails)
			this.modalOpened = !this.modalOpened
		},

		async submitForm() {
			const { plate, date, price, pickUp, dropOff } = this.$route.query
			
			const response = await this.$axios.post('/booking/?type=bus', {
				bus: {
					plate,
					date,
					price,
					pickUp,
					dropOff
				},
				seats: this.bookedBusSeats,
				passengers: this.passengersDetails,
			})

			if (response.status === 200) {
				console.log("Payment made successfully", response)
				this.modalType = "success"
			} else {
				console.log("Payment failed", response)
			}
		}
	},

	mounted() {
		const mobile = window.matchMedia('(max-width: 1023px)')
		const spans = document.querySelector(".Spans")
		const footer = document.querySelector('footer')

		footer.style.display = "none"

		for (let i = 0; i < this.bookedBusSeats.length; i++) {
			this.passengersDetails.push({
				name: "",
				phone: "",
				email: "",
				age: "",
				gender: "",
				id: "",
				idNumber: ""
			})
		}

		console.log("Trip deatails", this.tripDetails);
	}
}
</script>

<style lang="postcss" scoped>
.PassengerDetails {
	@apply py-12 lg:py-14 xl:pt-16 md:pb-20 xl:pb-40 bg-[#FAFAFA] min-h-[100svh];

	section {
		@apply space-y-8 md:space-y-0 md:space-x-6 md:flex;

		.Passengers {
			@apply grow space-y-6 lg:space-y-12;

			.Passenger {
				@apply border-[0.5px] border-[#EBEBEB] rounded-lg p-6 pt-4 lg:p-8 lg:pt-6 lg:pb-16 h-fit bg-white space-y-6 lg:space-y-12;

				h2 {
					@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
				}

				.Inputs {
					@apply grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-6;

					>.Input {
						@apply border-[0.5px] border-[#EBEBEB] rounded-[2px] md:col-span-2;

						input {
							@apply w-full p-4 lg:p-6 text-sm lg:text-lg font-medium text-black placeholder:text-secondary leading-[150%] lg:leading-[133%]
						}
					}
				}

				.Dropdowns {
					@apply md:col-span-2 grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-6;

					.DropdownToggler {
						@apply border-[0.5px] border-[#EBEBEB] rounded-[2px] md:col-span-2 p-4 lg:py-5 text-sm lg:text-lg font-medium text-black;
					}

					.Input {
						@apply border-[0.5px] border-[#EBEBEB] rounded-[2px];

						input {
							@apply w-full p-4 lg:p-6 text-sm lg:text-lg font-medium text-black placeholder:text-secondary leading-[150%] lg:leading-[133%]
						}
					}
				}
			}
		}

		.BookingSummary {
			@apply border-[0.5px] border-[#EBEBEB] rounded-lg p-6 pt-4 lg:p-8 lg:pt-6 lg:pb-16 h-fit bg-white space-y-4 shrink-0 w-full md:max-w-[300px] lg:max-w-[340px] xl:max-w-[408px];

			header {
				@apply border-b border-dashed border-[#C2C2C2];

				h2 {
					@apply pb-3 lg:pb-4 text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
				}

				button {
					@apply text-[#FC1E00] font-bold text-sm lg:text-base
				}
			}

			.Details {
				@apply space-y-8 lg:space-y-0;

				.Main {
					@apply w-full space-y-2 md:space-y-4 lg:space-y-6 pb-6 border-b border-[#C7C7C7] border-dashed;

					.Top {
						@apply flex justify-between;

						.Left {
							@apply space-y-3;

							.top {
								@apply space-x-1 lg:space-x-2;

								h3 {
									@apply font-bold text-[#0A0A0A] lg:text-lg md:leading-[150%] lg:leading-[150%]
								}

								span {
									@apply text-secondary text-[8px] lg:text-xs font-bold;
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

			.BusFare {
				@apply space-y-5 lg:space-y-6;

				span {
					@apply block lg:text-lg font-bold text-black
				}

				.Ages {
					@apply space-y-4;

					p {
						@apply text-secondary font-bold text-sm lg:text-base;
					}
				}
			}

			.TotalFare {
				@apply space-y-2 pt-3 lg:pt-4 border-t border-dashed border-[#c2c2c2] !mt-8;

				p {
					@apply text-xs lg:text-sm font-bold
				}

				span {
					@apply block text-xl lg:text-2xl text-primary !leading-[150%] font-bold
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
}
</style>