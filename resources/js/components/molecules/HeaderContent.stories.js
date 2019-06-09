import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import HeaderContent from './HeaderContent.vue'

storiesOf('molecules/header-content', module)
  .add('ヘッダー', () => ({
    components: { HeaderContent },
    template: `<header-content @input="action"></header-content>`,
    methods: { action: action('メニュー表示アイコンがクリックされました。') }
  }))
