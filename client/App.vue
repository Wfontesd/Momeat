<template>
  <div class="container is-fluid">
    <navigation/>
    <router-view/>
  </div>
</template>
<script>
import slideRecipe from './views/component/slideRecipe.vue'
import navigation from './views/component/navigation.vue'

export default {
  components: {
    slideRecipe,
    navigation
  },
  data(){
    return{
      homeIcon_src: homeIcon  
    }
  }
}
</script>
