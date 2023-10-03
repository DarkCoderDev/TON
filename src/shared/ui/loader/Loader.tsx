import cn from 'classnames';
import styles from './Loader.module.css';

export const Loader = (props: { visible: boolean }) => {
  const { visible } = props;

  return (
    <div
      role="progressbar"
      className={cn(styles.loader, {
        [styles.active]: visible,
      })}
    />
  );
};
