import React from "react";
import {storiesOf} from "@storybook/react";

import Actions from './Actions';
import {props} from '../RadioGroup/RadioGroup.stories';


storiesOf('Actions', module).
add('Default', () => (
    <Actions {...props}/>   
))