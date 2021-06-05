import React from 'react';
import renrender from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {PrimaryButton} from '../../src/components/Buttons';

describe('Buttons', () => {
  it('Snapshot test button component', () => {
    const mockFn = jest.fn();
    const component = renrender.create(
      <PrimaryButton titleBtn={'Button'} onPress={mockFn} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Click Button', () => {
    const mockFn = jest.fn();

    const {getByText} = render(
      <PrimaryButton titleBtn={'Button'} onPress={mockFn} />,
    );

    fireEvent.press(getByText('Button'));

    expect(mockFn).toHaveBeenCalled();
  });
  it('Disable click Button', () => {
    const mockFn = jest.fn();

    const {getByText} = render(
      <PrimaryButton titleBtn={'Button'} onPress={mockFn} disabled />,
    );

    fireEvent.press(getByText('Button'));

    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
