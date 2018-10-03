import React from "react";
import {storiesOf} from "@storybook/react";

import Rule from './Rule';


export const rules = [
    {type: 'Assigned IPv4 Address', opr: '=', value: '10.20.11.100'},
    {type: 'Assigned IPv6 Address'},
    {type: 'SCEP Required', opr: '!=', value: 'True'},
    {type: 'Username'},
    {type: 'Username2'},
]

storiesOf('Rule', module).
add('Default', () => (
    <Rule rule={rules[0]}/>   
))