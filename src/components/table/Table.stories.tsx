import { Story } from '@storybook/react';
import Table from './Table';

import room from '../../assets/data/room.json';
import current from '../../assets/data/current.json';

import { roomInfo } from '../../types/roomInfo';
import { currentInfo } from '../../types/current';

export default {
  title: '조율 현황/Table',
  component: Table,
};

const Template: Story<roomInfo & currentInfo> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  room: room,
  current: current,
};
