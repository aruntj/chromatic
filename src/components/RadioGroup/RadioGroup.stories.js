import React from "react";
import {storiesOf} from "@storybook/react";

import RadioGroup from './RadioGroup';


const radioItems = [
    {name: 'Allow'},
    {name: 'Quarantine'},
    {name: 'Block'},
]

export const props = {
    radioItems: radioItems,
    selected: 1,
}

storiesOf('RadioGroup', module).
add('Default', () => (
    <RadioGroup {...props}/>   
))