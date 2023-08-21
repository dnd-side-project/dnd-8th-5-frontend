import { Story } from '@storybook/react';
import Header from './Header';

export default {
  title: '조율 현황/Header',
  component: Header,
};

const Template: Story<{ pageName: string; title: string }> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageName: 'register',
  title: '회의...',
};
