import ParticipantsBlock from '.';
import { Story } from '@storybook/react';
import { participant } from '@/types/roomInfo';

export default {
  title: '조율 현황/Participants Block',
  component: ParticipantsBlock,
};

const Template: Story<participant> = (args) => <ParticipantsBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  participant: '김주현',
};
