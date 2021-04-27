import './react_pieces.css'
import chessboard from '../index'
import { Piece, PieceWorthiness, Colour, Square } from '../game/pieces'

export default function Pieces() {
    let pieces = decodeChessboard();
    return (
        <div className="piece-specific">
            {
              pieces.map(function (array, i) {
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

    for (var i = 0; i < 8; i++){
        pieces.push([]);
        for (var j = 0; j < 8; j++){
            //decode
            let piece = ""
            let details = chessboard.board[i][j].details;
            if (details.colour !== Colour.none) {
                //sort out colour
                if (details.colour == Colour.white) piece += "white_";
                else piece += "black_";
                
            }
            pieces[i].push({
                src: "images/chess_set/white_pawn.png",
                row: i,
                column: j
            });
        }
    }
    return pieces;
}