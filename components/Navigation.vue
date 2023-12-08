<template>
	<nav>
		<div class="NavContainer between constraint">
			<div class="Left start">
				<div class="Logo">
					<nuxt-link to="/">
						<img src="/svg/primary-logo.svg" alt="">
					</nuxt-link>
				</div>

				<div class="Bookings hidden md:start">
					<button :class="{'active' : booking == selectedBooking }" v-for="booking in bookings" :key="booking" @click="changeActiveBooking(booking)">
						{{ booking }}
					</button>
				</div>
			</div>

			<div class="Right start">
				<div class="Misc start">
					<nuxt-link to="/">
						Support
					</nuxt-link>

					<button>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_246_8690)">
								<path d="M0 0H24V24H0V0Z" fill="#0A0A0A" />
								<path
									d="M2.8125 0L11.9625 9.05L21.075 0H24V3.1L15 12.05L24 20.95V24H21L12 15.05L3.0375 24H0V21L8.9625 12.1L0 3.2V0H2.8125Z"
									fill="white" />
								<path
									d="M15.9 14.05L24 22V24L13.8375 14.05H15.9ZM9 15.05L9.225 16.8L2.025 24H0L9 15.05ZM24 0V0.15L14.6625 9.55L14.7375 7.35L22.125 0H24ZM0 0L8.9625 8.8H6.7125L0 2.1V0Z"
									fill="#C8102E" />
								<path d="M9.0375 0V24H15.0375V0H9.0375ZM0 8V16H24V8H0Z" fill="white" />
								<path d="M0 9.65V14.45H24V9.65H0ZM10.2375 0V24H13.8375V0H10.2375Z" fill="#C8102E" />
							</g>
							<defs>
								<clipPath id="clip0_246_8690">
									<rect width="24" height="24" rx="12" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</button>

					<nuxt-link to="/">
						Support
					</nuxt-link>
				</div>

				<div class="Actions start">
					<button class="Signin">
						Sign in
					</button>

					<button class="Login">
						Log in
					</button>

					<div class="MenuBurger">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 4.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 9.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 14.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 19.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
	data() {
		return {

		}
	},

	computed: {
		...mapState(["bookings", "selectedBooking"])
	},

	methods: {
		...mapMutations(["changeSelectedBooking"])
	}
}
</script>

<style lang="postcss">
nav {
	@apply bg-white sticky top-0;
	
	.NavContainer {
		.Left {
			@apply md:space-x-14 xl:space-x-16;

			.Logo {
				a {
					img {
						@apply w-7 md:w-10 lg:w-12 xl:w-auto
					}
				}
			}

			.Bookings {
				@apply space-x-5 xl:space-x-6;

				button {
					@apply 
				}
			}
		}
	}
}
</style>