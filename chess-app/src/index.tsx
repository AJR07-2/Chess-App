import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react_chessboard/react_chessboard';
import reportWebVitals from './reportWebVitals';
import Board from './game/board'
import Pieces from './rect_pieces/react_pieces'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

let chessboard = new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
export default chessboard;