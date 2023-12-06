<template>
	<div>
		<nuxt/>
	</div>
</template>

<script>
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