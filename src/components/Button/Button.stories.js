import React from 'react';
import TextButton from './Button';
import Center from '../Center/Center';

export default {
    title : 'TextButton',
    component : TextButton,
    decorators: [story => <Center>{story()}</Center> ],
    parameters: {
        actions: {
          handles: ['mouseover', 'click'],
        },
      },
}



const Template = (args) => <TextButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Button',
    variant: 'primary',
   

}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Button',
    variant: 'secondary',
  }

export const Terciary = Template.bind({})
Terciary.args = {
  label: 'Button',
  variant: 'terciary',
}

