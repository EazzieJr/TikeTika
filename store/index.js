import Cookies from "js-cookie";

export const state = () => ({
	bookings: [
		"Buses",
		"Entertainment",
		"Events",
	],

	userData: {},
	
	tempBusBooking: {},
	selectedBooking: "Buses",
	menuOpened: false,
	token: null,
})

export const mutations = {
	changeSelectedBooking(state, payload) {
		state.selectedBooking = payload
	},

	toggleMenuState(state) {
		state.menuOpened = !state.menuOpened
	},

	setToken(state, token) {
		state.token = token;
	},

	setTempBusBooking(state, payload) {
		state.tempBusBooking = payload
	},

	updateUser(state, user) {
		state.userData = user;
	}
}

export const actions = {
	async signup({ commit }, { name, phone, email, password, rpassword }) {
		try {
			// Make an API request to signup endpoint
			const response = await this.$axios.post('/authenticate/register/', { name, phone, email, password, rpassword });

			console.log('Signup:', response.data)

			// Extract user and token from the response (adjust based on your API structure)
			const { data } = response.data;

			console.log(data)
			// commit('setCode', data);
			// console.log(state.code)
			// Save token to local storage for persistence (optional)
			// localStorage.setItem('token', token);

			return { response: response.data };
		} catch (error) {
			console.log(error)
			// Handle error, possibly show a user-friendly message
			throw error;
		}
	},

	async signin({ commit }, { email, password }) {
		try {
			// Make an API request to signup endpoint
			const response = await this.$axios.post('/authenticate/login/', { email, password });

			console.log('Signup:', response.data)

			// Extract user and token from the response (adjust based on your API structure)
			const { token } = response.data;

			Cookies.set('token', token, { expires: 3 });
			// commit('setCode', data);
			// console.log(state.code)
			// Save token to local storage for persistence (optional)
			// localStorage.setItem('token', token);

			return { response: response.data };
		} catch (error) {
			console.log(error)
			// Handle error, possibly show a user-friendly message
			throw error;
		}
	},

	async forgotPassword({ commit }, { email }) {
		try {
			// Make an API request to signup endpoint
			const response = await this.$axios.post('/authenticate/forgot/', { email });

			console.log('Forgot:', response)

			return { response: response.data };
		} catch (error) {
			console.log(error)
			// Handle error, possibly show a user-friendly message
			throw error;
		}
	},

	async resetPassword({ commit }, { email, password, rpassword }) {
		try {
			// Make an API request to signup endpoint
			const response = await this.$axios.post(`/authenticate/reset/?token=${Cookies.get('token')}`, { email, password, rpassword });

			console.log('Reset:', response)

			return { response: response.data };
		} catch (error) {
			console.log(error)
			// Handle error, possibly show a user-friendly message
			throw error;
		}
	},

	async createToken({ commit }) {
		try {
			const response = await this.$axios.get('authenticate/token/');
			console.log("Token:", response)

			const { token } = response.data;
			// const { id } = response.data.data.brand.brand_user;
			commit('setToken', token);
			// console.log(token)
			// commit('setUserId', id);

			// // Save token to Cookie
			Cookies.set('token', token, { expires: 3 });
			return { response: response.data };
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
};

export const getters = {
	user: state => state.user,
	code: state => state.code,
};