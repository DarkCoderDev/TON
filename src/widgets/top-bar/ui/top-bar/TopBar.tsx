import { languages, links } from 'widgets/top-bar/consts';
import { Lang } from 'widgets/top-bar/ui/Lang';
import { Menu } from 'widgets/top-bar';
import styles from './TopBar.module.css';

export const TopBar = (props: { heading: string }) => {
  const { heading } = props;

  return (
    <div className={styles.topBar}>
      <h1 className={styles.title}>{heading}</h1>
      <Menu links={links} />
      <Lang languages={languages} />
    </div>
  );
};
