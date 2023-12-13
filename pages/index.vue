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

    <section class="PopularRoutes">
      <div class="Container constraint">
        <div class="Top">
          <h2>
            Popular Routes
          </h2>

          <p>
            Search for Bus routes, Hotels, Restaurant, Search for Bus routes, Hotels, Restaurant
          </p>
        </div>

        <div class="Bottom">
          <div class="Routes start">
            <div v-for="(route, index) in routes" :key="index" class="Route Carousel-cell">
              <div class="Image">
                <img src="/images/route.png" alt="">
              </div>

              <div class="Content">
                <div class="Top between">
                  <div class="Left start">
                    <span>
                      {{ route.location.from }}
                    </span>

                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1114 7.44915C16.1238 7.48005 16.1288 7.5126 16.1363 7.54571C16.1418 7.56778 16.1549 7.58709 16.158 7.61081C16.1592 7.62074 16.1536 7.62957 16.1543 7.6395C16.1555 7.65109 16.1623 7.66157 16.1623 7.67371C16.1623 7.68364 16.1561 7.69247 16.1555 7.70295C16.1555 7.71398 16.1605 7.72336 16.1592 7.73495C16.1561 7.76143 16.1406 7.7824 16.1344 7.80778C16.1282 7.83702 16.1232 7.86571 16.1121 7.89384C16.104 7.91315 16.0972 7.93247 16.0872 7.95067C16.0686 7.98488 16.0438 8.01412 16.0202 8.04447C16.0034 8.06598 15.9892 8.08695 15.9693 8.10626C15.955 8.1206 15.942 8.1344 15.9258 8.14764C15.8942 8.17467 15.8576 8.19398 15.8203 8.2155C15.7955 8.22984 15.7725 8.24419 15.7458 8.25577C15.7266 8.26405 15.7086 8.27233 15.6881 8.2795C15.649 8.29274 15.6087 8.29771 15.5671 8.30488C15.5429 8.30874 15.5236 8.32143 15.4988 8.32309C15.3064 8.34074 10.7841 8.78377 9.9033 12.6994C9.88435 12.7834 9.84695 12.8634 9.79324 12.9346C9.73954 13.0059 9.67057 13.067 9.59028 13.1145C9.50999 13.1621 9.41996 13.1951 9.32531 13.2117C9.23067 13.2283 9.13327 13.2282 9.03868 13.2114C8.94408 13.1945 8.85415 13.1613 8.77401 13.1135C8.69387 13.0658 8.6251 13.0045 8.57161 12.9331C8.51812 12.8618 8.48097 12.7817 8.46228 12.6976C8.44359 12.6135 8.44373 12.5269 8.46268 12.4428C8.92199 10.4009 10.1956 9.1264 11.5245 8.32695H2.20365C2.00874 8.32695 1.82182 8.25812 1.684 8.13562C1.54618 8.01311 1.46875 7.84696 1.46875 7.67371C1.46875 7.50046 1.54618 7.3343 1.684 7.2118C1.82182 7.08929 2.00874 7.02047 2.20365 7.02047L11.5245 7.02047C10.1963 6.22047 8.92199 4.94598 8.46268 2.90405C8.4244 2.73432 8.46356 2.55801 8.57152 2.41393C8.67948 2.26985 8.84741 2.1698 9.03837 2.13578C9.22932 2.10176 9.42766 2.13656 9.58975 2.23253C9.75184 2.32849 9.8644 2.47776 9.90268 2.6475C10.7841 6.56309 15.3064 7.00612 15.4963 7.02322C15.5274 7.02598 15.5522 7.04033 15.582 7.0464C15.623 7.05412 15.6652 7.05633 15.7036 7.07012C15.7179 7.07564 15.7297 7.08336 15.7434 7.08943C15.7787 7.10488 15.8085 7.12529 15.8402 7.14516C15.8712 7.16391 15.9035 7.17881 15.9302 7.20198C15.9438 7.21302 15.955 7.22571 15.9674 7.23784C15.9923 7.26267 16.0096 7.29026 16.0307 7.31784C16.0506 7.34433 16.073 7.36805 16.0885 7.39784C16.0972 7.4144 16.104 7.4315 16.1114 7.44915Z"
                        fill="#DFF6E4" />
                    </svg>

                    <span>
                      {{ route.location.to }}
                    </span>
                  </div>

                  <div class="Right">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M25.9993 16.6668C25.9993 14.8268 27.4927 13.3335 29.3327 13.3335V12.0002C29.3327 6.66683 27.9993 5.3335 22.666 5.3335H9.33268C3.99935 5.3335 2.66602 6.66683 2.66602 12.0002V12.6668C4.50602 12.6668 5.99935 14.1602 5.99935 16.0002C5.99935 17.8402 4.50602 19.3335 2.66602 19.3335V20.0002C2.66602 25.3335 3.99935 26.6668 9.33268 26.6668H22.666C27.9993 26.6668 29.3327 25.3335 29.3327 20.0002C27.4927 20.0002 25.9993 18.5068 25.9993 16.6668Z"
                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.334 5.3335L13.334 26.6668" stroke="white" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" stroke-dasharray="5 5" />
                    </svg>
                  </div>
                </div>

                <div class="Bottom between">
                  <div class="Left">
                    <span>
                      From
                    </span>

                    <p>
                      Tsz {{ route.price }}
                    </p>
                  </div>

                  <div class="Right">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
