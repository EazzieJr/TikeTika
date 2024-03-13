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

			<div class="BookingDetails"></div>
		</section>

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
			passengersDetails: [],
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
		...mapState(['bookedBusSeats']),

		totalPrice() {
			return parseInt(this.$route.query.price, 10) * this.bookedBusSeats.length
		}
	},

	methods: {
		checkout() {
			// this.$router.push({ name: 'bus-checkout' })
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

		.BookingDetails {
			@apply shrink-0 w-full md:max-w-[300px] lg:max-w-[340px] xl:max-w-[408px] space-y-8 h-20;
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
}
</style>