import React from 'react';
import { Transition } from 'react-transition-group';

type TransitionClass = 'entering' | 'entered' | 'exiting' | 'exited';

const transitionStyles: Record<TransitionClass, React.CSSProperties> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Fade = (props: React.PropsWithChildren<{ init: boolean; duration: number }>) => {
  const { init, duration, children } = props;
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Transition nodeRef={nodeRef} in={init} unmountOnExit timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state as TransitionClass],
          }}>
          {children}
        </div>
      )}
    </Transition>
  );
};
