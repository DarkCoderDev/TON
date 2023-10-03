import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import { Modal } from './Modal';

describe('testing Modal component', () => {
  test('should correctly render', () => {
    let isOpenModal = true;
    const handleCloseModal = jest.fn(() => (isOpenModal = !isOpenModal));
    render(
      <Modal isOpen={isOpenModal} handleClose={handleCloseModal}>
        <h2 id="dialog_label">Label</h2>
        <p id="dialog_desc" onClick={handleCloseModal}>
          Description
        </p>
      </Modal>
    );
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();

    const dialogDesc = screen.getByText(/label/i);

    // userEvent.click(dialogDesc);

    expect(dialogDesc).not.toBeInTheDocument();
  });
});
