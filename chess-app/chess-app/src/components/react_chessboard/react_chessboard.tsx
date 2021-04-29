import React from 'react';
import './react_chessboard.css';
import Pieces from '../rect_pieces/react_pieces'

export default function chessboard() {
  return (
    <div className="board">
      <img className="chessBoard"
        src="images/chessboard.png"
        alt="">
      </img>
      <div id="pieces">
        {
          <Pieces/>
        }
      </div>
    </div>
  );
}