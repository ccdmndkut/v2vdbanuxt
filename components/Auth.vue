<template>
  <div>
    <div class="bar"></div>
    <div class="cont">
      <hr />
      <h3 class="sectionTitle">Firebase Authentication</h3>
      <hr />
      <div>
        <b-form-group
          :label-cols="2"
          horizontal
          label="Email"
          label-for="usernameTxt"
        >
          <b-form-input
            autocomplete="username"
            id="usernameTxt"
            type="email"
            v-model="email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          horizontal
          label="Pass"
          label-for="passwordTxt"
        >
          <b-form-input
            autocomplete="current-password"
            id="passwordTxt"
            type="password"
            v-model="password"
          ></b-form-input>
        </b-form-group>
        <hr />
        <div class="links">
          <a
            @click="login()"
            class="button--green"
          > Log In </a>
          <a
            @click="logout()"
            class="button--green"
          > Log Out </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebaseApp, { googleProvider } from '~/firebase/app'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  middleware: ['handle-login-route'],
  methods: {
    ...mapActions('modules/user', ['login']),
    submit() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(firebaseUser => {
          // console.log(firebaseUser.user.uid)
          return this.login(firebaseUser.user)
        })
        .then(() => {
          this.$router.push('/protected')
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    async fbGoogleLogin() {
      const { user } = await firebaseApp.auth().signInWithPopup(googleProvider)
      await this.login(user)
      this.$router.push('/protected')
    },
    async fbGoogleLogout() {
      await this.logout()
      this.$router.push('/')
    }
  }
}
</script>
<style>
.cont {
  background-color: #fff;
  padding: 50px;
  padding-top: 20px;
  color: #526488;
}
.bar {
  background-color: #526488;
  height: 30px;
  transform: translateY(15px) scaleX(0.75);
}
</style>
