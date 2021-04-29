import React, { useEffect } from 'react';
import './react_pieces.css'
import chessboard from '../index'
import { Piece, Colour } from '../game/pieces'

export default function Pieces() {
    let pieces = decodeChessboard();
    useEffect(() => {
        console.log("interesting")
    }, [chessboard]);

    return (
    <div className="piece-specific">
        {pieces.map(function (array, i) {
            var html = array.map(function (object, j) {
                var id = i + " " + j;
                return (
                    <img className="chess-piece" id={id} src={object.src} alt=""></img>
                )
            })
            return html
        })
        }
    </div>
    )
}

function decodeChessboard() {
    var pieces: { src: string, row: number, column: number }[][] = [] //place to store all the pieces to be returned

    let symbols: Map<Piece, string> = //where the parsing of type is involved
    new Map([
      [Piece.pawn, "pawn"],
      [Piece.bishop, "bishop"],
      [Piece.knight, "knight"],
      [Piece.rook, "rook"],
      [Piece.queen, "queen"],
      [Piece.king, "king"]
    ]);

    //if chessboard hasn't been created
    if (chessboard === undefined) {
        for (let i = 0; i < 8; i++){
            pieces.push([]);
            for (let j = 0; j < 8; j++){
                pieces[i].push({
                    src: "",
                    row: i,
                    column: j
                }); 
            }
        }
        return pieces;
    }

    for (let i = 0; i < 8; i++){
        pieces.push([]);
        for (let j = 0; j < 8; j++){
            //decode
            let piece = ""
            let details = chessboard.board[i][j].details;
            if (!chessboard.board[i][j].exists) {
                //sort out colour
                if (details.colour === Colour.white) piece += "white_";
                else piece += "black_";
                let pieceName = symbols.get(details.pieceType);
                if (pieceName !== undefined) piece += pieceName;
                //push some properties
                pieces[i].push({
                    src: "images/chess_set/" + piece + ".png",
                    row: i,
                    column: j
                });
            } else {
                pieces[i].push({
                    src: "",
                    row: i,
                    column: j
                });
            }
        }
    }
    return pieces;
}

