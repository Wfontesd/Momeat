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
        v-for="(carousel, i) in carousels"
        :key="i">
        <section :class="`hero is-medium is-${carousel.color} is-bold`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.title }}</h1>
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
      carousel: 0,
      animated: 'fade',
      carousels: [
        { title: 'Slide 1', color: 'dark' },
        { title: 'Slide 2', color: 'primary' },
        { title: 'Slide 3', color: 'info' },
        { title: 'Slide 4', color: 'success' },
        { title: 'Slide 5', color: 'warning' },
        { title: 'Slide 6', color: 'danger' }
      ]
    }
  }
})
</script>
