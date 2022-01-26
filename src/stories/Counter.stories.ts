import { Story, Meta } from '@storybook/html';
import { createCounter, CounterProps } from './Counter';

export default {
  title: 'Counter',
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CounterProps> = (args) => {
  return createCounter(args);
};

export const Primary = Template.bind({});
Primary.args = {

};