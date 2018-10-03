import React from 'react';
import { storiesOf } from '@storybook/react';


import AclFilter from "./AclFilter";


export const options = {
    applyAcl: true
}


storiesOf('AclFilter', module).
add('Default', () => <AclFilter values={options} />)