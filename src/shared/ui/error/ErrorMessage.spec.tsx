import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('testing ErrorMessage component', () => {
  test('should correctly render', () => {
    render(<ErrorMessage>Network</ErrorMessage>);
    const errorMessage = screen.getByText(/network/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
