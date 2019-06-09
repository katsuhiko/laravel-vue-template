<script>
import HeaderContent from './components/molecules/HeaderContent.vue'
import FooterContent from './components/molecules/FooterContent.vue'

export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {
    HeaderContent,
    FooterContent
  }
}
</script>

<template>
  <v-app>
    <header-content></header-content>
    <RouterView />
    <footer-content></footer-content>
  </v-app>
</template>
