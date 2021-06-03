import {AppRegistry, Platform} from 'react-native';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {name} from '../app.json';

import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
});

AppRegistry.registerComponent(name, () => StorybookUIRoot);

export default StorybookUIRoot;
