<template>
	<div class="Checkout">
		<section class="constraint">
			<div class="Description">
				<h2>
					Description
				</h2>

				<p v-html="event?.description"></p>

				<div class="Follow">
					<span>
						Follow
					</span>

					<div class="Socials start">
						<a :href="event?.instagram" v-if="event?.instagram != null">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_247_10436)">
									<path
										d="M16.0049 0C9.32548 0 7.37174 0.006875 6.99174 0.038125C5.62111 0.1525 4.76799 0.368125 3.83861 0.83125C3.12236 1.18687 2.55736 1.59937 2.00049 2.1775C0.984861 3.23125 0.369861 4.52812 0.147361 6.06937C0.0392361 6.8175 0.00736111 6.97062 0.00111111 10.7931C-0.00138889 12.0675 0.00111111 13.7444 0.00111111 15.9937C0.00111111 22.67 0.00861111 24.6219 0.0404861 25.0012C0.151111 26.3356 0.360486 27.175 0.803611 28.0931C1.65049 29.8506 3.26736 31.17 5.17174 31.6625C5.83111 31.8325 6.55986 31.9256 7.49486 31.97C7.89111 31.9875 11.9299 31.9994 15.9711 31.9994C20.0124 31.9994 24.053 31.9944 24.4399 31.975C25.523 31.9237 26.1517 31.8394 26.8467 31.66C28.7636 31.165 30.3511 29.8656 31.2149 28.0831C31.6492 27.1869 31.8692 26.3156 31.9692 25.0512C31.9911 24.7756 31.9999 20.3794 31.9999 15.9894C31.9999 11.5987 31.9899 7.21062 31.9686 6.935C31.868 5.65 31.6474 4.78562 31.1992 3.8725C30.8311 3.125 30.423 2.56625 29.8299 1.99562C28.7711 0.984375 27.4767 0.36875 25.9342 0.14625C25.1861 0.03875 25.0374 0.006875 21.213 0H16.0049Z"
										fill="#484848" />
									<path
										d="M16.0049 0C9.32548 0 7.37174 0.006875 6.99174 0.038125C5.62111 0.1525 4.76799 0.368125 3.83861 0.83125C3.12236 1.18687 2.55736 1.59937 2.00049 2.1775C0.984861 3.23125 0.369861 4.52812 0.147361 6.06937C0.0392361 6.8175 0.00736111 6.97062 0.00111111 10.7931C-0.00138889 12.0675 0.00111111 13.7444 0.00111111 15.9937C0.00111111 22.67 0.00861111 24.6219 0.0404861 25.0012C0.151111 26.3356 0.360486 27.175 0.803611 28.0931C1.65049 29.8506 3.26736 31.17 5.17174 31.6625C5.83111 31.8325 6.55986 31.9256 7.49486 31.97C7.89111 31.9875 11.9299 31.9994 15.9711 31.9994C20.0124 31.9994 24.053 31.9944 24.4399 31.975C25.523 31.9237 26.1517 31.8394 26.8467 31.66C28.7636 31.165 30.3511 29.8656 31.2149 28.0831C31.6492 27.1869 31.8692 26.3156 31.9692 25.0512C31.9911 24.7756 31.9999 20.3794 31.9999 15.9894C31.9999 11.5987 31.9899 7.21062 31.9686 6.935C31.868 5.65 31.6474 4.78562 31.1992 3.8725C30.8311 3.125 30.423 2.56625 29.8299 1.99562C28.7711 0.984375 27.4767 0.36875 25.9342 0.14625C25.1861 0.03875 25.0374 0.006875 21.213 0H16.0049Z"
										fill="#484848" />
									<path
										d="M16.0049 0C9.32548 0 7.37174 0.006875 6.99174 0.038125C5.62111 0.1525 4.76799 0.368125 3.83861 0.83125C3.12236 1.18687 2.55736 1.59937 2.00049 2.1775C0.984861 3.23125 0.369861 4.52812 0.147361 6.06937C0.0392361 6.8175 0.00736111 6.97062 0.00111111 10.7931C-0.00138889 12.0675 0.00111111 13.7444 0.00111111 15.9937C0.00111111 22.67 0.00861111 24.6219 0.0404861 25.0012C0.151111 26.3356 0.360486 27.175 0.803611 28.0931C1.65049 29.8506 3.26736 31.17 5.17174 31.6625C5.83111 31.8325 6.55986 31.9256 7.49486 31.97C7.89111 31.9875 11.9299 31.9994 15.9711 31.9994C20.0124 31.9994 24.053 31.9944 24.4399 31.975C25.523 31.9237 26.1517 31.8394 26.8467 31.66C28.7636 31.165 30.3511 29.8656 31.2149 28.0831C31.6492 27.1869 31.8692 26.3156 31.9692 25.0512C31.9911 24.7756 31.9999 20.3794 31.9999 15.9894C31.9999 11.5987 31.9899 7.21062 31.9686 6.935C31.868 5.65 31.6474 4.78562 31.1992 3.8725C30.8311 3.125 30.423 2.56625 29.8299 1.99562C28.7711 0.984375 27.4767 0.36875 25.9342 0.14625C25.1861 0.03875 25.0374 0.006875 21.213 0H16.0049Z"
										fill="#484848" />
									<path
										d="M16.0049 0C9.32548 0 7.37174 0.006875 6.99174 0.038125C5.62111 0.1525 4.76799 0.368125 3.83861 0.83125C3.12236 1.18687 2.55736 1.59937 2.00049 2.1775C0.984861 3.23125 0.369861 4.52812 0.147361 6.06937C0.0392361 6.8175 0.00736111 6.97062 0.00111111 10.7931C-0.00138889 12.0675 0.00111111 13.7444 0.00111111 15.9937C0.00111111 22.67 0.00861111 24.6219 0.0404861 25.0012C0.151111 26.3356 0.360486 27.175 0.803611 28.0931C1.65049 29.8506 3.26736 31.17 5.17174 31.6625C5.83111 31.8325 6.55986 31.9256 7.49486 31.97C7.89111 31.9875 11.9299 31.9994 15.9711 31.9994C20.0124 31.9994 24.053 31.9944 24.4399 31.975C25.523 31.9237 26.1517 31.8394 26.8467 31.66C28.7636 31.165 30.3511 29.8656 31.2149 28.0831C31.6492 27.1869 31.8692 26.3156 31.9692 25.0512C31.9911 24.7756 31.9999 20.3794 31.9999 15.9894C31.9999 11.5987 31.9899 7.21062 31.9686 6.935C31.868 5.65 31.6474 4.78562 31.1992 3.8725C30.8311 3.125 30.423 2.56625 29.8299 1.99562C28.7711 0.984375 27.4767 0.36875 25.9342 0.14625C25.1861 0.03875 25.0374 0.006875 21.213 0H16.0049Z"
										fill="#484848" />
									<path
										d="M16.0075 4.10889C12.7762 4.10889 12.3706 4.12326 11.1019 4.18076C9.835 4.23889 8.97062 4.43889 8.21438 4.73326C7.43187 5.03701 6.76813 5.44326 6.10687 6.10389C5.445 6.76451 5.03875 7.42826 4.73375 8.20951C4.43875 8.96576 4.23812 9.83014 4.18125 11.0951C4.12437 12.3633 4.10938 12.7689 4.10938 15.9976C4.10938 19.2264 4.12375 19.6308 4.18125 20.8989C4.23937 22.1645 4.44 23.0283 4.73375 23.7845C5.03812 24.5664 5.44437 25.2295 6.10625 25.8908C6.7675 26.552 7.43125 26.9595 8.21312 27.2633C8.97 27.557 9.835 27.7576 11.1013 27.8158C12.3706 27.8733 12.7756 27.8876 16.0069 27.8876C19.2381 27.8876 19.6425 27.8733 20.9119 27.8158C22.1787 27.7576 23.0444 27.5576 23.8012 27.2633C24.5837 26.9595 25.2463 26.5526 25.9075 25.8914C26.5694 25.2308 26.9756 24.567 27.2806 23.7858C27.5731 23.0295 27.7737 22.1651 27.8331 20.9001C27.89 19.632 27.905 19.2276 27.905 15.9989C27.905 12.7701 27.89 12.3645 27.8331 11.0964C27.7737 9.83076 27.5731 8.96701 27.2806 8.21076C26.9756 7.42889 26.5694 6.76576 25.9075 6.10451C25.2456 5.44326 24.5837 5.03701 23.8006 4.73326C23.0419 4.43951 22.1769 4.23889 20.9106 4.18076C19.6412 4.12326 19.2375 4.10889 16.005 4.10889H16.0075ZM14.9406 6.25139C15.2575 6.25076 15.6106 6.25139 16.0081 6.25139C19.185 6.25139 19.5612 6.26264 20.8156 6.31951C21.9756 6.37264 22.605 6.56639 23.0244 6.72889C23.5794 6.94451 23.9756 7.20201 24.3919 7.61826C24.8081 8.03451 25.0662 8.43076 25.2825 8.98576C25.4456 9.40451 25.6394 10.0333 25.6925 11.1926C25.7494 12.4458 25.7619 12.8226 25.7619 15.9951C25.7619 19.1683 25.7494 19.5445 25.6925 20.7976C25.6394 21.957 25.4456 22.5858 25.2825 23.0045C25.0669 23.5595 24.8088 23.9545 24.3919 24.3701C23.9756 24.7864 23.58 25.0439 23.0244 25.2595C22.6056 25.4233 21.9756 25.6164 20.8156 25.6689C19.5612 25.7258 19.1844 25.7383 16.0081 25.7383C12.8312 25.7383 12.4544 25.7258 11.2006 25.6689C10.0406 25.6151 9.41125 25.422 8.99125 25.2589C8.43625 25.0433 8.03937 24.7858 7.62312 24.3695C7.20687 23.9533 6.94875 23.5583 6.7325 23.0033C6.56937 22.5845 6.37562 21.9558 6.3225 20.7964C6.26562 19.5433 6.25437 19.1664 6.25437 15.992C6.25437 12.817 6.26562 12.4426 6.3225 11.1895C6.37562 10.0301 6.56937 9.40139 6.7325 8.98201C6.94812 8.42701 7.20625 8.03076 7.62312 7.61451C8.03937 7.19826 8.43625 6.94076 8.99125 6.72451C9.41062 6.56076 10.0406 6.36764 11.2006 6.31451C12.2981 6.26514 12.7238 6.25014 14.9412 6.24764L14.9406 6.25139ZM22.3587 8.22576C21.5706 8.22576 20.9312 8.86389 20.9312 9.65201C20.9312 10.4395 21.5706 11.0789 22.3587 11.0789C23.1469 11.0789 23.7862 10.4401 23.7862 9.65201C23.7862 8.86389 23.1469 8.22514 22.3587 8.22576ZM16.0075 9.89264C12.6331 9.89264 9.8975 12.6264 9.8975 15.9983C9.8975 19.3701 12.6331 22.1026 16.0075 22.1026C19.3819 22.1026 22.1162 19.3701 22.1162 15.9983C22.1162 12.6264 19.3819 9.89264 16.0075 9.89264ZM16.0075 12.0351C18.1975 12.0351 19.9737 13.8095 19.9737 15.9983C19.9737 18.187 18.1981 19.9614 16.0075 19.9614C13.8169 19.9614 12.0412 18.187 12.0412 15.9983C12.0419 13.8089 13.8175 12.0351 16.0075 12.0351Z"
										fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_247_10436">
										<rect width="32" height="32" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</a>

						<a href="event?.twitter" v-if="event?.twitter != null">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_247_10443)">
									<path
										d="M27.2 0H4.8C2.14903 0 0 2.14903 0 4.8V27.2C0 29.851 2.14903 32 4.8 32H27.2C29.851 32 32 29.851 32 27.2V4.8C32 2.14903 29.851 0 27.2 0Z"
										fill="#484848" />
									<path
										d="M27.3125 9.49985C26.5625 9.87485 25.6875 10.1248 24.8125 10.2498C25.75 9.68735 26.4375 8.81235 26.8125 7.74985C25.9375 8.24985 25 8.62485 24 8.81235C23.3199 8.11575 22.4321 7.65851 21.4701 7.50925C20.508 7.36 19.5235 7.52678 18.6642 7.98457C17.805 8.44236 17.1174 9.16646 16.7047 10.0482C16.2919 10.93 16.1762 11.9218 16.375 12.8748C12.875 12.6873 9.5 11.0624 7.3125 8.24985C7.01485 8.72526 6.81425 9.25489 6.72226 9.80819C6.63027 10.3615 6.64872 10.9275 6.77654 11.4737C6.90436 12.0198 7.13903 12.5353 7.46701 12.9903C7.79498 13.4453 8.20979 13.8309 8.6875 14.1249C8 14.1249 7.3125 13.9999 6.6875 13.6874C6.75 15.7499 8.1875 17.5624 10.1875 17.9999C9.5625 18.1874 8.875 18.1874 8.1875 18.0624C8.8125 19.8749 10.5 21.1249 12.375 21.1874C10.5625 22.6874 8.125 23.3749 5.8125 22.9999C7.74495 24.2893 9.99993 25.0118 12.3219 25.0854C14.644 25.1591 16.9402 24.5808 18.9504 23.4163C20.9606 22.2518 22.6046 20.5476 23.6959 18.4967C24.7872 16.4458 25.2822 14.1302 25.125 11.8123C26 11.1873 26.75 10.4373 27.3125 9.49985Z"
										fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_247_10443">
										<rect width="32" height="32" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div class="TicketInfo">
				<h2>
					Ticket Info
				</h2>

				<div class="Tickets">
					<div class="Ticket between" v-for="(ticket) of tickets" :key="ticket.title">
						<div class="Left">
							<span class="Title">
								{{ ticket.title }}
							</span>

							<p>
								Tsh {{ ticket.price }}
							</p>
						</div>

						<div class="Right">
							<div class="Counter start">
								<button class="Reduce" @click="ticket.count--" :disabled="ticket.count == 0">
									-
								</button>

								<div class="Count center">
									<span>
										{{ ticket.count }}
									</span>
								</div>

								<button class="Add" @click="ticket.count++">
									+
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="Fare">
					<!-- <div :class="`Spans`" :style="`height: ${(tickets.length + 1) * 14 + (16*tickets.length)}px`"> -->
					<div class="Spans h-[104px] lg:h-[112px]">
						<span>
							Ticket Fare
						</span>

						<span v-for="ticket in filteredTickets" :key="ticket.title">
							{{ ticket.title }} X {{ ticket.count }}
						</span>
					</div>
				</div>

				<div class="TotalFare col-end">
					<p>
						Total Fare
					</p>

					<span>
						Tsh {{ totalPrice }}
					</span>
				</div>
			</div>
		</section>

		<div class="Footer" v-if="totalPrice > 0">
			<div class="Container constraint between">
				<div class="Left">
					<p>Total fare</p>

					<h4>
						Tsh {{ totalPrice }}
					</h4>
				</div>

				<div class="Right">
					<button @click="toggleModal">
						Checkout
					</button>
				</div>
			</div>
		</div>

		<Modal :title="title" :hint="hint" :type="modalType" @close="toggleModal" v-if="modalOpened">
			<form @submit.prevent="submitForm" class="Form">
				<div class="Inputs">
					<InputField type="text" placeholder="Name" v-model="name" />
					<InputField type="numeric" placeholder="Phone Number" v-model="phone" />
					<InputField type="email" placeholder="Email Address" v-model="email" />
					<InputField type="numeric" placeholder="Mobile money number" v-model="payPhone" />
				</div>

				<button>
					Pay Now
				</button>
			</form>
		</Modal>
	</div>
