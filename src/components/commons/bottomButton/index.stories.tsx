import { Story } from '@storybook/react';
import BottomButton from '.';
import { BottomButtonType } from './index.types';

export default {
  title: '공통/하단 플로팅 버튼',
  component: BottomButton,
};

const Template: Story<BottomButtonType> = (args) => <BottomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '우선순위 보기',
};
