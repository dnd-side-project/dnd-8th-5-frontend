import ProgressBar from './ProgressBar';
import { Story } from '@storybook/react';
import { currentParticipants } from '../../types/roomInfo';

export default {
  title: '조율 현황/Progress Bar',
  component: ProgressBar,
};

const Template: Story<currentParticipants> = (args) => (
  <ProgressBar {...args} />
);

export const Test = Template.bind({});
Test.args = {
  headCount: 7,
  participants: ['김주현', '김동호', '노현', '이수진', '이채민', '한혜원'],
};
