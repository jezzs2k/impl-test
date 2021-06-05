/**
 * @format
 */

import 'react-native';
import React from 'react';
import 'react-native-gesture-handler/jestSetup';
import * as renderer from 'react-test-renderer';
import '';

import App from '../App';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/stack', () => {});

jest.useFakeTimers();
jest.mock('react-native-vector-icons');
jest.mock('react-native', () => ({
  NativeModules: {
    // RNVectorIconsManager: jest.mock('react-native-vector-icons'),
  },
}));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
jest.mock('react-native/index');
jest.mock('react-native-iphone-x-helper/index.js');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', () => {
  console.log(renderer);
  const app = renderer.create(<App />);

  expect(app.toJSON()).toMatchSnapshot();
});
