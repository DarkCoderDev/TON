import React from 'react';
import cn from 'classnames';
import { Portal } from 'shared/ui/Portal/Portal';
import { Fade } from 'shared/ui';
import { useLockBody } from 'shared/lib/hooks/useLockBody';
import { usePressEscape } from 'shared/ui/Modal/lib/usePressEscape';
import { MODAL_CONTAINER } from 'shared/ui/Modal/consts';
import type { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export const Modal = (
  props: PropsWithChildren<{
    isOpen?: boolean;
    handleClose?: () => void;
  }>
) => {
  const { isOpen = true, handleClose = () => {}, children } = props;

  const handleOutsideClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (handleClose) {
      handleClose();
    }
  };
  const handleContentClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  useLockBody(isOpen);
  usePressEscape(isOpen, handleClose);

  return (
    <Portal rootId={MODAL_CONTAINER}>
      <Fade init={isOpen} duration={400}>
        <div
          className={cn(styles.overlay, {
            [styles.overlayOpened]: isOpen,
          })}
          onClick={handleOutsideClick}>
          <div
            aria-modal
            aria-hidden={!isOpen}
            role="alertdialog"
            aria-labelledby="dialog_label"
            aria-describedby="dialog_desc"
            className={cn(styles.modal, {
              [styles.modalOpened]: isOpen,
            })}
            onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </Fade>
    </Portal>
  );
};
