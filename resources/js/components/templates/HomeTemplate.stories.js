import { storiesOf, addDecorator } from '@storybook/vue'
import layout from './StoryTemplateLayout'
import HomeTemplate from './HomeTemplate.vue'

storiesOf('templates/home-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { HomeTemplate },
    template: `<home-template>Home</home-template>`
  }))