</template>

<script>
export default {
	async asyncData({ $axios, route }) {
		const { id } = route.query

		const response = await $axios.get(`/event/?id=${id}`)

		console.log("Response:", response)

		if (response.data.event) {
			const tiers = response.data.tiers
			const tiersLength = tiers.length
			const tickets = []
			const event = response.data.event

			for (let i = 0; i < tiersLength; i++) {
				tickets.push({
					title: tiers[i].tier,
					tierID: tiers[i].id,
					count: 0,
					price: tiers[i].price
				})
			}

			return {
				event,
				tickets,
				tiers
			}
		} else {
			return {
				event: null,
				tiers: [],
				tickets: []
			}
		}
		// return {
		// 	event: response.data.event,
		// 	tiers: response.data.tiers
		// }
	},

	data() {
		return {
			modalOpened: false,
			modalType: 'form',
			name: '',
			phone: '',
			email: '',
			payPhone: '',
			tickets: [],
			event: null,
			tiers: []
		}
	},

	computed: {
		filteredTickets() {
			console.log(this.tickets)
			const data = this.tickets?.filter((ticket) => {
				return ticket.count > 0
			})

			return data
		},

		totalPrice() {
			let price = 0
			this.filteredTickets.forEach(tk => {
				price += tk.price * tk.count
			})

			return price;

		},

		compiledTierItems() {
			return this.filteredTickets.map((ticket) => {
				return {
					tier: {
						tierID: ticket.tierID,
						price: ticket.price,
					},
					quantity: ticket.count,
				}
			})
		},

		title() {
			return this.modalType == 'form' ? "Checkout" : "Congratulations"
		},

		hint() {
			return this.modalType == 'form' ? "Make payment through your mobile money number" : "Payment successfully made"
		},

		// calculateHeight() {
		// 	const mobile = window.matchMedia('(max-width: 1023px)')

		// 	return (this.tickets.length + 1) * mobile.matches ? 14 : 16 + 16 * this.tickets.length;
		// }
	},

	methods: {
		async submitForm() {
			const { name, phone, email, payPhone, } = this

			const response = await this.$axios.post('/event', {
				name, phone, email, payPhone,
				items: this.compiledTierItems,
				amount: this.totalPrice
			})

			console.log(response)

			if (response.data.status == 200) {
				this.modalType = 'success'
			}
			// this.modalType = 'success'
		},

		toggleModal() {
			this.modalOpened = !this.modalOpened
			console.log(this.compiledTierItems)
		},

		increaseCount(index) {
			this.counts[index]++; // Increment the count at the specified index
		},

		decreaseCount(index) {
			console.log(this.modifiedTiers[index], this.counts[index]--)
			this.counts[index]--; // Decrement the count at the specified index
		}
	},

	async mounted() {
		const mobile = window.matchMedia('(max-width: 1023px)')
		const spans = document.querySelector(".Spans")
		const footer = document.querySelector('footer')

		footer.style.display = "none"

		if(this.event == null || this.tiers?.length == 0) {
			const { id } = this.$route.query
			const response = await this.$axios.get(`/event/?id=${id}`)
			
			this.event = response.data.event
			this.tiers = response.data.tiers
			const tiersLength = this.tiers?.length

			const event = response.data.event

			for (let i = 0; i < tiersLength; i++) {
				this.tickets.push({
					title: tiers[i].tier,
					tierID: tiers[i].id,
					count: 0,
					price: tiers[i].price
				})
			}

			console.log("Response from mounted hook", this.event)
		}

		// console.log("Response from mounted hook", response)
		// console.log("Event from mounted hook", this.event)
	}
}
</script>

