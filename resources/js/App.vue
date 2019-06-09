<script>
import HeaderContent from './components/molecules/HeaderContent.vue'
import FooterContent from './components/molecules/FooterContent.vue'
import MenuContent from './components/molecules/MenuContent.vue'

export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {
    HeaderContent,
    FooterContent,
    MenuContent
  }
}
</script>

<template>
  <v-app>
    <menu-content v-model="drawer"></menu-content>
    <header-content v-model="drawer"></header-content>
    <RouterView />
    <footer-content></footer-content>
  </v-app>
</template>
