<template>
  <div class="Home">
    <section class="Hero">
      <div class="BgImage">
        <img :src="`/images/${selectedBooking.toLowerCase()}-bg.webp`" alt="">
      </div>

      <div class="Container constraint">
        <div class="BookingTypes start">
          <button class="start" :class="{ 'active': booking == selectedBooking }" v-for="booking in bookings"
            :key="booking" @click="changeSelectedBooking(booking)">
            <img :src="`/svg/${booking.toLowerCase()}-icon.svg`" alt="">

            <span>
              {{ booking }}
            </span>
          </button>
        </div>

        <h1>
          Search for Bus routes, Hotels, <br> Restaurant.
        </h1>

        <div class="Forms">
          <div class="Dropdowns start" v-if="selectedBooking == 'Buses'">
            <button class="Dropdown between">
              <span>
                Trip type
              </span>

              <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.32733 5.71653C7.13944 5.87924 6.86056 5.87924 6.67267 5.71653L1.08558 0.877964C0.73563 0.574897 0.949966 0 1.41291 0L12.5871 0C13.05 0 13.2644 0.574897 12.9144 0.877964L7.32733 5.71653Z"
                  fill="white" />
              </svg>
            </button>

            <button class="Dropdown between">
              <span>
                Class
              </span>

              <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.32733 5.71653C7.13944 5.87924 6.86056 5.87924 6.67267 5.71653L1.08558 0.877964C0.73563 0.574897 0.949966 0 1.41291 0L12.5871 0C13.05 0 13.2644 0.574897 12.9144 0.877964L7.32733 5.71653Z"
                  fill="white" />
              </svg>
            </button>
          </div>

          <form @submit.prevent="submit" action="">
            <div class="Destination">
              <div class="Input">
                <span>
                  From Where?
                </span>

                <input type="text" placeholder="Jo' Burg">
              </div>

              <div class="Swap" v-if="selectedBooking == 'Buses'">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="#2FA048" />
                  <path d="M32.5002 26.9902L27.4902 32.0102" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.5 26.9902H32.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.5 21.0102L20.51 15.9902" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M32.5 21.0098H15.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div class="Input" v-if="selectedBooking == 'Buses'">
                <span>
                  To Where?
                </span>

                <input type="text" placeholder="Jo' Burg">
              </div>
            </div>

            <div class="Date">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.2399 9.01318L24.7465 27.0532C24.4265 28.3999 23.2265 29.3332 21.8399 29.3332H4.31985C2.30651 29.3332 0.866535 27.3598 1.46653 25.4264L7.07986 7.3999C7.46652 6.14657 8.62654 5.27979 9.93321 5.27979H26.3332C27.5999 5.27979 28.6532 6.05312 29.0932 7.11979C29.3465 7.69312 29.3999 8.34652 29.2399 9.01318Z"
                  stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M21.333 29.3333H27.7063C29.4263 29.3333 30.773 27.88 30.653 26.16L29.333 8" stroke="#4F4F4F"
                  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.9062 8.50651L14.2929 2.74658" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.8398 8.52002L23.0932 2.7334" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.2666 16H20.9333" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.93359 21.3335H19.6003" stroke="#4F4F4F" stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <div class="Inputs start">
                <div class="Input">
                  <span>
                    {{ selectedBooking == 'Buses' ? 'Leaving on' : 'Check Date' }}
                  </span>

                  <!-- <input type="date"> -->
                  <input type="date" v-model="trip.date.start">
                </div>

                <div class="Input" v-if="selectedBooking == 'Buses'">
                  <span>
                    Returning on
                  </span>

                  <!-- <input type="date"> -->
                  <input type="date" v-model="trip.date.end">
                </div>
              </div>
            </div>

            <div class="Search md:end">
              <button submit>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <div class="Partners">
      <span>
        Our Partners
      </span>

      <div class="Lists center">
        <div v-for="partner in partners" :key="partner" class="Partner"></div>
      </div>
    </div>

    <div class="NewsLetter">
      <img src="/svg/newsletter-tl-bg.svg" alt="">
      <img src="/svg/newsletter-br-bg.svg" alt="">


      <div class="Container constraint md:between">
        <h5>
          Subscribe to our Email <br class="hidden md:block"> address to get discounts
        </h5>

        <form action="" class="between">
          <input type="text" placeholder="Your Email address">

          <button>
            Subscribe
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  name: 'IndexPage',

  data() {
    return {
      trip: {
        date: {
          start: '2023-12-12',
          end: '2023-12-12',
        }
      },

      partners: 6
    }
  },

  computed: {
    ...mapState(["bookings", "selectedBooking"])
  },

  methods: {
    ...mapMutations(["changeSelectedBooking"])
  }
}
</script>

