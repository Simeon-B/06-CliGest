<template>
  <q-page>
    <h1>Home</h1>
    <p class="text-subtitle1">L'application pour gérer vos clients !</p>
    <div class="q-logo">
      <img src="~assets/quasar-logo-vertical.svg">
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style scoped>
h1 {
  margin: 9% 6.5% 2% 6.5%;
  alignment: left;
}
.q-logo {
  width: 200px;
  height: 200px;
  margin: 0 0 0 38%;
}
.text-subtitle1 {
  margin: 2% 6.5% 9% 6.5%;
  alignment: left;
}
</style>
