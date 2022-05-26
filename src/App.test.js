import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test("Renders button element with text 'Add commitment'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Add commitment/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check if there are 2 input fields', () => {
  render(<App />);
  const inputName = screen.getByPlaceholderText('Nome');
  const inputTitle = screen.getByPlaceholderText('Título');
  expect(inputName).toBeInTheDocument();
  expect(inputTitle).toBeInTheDocument();
});