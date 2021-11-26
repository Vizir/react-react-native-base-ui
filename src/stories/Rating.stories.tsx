import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from '../rating/rating'

export default {
  title: 'Components/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} /> ;

export const RatingContained = Template.bind({});
RatingContained.args = {
  size: 'standard',
  id: "rating",
  rate: 4,
}

export const RatingComponents = (): React.ReactElement => (
  <Rating
    id="Rating component"
    rate={2}
    size="semix"
  />
)
