import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import WrapperConent from '../WrapperConent';
import {ShowTextItem} from '../../../src/components/Text/ShowTextItem';

storiesOf('Text', module)
  .addDecorator(getStory => <WrapperConent>{getStory()}</WrapperConent>)
  .add('Show text', () => (
    <ShowTextItem
      onPress={action('clicked-Button')}
      title={text('Type', 'User')}
      keyItem={'Type'}
    />
  ));
