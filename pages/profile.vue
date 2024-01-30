<template>
	<div class="Profile">
		<div class="Misc constraint">
			<div class="Container">
				<div class="Texts">
					<h1>
						Profile Details
					</h1>

					<p>
						Complete Your Profile for a Personalized Experience! Insert Your <br> Details to Get Started.
					</p>
				</div>

				<div class="Data">
					<InputField type="email" value="Jane@email.doe" readonly />

					<div class="Display">
						<span>
							+233 7062770716
						</span>

						<button @click="dispatchPhoneChange">
							Change
						</button>
					</div>

					<div class="Display">
						<span>
							Jane Doe
						</span>

						<button @click="dispatchNameChange">
							Change
						</button>
					</div>

					<div class="Display">
						<span>
							****************
						</span>

						<button @click="dispatchPassChange">
							Change
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="Aims">
			<div class="Container constraint md:center md:!items-start">
				<div class="Aim col-center">
					<div class="Icon">
						<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_330_4414)">
								<circle cx="32" cy="32" r="32" fill="#DFF6E4" />
								<path
									d="M43.7736 26.6804L35.0403 19.6937C33.3336 18.3337 30.6669 18.3203 28.9736 19.6804L20.2403 26.6804C18.9869 27.6804 18.2269 29.6803 18.4936 31.2537L20.1736 41.307C20.5603 43.5604 22.6536 45.3337 24.9336 45.3337H39.0669C41.3203 45.3337 43.4536 43.5204 43.8403 41.2937L45.5203 31.2404C45.7603 29.6804 45.0003 27.6804 43.7736 26.6804ZM33.0003 40.0004C33.0003 40.547 32.5469 41.0004 32.0003 41.0004C31.4536 41.0004 31.0003 40.547 31.0003 40.0004V36.0004C31.0003 35.4537 31.4536 35.0004 32.0003 35.0004C32.5469 35.0004 33.0003 35.4537 33.0003 36.0004V40.0004Z"
									fill="#2FA048" />
							</g>
							<defs>
								<clipPath id="clip0_330_4414">
									<rect width="64" height="64" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>

					<span>
						Our vision
					</span>

					<p>
						A reshaped more connected and transformed Africa.
					</p>
				</div>

				<div class="Aim col-center">
					<div class="Icon">
						<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_330_4402)">
								<circle cx="32" cy="32" r="32" fill="#DFF6E4" />
								<path
									d="M37.5202 19.9467L25.4802 23.9467C17.3868 26.6534 17.3868 31.0667 25.4802 33.7601L29.0535 34.9467L30.2402 38.5201C32.9335 46.6134 37.3602 46.6134 40.0535 38.5201L44.0668 26.4934C45.8535 21.0934 42.9202 18.1467 37.5202 19.9467ZM37.9468 27.1201L32.8802 32.2134C32.6802 32.4134 32.4268 32.5067 32.1735 32.5067C31.9202 32.5067 31.6668 32.4134 31.4668 32.2134C31.0802 31.8267 31.0802 31.1867 31.4668 30.8001L36.5335 25.7067C36.9202 25.3201 37.5602 25.3201 37.9468 25.7067C38.3335 26.0934 38.3335 26.7334 37.9468 27.1201Z"
									fill="#2FA048" />
							</g>
							<defs>
								<clipPath id="clip0_330_4402">
									<rect width="64" height="64" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>

					<span>
						Our Mission
					</span>

					<p>
						Is unequivocal: to empower, to connect and to usher Atrica's rise into limitless opportunities.
					</p>
				</div>

				<div class="Aim col-center">
					<div class="Icon">
						<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_330_4408)">
								<circle cx="32" cy="32" r="32" fill="#DFF6E4" />
								<path
									d="M44.7472 30.3198L42.9338 28.2131C42.5872 27.8131 42.3072 27.0664 42.3072 26.5331V24.2664C42.3072 22.8531 41.1472 21.6931 39.7338 21.6931H37.4672C36.9472 21.6931 36.1872 21.4131 35.7872 21.0664L33.6805 19.2531C32.7605 18.4664 31.2538 18.4664 30.3205 19.2531L28.2272 21.0798C27.8272 21.4131 27.0672 21.6931 26.5472 21.6931H24.2405C22.8272 21.6931 21.6672 22.8531 21.6672 24.2664V26.5464C21.6672 27.0664 21.3872 27.8131 21.0538 28.2131L19.2538 30.3331C18.4805 31.2531 18.4805 32.7464 19.2538 33.6664L21.0538 35.7864C21.3872 36.1864 21.6672 36.9331 21.6672 37.4531V39.7331C21.6672 41.1464 22.8272 42.3064 24.2405 42.3064H26.5472C27.0672 42.3064 27.8272 42.5864 28.2272 42.9331L30.3338 44.7464C31.2538 45.5331 32.7605 45.5331 33.6938 44.7464L35.8005 42.9331C36.2005 42.5864 36.9472 42.3064 37.4805 42.3064H39.7472C41.1605 42.3064 42.3205 41.1464 42.3205 39.7331V37.4664C42.3205 36.9464 42.6005 36.1864 42.9472 35.7864L44.7605 33.6798C45.5338 32.7598 45.5338 31.2398 44.7472 30.3198ZM37.5472 29.4798L31.1072 35.9198C30.9205 36.1064 30.6672 36.2131 30.4005 36.2131C30.1338 36.2131 29.8805 36.1064 29.6938 35.9198L26.4672 32.6931C26.0805 32.3064 26.0805 31.6664 26.4672 31.2798C26.8538 30.8931 27.4938 30.8931 27.8805 31.2798L30.4005 33.7998L36.1338 28.0664C36.5205 27.6798 37.1605 27.6798 37.5472 28.0664C37.9338 28.4531 37.9338 29.0931 37.5472 29.4798Z"
									fill="#2FA048" />
							</g>
							<defs>
								<clipPath id="clip0_330_4408">
									<rect width="64" height="64" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>

					<span>
						Our Guarantee
					</span>

					<p>
						We are not just an advisory firm; we architects of growth, creators of opportunities and champions of
						progress.
					</p>
				</div>
			</div>
		</div>

		<div class="NewsLetter">
			<div class="Container constraint md:col-center">
				<h5>
					Subscribe to get amazing offers <br> from us
				</h5>

				<form action="" class="between">
					<input type="text" placeholder="Your Email address">

					<button>
						Subscribe
					</button>
				</form>
			</div>
		</div>

		<Modal :title="title" :hint="hint" :type="modalType" @close="toggleModal" v-if="modalOpened">
			<form @submit.prevent="updatePhone" class="Form" v-if="change == 'phone'">
				<div class="Inputs">
					<InputField type="numeric" placeholder="Phone Number" v-model="user.phone" />
				</div>

				<button>
					Verify Phone Number
				</button>
			</form>

			<form @submit.prevent="updateName" class="Form" v-else-if="change == 'name'">
				<div class="Inputs">
					<InputField type="text" placeholder="Full Name" />
				</div>

				<button>
					Update name
				</button>
			</form>

			<form @submit.prevent="updatePassword" class="Form" v-else>
				<div class="Inputs">
					<InputField type="password" placeholder="Enter Old Password" v-model="user.oldPassword" />
					<InputField type="password" placeholder="Enter New Password" v-model="user.newPassword" />
					<InputField type="password" placeholder="Confirm New Password" v-model="user.confirmPassword" />
				</div>

				<button>
					Change Password
				</button>
			</form>
		</Modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			modalOpened: false,
			modalType: 'form',
			change: null,
			user: {
				phone: "",
				name: "",
				oldPassword: "",
				newPassword: "",
				confirmPassword: ""
			}
		}
	},

	computed: {
		title() {
			return this.modalType == 'form' ? "Checkout" : "Congratulations"
		},

		hint() {
			return this.modalType == 'form' ? "Make payment through your mobile money number" : "Payment successfully made"
		},
	},

	methods: {
		dispatchPhoneChange() {
			this.change = "phone"
			this.modalOpened = true
		},

		dispatchNameChange() {
			this.change = "name"
			this.modalOpened = true
		},

		dispatchPassChange() {
			this.change = "password"
			this.modalOpened = true
		},

		async updatePhone() {
			try {
				const { data } = await this.$axios.post("/authenticate/update", {
					phone: this.user.phone
				})
				// this.$store.commit("user/update", data)
				this.modalType = 'success'
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		},

		async updateName() {
			try {
				const { data } = await this.$axios.post("/authenticate/update", {
					name: this.user.name
				})
				// this.$store.commit("user/update", data)
				this.modalType = 'success'
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		},
		
		async updatePassword() {
			try {
				const { data } = await this.$axios.post("/authenticate/update", {
					password: this.user.newPassword
				})
				// this.$store.commit("user/update", data)
				this.modalType = 'success'
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		},

		submitForm() {
			this.modalType = 'success'
		},

		toggleModal() {
			this.modalOpened = !this.modalOpened
			this.modalType = "form"
		}
	}
}
</script>

<style lang="postcss" scoped>
.Profile {
	@apply bg-[#FCFCFC];

	.Misc {
		@apply py-12 md:py-16 lg:py-20 xl:py-24;

		.Container {
			@apply space-y-8 xl:space-y-12 max-w-[570px] mx-auto;

			.Texts {
				@apply space-y-3 xl:space-y-4;

				h1 {
					@apply text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold leading-[125%] xl:leading-[140%]
				}

				p {
					@apply text-sm lg:text-base xl:text-lg font-medium text-secondary leading-[157%] lg:leading-[133.33%]
				}
			}

			.Data {
				@apply space-y-4 lg:space-y-5 xl:space-y-6;

				.Display {
					@apply rounded-lg border border-[#EBEBEB] w-full overflow-hidden flex justify-between items-center bg-white p-4 md:p-5 xl:p-6;

					span {
						@apply text-sm xl:text-lg font-medium text-secondary leading-[150%] xl:leading-[133%];
					}

					button {
						@apply font-bold text-xs xl:text-base text-primary
					}
				}
			}
		}
	}


	.Aims {
		@apply py-12 md:space-y-14 xl:space-y-16 bg-[#F7F7F7];

		.Container {
			@apply text-center space-y-12 md:space-y-0 md:space-x-6 xl:space-x-10;

			.Aim {
				@apply mx-auto w-full max-w-[360px] lg:max-w-[300px] xl:max-w-[400px] md:m-0;

				.Icon {
					svg {
						@apply w-[58px] lg:w-auto
					}
				}

				span {
					@apply block text-lg md:text-xl lg:text-2xl font-bold text-[#0A0A0A] !leading-[150%] mt-3 md:mt-4 lg:mt-6 mb-4 lg:mb-3;
				}

				p {
					@apply font-medium text-sm xl:text-base text-[#484848]
				}
			}
		}
	}

	.NewsLetter {
		@apply bg-[#E0F6E5] py-8 md:py-14 lg:py-16 xl:py-20 relative overflow-hidden;

		.Container {
			@apply space-y-8 md:space-y-10 lg:space-y-14 xl:space-y-16 relative z-10;

			h5 {
				@apply text-lg md:text-2xl lg:text-3xl xl:text-[40px] font-bold !leading-[140%] text-[#0A0A0A] text-center
			}

			form {
				@apply lg:w-[430px] xl:w-[654px] space-x-3 lg:space-x-4;

				input {
					@apply bg-white py-3 md:py-4 xl:py-5 px-4 md:px-5 lg:px-6 w-full grow font-medium text-sm xl:text-lg placeholder:text-[#0A0A0A] leading-[133%] h-full
				}

				button {
					@apply bg-primary text-white self-stretch px-6 md:px-10 lg:px-12 xl:px-14 text-sm lg:text-base font-bold !leading-[100%] rounded
				}
			}
		}
	}

	.Form {
		@apply w-full space-y-8 lg:space-y-12 xl:space-y-16 mt-6 lg:mt-9 xl:mt-12;

		.Inputs {
			@apply space-y-4 lg:space-y-5 xl:space-y-6 w-full;
		}

		button {
			@apply rounded bg-primary w-full text-white py-4 lg:py-6 px-6 lg:px-12 text-xs lg:text-lg font-bold !leading-[100%];
		}
	}
}
</style>