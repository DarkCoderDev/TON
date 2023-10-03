import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('testing Loader component', () => {
  test('should correctly render', () => {
    render(<Loader visible />);
    const loader = screen.getByRole('progressbar');
    expect(loader).toBeInTheDocument();
  });
});
