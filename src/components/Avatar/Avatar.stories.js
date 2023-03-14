import React from 'react';
import Center from '../Center/Center';
import Avatar from './Avatar';

export default {
    title: 'Avatar',
    component: Avatar,
    decorators: [story => <Center>{story()}</Center>],
    parameters: {
        actions: {
            handles: ['mouseover', 'click']
        }
    }
}

const Template = (args)=> <Avatar {...args} />

export const Small = Template.bind({})
Small.args = {
    variant: 'small',
    link: '#'
}

export const Medium = Template.bind({})
Medium.args = {
    variant: 'medium',
    link: '#'
}

export const Large = Template.bind({})
Large.args = {
    variant: 'large',
    link: '#'
}