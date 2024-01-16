<template>
	<div class="ForgotEmail">
		<form @submit.prevent="resetPassword">
			<div class="Inputs">
				<InputField type="email" placeholder="Email Address" v-model="user.email" />
				<InputField type="password" placeholder="Create Password" v-model="user.password" />
				<InputField type="password" placeholder="Confirm Password" v-model="user.rpassword" />
			</div>

			<button class="">
				Create password
			</button>
		</form>
	</div>
</template>

<script>
export default {
	layout: "onboarding",
	title: "Forgot Password",
	hint: "Create your Account,NameSelect AgeGenderPhone numberEmail Address (Optional)",

	data() {
		return {
			user: {
				email: "",
				password: "",
				rpassword: "",
			}
		}
	},

	methods: {
		async resetPassword() {
			try {
				const { data } = await this.$store.dispatch("resetPassword", this.user);

				console.log(data);
				this.$router.push("password");
			} catch (error) {
				console.log(error);
			}
		}
	},
	
	async mounted() {
		try {
			await this.$store.dispatch("createToken")
		} catch (error) {
			console.log(error);
		}
	}
}
</script>

<style lang="postcss" scoped>
.ForgotEmail {
	@apply space-y-6;

	form {
		@apply space-y-8 lg:space-y-10 xl:space-y-12;

		.Inputs {
			@apply space-y-4 lg:space-y-5 xl:space-y-6;

			a {
				@apply text-primary font-bold text-right block
			}
		}

		button {
			@apply block mx-auto w-full py-4 lg:py-5 xl:py-6 rounded bg-primary text-white font-bold !leading-[100%] text-sm lg:text-base xl:text-lg mt-8 lg:mt-12 xl:mt-16
		}
	}
}
</style>