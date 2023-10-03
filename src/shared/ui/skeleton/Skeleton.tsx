import cn from 'classnames';
import styles from './Skeleton.module.css';

export class Skeleton {
  static Title() {
    return <div className={cn(styles.skeleton, styles.title)}></div>;
  }
  static Img() {
    return <div className={cn(styles.skeleton, styles.img)}></div>;
  }
  static Text() {
    return <div className={cn(styles.skeleton, styles.text)}></div>;
  }
}
