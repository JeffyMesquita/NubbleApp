import React from 'react';

import {render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  test('the component rendered', () => {
    render(<Button title="button title" />);
  });

  test('should show loading indicator', () => {
    render(<Button title="button title" />);
  });
});
