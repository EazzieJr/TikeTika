<template>
	<div>
    <Navigation />
    
		<nuxt/>

    <Footer />
	</div>
</template>

<script>
import Lenis from '@studio-freight/lenis'

export default {
	methods: {
    initLenis() {
      const lenis = new Lenis({duration: 2})

      lenis.on('scroll', (e) => {
        // console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  }, 

  mounted() {
    this.initLenis()
  }
}
</script>

<style lang="postcss">
	
</style>