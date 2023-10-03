import React from 'react';
import { useTranslation } from 'react-i18next';
import languageIcon from 'widgets/top-bar/assets/icons/language.svg';
import styles from './Lang.module.css';

export const Lang = ({ languages }: { languages: string[] }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(event.target.value);

  return (
    <div className={styles.lang}>
      <img className={styles.icon} src={languageIcon} alt="lang-icon" />

      <select name="selected-lang" onChange={changeLanguage}>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};
