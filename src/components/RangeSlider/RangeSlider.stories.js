import React from 'react';
import Center from '../Center/Center';
import RangeSlider from './RangeSlider';

export default {
    title: 'RangeSlider',
    component: RangeSlider,
    decorators: [story => <Center>{story()}</Center>],
    parameters: {
        actions: {
            handles: ['mouseover', 'click']
        }
    }
}

const Template = (args)=> <RangeSlider {...args} />

export const PrimarySlider = Template.bind({})
PrimarySlider.args = {
    range_value: 20
}