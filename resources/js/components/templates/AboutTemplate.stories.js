import { storiesOf } from '@storybook/vue'
import AboutTemplate from './AboutTemplate.vue'

storiesOf('templates/about-template', module)
  .add('テンプレート', () => ({
    components: { AboutTemplate },
    template: `<about-template>About</about-template>`
  }))
