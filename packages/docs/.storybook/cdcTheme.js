import { create } from '@storybook/theming'
import ViggaImage from '../src/assets/vigga.png'

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: ViggaImage,
  brandTarget: '_self'
})
