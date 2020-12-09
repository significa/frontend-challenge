import { Story, Meta } from '@storybook/react/types-6-0'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Add to favourites',
  icon: <FavoriteBorder />,
  favourite: false
}

export const FavoritedButton: Story<ButtonProps> = (args) => (
  <Button {...args} />
)

FavoritedButton.args = {
  children: 'Added',
  icon: <Favorite />,
  favourite: true
}
