<template>
	<div class="Tickets">
		<div class="constraint">
			<header>
				<h1>
					Tickets
				</h1>

				<div class="Categories start">
					<button :class="{ 'active': booking == selectedBooking }" v-for="booking in bookings" :key="booking"
						@click="changeSelectedBooking(booking)">
						{{ booking }} tickets
					</button>
				</div>
			</header>

			<section class="Bus">
				<div class="Header md:end">
					<div class="Search start">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
								stroke="#484848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M22 22L20 20" stroke="#484848" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>

						<input type="text" placeholder="Search for a Ticket">
					</div>
				</div>

				<div class="List">
					<div class="Data" v-if="buses.length > 0 && selectedBooking == 'bus'">
						<BusTicket />
						<BusTicket />
						<BusTicket />
						<BusTicket />
						<BusTicket />
						<BusTicket />
					</div>

					<div class="Data" v-else-if="events.length > 0 && selectedBooking == 'event'">
						<EventTicket />
						<EventTicket />
						<EventTicket />
						<EventTicket />
						<EventTicket />
						<EventTicket />
					</div>
					
					<div class="Data" v-else-if="entertainment.length > 0 && selectedBooking == 'entertainment'">
						<EntertainmentTicket />
						<EntertainmentTicket />
						<EntertainmentTicket />
						<EntertainmentTicket />
						<EntertainmentTicket />
						<EntertainmentTicket />
					</div>

					<div class="Empty col-center" v-else>
						<img src="/svg/empty.svg" alt="">

						<div class="Texts">
							<h2>
								No Tickets Available
							</h2>

							<p>
								Apologies, no tickets available for your selected destination or filters. Please adjust your preferences
								or try another destination.
							</p>
						</div>
					</div>

					<button class="More">
						Show more Results
					</button>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bookings: [
				"bus",
				"event",
				"entertainment"
			],

			selectedBooking: "event",
			buses: ["lmao"],
			events: ["lmao"],
			entertainment: ["lmnao"],
		}
	},

	methods: {
		changeSelectedBooking(booking) {
			// this.$router.push(`/ticket/${booking}`)
			this.selectedBooking = booking
		}
	}
}
</script>

<style lang="postcss" scoped>
.Tickets {
	@apply bg-[#FCFCFC] pb-12 md:pb-16 xl:pb-24;
	
	header {
		@apply space-y-6 md:space-y-8 lg:space-y-12 xl:space-y-16 pt-12 pb-1;

		h1 {
			@apply font-bold text-black text-2xl xl:text-[40px]
		}

		.Categories {
			@apply space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 flex-nowrap;

			button {
				@apply text-[#0A0A0A] font-bold text-sm md:text-base lg:text-lg xl:text-2xl !leading-[100%] relative capitalize whitespace-nowrap;

				&.active {
					@apply text-primary;

					&::after {
						@apply absolute -bottom-5 left-[50%] -translate-x-1/2 rounded-full w-2 xl:w-3 h-2 xl:h-3 bg-primary;
						content: '';
					}
				}
			}
		}
	}

	section {
		@apply mt-11 md:mt-1;

		.Header {
			.Search {
				@apply rounded-lg border border-[#EBEBEB] w-full overflow-hidden pl-4 md:pl-5 xl:pl-6 max-w-[400px];

				input {
					@apply w-full p-4 md:p-5 xl:p-6 leading-[157%] lg:!leading-[133%] text-sm lg:text-base xl:text-lg font-medium text-[#0A0A0A] placeholder:text-secondary
				}
			}
		}

		.List {
			@apply mt-8 lg:mt-12 xl:mt-16;
			
			.Data {
				@apply grid md:grid-cols-2 gap-6;
			}

			.Empty {
				@apply space-y-8 xl:space-y-9 mt-12 xl:mt-24;

				img {
					@apply w-[200px] md:w-60 lg:w-72 xl:w-auto
				}

				.Texts {
					@apply text-center space-y-3 max-w-[310px] xl:max-w-[445px];

					h2 {
						@apply text-2xl lg:text-3xl xl:text-[32px] text-[#0A0A0A] font-bold
					}

					p {
						@apply text-secondary text-sm xl:text-base leading-[150%] font-medium
					}
				}
			}

			.More {
				@apply block mx-auto w-full max-w-[500px] py-4 lg:py-5 xl:py-6 rounded bg-primary text-white font-bold !leading-[100%] text-sm lg:text-base xl:text-lg mt-8 lg:mt-12 xl:mt-16
			}
		}
	}
}
</style>