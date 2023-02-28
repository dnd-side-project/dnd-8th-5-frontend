import { Story } from '@storybook/react';
import { roomTitle } from '../../types/roomInfo';
import Header from './Header';

export default {
  title: '조율 현황/Header',
  component: Header,
};

const Template: Story<roomTitle> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'DND 8기 5조 회의',
};
