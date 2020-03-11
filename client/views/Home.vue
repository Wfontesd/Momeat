<template>
  <div>
    <slideRecipe/>
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
import slideRecipe from './component/slideRecipe.vue'
export default {
  components: {
    slideRecipe
  },
  data () {
    return {
      text: 'fetching...'
    }
  },
  mounted: async function () {
    const response = await fetch('api/profile/1')
    this.text = await response.json()
  }
}
</script>
