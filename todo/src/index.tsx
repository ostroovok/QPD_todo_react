import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './components/NavigationMenu'

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
