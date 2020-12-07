import { Story, Meta } from '@storybook/react/types-6-0'
import Navbar from '.'

export default {
  title: 'Navbar',
  component: Navbar
} as Meta

export const Default: Story = () => <Navbar />

Default.parameters = {
  layout: 'fullscreen'
}
