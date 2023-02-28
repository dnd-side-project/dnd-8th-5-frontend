import { Story } from '@storybook/react';
import BottomButton from './BottomButton';
import { bottomButton } from '../../types/bottomButton';

export default {
  title: '공통/하단 플로팅 버튼',
  component: BottomButton,
};

const Template: Story<bottomButton> = (args) => <BottomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '우선순위 보기',
};
