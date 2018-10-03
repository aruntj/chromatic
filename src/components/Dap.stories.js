import React from "react";
import {storiesOf} from "@storybook/react";

import Dap from './Dap';
import {props as radioItems} from './RadioGroup/RadioGroup.stories';



storiesOf('Dap', module).
add('Default', () => (
    <Dap {...radioItems}/>   
))