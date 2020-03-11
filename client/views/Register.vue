<template>
  <div>
    <h1>Register Page</h1>
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    crypt: function (plainTextPass) {
      const bcrypt = require('bcrypt')
      const saltRounds = 10
      const hash = bcrypt.hashSync(plainTextPass, saltRounds)
      this.password = hash
    }
  }
}
</script>
