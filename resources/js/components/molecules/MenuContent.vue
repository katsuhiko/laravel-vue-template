<script>
export default {
  // see: https://qiita.com/clomie/items/7a69ee850a304595142e#valueとinputによる実装
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    notify(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<template>
    <v-navigation-drawer
      fixed
      :value="value"
      @input="notify($event)"
      app
    >
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
</style>
