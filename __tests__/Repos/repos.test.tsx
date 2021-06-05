import React from 'react';
import renrender from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {RepoItem} from '../../src/components/Repos';

describe('Repo Item', () => {
  it('Snapshot test repo item component', () => {
    const component = renrender.create(<RepoItem />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
