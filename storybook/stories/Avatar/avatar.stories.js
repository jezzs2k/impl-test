import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import React from 'react';
import WrapperConent from '../WrapperConent';
import {Avatar} from '../../../src/components/Avatar';
import {widthPercentageToDP} from '../../../src/utils';

storiesOf('Avatar', module)
  .addDecorator(getStory => <WrapperConent>{getStory()}</WrapperConent>)
  .add('Avartar default', () => <Avatar />)
  .add('Avartar border', () => <Avatar borderWidth={2} borderColor={'#000'} />)
  .add('Avartar Small', () => (
    <Avatar
      borderWidth={2}
      borderColor={'#000'}
      size={widthPercentageToDP(12)}
    />
  ))
  .add('Avartar can press', () => (
    <Avatar
      borderWidth={2}
      borderColor={'#000'}
      activeOpacity={0.5}
      onPress={action('Click avatar')}
    />
  ));
