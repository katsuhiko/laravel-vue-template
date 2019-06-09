import { configure, addDecorator } from '@storybook/vue';
import Vue from "vue";
import Vuetify from "vuetify";
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    secondary: colors.blue.base,
    accent: colors.amber.base,
  }
});

addDecorator(() => ({
  template: "<v-app><v-content><story/></v-content></v-app>"
}));

// automatically import all files ending in *.stories.js
const req = require.context('./../resources/js', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
