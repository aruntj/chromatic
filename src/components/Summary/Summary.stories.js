import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineContainer from '../InlineContainer/InlineContainer';
import Summary from "./Summary";


export const values = [
    {name: "abc", value:"123"},
    {name: "def", value:"456"},
    {name: "ghi", value:"789"},
]


storiesOf('Summary', module).
        add('Default', () => 
            <div style={{margin: "25px"}}> 
                <InlineContainer>
                    <Summary values={values} /> 
                </InlineContainer>
            </div>
        )