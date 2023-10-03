import React from 'react';
import ReactDom from 'react-dom';

export const Portal = (
  props: React.PropsWithChildren<{
    rootId: string;
  }>
) => {
  const { rootId, children } = props;
  const container = document.getElementById(rootId) ?? document.body;

  return ReactDom.createPortal(children, container);
};
