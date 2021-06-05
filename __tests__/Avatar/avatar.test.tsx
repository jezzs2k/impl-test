import React from 'react';
import renrender from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {Avatar} from '../../src/components/Avatar';

describe('Avatar', () => {
  it('Snapshot test avatar component', () => {
    const component = renrender.create(<Avatar />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Click Avatar', () => {
    const mockFn = jest.fn();

    const {getByRole} = render(<Avatar onPress={mockFn} />);

    fireEvent.press(getByRole('button'));

    expect(mockFn).toHaveBeenCalled();
  });
});
