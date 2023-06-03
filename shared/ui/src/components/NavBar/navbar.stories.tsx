import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '.';

export default {
  title: 'layout/NavBar',
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const mainNav = Template.bind({});
mainNav.args = {
  label: 'classpick'
};