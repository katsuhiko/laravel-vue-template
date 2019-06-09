import { storiesOf } from '@storybook/vue'
import HomeTemplate from './HomeTemplate.vue'

storiesOf('templates/home-template', module)
  .add('テンプレート', () => ({
    components: { HomeTemplate },
    template: `<home-template>Home</home-template>`
  }))
