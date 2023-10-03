import React from 'react';

export const useLockBody = (isLocked = false) => {
  React.useEffect(() => {
    document.body.style.overflowY = isLocked ? 'hidden' : 'visible';
  }, [isLocked]);
};
