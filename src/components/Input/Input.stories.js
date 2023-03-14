import React from "react";
import Center from "../Center/Center";
import Input from "./Input";

export default {
    title: 'Input',
    component: Input,
    decorators: [story => <Center>{story()}</Center> ],
    parameters: {
        actions: {
            handles: ['mouseover', 'click'],
        }
    }
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    title: 'Title',
    placeholder: 'Placeholder',
    disabledProp: false,
    helperText: 'Support Text',
    typePassword: false
}


export const Disabled = Template.bind({})
Disabled.args = {
    variant: 'disabled',
    title: 'Title',
    placeholder: 'Placeholder',
    disabledProp:true,
    helperText: 'Support Text',
    typePassword: false

}

export const Error = Template.bind({})
Error.args = {
    variant: 'error',
    title: 'Title',
    placeholder: 'Placeholder',
    disabledProp:false,
    helperText: 'Support Text',
    typePassword: false

}

export const TypePassword = Template.bind({})
TypePassword.args = {
    variant: 'typepassword',
    title: 'Title',
    placeholder: 'Placeholder',
    disabledProp:false,
    helperText: '',
    typePassword:true
}