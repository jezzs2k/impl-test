import React from 'react';
import renrender from 'react-test-renderer';

import {BOSLoader} from '../../src/components/SpinnerLoader';

jest.mock('react-native-masked-loader', () => {});

describe('SpinnerLoader', () => {
  it('Snapshot test SpinnerLoader component', () => {
    const component = renrender.create(<BOSLoader />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
