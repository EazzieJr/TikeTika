<template>
	<div class="BusResult">
		<div class="Details">
			<div class="Main pr-8 lg:border-r">
				<div class="Top">
					<div class="Left">
						<div class="top start">
							<h2>
								Leaving on.
							</h2>

							<span>{{ $moment(data?.date).format("MMM Do YYYY") }}</span>
						</div>

						<div class="bottom">
							<div class="Box"></div>

							<div>
								<span class="BusName">
									{{ data?.name }}
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
								{{ data?.startTime }}
							</span>
						</div>
					</div>

					<div class="Mid ">
						<img src="/svg/ticket-mid.svg" alt="">

						<span>
							{{ calculateTimeDifference(data?.startTime, data?.endTime).hours }}hrs
							{{ calculateTimeDifference(data?.startTime, data?.endTime).minutes }}min
						</span>
					</div>

					<div class="To">
						<span class="Place">
							Dar es Salaam
						</span>

						<div class="TimeStop">
							<span>
								{{ data?.endTime }}
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="Main pl-8" v-if="data?.tripType !== 'go'">
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

		<div class="Proceed between">
			<div class="Left">
				<p>
					{{ data?.cabin }}
				</p>

				<span>
					Tzs {{ data?.normalPrice }}
				</span>
			</div>

			<div class="Right">
				<button class="Book" @click="bookBus">
					Book now
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => { }
		}
	},

	methods: {
		calculateTimeDifference(startTime, endTime) {
			const startMoment = this.$moment(startTime, 'hh:mm A');
			const endMoment = this.$moment(endTime, 'hh:mm A');

			const duration = this.$moment.duration(endMoment.diff(startMoment));

			const hours = duration.hours();
			const minutes = duration.minutes();

			return { hours, minutes };
		},

		async bookBus() {
			try {
				const data = await this.$axios.post('/bus', {
					plate: this.data?.plate,
				}, {
					headers: {
						"Access-Control-Allow-Origin": "*"
					}
				});

				console.log(data);
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>

<style lang="postcss" scoped>
.BusResult {
	@apply cursor-pointer bg-white rounded-lg p-6 lg:px-8;
	border: 0.5px solid #EBEBEB;

	.Details {
		@apply space-y-8 lg:space-y-0 lg:flex lg:divide-x divide-dashed lg:divide-border border-b border-dashed border-border;

		.Main {
			@apply w-full lg:w-1/2 space-y-2 md:space-y-4 lg:space-y-6 border-dashed border-border pb-6;

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

	.Proceed {
		@apply pt-4 lg:pt-6 pb-2;

		.Left {
			@apply space-y-2;

			p {
				@apply text-[8px] lg:text-[10px] font-bold text-secondary;
			}

			span {
				@apply block text-sm lg:text-lg font-bold text-primary-black
			}
		}

		.Right {
			@apply flex justify-end items-center;

			.Book {
				@apply text-primary bg-[#DFF6E4] rounded px-4 py-2 lg:px-8 lg:py-4 text-xs lg:text-base font-bold
			}
		}
	}
}
</style>
