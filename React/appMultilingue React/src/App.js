import React from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function App ({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div class="idiomas">
      <button class="btn btn-link" onClick={() => changeLanguage('de')}>de</button>
      <button class="btn btn-link" onClick={() => changeLanguage('en')}>en</button>
      <button class="btn btn-link" onClick={() => changeLanguage('es')}>es</button>
      <button class="btn btn-link" onClick={() => changeLanguage('eu')}>eu</button> 
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

export default withNamespaces()(App);
