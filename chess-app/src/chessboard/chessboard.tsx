import React from 'react';
import './chessboard.css';
import Pieces from '../pieces/pieces'

function chessboard() {
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

export default chessboard;