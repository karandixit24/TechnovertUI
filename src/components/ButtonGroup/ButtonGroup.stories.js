import React from 'react';
import ButtonGroup from './ButtonGroup';
import Center from '../Center/Center';

export default {
    title: 'ButtonGroup',
    component: ButtonGroup,
    decorators: [story => <Center>{story()}</Center>],
    parameters: {
        actions: {
            handles : ['mouseover', 'click']
        }
    }
}

const Template = (args) => <ButtonGroup {...args} />

export const row = Template.bind({})
row.args = {
    title: 'Title',
    description: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    direction: 'row'
}

export const column = Template.bind({})
column.args = {
    title: 'Title',
    description: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    direction: 'column'
}