import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './components/NavigationMenu'

ReactDOM.render(
  // <React.StrictMode>
    
  // </React.StrictMode>,
  <NavigationBar />,
  document.getElementById('root')
);

reportWebVitals();
