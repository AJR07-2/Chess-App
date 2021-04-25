import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './chessboard/chessboard';
import reportWebVitals from './reportWebVitals';
import Board from './chessboard/chessboard'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

let chessboard = Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")