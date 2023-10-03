import type { FC, ComponentClass } from 'react';

type RC<Props> = FC<Props> | ComponentClass<Props>;
type HOC<BP, HP> = (C: RC<BP>) => RC<HP>;

export const compose =
  (...hocs: Array<HOC<any, any>>) =>
  <Props>(Component: RC<Props>) =>
    hocs.reduce((Components, hoc) => hoc(Components), Component);
