import React from 'react';
import { storiesOf } from '@storybook/react';


import InlineContainer from "./InlineContainer";
import RuleList from '../Rule/RuleList';
import {rules} from "../Rule/Rule.stories";

export const options = {
    applyAcl: true
}


storiesOf('InlineContainer', module).
add('Default', () => <div style={{margin: "25px"}}> <InlineContainer><p>Inline content</p></InlineContainer> </div>)
.add('With Rules', () => (
    <InlineContainer>
        <RuleList rules={rules}/>   
    </InlineContainer>
))