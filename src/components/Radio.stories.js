import React from "react";
import {storiesOf} from "@storybook/react";

import Radio from './Radio';


const options = [
    {name: 'Allow'},
    {name: 'Quarantine'},
    {name: 'Block'},
]

storiesOf('Radio', module).
add('Default', () => (
    <Radio options={options}/>   
))