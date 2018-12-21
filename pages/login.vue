<template>
  <section class="container">
    <div>
      <Auth />
    </div>
  </section>
</template>
<script>
import Auth from '~/components/Auth.vue'
export default {
  components: { Auth }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.sectionTitle {
  font-weight: 200;
  font-size: 38px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.mediumText {
  font-weight: 200;
  font-size: 20px;
  color: #526488;
  word-spacing: 3px;
  padding-bottom: 25px;
}
.smallText {
  font-weight: 100;
  font-size: 15px;
  color: #526488;
}
.links {
  padding-top: 15px;
}
hr {
  border-color: #ffffff;
  margin-bottom: 30px;
  margin-top: 30px;
}
.mt-1 {
  margin-top: 8px;
}
body {
  padding-top: 50px;
  padding-bottom: 50px;
}
.button--green {
  cursor: pointer;
}
pre {
  background-color: #f6f8fa;
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
}
.fullwidth {
  width: 100%;
}
.demoText {
  padding-bottom: 0;
}
a {
  text-decoration: none;
}
</style>
