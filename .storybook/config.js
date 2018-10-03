import { configure } from '@storybook/react';
import '../src/index.css';

import 'storybook-chromatic/storybook-addon';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
