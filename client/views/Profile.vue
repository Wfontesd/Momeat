<template>
  <div>
    <h1>Profile Page</h1>
    <h3>{{ text }}</h3>
  </div>
</template>

<script>

export default {
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
