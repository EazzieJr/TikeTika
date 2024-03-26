<template>
	<div class="HotelResult md:start">
		<div class="Image">
			<!-- <img src="" alt=""> -->
		</div>

		<div class="Info md:col-between">
			<div class="Top">
				<div class="NameStars start">
					<span>
						Serengeti Hotel
					</span>

					<div class="Stars">
						<img src="/svg/decoy-stars.svg" alt="">
					</div>
				</div>

				<div class="Address start">
					<div class="Icon">
						<img src="/svg/map-icon.svg" alt="">
					</div>

					<p>
						22 Concert avenue, Serengeti, 22 Concert avenue, Serengeti Hotel, Dar es Salaam, Tanzania
					</p>
				</div>
			</div>

			<div class="Bottom between">
				<div class="Price">
					<p>
						{{ $t('From') }}
					</p>

					<span>
						Tzs 26000
					</span>
				</div>

				<button class="Book">
					Book Now
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.HotelResult {
	@apply md:space-x-8 lg:space-x-[58px] w-full rounded-lg lg:rounded-[10px] overflow-hidden md:p-6 lg:p-8 bg-white;

	.Image {
		@apply w-full md:w-[200px] lg:w-[272px] h-[200px] lg:h-[258px] overflow-hidden bg-secondary shrink-0 lg:rounded-lg;

		img {
			@apply w-full h-full object-cover object-center;
		}
	}

	.Info {
		@apply p-6 md:p-0 self-stretch md:grow space-y-[54px] md:space-y-0 w-full;

		.Top {
			@apply space-y-3 lg:space-y-6 w-full;

			.NameStars {
				@apply space-x-3 lg:space-x-4;

				span {
					@apply block leading-[26px] lg:leading-[46px] text-primary-black font-bold text-xl lg:text-[32px]
				}

				.Stars {
					img {
						@apply w-[90px] lg:w-[100px]
					}
				}
			}

			.Address {
				@apply space-x-1 md:space-x-2.5 lg:space-x-4 !items-start;

				.Icon {
					@apply shrink-0;

					img {
						@apply w-4 lg:w-6 shrink-0
					}
				}

				p {
					@apply text-xs lg:text-lg leading-[150%] lg:leading-[133%] font-medium text-secondary
				}
			}
		}

		.Bottom {
			@apply border-t-[0.5px] border-[#C2C2C2] border-dashed pt-3 lg:pt-4 w-full;

			.Price {
				@apply space-y-1 lg:space-y-2;

				p {
					@apply text-secondary text-[8px] lg:text-sm !leading-[100%] font-bold
				}

				span {
					@apply block font-bold text-lg lg:text-2xl leading-6 lg:leading-9 text-primary-black
				}
			}

			.Book {
				@apply text-primary bg-[#DFF6E4] rounded px-4 py-2 lg:px-8 lg:py-4 text-xs lg:text-base font-bold
			}
		}
	}
}
</style>