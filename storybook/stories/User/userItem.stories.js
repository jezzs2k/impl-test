import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import WrapperConent from '../WrapperConent';
import {UserItem, UserDetail} from '../../../src/components/user';

const ItemDemo = {
  avatar_url: text(
    'Avatar url',
    'https://avatars.githubusercontent.com/u/62378714?v=4',
  ),
  login: text('login', 'jezzs2k'),
  type: text('Type', 'User'),
  html_url: text('Github url', 'https://github.com/jezzs2k'),
};

const DetailItemDemo = {
  avatar_url: text(
    'Avatar url',
    'https://avatars.githubusercontent.com/u/62378714?v=4',
  ),
  login: text('login', 'jezzs2k'),
  type: text('Type', 'User'),
  name: 'Jezzs2k',
  company: null,
  blog: null,
  bio: text('Bio', 'User'),
  location: null,
  twitter_username: null,
  email: text('Email', 'jezzs2k@gmail.com'),
  public_repos: 40,
  followers: null,
  following: null,
};

storiesOf('User', module)
  .addDecorator(getStory => <WrapperConent>{getStory()}</WrapperConent>)
  .add('User Item', () => <UserItem item={ItemDemo} />)
  .add('User Defail', () => <UserDetail item={DetailItemDemo} />);
