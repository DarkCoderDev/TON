import { NavLink } from 'react-router-dom';
import { activeLink } from 'widgets/top-bar/lib';
import { useTranslation } from 'react-i18next';
import styles from './Menu.module.css';

export const Menu = ({ links }: { links: { label: string; url: string }[] }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.menu}>
      {links.map(({ label, url }) => (
        <NavLink className={styles.link} key={label} to={url} style={activeLink}>
          {t(label)}
        </NavLink>
      ))}
    </nav>
  );
};
