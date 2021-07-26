import { Story, Meta } from '@storybook/react';
import { AtomicComponents, AtomicComponentsProps } from './atomic-components';

export default {
  component: AtomicComponents,
  title: 'AtomicComponents',
} as Meta;

const Template: Story<AtomicComponentsProps> = (args) => (
  <AtomicComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
