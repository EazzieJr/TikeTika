import Cookies from "js-cookie";

export const state = () => ({
	bookings: [
		"Buses",
		"Entertainment",
		"Events",
	],

	user: null,
	
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
}

export const actions = {
	async signup({ commit, state }, { email, password }) {
		try {
			// Make an API request to signup endpoint
			const response = await this.$axios.post('/auth/signup', { user_type: "brand", email, password });

			console.log('Signup:', response.data)

			// Extract user and token from the response (adjust based on your API structure)
			const { data } = response.data;

			// Commit mutations to update state
			// commit('setUser', user);
			// commit('setToken', token);
			commit('setCode', data);
			console.log(state.code)
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
			const response = await this.$axios.post('/auth/login', { user_type: "brand", email, password });

			console.log('Signin:', response)

			const { data } = response.data;

			commit('setCode', data);

			return { response: response.data };
		} catch (error) {
			console.error(error);
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