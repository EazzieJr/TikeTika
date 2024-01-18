<template>
	<div class="BusResult" @click="ticketOpened = !ticketOpened">
		<div class="Details">
			<div class="Main">
				<div class="Top">
					<div class="Left">
						<div class="top start">
							<h2>
								Leaving on.
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
							Dar es Salaam
						</span>

						<div class="TimeStop">
							<span>
								09:00am
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="Main">
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
									<span>Plate np: 231345455</span>
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
							Dar es Salaam
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
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="postcss" scoped>
.BusResult {
	@apply cursor-pointer bg-white rounded-lg p-6 lg:px-8;
	border: 0.5px solid #EBEBEB;

	.Details {
		@apply space-y-8 lg:space-y-0 lg:flex lg:divide-x divide-dashed lg:divide-border lg:border-b border-dashed border-border;

		.Main {
			@apply w-full lg:w-1/2 space-y-2 md:space-y-4 lg:space-y-6 lg:first:pr-8 lg:last:pl-8 border-b border-dashed border-border lg:border-none pb-6;

			.Top {
				@apply flex justify-between;

				.Left {
					@apply space-y-3;

					.top {
						@apply space-x-1 lg:space-x-2 pl-6 xl:pl-11;

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
							@apply space-y-2;

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
				@apply flex justify-between space-x-2 pl-6 xl:pl-11;

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
</style>
