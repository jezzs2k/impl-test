import React from 'react';
import renrender from 'react-test-renderer';

import {LinkURL} from '../../src/components/LinkURL';

describe('LinkUrl', () => {
  it('Snapshot test LinkUrl component', () => {
    const component = renrender.create(<LinkURL url={'url:/string'} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
