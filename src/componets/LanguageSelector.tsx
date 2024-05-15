import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@chakra-ui/react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // Especifica que 'language' es de tipo 'string'
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button onClick={() => changeLanguage('en')}>EN</Button>
      <Button onClick={() => changeLanguage('es')}>ES</Button>
      <Button onClick={() => changeLanguage('de')}>DE</Button>
      <Button onClick={() => changeLanguage('ja')}>JA</Button>
      <Button onClick={() => changeLanguage('pt')}>PT</Button>
      <Button onClick={() => changeLanguage('ru')}>RU</Button>
    </ButtonGroup>
  );
};

export default LanguageSelector;
