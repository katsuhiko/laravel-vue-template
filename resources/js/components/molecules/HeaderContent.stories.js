import { storiesOf } from '@storybook/vue'
import HeaderContent from './HeaderContent.vue'

storiesOf('molecules/header-content', module)
  .add('ヘッダー', () => ({
    components: { HeaderContent },
    template: `<header-content></header-content>`
  }))
