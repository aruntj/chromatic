import React from "react";
import {storiesOf} from "@storybook/react";

import RuleList from './RuleList';
import {rules} from "./Rule.stories"


storiesOf('RuleList', module)
// .addDecorator(story => <div style={{ width: '600px' }}>{story()}</div>)
.add('Default', () => (
    <RuleList rules={rules}/>   
))