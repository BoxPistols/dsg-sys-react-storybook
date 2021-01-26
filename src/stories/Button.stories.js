import React from 'react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const UI = (args) => <Button {...args} />;

export const Primary = UI.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = UI.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = UI.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = UI.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Full = UI.bind({});
Full.args = {
size: 'full',
  label: 'Button',
};
