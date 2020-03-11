<template>
  <section>
    <b-carousel
      v-model="carousel"
      :animated="animated"
      :autoplay="true"
      :pause-hover="true"
      :interval="10000"
      :repeat="true">
      <b-carousel-item
        v-for="(recipe, i) in recipes"
        :key="i">
        <section :class="`hero is-medium is-primary is-bold`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ recipe.label }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
import Vue from 'vue'

module.exports = Vue.component('slideRecipe', {
  data () {
    return {
      recipes: [],
      carousel: 0,
      animated: 'fade'
    }
  },
  mounted: async function () {
    const response = await fetch('api/recipes')
    this.recipes = await response.json()
  }
})
</script>
