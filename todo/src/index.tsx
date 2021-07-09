import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/NavigationMenu'

ReactDOM.render(
  <React.StrictMode>
  <Header />,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
