<template>
	<div class="Result">
		<div class="Image"></div>

		<div class="Info">
			<div class="Top">
				<span class="Title">
					Tips Lounge
				</span>

				<div class="Misc">
					<div class="Location">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.28906 7.77998V17.51C2.28906 19.41 3.63906 20.19 5.27906 19.25L7.62906 17.91C8.13906 17.62 8.98906 17.59 9.51906 17.86L14.7691 20.49C15.2991 20.75 16.1491 20.73 16.6591 20.44L20.9891 17.96C21.5391 17.64 21.9991 16.86 21.9991 16.22V6.48998C21.9991 4.58998 20.6491 3.80998 19.0091 4.74998L16.6591 6.08998C16.1491 6.37998 15.2991 6.40998 14.7691 6.13998L9.51906 3.51998C8.98906 3.25998 8.13906 3.27998 7.62906 3.56998L3.29906 6.04998C2.73906 6.36998 2.28906 7.14998 2.28906 7.77998Z"
								stroke="#2FA048" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M8.55859 4V17" stroke="#2FA048" stroke-width="1.5" stroke-linecap="round"
								stroke-linejoin="round" />
							<path d="M15.7305 6.62012V20.0001" stroke="#2FA048" stroke-width="1.5" stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>

						<span>
							22 Concert avenue, Serengeti, 22 Concert avenue, Serengeti
						</span>
					</div>

					<div class="DateTime start">
						<div class="Time">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
									stroke="#2FA048" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M15.7089 15.1798L12.6089 13.3298C12.0689 13.0098 11.6289 12.2398 11.6289 11.6098V7.50977"
									stroke="#2FA048" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>

							<span>
								08:30PM - 12:00PM 
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="Bottom between">
				<div class="Left">
					<!-- <p>
						from
					</p>

					<span>
						Tzs 26,000
					</span> -->
				</div>

				<div class="Right">
					<button @click="$router.push('/book/entertainment/checkout')">
						Make Reservation
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.Result {
	@apply border-[0.5px] border-[#EBEBEB] rounded-[10px] overflow-hidden;
	box-shadow: 0px 2px 45px 0px rgba(0, 0, 0, 0.03);

	.Image {
		@apply w-full h-[200px] xl:h-[248px] bg-[#484848]
	}

	.Info {
		@apply p-6;

		.Top {
			@apply pb-6 space-y-3;

			.Title {
				@apply text-[#0A0A0A] font-bold text-xl lg:text-2xl xl:text-[32px] !leading-[140%]
			}

			.Misc {
				@apply space-y-3 max-w-[438px];

				.Location,
				.Date,
				.Time {
					@apply flex items-start space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4;

					svg {
						@apply w-4 lg:w-6 h-4 lg:h-6 shrink-0
					}

					span {
						@apply block text-xs md:text-sm lg:text-base xl:text-lg text-[#484848] leading-[150%] lg:leading-[133%]
					}
				}

				.DateTime {
					@apply space-x-6 md:space-x-8 lg:space-x-10
				}
			}
		}

		.Bottom {
			@apply pt-3 lg:pt-4;

			.Left {
				@apply space-y-1 lg:space-y-2;

				p {
					@apply text-[8px] lg:text-[10px] !leading-[120%] text-[#484848] font-bold capitalize
				}

				span {
					@apply text-lg font-bold !leading-[133%] text-[#0A0A0A] block
				}
			}

			.Right {
				button {
					@apply py-3 lg:py-4 px-4 lg:px-8 font-bold text-primary bg-[#DFF6E4] !leading-[100%] rounded
				}
			}
		}
	}
}
</style>