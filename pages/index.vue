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

    <div class="Aims">
      <div class="Container constraint md:center">
        <div class="Aim col-center">
          <div class="Icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_330_4414)">
                <circle cx="32" cy="32" r="32" fill="#DFF6E4" />
                <path
                  d="M43.7736 26.6804L35.0403 19.6937C33.3336 18.3337 30.6669 18.3203 28.9736 19.6804L20.2403 26.6804C18.9869 27.6804 18.2269 29.6803 18.4936 31.2537L20.1736 41.307C20.5603 43.5604 22.6536 45.3337 24.9336 45.3337H39.0669C41.3203 45.3337 43.4536 43.5204 43.8403 41.2937L45.5203 31.2404C45.7603 29.6804 45.0003 27.6804 43.7736 26.6804ZM33.0003 40.0004C33.0003 40.547 32.5469 41.0004 32.0003 41.0004C31.4536 41.0004 31.0003 40.547 31.0003 40.0004V36.0004C31.0003 35.4537 31.4536 35.0004 32.0003 35.0004C32.5469 35.0004 33.0003 35.4537 33.0003 36.0004V40.0004Z"
                  fill="#2FA048" />
              </g>
              <defs>
                <clipPath id="clip0_330_4414">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <span>
            Our vision
          </span>

          <p>
            24 Kilimanjaro street, Arusha,Mbenya,Tanzania, 24 Kilimanjaro
          </p>
        </div>

        <div class="Aim col-center">
          <div class="Icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_330_4402)">
                <circle cx="32" cy="32" r="32" fill="#DFF6E4" />
                <path
                  d="M37.5202 19.9467L25.4802 23.9467C17.3868 26.6534 17.3868 31.0667 25.4802 33.7601L29.0535 34.9467L30.2402 38.5201C32.9335 46.6134 37.3602 46.6134 40.0535 38.5201L44.0668 26.4934C45.8535 21.0934 42.9202 18.1467 37.5202 19.9467ZM37.9468 27.1201L32.8802 32.2134C32.6802 32.4134 32.4268 32.5067 32.1735 32.5067C31.9202 32.5067 31.6668 32.4134 31.4668 32.2134C31.0802 31.8267 31.0802 31.1867 31.4668 30.8001L36.5335 25.7067C36.9202 25.3201 37.5602 25.3201 37.9468 25.7067C38.3335 26.0934 38.3335 26.7334 37.9468 27.1201Z"
                  fill="#2FA048" />
              </g>
              <defs>
                <clipPath id="clip0_330_4402">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <span>
            Our vision
          </span>

          <p>
            24 Kilimanjaro street, Arusha,Mbenya,Tanzania, 24 Kilimanjaro
          </p>
        </div>

        <div class="Aim col-center">
          <div class="Icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_330_4408)">
                <circle cx="32" cy="32" r="32" fill="#DFF6E4" />
                <path
                  d="M44.7472 30.3198L42.9338 28.2131C42.5872 27.8131 42.3072 27.0664 42.3072 26.5331V24.2664C42.3072 22.8531 41.1472 21.6931 39.7338 21.6931H37.4672C36.9472 21.6931 36.1872 21.4131 35.7872 21.0664L33.6805 19.2531C32.7605 18.4664 31.2538 18.4664 30.3205 19.2531L28.2272 21.0798C27.8272 21.4131 27.0672 21.6931 26.5472 21.6931H24.2405C22.8272 21.6931 21.6672 22.8531 21.6672 24.2664V26.5464C21.6672 27.0664 21.3872 27.8131 21.0538 28.2131L19.2538 30.3331C18.4805 31.2531 18.4805 32.7464 19.2538 33.6664L21.0538 35.7864C21.3872 36.1864 21.6672 36.9331 21.6672 37.4531V39.7331C21.6672 41.1464 22.8272 42.3064 24.2405 42.3064H26.5472C27.0672 42.3064 27.8272 42.5864 28.2272 42.9331L30.3338 44.7464C31.2538 45.5331 32.7605 45.5331 33.6938 44.7464L35.8005 42.9331C36.2005 42.5864 36.9472 42.3064 37.4805 42.3064H39.7472C41.1605 42.3064 42.3205 41.1464 42.3205 39.7331V37.4664C42.3205 36.9464 42.6005 36.1864 42.9472 35.7864L44.7605 33.6798C45.5338 32.7598 45.5338 31.2398 44.7472 30.3198ZM37.5472 29.4798L31.1072 35.9198C30.9205 36.1064 30.6672 36.2131 30.4005 36.2131C30.1338 36.2131 29.8805 36.1064 29.6938 35.9198L26.4672 32.6931C26.0805 32.3064 26.0805 31.6664 26.4672 31.2798C26.8538 30.8931 27.4938 30.8931 27.8805 31.2798L30.4005 33.7998L36.1338 28.0664C36.5205 27.6798 37.1605 27.6798 37.5472 28.0664C37.9338 28.4531 37.9338 29.0931 37.5472 29.4798Z"
                  fill="#2FA048" />
              </g>
              <defs>
                <clipPath id="clip0_330_4408">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <span>
            Our vision
          </span>

          <p>
            24 Kilimanjaro street, Arusha,Mbenya,Tanzania, 24 Kilimanjaro
          </p>
        </div>
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

  .Aims {
    @apply py-12 md:space-y-14 xl:space-y-16 bg-[#F7F7F7];

    .Container{
      @apply text-center space-y-12 md:space-y-0 md:space-x-6;

      .Aim {
        @apply mx-auto w-full max-w-[360px] lg:max-w-[300px] xl:max-w-[400px] md:m-0;

        .Icon {
          svg {
            @apply w-[58px] lg:w-auto
          }
        }

        span {
          @apply block text-lg md:text-xl lg:text-2xl font-bold text-[#0A0A0A] !leading-[150%] mt-3 md:mt-4 lg:mt-6 mb-4 lg:mb-3;
        }

        p {
          @apply font-medium text-sm xl:text-base text-[#484848]
        }
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