import {storiesOf} from '@storybook/react-native';
import React from 'react';

import WrapperConent from '../WrapperConent';
import {RepoItem} from '../../../src/components/Repos';

const ItemDemo = {
  name: 'RepoItem',
  open_issues: 10,
  forks: 0,
  watchers: 10,
  description: 'Just for test',
  stargazers_count: 0,
  stargazers_url: null,
  id: 123,
};

storiesOf('Repostories', module)
  .addDecorator(getStory => <WrapperConent>{getStory()}</WrapperConent>)
  .add('Repo Item', () => <RepoItem item={ItemDemo} />);
