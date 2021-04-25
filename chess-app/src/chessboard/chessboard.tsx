import React from 'react';
import './chessboard.css';
import { Piece, PieceWorthiness, Colour } from '../pieces/pieces'
import Pieces from '../pieces/pieces'

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

interface UniquePiece{
  type: Piece,
  points: PieceWorthiness,
  player: Colour
}

export class Board {
  public board: UniquePiece[][] = []
  public fenString: String = ""

  constructor(fen: String) {
    console.log(this.decodeFen(fen));
  }

  decodeFen(fen: String) {
    this.board = []
    let symbols: Map<string, [Piece, PieceWorthiness]> = 
    new Map([
      ["p", [Piece.pawn, PieceWorthiness.pawn]],
      ["b", [Piece.bishop, PieceWorthiness.bishop]],
      ["kn",[Piece.knight, PieceWorthiness.knight]],
      ["r", [Piece.rook, PieceWorthiness.rook]],
      ["q", [Piece.queen, PieceWorthiness.queen]],
      ["k", [Piece.king, PieceWorthiness.king]]
    ]);

    let row = 0;
    for (let i = 0; i < fen.length; i++) {
      if (fen[i] === '/') {
        //check if its a new line
        row++;
        this.board.push([]);
      } else if (fen[i] >= '0' && fen[i] <= '9') {
        //check if its an int (spaces)
        let spaces = parseInt(fen[i]);
        if (spaces === 0 || isNaN(spaces)) {
          return "Fen String cannot be parsed"
        } else {
          //no errors, insert spaces
          for (let j = 0; j < spaces; j++) {
            this.board[row].push({ type: Piece.none, points: PieceWorthiness.none, player: Colour.none })
          }
        }
      } else {
        //its a character
        //decide the piece colour
        let pieceColour = 0
        if (fen[i].toUpperCase() === fen[i]) pieceColour = Colour.white
        else pieceColour = Colour.black;

        //decide the piece type
        let pieceType = symbols.get(fen[i].toLowerCase())

        if (pieceType == undefined) {
          return "Fen String cannot be parsed"
        }
        //push it into the array!
        this.board[row].push({ type: pieceType[0], points: pieceType[1], player: pieceColour})
      }
    }
    return "Fen String parsed successfully"
  }
}