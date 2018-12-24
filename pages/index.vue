<template>
  <section>
    <div>
      <div>
        <nuxt-link to="/protected">Protected</nuxt-link>
        <nuxt-link to="/">Home</nuxt-link>
        <template v-if="user==null">
          <nuxt-link to="/auth/signin">Sign In</nuxt-link>
        </template>
        <template v-else>
          <a
            href="#"
            @click="signout"
          >Logout</a>
        </template>
      </div>
    </div>
    <template v-if="user != null">
      <h2>Updated with Cookie check in nuxt server init</h2>
      <p>Unprotected page --- anyone can see this</p>
    </template>
    <template v-else>
      <h2>Updated with Cookie and Logged Out. check in nuxt server init</h2>
      <p>Unprotected page --- anyone can see this</p>
    </template>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  middleware: 'authenticated',
  computed: {
    ...mapGetters('modules/user', ['user'])
  },
  methods: {
    ...mapActions('modules/user', ['logout']),
    async signout() {
      await this.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style>
a {
  padding: 5px;
}
</style>