let Flickity;
if (process.client) {
  Flickity = require('flickity');
}
import { mapState, mapMutations } from "vuex"

export default {
  name: 'IndexPage',

  data() {
    return {
      routes: [
        {
          image: '',
          location: {
            from: 'Mwanza',
            to: 'Mbenya'
          },
          price: 700
        },

        {
          image: '',
          location: {
            from: 'Mwanza',
            to: 'Mbenya'
          },
          price: 700
        },

        {
          image: '',
          location: {
            from: 'Mwanza',
            to: 'Mbenya'
          },
          price: 700
        },
        {
          image: '',
          location: {
            from: 'Mwanza',
            to: 'Mbenya'
          },
          price: 700
        },
        {
          image: '',
          location: {
            from: 'Mwanza',
            to: 'Mbenya'
          },
          price: 700
        },
        {
          image: '',
          location: {
            from: 'Mwanza',
            to: 'Mbenya'
          },
          price: 700
        },
        {
          image: '',
          location: {
            from: 'Mwanza',
            to: 'Mbenya'
          },
          price: 700
        },
      ],

      trip: {
        date: {
          start: '2023-12-12',
          end: '2023-12-12',
        }
      },

      flkty: null,
      partners: 6
    }
  },

  computed: {
    ...mapState(["bookings", "selectedBooking"])
  },

  methods: {
    ...mapMutations(["changeSelectedBooking"]),

    initFlkty() {
      const elem = document.querySelector('.PopularRoutes .Routes');

      //   elem.forEach(el => {
      // })

      this.flkty = new Flickity(elem, {
        // options
        cellAlign: 'left',
        // autoPlay: 5000,
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        pauseAutoPlayOnHover: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        hash: false,
        accessibility: true
      });

      let isScrollingHorizontally = false; // Initialize to false

      elem.addEventListener('wheel', (event) => {
        // Prevent the default behavior of the wheel event, which is scrolling the page
        event.preventDefault();

        // Calculate the absolute values of deltaX and deltaY
        const deltaX = Math.abs(event.deltaX);
        const deltaY = Math.abs(event.deltaY);

        // Set a threshold value (adjust as needed)
        const threshold = 50;

        // Check if the movement is primarily horizontal
        if (deltaX > deltaY && deltaX > threshold) {
          isScrollingHorizontally = true;
        } else {
          isScrollingHorizontally = false;
        }

        // Determine the scroll direction and perform actions based on whether it's horizontal or vertical
        if (isScrollingHorizontally) {
          // Horizontal scroll: Handle it as needed
          // For example, navigate between slides horizontally
          if (event.deltaX < 0) {
            // Scroll to the next slide
            this.flkty.next();
          } else {
            // Scroll to the previous slide
            this.flkty.previous();
          }
        }
      });
    },
  },

  mounted() {
    this.initFlkty();
  },
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

  .PopularRoutes {
    @apply py-8 md:py-12 lg:py-16 overflow-hidden;

    .Container {
      @apply space-y-6 lg:space-y-16;

      >.Top {
        @apply space-y-3 text-center mx-auto max-w-[342px] lg:max-w-[640px];

        h2 {
          @apply text-[#0A0A0A] text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold !leading-[138%]
        }

        p {
          @apply text-[#484848] text-sm lg:text-base xl:text-lg !leading-[133.33%]
        }
      }

      >.Bottom {
        /* @apply overflow-hidden; */
        
        .Routes {
          @apply w-full space-x-4 md:space-x-5 lg:space-x-6 relative;

          .Route {
            @apply w-80 lg:w-[400px] h-[380px] lg:h-[484px] shrink-0 relative rounded-sm;

            .Image {
              @apply w-full h-full overflow-hidden;

              img {
                @apply w-full h-full object-cover object-center;
              }
            }

            .Content {
              @apply absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-6 px-4 md:px-5 lg:px-6 space-y-6;

              .Top {
                .Left {
                  @apply space-x-2;

                  span {
                    @apply text-white text-lg md:text-xl lg:text-2xl font-bold !leading-[150%]
                  }

                  svg {
                    @apply w-3 md:w-4 lg:w-[18px]
                  }
                }

                .Right {
                  svg {
                    @apply w-6 md:w-7 lg:w-auto
                  }
                }
              }

              .Bottom {
                @apply items-end;
                
                .Left {
                  @apply space-y-1 lg:space-y-2;
                  
                  span {
                    @apply text-white text-[8px] md:text-[10px] lg:text-xs font-bold;                  
                  }

                  p {
                    @apply text-white text-xl lg:text-2xl font-bold !leading-[150%]
                  }
                }

                .Right {
                  button {
                    @apply bg-[#DFF6E4] text-primary text-sm font-bold !leading-[100%] py-3 lg:py-4 px-4 lg:px-6 rounded
                  }
                }
              }
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

    .Container {
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
}</style>