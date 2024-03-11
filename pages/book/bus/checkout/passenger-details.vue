<template>
	<div class="PassengerDetails">
		<div class="Passengers">
			<div class="Passenger" v-for="(passenger, index) in passengers" :key="index">
				<h2>
					Details for passenger {{ index + 1 }}
				</h2>

				form
			</div>
		</div>

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
	computed: {
		...mapState(['bookedBusSeats']),

		totalPrice() {
			return parseInt(this.$route.query.price, 10) * this.bookedBusSeats.length
		}
	}
}
</script>

<style lang="postcss" scoped>
.PassengerDetails {
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