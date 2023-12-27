<template>
	<div class="Login">
		<form action="">
			<div class="Inputs">
				<InputField type="email" placeholder="Email Address" />
				<InputField type="password" placeholder="Password" />
				<NuxtLink to="/user/forgot-password/email">Forgot Password</NuxtLink>
			</div>

			<button class="">
				Sign Up
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
	title: "Log in to your Account",
	hint: "Create your Account,NameSelect AgeGenderPhone numberEmail Address (Optional)"
}
</script>

<style lang="postcss" scoped>
.Login {
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

	.Others {
		@apply space-y-4 lg:space-y-5 xl:space-y-6;

		span {
			@apply text-sm lg:text-base xl:text-lg leading-[157%] xl:leading-[133%] text-secondary block font-medium;

			a {
				@apply text-primary font-bold
			}
		}
	}
}
</style>