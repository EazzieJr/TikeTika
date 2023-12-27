<template>
	<div class="Onboarding">
		<nav>
			<div class="NavContainer constraint">
				<div class="Logo">
					<nuxt-link to="/">
						<img src="/svg/primary-logo.svg" alt="">
					</nuxt-link>
				</div>
			</div>
		</nav>

		<div class="Layout">
			<div class="Left constraint">
				<header>
					<h1 v-html-safe="page.title">
					</h1>

					<p v-html-safe="page.hint"></p>
				</header>

				<main>
					<Nuxt />
				</main>
			</div>

			<div class="Right">

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'OnboardingRoot',

	data() {
		return {
			page: {
				title: null,
				hint: null,
				// options: null
			}
		}
	},

	watch: {
		'$route': {
			immediate: true,
			handler: 'updatePageData'
		}
	},

	methods: {
		updatePageData() {
			this.page = {
				title: this.$route?.meta?.title,
				hint: this.$route?.meta?.hint?.replace(
					`$${this.$route.meta?.hintPlaceholder}`,
					this.$route.query[this.$route.meta?.hintPlaceholder]
				),
				// options: this.$route?.meta?.hintOptions
			}
		},
	},

	mounted() {
	}
}
</script>

<style lang="postcss" scoped>
.Onboarding {
	@apply bg-[#FCFCFC] min-h-[100svh];
	
	nav {
		@apply bg-white sticky top-0 py-3.5 z-50;

		.NavContainer {
			.Logo {
				a {
					img {
						@apply w-7 md:w-10 lg:w-12 xl:w-auto
					}
				}
			}
		}
	}


	.Layout {
		@apply lg:flex lg:space-x-14 xl:space-x-16;

		.Left {
			@apply space-y-8 lg:space-y-10 xl:space-y-12 pt-12 lg:pt-16 xl:pt-[85px];

			header {
				@apply space-y-3 xl:space-y-4 lg:max-w-[440px] xl:max-w-[570px];

				h1 {
					@apply font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-[125%] xl:leading-[140%]
				}

				p {
					@apply text-sm lg:text-base xl:text-lg leading-[157%] xl:leading-[133%] text-secondary
				}
			}

			main {
				@apply lg:max-w-[440px] xl:max-w-[570px];

			}
		}

		.Right {
			@apply hidden lg:block fixed h-screen w-[49.16%] bg-primary right-0 top-0 bottom-0
		}
	}
}
</style>