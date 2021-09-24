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

test('subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('subtract-btn');

  expect(addBtnEl.textContent).toBe('-');
});

test('add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');

  expect(addBtnEl.textContent).toBe('+');
});

test('input contains initial value of 1', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');

  expect(inputEl.value).toBe('1');
});
