<template>
	<nav>
		<div class="NavContainer between constraint">
			<div class="Left start">
				<div class="Logo">
					<nuxt-link to="/">
						<img src="/svg/primary-logo.svg" alt="">
					</nuxt-link>
				</div>

				<div class="Bookings hidden lg:start">
					<button :class="{ 'active': booking == selectedBooking }" v-for="booking in bookings" :key="booking"
						@click="changeSelectedBooking(booking)">
						{{ $t(booking) }}
					</button>
				</div>
			</div>

			<div class="Right start">
				<div class="Misc start">
					<button>
						Support
					</button>

					<Dropdown class="Dropdown LanguageToggler">
						<template #toggler>
							<div class="DropdownToggler">
								<img :src="`/svg/${selectedLanguage.name}-flag.svg`" alt="">
							</div>
						</template>

						<DropdownContent class="Content min-w-[200px] !mt-7 !-left-[100px] space-y-3.5 !p-4">
							<div class="Item start space-x-3 cursor-pointer" v-for="language in languages" :key="language.name"
								@click="selectLanguage(language)">
								<img :src="`/svg/${language.name}-flag.svg`" alt="">

								<span class="capitalize font-bold text-sm text-[#2FA048]">
									{{ language.name }}
								</span>
							</div>
						</DropdownContent>
					</Dropdown>

					<button>
						Reference Number
					</button>
				</div>

				<div class="Actions start">
					<button class="Signin" @click="$router.push('/user/signup')">
						{{ $t('Sign up') }}
					</button>

					<button class="Login" @click="$router.push('/user/login')">
						{{ $t('Log in') }}
					</button>

					<div class="MenuBurger" @click="toggleMenu">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
							v-if="!menuOpened">
							<path d="M3 4.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 9.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 14.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M3 19.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>

						<svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
							<path d="M12.75 23.25L23.25 12.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
								stroke-linejoin="round" />
							<path d="M23.25 23.25L12.75 12.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</div>
				</div>
			</div>
		</div>

		<div class="MenuDropdown" v-if="menuOpened">
			<div class="Container">
				<div class="Top">
					<div class="Services">
						<button class="Top between" @click="servicesToggled = !servicesToggled">
							<span>
								Services
							</span>

							<svg class="duration-300" :class="{ 'rotate-180': servicesToggled }" width="24" height="24"
								viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
									stroke="#2FA048" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
						</button>

						<ul v-if="servicesToggled">
							<li @click="toggleMenu">
								<nuxt-link to="/">Buses</nuxt-link>
							</li>
							<li @click="toggleMenu">
								<nuxt-link to="/">Entertainment</nuxt-link>
							</li>

							<li @click="toggleMenu">
								<nuxt-link to="/">Events</nuxt-link>
							</li>
						</ul>
					</div>

					<nuxt-link to="/reference-number">
						Reference number
					</nuxt-link>

					<div class="Support">
						<button class="Top between" @click="supportToggled = !supportToggled">
							<span>
								Support
							</span>

							<svg class="duration-300" :class="{ 'rotate-180': supportToggled }" width="24" height="24"
								viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
									stroke="#2FA048" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
						</button>

						<ul v-if="supportToggled">
							<li @click="toggleMenu">
								<a href="mailto:MMConnect@gmail.com">
									MMConnect@gmail.com
								</a>
							</li>

							<li @click="toggleMenu">
								<a href="tel: +2337062770716">
									+2337062770716
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="Buttons">
					<button @click="$router.push('/user/signup')">
						Sign up
					</button>

					<button @click="$router.push('/user/login')">
						Login
					</button>
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
			servicesToggled: false,
			supportToggled: false,
			selectedLanguage: {
				name: "english",
				code: "en"
			},

			languages: [
				{
					name: "english",
					code: "en"
				},
				{
					name: "swahili",
					code: "sw"
				}
			]
		}
	},

	computed: {
		...mapState(["menuOpened", "bookings", "selectedBooking"])
	},

	methods: {
		...mapMutations(["changeSelectedBooking", "toggleMenuState"]),

		toggleMenu() {
			this.toggleMenuState()
		},

		selectLanguage(language) {
			this.selectedLanguage = language
			this.$i18n.locale = language.code
			// this.$router.push(this.switchLocalePath(language.code))
			console.log(this.$i18n.locale)
		}
	}
}
</script>

<style lang="postcss">
nav {
	@apply bg-white sticky top-0 py-3.5 z-50;

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
					@apply text-secondary font-bold xl:text-lg !leading-[100%] relative;

					&.active {
						@apply text-primary;

						&::after {
							@apply absolute -bottom-2 left-[50%] -translate-x-1/2 rounded-full w-1 h-1 bg-primary;
							content: '';
						}
					}
				}
			}
		}

		.Right {
			@apply space-x-4 xl:space-x-6;

			.Misc {
				@apply space-x-3 md:space-x-4 xl:space-x-6;

				>button {
					@apply text-xs xl:text-sm font-bold text-secondary;

					&:nth-child(3) {
						@apply hidden md:block
					}

					svg {
						@apply w-4 lg:w-5 xl:w-6
					}
				}

				.LanguageToggler {
					@apply relative;

					.DropdownToggler {
						@apply w-6 h-6 rounded-full overflow-hidden;

						img {
							@apply w-full h-full object-cover
						}
					}
				}
			}

			.Actions {
				@apply space-x-4;

				.Signin,
				.Login {
					@apply hidden md:block rounded px-6 py-2.5 xl:px-12 xl:py-4 !leading-[100%] xl:text-lg font-bold
				}

				.Signin {
					@apply text-primary bg-[#DFF6E4]
				}

				.Login {
					@apply bg-primary text-white
				}

				.MenuBurger {
					@apply md:hidden
				}
			}
		}
	}

	.MenuDropdown {
		@apply fixed left-0 right-0 top-[52.5px] bg-white z-50 py-12 px-5;

		.Container {
			@apply space-y-12;

			>.Top {
				@apply space-y-8;

				>a,
				.Services span,
				.Support span {
					@apply block text-2xl leading-[125%] text-[#484848] font-bold
				}

				.Services {
					@apply space-y-6;

					.Top {
						@apply w-full
					}

					ul {
						@apply space-y-4;

						li {
							@apply block;

							a {
								@apply font-bold leading-[100%] text-sm text-[#484848] block
							}
						}
					}
				}

				.Support {
					@apply space-y-6;

					.Top {
						@apply w-full
					}

					ul {
						@apply space-y-4;

						li {
							@apply block;

							a {
								@apply font-bold leading-[100%] text-sm text-primary block
							}
						}
					}
				}
			}

			.Buttons {
				@apply space-y-4;

				button {
					@apply rounded py-4 w-full block leading-[100%] font-bold text-sm;

					&:nth-child(1) {
						@apply bg-[#DFF6E4] text-primary
					}

					&:nth-child(2) {
						@apply bg-primary text-white
					}
				}
			}
		}
	}
}
</style>