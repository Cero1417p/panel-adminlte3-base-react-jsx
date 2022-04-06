import React, { useState } from 'react';
//import {useTranslation} from 'react-i18next';
import { Dropdown } from '../../../../components';

/*export interface Language {
  key: string;
  icon: string;
  label: string;
}*/

const languages = [
  {
    key: 'en',
    icon: 'flag-icon-us',
    label: 'english'
  },
  {
    key: 'tr',
    icon: 'flag-icon-tr',
    label: 'turkish'
  },
  {
    key: 'de',
    icon: 'flag-icon-de',
    label: 'german'
  },
  {
    key: 'fr',
    icon: 'flag-icon-fr',
    label: 'french'
  },
  {
    key: 'es',
    icon: 'flag-icon-es',
    label: 'spanish'
  }
];

const LanguagesDropdown = ({ language = 'es' }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLanguage, setcurrentLanguage] = useState(language);

  const changeLanguage = (lng) => {
    console.log("cambio lenguaje ... "+lng)
    if (lng) {
      const lenguaje = languages.find(
        (lenguaje) => lenguaje.key === lng
      );
      setcurrentLanguage(lenguaje.key);
      //return lenguaje || languages[0];
    };
  }

    const getCurrentLanguage = () => {
      if (currentLanguage) {
        const language = languages.find(
          (language) => language.key === currentLanguage
        );
        return language || languages[0];
      }
      return languages[0];
    };

    const isActiveLanguage = (languag) => {
      if (languag) {
        return getCurrentLanguage().key === languag.key ? 'active' : '';
      }
      return '';
    };

    return (
      <Dropdown
        isOpen={dropdownOpen}
        onChange={(open) => setDropdownOpen(open)}
        buttonTemplate={
          <i className={`flag-icon ${getCurrentLanguage().icon}`} />
        }
        menuTemplate={languages.map((language) => (
          <button
            type="button"
            key={language.key}
            className={`dropdown-item ${isActiveLanguage(language)}`}
            onClick={() => {
              changeLanguage(language.key);
              setDropdownOpen(false);
            }}
          >
            <i className={`flag-icon ${language.icon} mr-2`} />
            <span>{language.label}</span>
          </button>
        ))}
      />
    );
  };

  export default LanguagesDropdown;
