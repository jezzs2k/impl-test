import {storiesOf} from '@storybook/react-native';
import React from 'react';
import WrapperConent from '../WrapperConent';
import {BOSLoader} from '../../../src/components/SpinnerLoader';

storiesOf('Loading', module)
  .addDecorator(getStory => <WrapperConent>{getStory()}</WrapperConent>)
  .add('Default Loading', () => <BOSLoader />);
