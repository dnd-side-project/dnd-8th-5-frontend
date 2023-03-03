import { Story } from '@storybook/react';
import AddCalendar from './AddCalendar';
import { AddCalendarType } from './AddCalendar.types';

export default {
  title: '일정 등록/캘린더',
  component: AddCalendar,
};

const Template: Story<AddCalendarType> = (args) => <AddCalendar {...args} />;

export const Default = Template.bind({});
