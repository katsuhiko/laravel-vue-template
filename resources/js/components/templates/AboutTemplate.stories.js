import { storiesOf, addDecorator } from '@storybook/vue'
import HeaderContent from '../molecules/HeaderContent.vue'
import FooterContent from '../molecules/FooterContent.vue'

const layout = (() => ({
  components: { HeaderContent, FooterContent },
  template: "<v-app><header-content></header-content><story/><footer-content></footer-content></v-app>"
}))

import AboutTemplate from './AboutTemplate.vue'

storiesOf('templates/about-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { AboutTemplate },
    template: `<about-template>About</about-template>`
  }))
