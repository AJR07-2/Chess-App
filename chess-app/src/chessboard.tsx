import React from 'react';
import './chessboard.css';

function chessboard() {
  return (
    <div className="board">
      <img className="chessBoard"
        src="images/chessboard.png"
        alt="">
      </img>
      <div id="pieces">
        
      </div>
    </div>
  );
}

export default chessboard;
