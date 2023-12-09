<template>
  <div class="Home">
    <section class="Hero">
      <div class="Container constraint">
        <div class="BookingTypes">
          <button class="start" :class="{ 'active': booking == selectedBooking }" v-for="booking in bookings" :key="booking"
            @click="changeSelectedBooking(booking)">
            <img :src="`/svg/${booking.toLowerCase()}-icon.svg`" alt="">
            
            <span>
              {{ booking }}
            </span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  name: 'IndexPage',

  data() {
    return {
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

<style lang="postcss" scoped></style>