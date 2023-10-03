import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('testing Button component', () => {
  test('should correctly render', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should correctly display text', () => {
    render(<Button>Click me!</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
  });

  test('should correctly disabled', () => {
    render(<Button isDisabled>Click me!</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveAttribute('disabled');
  });
});