<style lang="postcss" scoped>
.Checkout {
	@apply py-12 lg:py-14 xl:py-16 bg-[#FAFAFA] min-h-[100svh];

	section {
		@apply space-y-8 md:space-y-0 md:space-x-6 md:flex;

		.Description {
			@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 h-fit;
			box-shadow: 0px 2px 45px 0px rgba(0, 0, 0, 0.03);

			h2 {
				@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-secondary !leading-[150%] font-bold
			}

			p {
				@apply mt-4 md:mt-6 lg:mt-9 xl:mt-11 text-sm lg:text-base xl:text-xl text-[#0A0A0A] font-medium !leading-[150%];
			}

			.Follow {
				@apply mt-6 space-y-3;

				span {
					@apply block text-xs lg:text-sm font-medium leading-[126%] text-[#0A0A0A];
				}

				.Socials {
					@apply space-x-4
				}
			}
		}

		.TicketInfo {
			@apply border-[0.5px] border-[#EBEBEB] rounded-lg overflow-hidden p-6 pt-4 lg:p-8 lg:pt-6 md:w-80 xl:w-[400px] shrink-0;

			h2 {
				@apply pb-3 lg:pb-4 border-b border-dashed border-[#C2C2C2] text-xl lg:text-2xl text-[#0A0A0A] !leading-[150%] font-bold
			}

			.Tickets {
				@apply space-y-6 mt-4 md:mt-5 lg:mt-6;

				.Ticket {
					@apply lg:pb-8 last:p-0 lg:border-b border-dashed border-[#C2C2C2] last:border-none;

					.Left {
						@apply space-y-2;

						span {
							@apply text-xl lg:text-2xl text-[#0A0A0A] !leading-[150%] font-bold
						}

						p {
							@apply text-[8px] lg:text-[10px] font-bold leading-[125%] text-secondary
						}
					}

					.Right {
						.Counter {
							@apply space-x-6 lg:space-x-4 py-2 px-3 lg:px-4 rounded-sm border border-[#EBEBEB];

							button {
								@apply text-xl lg:text-2xl text-[#0A0A0A] !leading-[150%] font-bold
							}

							.Count {
								@apply w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 rounded-sm bg-primary;

								span {
									@apply text-white text-sm md:text-base lg:text-lg font-medium
								}
							}
						}
					}
				}
			}

			.Fare {
				@apply pt-6 border-t border-dashed border-[#C2C2C2] mt-6 lg:mt-8;

				.Spans {
					@apply space-y-4;

					span {
						@apply text-secondary block text-sm lg:text-base !leading-[100%] font-bold
					}
				}
			}

			.TotalFare {
				@apply space-y-2 border-t border-dashed border-[#C2C2C2] pt-6 mt-6 lg:mt-8;

				p {
					@apply text-xs lg:text-sm font-bold
				}

				span {
					@apply block text-xl lg:text-2xl text-[#0A0A0A] !leading-[150%] font-bold
				}
			}
		}
	}

	.Footer {
		@apply fixed bottom-0 left-0 right-0 bg-white py-6 lg:py-8;

		.Container {
			.Left {
				@apply space-y-1 lg:space-y-4;

				p {
					@apply md:text-right text-[8px] leading-[125%] lg:text-[18px] lg:leading-[100%] font-bold text-secondary
				}

				h4 {
					@apply text-xl lg:text-[32px] leading-[130%] lg:leading-[143%] font-bold text-primary
				}
			}

			.Right {
				button {
					@apply rounded bg-primary text-white py-4 lg:py-6 px-6 lg:px-12 text-xs lg:text-lg font-bold leading-[100%];
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
			@apply rounded bg-primary w-full text-white py-4 lg:py-6 px-6 lg:px-12 text-xs lg:text-lg font-bold leading-[100%];
		}
	}
}
</style>