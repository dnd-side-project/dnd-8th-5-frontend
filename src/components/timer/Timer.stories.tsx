import { Story } from '@storybook/react';
import Timer from './Timer';

export default {
  title: '조율 현황/Timer',
  component: Timer,
};

const Template: Story<{ deadLine: string }> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {
  deadLine: '2023-03-04 18:00:00',
};
