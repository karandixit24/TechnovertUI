import React from 'react';
import Center from '../Center/Center';
import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField,
  decorators: [story => <Center>{story()}</Center> ],
  parameters: {
      actions: {
          handles: ['mouseover', 'click']
      }
  }
}


const Template = (args) => <TextField {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    rows: 9,
    cols: 30,
    placeholder: 'Placeholder',
    disabledprop:false,
    helperText: 'Support text'
}

export const Error = Template.bind({})
Error.args = {
    variant: 'error',
    rows: 9,
    cols: 26,
    placeholder: 'Placeholder',
    helperText: 'Support text'
}

export const Disabled = Template.bind({})
Disabled.args = {
    variant: 'disabled',
    rows: 9,
    cols: 28,
    placeholder: 'Placeholder',
    disabledprop:true,
    helperText: 'Support text'
}
