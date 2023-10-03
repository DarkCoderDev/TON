import cn from 'classnames';
import receiveIcon from 'entities/transaction/assets/icons/receive.svg';
import styles from './StatusIcon.module.css';

export const StatusIcon = ({ isReceived }: { isReceived: boolean }) => (
  <img
    className={cn(styles.icon, {
      [styles.received]: !isReceived,
    })}
    src={receiveIcon}
    alt="receive-icon"
  />
);
