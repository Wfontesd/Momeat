<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item
        :to="{ path: '/' }"
        tag="router-link">
        <img
          id="logo"
          :src="homeIcon_src"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/recipes">
        Recettes
      </b-navbar-item>
      <b-navbar-item href="recipes/favorites">
        Favoris
      </b-navbar-item>
      <b-navbar-item href="profile">
        Profile
      </b-navbar-item>
      <b-navbar-item href="/safe_ingredients">
        Aliments
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-primary"
            href="/register">
            <strong>Inscription</strong>
          </a>
          <a
            class="button is-light"
            href="login">
            Connexion
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Vue from 'vue'
import homeIcon from 'icons/momeat.png'

module.exports = Vue.component('navigation', {
  data () {
    return {
      homeIcon_src: homeIcon
    }
  }
})
</script>
