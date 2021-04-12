import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Chessboard from './Chessboard';

ReactDOM.render(
  <React.StrictMode>
    <Chessboard/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
