import React from 'react';
import Counter from '../Counter';
import { getElementError, getNodeText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe('My Counter');
});

test('counter initially start with text of 0', () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});
