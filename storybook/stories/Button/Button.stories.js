/* eslint-disable react-native/no-inline-styles */
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import WrapperConent from '../WrapperConent';
import {PrimaryButton} from '../../../src/components/Buttons';

storiesOf('Button', module)
  .addDecorator(getStory => <WrapperConent>{getStory()}</WrapperConent>)
  .add('Primary button', () => (
    <PrimaryButton
      onPress={action('clicked-Button')}
      titleBtn={text('Button text', 'Primary')}
    />
  ))
  .add('Secondery button', () => (
    <PrimaryButton
      onPress={action('clicked-Button')}
      titleBtn={text('Button text', 'secondary')}
      btnStyle={{
        backgroundColor: '#fff',
        borderWidth: 1,
      }}
      titleStyle={{
        color: 'black',
      }}
    />
  ));
