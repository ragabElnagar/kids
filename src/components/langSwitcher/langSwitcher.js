'use client';
import languages from '@/data/lang';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const { lang } = useParams();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    if (language.code === lang) {
      setIsOpen(false);
      return;
    }
    const url = window.location.href;
    const newUrl = url.replace(`/${lang}`, `/${language.code}`);
    window.location.href = newUrl;
    setIsOpen(false);
  };

  useEffect(() => {
    const language = languages.find((language) => language.code === lang);
    setSelectedLanguage(language || languages[0]);
  }, [lang]);

  const styles = {
    dropdown: {
      position: 'relative',
      display: 'inline-block',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      backgroundColor: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      cursor: 'pointer',
      outline: 'none',
    },
    buttonFlag: {
      marginRight: '8px',
      fontSize: '20px',
    },
    buttonArrow: {
      marginLeft: '8px',
      width: '20px',
      height: '20px',
    },
    menu: {
      position: 'absolute',
      right: 0,
      marginTop: '8px',
      width: '224px',
      backgroundColor: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 10,
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '8px 16px',
      fontSize: '14px',
      color: '#374151',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
    },
    menuItemFlag: {
      marginRight: '8px',
      fontSize: '20px',
    },
    menuItemCode: {
      marginRight: '8px',
    },
    menuItemName: {
      color: '#6b7280',
    },
  };

  return (
    <div style={styles.dropdown}>
      <button style={styles.button} onClick={toggleDropdown}>
      <img src={`https://flagsapi.com/${selectedLanguage.flag}/flat/32.png`} style={{paddingRight: '5px'}}/>
        {selectedLanguage.code.toUpperCase()}
        <svg style={styles.buttonArrow} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div style={styles.menu}>
          {languages.map((language) => (
            <button
              key={language.code}
              style={styles.menuItem}
              onClick={() => selectLanguage(language)}
            >
              <img src={`https://flagsapi.com/${language.flag}/flat/32.png`} style={{paddingRight: '5px'}}/>
              <span style={styles.menuItemName}>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;