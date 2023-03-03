import { Story } from '@storybook/react';
import AddTable from './AddTable';
import { AddTableType } from './AddTable.types';

export default {
  title: '일정 등록/Table',
  component: AddTable,
};

const Template: Story<AddTableType> = (args) => <AddTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedMethod: 'possible',
};
