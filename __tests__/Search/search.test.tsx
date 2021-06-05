import React from 'react';
import renrender from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {SearchComp} from '../../src/components/SearchComp';

describe('SearchComp', () => {
  it('Snapshot test SearchComp component', () => {
    const mockFn = jest.fn();

    const component = renrender.create(
      <SearchComp onchangeText={mockFn} textTitle={'Search'} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SearchComp Avatar', () => {
    const mockFn = jest.fn();
    const CHANGE_TEXT = 'content';

    const {getByPlaceholderText} = render(
      <SearchComp
        onchangeText={mockFn}
        textTitle={'Search'}
        placeholder={'typying'}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('typying'), CHANGE_TEXT);
    expect(mockFn).toBeCalledWith(CHANGE_TEXT);
  });

  it('SearchComp Avatar with null data', () => {
    const mockFn = jest.fn();

    const {getByPlaceholderText} = render(
      <SearchComp
        onchangeText={mockFn}
        textTitle={'Search'}
        placeholder={'typying'}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('typying'), null);
    expect(mockFn).toBeCalledWith(null);
  });
});
