import { storiesOf, addDecorator } from '@storybook/vue'
import layout from './StoryTemplateLayout'
import AboutTemplate from './AboutTemplate.vue'

storiesOf('templates/about-template', module)
  .addDecorator(layout)
  .add('テンプレート', () => ({
    components: { AboutTemplate },
    template: `<about-template>About</about-template>`
  }))
