import React from 'react';
import { storiesOf } from '@storybook/react';


import ComboBox from "./ComboBox";


export const options = [
    {name: 'India', value: "india"},
    {name: 'China', value: "china"},
    {name: 'Pakistan', value: "pakistan"},
]

storiesOf('ComboBox', module).
add('Default', () => <ComboBox values={options}/>)