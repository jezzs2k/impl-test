/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Config from 'react-native-config';
import StorybookUI from './storybook';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>
  Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App,
);
