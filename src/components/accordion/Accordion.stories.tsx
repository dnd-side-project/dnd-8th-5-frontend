import { Story } from '@storybook/react';
import Accordion from './Accordion';
import { AccordionTypes } from './Accordion.types';

export default {
  title: '최종 결과/Accordion',
  component: Accordion,
};

const Template: Story<AccordionTypes> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
