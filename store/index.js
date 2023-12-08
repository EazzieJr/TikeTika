export const state = () => ({
	bookings: [
		"Buses",
		"Entertainments",
		"Events",
	],

	selectedBooking: "Buses",
	menuOpened: false
})

export const mutations = {
	changeSelectedBooking(state, payload) {
		state.bookings = payload
	},

	toggleMenuState(state) {
		state.menuOpened = !state.menuOpened
	}
}