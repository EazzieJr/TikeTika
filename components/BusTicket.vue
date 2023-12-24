<template>
	<div class="SearchedTrip">
		<div class="Container">
			<div class="Top">
				<div class="Left">
					<div class="top start">
						<h2>
							Leaving.
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
								<span>Plate np: 231345455</span>
							</div>
						</div>
					</div>
				</div>

				<div class="Right">
					<div class="TripType">
						<span>
							Round Trip
						</span>
					</div>
				</div>
			</div>

			<div class="Bottom">
				<div class="From">
					<p>From Where?</p>
					<span class="Place">
						Kaskazini Pemba
					</span>

					<div class="TimeStop">
						<span>
							09:00am
						</span>

						<p>Dar Bust stop</p>
					</div>
				</div>

				<div class="Mid">
					<img src="/svg/ticket-mid.svg" alt="">
				</div>

				<div class="To">
					<p>To Where?</p>

					<span class="Place">
						Dar es Salaam
					</span>

					<div class="TimeStop">
						<span>
							09:00am
						</span>

						<p>Dar Bust stop</p>
					</div>
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
.SearchedTrip {
	@apply px-5 md:px-0 py-40;

	.Container {
		@apply w-full max-w-[342px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[612px] space-y-2 md:space-y-4 lg:space-y-[18px] p-6 lg:px-8 bg-white rounded-[10px] mx-auto;
		box-shadow: 0px 2px 45px 0px rgba(0, 0, 0, 0.03);

		.Top {
			@apply flex justify-between;

			.Left {
				@apply space-y-3;

				.top {
					@apply space-x-1 lg:space-x-2;

					h2 {
						@apply font-bold text-[#0A0A0A] md:text-lg lg:text-xl xl:text-2xl md:!leading-[150%]
					}

					span {
						@apply text-secondary text-[8px] lg:text-base font-bold;
					}
				}

				.bottom {
					@apply space-x-2 flex md:items-center;

					.Box {
						@apply bg-primary rounded w-4 lg:w-5 xl:w-6 h-4 lg:h-5 xl:h-6
					}

					>div {
						@apply space-y-2 md:space-y-0 md:space-x-2 md:flex items-center;

						.BusName {
							@apply text-xs lg:text-base xl:text-lg leading-[150%] lg:leading-[133.33%] font-medium;
						}

						.PlateNumber {
							@apply bg-[#F7F7F7] rounded-full py-2 xl:py-2.5 px-3 xl:px-4;

							span {
								@apply text-[#0A0A0A] block text-[8px] xl:text-[10px] leading-[125%] xl:leading-[100%] font-bold
							}
						}
					}
				}
			}

			.Right {
				.TripType {
					@apply bg-[#DFF6E4] rounded-full py-2 xl:py-2.5 px-3 xl:px-4;

					span {
						@apply text-primary block text-[8px] xl:text-[10px] leading-[125%] xl:leading-[100%] font-bold
					}
				}
			}
		}

		.Bottom {
			@apply max-w-[95%] lg:max-w-[90%] flex justify-between space-x-2;

			.From,
			.To {
				@apply space-y-3;

				p {
					@apply text-[10px] xl:text-sm font-bold text-secondary !leading-[100%]
				}

				.Place {
					@apply block font-bold text-sm md:text-base lg:text-lg xl:text-2xl text-secondary md:text-[#0A0A0A] leading-[100%] md:!leading-[150%]
				}

				.TimeStop {
					@apply space-y-2 xl:space-y-3;

					span {
						@apply block text-[#0A0A0A] font-bold text-xs lg:text-xl xl:text-2xl leading-[100%] xl:leading-[150%]
					}
				}
			}

			.Mid {
				@apply shrink-0 mt-6 xl:mt-8;

				img {
					@apply w-14 md:w-auto
				}
			}
		}
	}

}
</style>
