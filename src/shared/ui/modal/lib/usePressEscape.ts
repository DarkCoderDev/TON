import React from 'react';
import { KEY_EVENT_TYPE, KEY_NAME_ESC } from 'shared/ui/Modal/consts';

export const usePressEscape = (isOpen: boolean, handler: (...args: any[]) => any) => {
  const handlePressEscape = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        handler();
      }
    },
    [handler]
  );

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener(KEY_EVENT_TYPE, handlePressEscape, false);
    }

    return () => {
      if (isOpen) {
        document.removeEventListener(KEY_EVENT_TYPE, handlePressEscape, false);
      }
    };
  }),
    [isOpen, handler];
};
