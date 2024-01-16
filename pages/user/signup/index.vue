<template>
	<div class="Signup">
		<form @submit.prevent="signup">
			<div class="Inputs">
				<InputField type="text" placeholder="Name" v-model="user.name" />
				<InputField type="numeric" placeholder="Phone Number" v-model="user.phone" />
				<InputField type="email" placeholder="Email Address" v-model="user.email" />
				<InputField type="password" placeholder="Create Password" v-model="user.password" />
				<InputField type="password" placeholder="Confirm Password" v-model="user.rpassword" />
			</div>

			<button class="">
				Sign Up
			</button>
		</form>

		<div class="Others">
			<span>Already have an account? <NuxtLink to="/user/login/">Log in</NuxtLink></span>

			<span class="Terms">
				By clicking Sign up, you agree to abide by our <NuxtLink to="/">Terms of Service</NuxtLink> and <NuxtLink to="/">
					Privacy Policy</NuxtLink>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	layout: "onboarding",
	title: "Create your Account",
	hint: "Create your Account,NameSelect AgeGenderPhone numberEmail Address (Optional)",

	data() {
		return {
			user: {
				name: "",
				phone: "",
				email: "",
				password: "",
				rpassword: "",
			}
		}
	},

	methods: {
		async signup() {
			try {
				const { data } = await this.$store.dispatch("signup", this.user);

				console.log(data);
				this.$router.push("/user/login/");
				// this.$store.commit("user/setUser", data);
				// this.$router.push("/user/profile/");
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>

<style lang="postcss" scoped>
.Signup {
	@apply space-y-6;

	form {
		@apply space-y-8 lg:space-y-10 xl:space-y-12;

		.Inputs {
			@apply space-y-4 lg:space-y-5 xl:space-y-6
		}

		button {
			@apply block mx-auto w-full py-4 lg:py-5 xl:py-6 rounded bg-primary text-white font-bold !leading-[100%] text-sm lg:text-base xl:text-lg mt-8 lg:mt-12 xl:mt-16
		}
	}

	.Others {
		@apply space-y-4 lg:space-y-5 xl:space-y-6;

		span {
			@apply text-sm lg:text-base xl:text-lg leading-[157%] xl:leading-[133%] text-secondary block font-medium;

			a {
				@apply text-primary font-bold
			}

			&.Terms {
				@apply pt-4 lg:pt-5 xl:pt-6 mt-4 lg:mt-5 xl:mt-6 border-t border-dotted border-border;
				
				a {
					@apply underline font-medium
				}
			}
		}
	}
}
</style>