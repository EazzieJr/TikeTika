<template>
	<div class="Input">
		<template v-if="isPasswordField">
			<input ref="Input" :id="iid" :placeholder="placeholder" :type="reveal ? 'text' : 'password'" :value="value"
				@input.prevent="updateModel" @change="$emit('change', model)" @focus="focusOnInput" @blur="blurInput"
				tabindex="10" :autocomplete="`${autocomplete ? 'autocomplete' : 'off'}`" :readonly="readonly"
				:disabled="disabled">

			<div class="ToggleReveal center">
				<button type="button" @click.stop="toggleReveal" tabindex="-1">
					{{ reveal ? "Hide" : "Show" }}
				</button>
			</div>
		</template>

		<template v-else-if="type === 'numeric'">
			<input ref="Input" :id="iid" :placeholder="placeholder" type="text" :value="value" @keydown="acceptNumber"
				@input.prevent="updateModel" @change="$emit('change', model)" @focus="focusOnInput" @blur="blurInput"
				tabindex="10" :autocomplete="`${autocomplete ? 'autocomplete' : 'off'}`" :readonly="readonly"
				:disabled="disabled">
		</template>

		<template v-else>
			<input ref="Input" :id="iid" :placeholder="placeholder" :type="type || 'text'" :value="value" @input="updateModel"
				@change="$emit('change', model)" @blur="blurInput" tabindex="10"
				:autocomplete="`${autocomplete ? 'autocomplete' : 'off'}`" :readonly="readonly" :disabled="disabled">
		</template>
	</div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
	name: 'InputField',

	props: {
		type: String,
		id: String,
		name: String,
		label: String,
		placeholder: String,
		value: [String, Number],
		icon: String,
		src: String,
		rules: String,
		loading: Boolean,
		autofocus: Boolean,
		autocomplete: Boolean,
		large: Boolean,
		readonly: Boolean,
		disabled: Boolean,
		hint: Boolean,
		countryCode: Boolean
	},

	mounted() {
		if (this.countryCode) {
			this.countryCodes = codes
			this.$emit('code-selected', this.selectedCode);
		}
		this.focused = Boolean(this.model)

		// Generate internal ID
		this.iid = this.id || nanoid()
		// Automatically focus on input if the `autofocus` prop is set
		if (this.autofocus) this.focusOnInput()
	},

	data: () => ({
		iid: '', // Internal ID
		model: '',
		focused: false,
		reveal: false, // Controls the reveal state of a password field
		dropdownActive: false,
		selectedCode: "+234",
		countryCodes: null
	}),

	watch: {
		value: {
			immediate: true,
			handler(value) {
				// Update our instance' model based on the value prop.
				// This will make this component pick
				if (value && value != this.model) this.setModel(value)
			}
		}
	},

	computed: {
		isPasswordField() {
			return this.type === 'password'
		}
	},

	methods: {
		focusOnInput() {
			// Toggle only if the input has no value.
			if (!this.model.length) {
				// If focused is true, call the focus() method on the Input element,
				// Else, call the blur() method.
				this.focused = true
				// Debounce the focus() method call by 100ms.
				setTimeout(() => {
					document.getElementById(this.iid).focus()
				}, 100)
			}
		},

		blurInput() {
			// Update "focused" property only if the input has no value.
			if (!this.model.toString().length) this.focused = false
		},

		updateModel(e) {
			this.setModel(e.target.value)
			this.$emit('input', this.model)
		},

		setModel(data) {
			this.model = this.type === 'numeric' ? data.slice(0, 11) : data

			// this.model = this.type === 'numeric' ? this.$options.filters.format(data) : data
			this.focused = true
		},

		acceptNumber(ev) {
			const ACCEPTED_INPUT = [
				'Backspace', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'
			]
			if (!isNaN(ev.key) || ACCEPTED_INPUT.includes(ev.key)) {
				this.updateModel(ev)
			}
			else ev.preventDefault()
		},

		toggleReveal() {
			this.reveal = !this.reveal
		},

		toggle() {
			this.dropdownActive = !this.dropdownActive;
		},

		away() {
			if (this.dropdownActive) {
				this.dropdownActive = false;
				console.log('Clicked away');
			}
		},

		selectCode(code) {
			this.selectedCode = code.dial_code
			this.toggle()

			this.$emit('code-selected', this.selectedCode);
		}
	}
}
</script>

<style lang="postcss" scoped>
.Input {
	@apply rounded-lg border border-[#EBEBEB] w-full overflow-hidden flex bg-white;

	input {
		@apply w-full p-4 md:p-5 xl:p-6 leading-[157%] lg:leading-[133%] text-sm lg:text-base xl:text-lg font-medium text-[#0A0A0A] placeholder:text-secondary grow
	}

	div {
		@apply shrink-0 pr-4 md:pr-5 xl:pr-6;

		button {
			@apply text-primary-black font-bold text-xs lg:text-sm xl:text-base
		}
	}
}
</style>
