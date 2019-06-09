import { storiesOf, addDecorator } from '@storybook/vue'
import HeaderContent from '../molecules/HeaderContent.vue'
import FooterContent from '../molecules/FooterContent.vue'

const layout = (() => ({
  components: { HeaderContent, FooterContent },
  template: "<v-app><header-content></header-content><story/><footer-content></footer-content></v-app>"
}))

import HomeTemplate from './HomeTemplate.vue'

storiesOf('templates/home-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { HomeTemplate },
    template: `<home-template>Home</home-template>`
  }))
