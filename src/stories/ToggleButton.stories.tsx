import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../icon/icon';
import { ToggleButton } from '../toggleButton/toggleButton'

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} /> ;

export const ToggleChecked = Template.bind({});
ToggleChecked.args = {
  iconOff: <Icon name="outlined-action-check" size="huge" />,
  iconOn: <Icon name="filled-action-check" size="huge" />,
  color: 'secondary',
  size: 'medium',
  checked: true,
}

export const ToggleUnchecked = Template.bind({});
ToggleUnchecked.args = {
  iconOff: <Icon name="outlined-action-check" size="huge" />,
  iconOn: <Icon name="filled-action-check" size="huge" />,
  color: 'secondary',
  size: 'semiX',
  edge: 'start'
}

export const ToggleComponent = (): React.ReactElement => (
  <ToggleButton
    color="secondary"
    iconOff={<Icon name="outlined-action-check" size="small"/>}
    iconOn={<Icon name="filled-action-check" size="small"/>}
    size="medium"
  />
)
