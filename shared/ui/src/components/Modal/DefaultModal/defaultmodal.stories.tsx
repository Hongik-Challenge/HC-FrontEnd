import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DefaultModal } from '.';

export default {
  title: 'Modal/DefaultModal',
  component: DefaultModal,
  argTypes: {},
} as ComponentMeta<typeof DefaultModal>;

const Template: ComponentStory<typeof DefaultModal> = (args) => <DefaultModal {...args} />;

export const main = Template.bind({});
main.args = { open: true, };
