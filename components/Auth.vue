<template>
  <div>
    <div class="links">
      <a @click="login()" class="button--green">Log In</a>
      <a @click="logout()" class="button--green">Log Out</a>
    </div>
    <hr />
    <h3 class="sectionTitle">Firebase Authentication</h3>
    <div>
      <b-form-group :label-cols="2" horizontal label="Email" label-for="Email">
        <b-form-input
          id="Email"
          type="text"
          v-model="cred.email"
        ></b-form-input>
      </b-form-group>
      <b-form-group :label-cols="2" horizontal label="Pass" label-for="Pass">
        <b-form-input
          id="Pass"
          type="password"
          v-model="cred.pass"
        ></b-form-input>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cred: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    // async login() {
    //   var cred = this.cred
    //   try {
    //     await this.$fireAuth.signInWithEmailAndPassword(cred.email, cred.pass)
    //   } catch (e) {
    //     alert(e)
    //   }
    // },
    async login() {
      var cred = this.cred
      await this.$store.dispatch('signInWithEmail', cred)
      this.$router.replace('/admin')
    },
    async logout() {
      try {
        await this.$fireAuth.signOut()
      } catch (e) {
        alert(e)
      }
    }
    // async createUser() {
    //   var cred = this.cred
    //   try {
    //     await this.$fireAuth.createUserWithEmailAndPassword(
    //       cred.email,
    //       cred.pass
    //     )
    //   } catch (e) {
    //     alert(e)
    //     console.log(e)
    //   }
    // }
  }
}
</script>
