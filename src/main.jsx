import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import i18n from './translation/i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
)
