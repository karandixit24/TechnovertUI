import React from 'react';
import Center from '../Center/Center';
import StarRating from './StarRating';

export default {
    title: 'StarRating',
    component: StarRating,
    decorators: [story => <Center>{story()}</Center>],
    parameters: {
        actions: {
            handles: ['mouseover', 'click']
        }
    }
}

const Template = (args)=> <StarRating {...args} />

export const zeroStar = Template.bind({})
zeroStar.args = {
    starInput: 0,
}

export const oneStar = Template.bind({})
oneStar.args = {
    starInput: 1
}

export const twoStar = Template.bind({})
twoStar.args = {
    starInput: 2
}

export const threeStar = Template.bind({})
threeStar.args = {
    starInput: 3
}

export const fourStar = Template.bind({})
fourStar.args = {
    starInput: 4
}

export const fiveStar = Template.bind({})
fiveStar.args = {
    starInput: 5
}

