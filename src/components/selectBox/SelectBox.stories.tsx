import { Story } from '@storybook/react';
import SelectBox from './SelectBox';

export default {
  title: '조율 결과/Select Box',
  component: SelectBox,
};

const Template: Story<{ text: string }> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '전체 참여자',
};
