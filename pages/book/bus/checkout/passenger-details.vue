<template>
	<div class="PassengerDetails">
		<section class="constraint">
			<div class="Passengers">
					<div class="Passenger" v-for="(passenger, index) in passengers" :key="index">
					<h2>
						Details for Passenger {{ index + 1 }}
					</h2>

					<div class="Inputs">
						<div class="Input">
							<input type="text" name="name" id="name" placeholder="Name">
						</div>

						<div class="Dropdowns"></div>

						<div class="Input">
							<input type="number" name="phone" id="phone" placeholder="Phone">
						</div>

						<div class="Input">
							<input type="email" name="email" id="email" placeholder="Email Address (Optional)">
						</div>

						<div class="Dropdowns"></div>
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
					<button @click="pushFinalCheckout">
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
		}
	},
	
	computed: {
		...mapState(['bookedBusSeats']),

		totalPrice() {
			return parseInt(this.$route.query.price, 10) * this.bookedBusSeats.length
		}
	},

	mounted() {
		const mobile = window.matchMedia('(max-width: 1023px)')
		const spans = document.querySelector(".Spans")
		const footer = document.querySelector('footer')

		footer.style.display = "none"

		for (let i = 0; i < thisbookedBusSeats.length; i++) {
			this.passengersDetails.push({
				name: "",
				phone: "",
				email: "",
				age: "",
				gender: "",
				id: "",
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
				@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 lg:pb-16 h-fit bg-white space-y-6 lg:space-y-12;

				h2 {
					@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
				}

				.Inputs {
					@apply grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-6;

					.Input {
						@apply border-[0.5px] border-[#EBEBEB] rounded-[2px] md:col-span-2;

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