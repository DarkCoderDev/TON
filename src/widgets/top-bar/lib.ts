export const activeLink = (props: { isActive: boolean; isPending: boolean }) =>
  props.isActive ? { color: 'var(--green)' } : undefined;
