import { Story, Meta } from '@storybook/react';
import {
  CelestialBodyCard,
  ICelestialBodyCardProps,
} from './CelestialBodyCard';

export default {
  component: CelestialBodyCard,
  title: 'CelestialBodyCard',
} as Meta;

const Template: Story<ICelestialBodyCardProps> = (args) => (
  <CelestialBodyCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  celestialBody: {
    id: 1,
    age: '4.543E9',
    solarMass: '1.989E30',
    name: 'Earth',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg',
  },
};
