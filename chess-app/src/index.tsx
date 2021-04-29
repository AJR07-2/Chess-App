import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react_chessboard/react_chessboard';
import reportWebVitals from './reportWebVitals';
import Board from './game/board'

let BoardContext = React.createContext(new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"));
let chessboard = new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

ReactDOM.render(
  <React.StrictMode>
    <BoardContext>
      <App />
    </BoardContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();