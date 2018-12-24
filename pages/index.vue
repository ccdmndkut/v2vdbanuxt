<template>
  <section>
    <div>
      <div>
        <nuxt-link to="/protected">Protected</nuxt-link>
        <nuxt-link to="/">Home</nuxt-link>
        <a
          href="#"
          @click="signout"
        >Logout</a>
      </div>
      <nuxt-link to="/auth/signin">Sign In</nuxt-link>
    </div>
    <h2>Updated with Cookie check in nuxt server init</h2>
    <p>Unprotected page --- anyone can see this</p>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'authenticated',
  methods: {
    ...mapActions('modules/user', ['logout']),
    async signout() {
      await this.logout()
      this.$router.push('/')
      // this.logout().then(() => {
      //   this.$router.push('/')
      // }).catch((error) => {
      //   console.log(error.message)
      // })
    }
  }
}
</script>

<style>
a {
  padding: 5px;
}
</style>
