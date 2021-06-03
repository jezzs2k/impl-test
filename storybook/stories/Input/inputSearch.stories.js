import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import WrapperConent from '../WrapperConent';
import {SearchComp} from '../../../src/components/SearchComp';

storiesOf('Input', module)
  .addDecorator(getStory => <WrapperConent>{getStory()}</WrapperConent>)
  .add('Search input', () => (
    <SearchComp
      onchangeText={textString => action(textString)}
      textTitle={text('Title text', 'Search user')}
      placeholder={'Typing here ...'}
    />
  ));
