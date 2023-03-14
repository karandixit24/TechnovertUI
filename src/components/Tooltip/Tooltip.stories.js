import React from 'react';
import Center from '../Center/Center';
import Tooltip from './Tooltip';

export default {
    title: 'Tooltip',
    component: Tooltip,
    decorators: [story => <Center>{story()}</Center>],
    parameters: {
        actions: {
            handles: ['mouseover', 'click']
        }
    }
}

const Template = (args)=> <Tooltip {...args} />

export const topstart = Template.bind({})
topstart.args = {
    title: 'Title',
    desc: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    variant: 'topstart'
}

export const topcenter = Template.bind({})
topcenter.args = {
    title: 'Title',
    desc: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    variant: 'topcenter'
}

export const topend = Template.bind({})
topend.args = {
    title: 'Title',
    desc: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    variant: 'topend'
}

export const bottomstart = Template.bind({})
bottomstart.args = {
    title: 'Title',
    desc: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    variant: 'bottomstart'
}

export const bottomcenter = Template.bind({})
bottomcenter.args = {
    title: 'Title',
    desc: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    variant: 'bottomcenter'
}

export const bottomend = Template.bind({})
bottomend.args ={
    title: 'Title',
    desc: 'Description. Lorem ipsum dolor sit amet consecteur adipiscing elit, sed do.',
    variant: 'bottomend'
}