<style lang="postcss" scoped>
.Home {
  .Hero {
    @apply relative h-[calc(100vh-52.5px)];

    .BgImage {
      @apply absolute top-0 left-0 w-full h-full overflow-hidden;

      img {
        @apply object-cover object-center w-full h-full;
      }
    }

    .Container {
      @apply py-12 lg:py-14 xl:py-16 relative z-20;

      .BookingTypes {
        @apply space-x-1 lg:space-x-2;

        button {
          @apply p-3 lg:p-4 space-x-1 lg:space-x-2 rounded-full bg-transparent text-xs lg:text-base font-bold !leading-[100%];

          img {
            @apply w-4 lg:w-6;
          }

          span {
            @apply block text-white
          }

          &.active {
            @apply bg-primary
          }
        }
      }

      h1 {
        @apply text-xl md:text-3xl lg:text-[40px] font-bold text-white !leading-[140%] mt-4 mb-8 lg:mt-8;
      }

      .Forms {
        @apply md:bg-[#1D2022] md:bg-opacity-60 md:px-10 lg:px-12 md:py-12 lg:py-16;

        .Dropdowns {
          @apply space-x-3;

          button {
            @apply bg-white bg-opacity-30 w-[84px] md:w-[118px] p-2 lg:px-4 lg:py-3 rounded;

            span {
              @apply text-white font-bold !leading-[125%] text-[8px] lg:text-xs
            }
          }
        }

        form {
          @apply w-full mt-3 mb-6 md:grid grid-cols-2 md:gap-x-4;

          .Destination,
          .Date {
            .Input {
              @apply space-y-1 lg:space-y-2 bg-white rounded overflow-hidden;

              span {
                @apply block text-[#646464] font-bold text-[8px] lg:text-xs !leading-[125%];
              }

              input {
                @apply text-[#1D1D1D] font-bold lg:font-medium text-lg !leading-[133.33%] pb-1 md:pb-0
              }
            }
          }

          .Destination {
            @apply relative grid md:grid-cols-2 gap-4;

            .Input {
              @apply py-2 lg:py-3 px-4 lg:px-6;
            }

            .Swap {
              @apply absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2;

              svg {
                @apply w-12
              }
            }
          }

          .Date {
            @apply w-full bg-white py-2 lg:py-3 px-4 flex items-start justify-normal space-x-2 mt-4 md:mt-0 relative rounded;

            svg {
              @apply w-5 h-5 lg:w-8 shrink-0
            }

            .Inputs {
              @apply w-full overflow-hidden;

              .Input {
                @apply rounded-none;

                &:nth-child(1) {
                  @apply border-dotted border-r-[0.5px] border-[#8E8E8E];
                }

                &:nth-child(2) {
                  @apply pl-4
                }

                input {
                  @apply !w-fit;

                  &::-webkit-calendar-picker-indicator {
                    @apply hidden
                  }
                }
              }
            }
          }

          .Search {
            @apply w-full mt-6 md:col-span-2;

            button {
              @apply w-full md:w-fit text-sm lg:text-base xl:text-lg font-bold text-white !leading-[100%] py-4 lg:py-6 px-12 lg:px-[94px] rounded bg-primary
            }
          }
        }
      }
    }
  }

  .Partners {
    @apply my-6 md:my-9 lg:mt-12 lg:mb-24 space-y-5 md:space-y-4 lg:space-y-[26px];

    span {
      @apply text-black text-lg md:text-2xl lg:text-[40px] font-bold text-center block space-y-[140%]
    }

    .Lists {
      @apply space-x-3 md:space-x-6 lg:space-x-10 xl:space-x-12;

      .Partner {
        @apply w-10 h-10 md:w-16 lg:w-20 xl:w-[100px] md:h-16 lg:h-20 xl:h-[100px] rounded-full bg-primary;
      }
    }
  }

  .NewsLetter {
    @apply bg-primary py-8 md:py-14 lg:py-16 xl:py-20 relative overflow-hidden;

    img {
      @apply absolute;

      &:nth-child(1) {
        @apply top-0 left-0
      }

      &:nth-child(2) {
        @apply bottom-0 right-0
      }
    }

    .Container {
      @apply space-y-8 md:space-y-0 relative z-10;

      h5 {
        @apply text-lg md:text-2xl lg:text-3xl xl:text-[40px] font-bold !leading-[140%] text-white
      }

      form {
        @apply p-2 lg:p-1 bg-white bg-opacity-30 rounded-sm lg:w-[430px] xl:w-[568px];

        input {
          @apply bg-transparent px-4 md:px-5 lg:px-6 w-full grow font-medium text-sm placeholder:text-white leading-[157%] h-full
        }

        button {
          @apply bg-white text-primary py-4 lg:py-5 xl:py-6 px-6 md:px-10 lg:px-12 xl:px-14 text-sm lg:text-base font-bold !leading-[100%] rounded-sm
        }
      }
    }
  }
}
</style>