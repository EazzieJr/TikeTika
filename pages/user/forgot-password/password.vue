<template>
	<div class="ForgotEmail">
		<form action="">
			<div class="Inputs">
				<InputField type="password" placeholder="Create new Password" />
			</div>

			<button class="">
				Create password
			</button>
		</form>

		<div class="Others">
			<span>Don't have an account? <NuxtLink to="/user/signup/">Sign up</NuxtLink></span>
		</div>
	</div>
</template>

<script>
export default {
	layout: "onboarding",
	title: "Forgot Password",
	hint: "Create your Account,NameSelect AgeGenderPhone numberEmail Address (Optional)"
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