<template>
	<div class="EventTicket">
		<div class="Main">
			<div class="Container">
				<div class="Box"></div>

				<div class="Texts">
					<h2>
						Afronations
					</h2>

					<div>
						<p>24 Kilimanjaro street, Arusha,Mbenya,24Kilimanjaro </p>
						<span>12:30PM - 12:00AM Mon-Sun</span>
					</div>
				</div>

				<div class="ReceiptNum">
					<span>
						Ticket no:23134552
					</span>
				</div>
			</div>

			<div class="TicketDetails">
				<div class="Top">
					<p>
						Name
					</p>

					<span>
						Bamigboye Salami
					</span>
				</div>

				<div class="Mid between">
					<div class="Left">
						<div class="Deat">
							<p>
								Gate
							</p>
	
							<span>
								01
							</span>
						</div>
	
						<div class="Deat">
							<p>
								Row
							</p>
	
							<span>
								02
							</span>
						</div>
						
						<div class="Deat">
							<p>
								Seat
							</p>
	
							<span>
								0123
							</span>
						</div>
					</div>

					<div class="Right">
						<div class="Deat">
							<p>
								Ammount
							</p>
	
							<span>
								Tsh 28,000
							</span>
						</div>
					</div>
				</div>

				<div class="Bottom between">
					<div class="Qr col-center">
						<img src="/svg/qr.svg" alt="">
					</div>

					<div class="TF">
						<p>
							Total Fare
						</p>

						<span>
							Tsh 260,000
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tripType: {
			type: String,
			default: "round trip"
		}
	},

	data() {
		return {
			ticketOpened: false
		}
	}
}
</script>

<style lang="postcss" scoped>
.EventTicket {
	@apply cursor-pointer;

	.Main {
		@apply w-full p-6 lg:px-8 bg-white rounded-[10px] space-y-4 lg:space-y-5 xl:space-y-6;
		border: 0.5px solid #EBEBEB;
		box-shadow: 0px 2px 45px 0px rgba(0, 0, 0, 0.03);

		.Container {
			@apply w-full space-x-1 lg:space-x-2 xl:space-x-3 flex pb-4 md:pb-5 xl:pb-6 border-b border-dotted border-border;

			/* @apply w-full max-w-[342px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[612px] space-y-2 md:space-y-4 lg:space-y-[18px] p-6 lg:px-8 bg-white rounded-[10px] mx-auto; */

			.Box {
				@apply bg-primary rounded w-4 lg:w-5 xl:w-6 h-4 lg:h-5 xl:h-6 shrink-0
			}

			.Texts {
				@apply grow space-y-3 lg:space-y-4;

				h2 {
					@apply text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-primary-black
				}

				>div {
					@apply max-w-[162px] lg:max-w-[242px] space-y-3;

					p {
						@apply text-secondary text-xs lg:text-sm xl:text-base leading-[150%] font-medium
					}

					span {
						@apply text-secondary text-[10px] lg:text-[10px] xl:text-xs !leading-[125%] font-bold block
					}
				}
			}

			.ReceiptNum {
				@apply bg-[#F7F7F7] rounded-full py-2 xl:py-2.5 px-3 xl:px-4 shrink-0 w-fit h-fit;

				span {
					@apply text-[#0A0A0A] block text-[8px] xl:text-[10px] leading-[125%] xl:leading-[100%] font-bold
				}
			}
		}

		.TicketDetails {
			/* @apply w-full rounded-[10px] mx-auto; */

			.Top {
				@apply space-y-1 lg:space-y-2 xl:space-y-3;

				p {
					@apply font-bold text-secondary text-[8px] lg:text-xs xl:text-sm
				}

				span {
					@apply text-xs md:text-base lg:text-xl xl:text-2xl font-bold text-primary-black leading-[100%] xl:leading-[150%]
				}
			}

			.Mid {
				.Left {
					@apply space-x-2 lg:space-x-4 xl:space-x-6 my-4 lg:my-5 xl:mt-6 xl:mb-8 flex;

					.Deat {
						@apply space-y-1 lg:space-y-2 xl:space-y-3;

						p {
							@apply font-bold text-secondary text-[8px] lg:text-xs xl:text-sm
						}

						span {
							@apply text-xs lg:text-base xl:text-lg text-primary-black font-bold !leading-[100%]
						}

						ul {
							@apply space-y-2;
							
							li {
								@apply text-[8px] text-primary-black leading-[125%] lg:text-[10px] xl:text-xs font-bold
							}
						}
					}
				}

				.Right {
					.Deat {
						@apply space-y-1 lg:space-y-2 xl:space-y-3;

						p {
							@apply font-bold text-secondary text-[8px] lg:text-xs xl:text-sm
						}

						span {
							@apply text-xs lg:text-base xl:text-lg text-primary-black font-bold !leading-[100%]
						}

						ul {
							@apply space-y-2;
							
							li {
								@apply text-[8px] text-primary-black leading-[125%] lg:text-[10px] xl:text-xs font-bold
							}
						}

						&:last-child {
							p {
								@apply text-right
							}
						}
					}
				}
			}

			.Bottom {
				@apply border-t border-dashed border-border pt-3 xl:pt-4;

				.Qr {
					@apply space-y-1;

					img {
						@apply w-8 lg:w-12 xl:w-auto
					}

					span {
						@apply text-center text-[8px] xl:text-[10px] font-bold
					}
				}

				.TF {
					@apply text-right space-y-1 xl:space-y-2;

					p {
						@apply font-bold text-secondary text-[8px] lg:text-xs xl:text-sm
					}

					span {
						@apply text-xs md:text-base lg:text-xl xl:text-2xl font-bold text-primary-black leading-[100%] xl:leading-[150%]
					}
				}
			}

			span {
				@apply block
			}
		}
	}

}
</style>
