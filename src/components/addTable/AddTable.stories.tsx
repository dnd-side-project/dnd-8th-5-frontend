import { Story } from '@storybook/react';
import AddTable from './AddTable';

export default {
  title: '일정 등록/Table',
  component: AddTable,
};

const Template: Story<{
  selectedMethod: string;
  tablePage: number;
  validDateChunks: any;
}> = (args) => <AddTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedMethod: 'possible',
};
