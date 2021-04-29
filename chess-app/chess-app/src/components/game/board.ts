import { Piece, PieceWorthiness, Colour, Square } from './pieces'
export default class Board {
  public board: Square[][] = [];
  public fenString: String = "";

  constructor(fen: String) {
    console.log(this.decodeFen(fen));
  }

  decodeFen(fen: String) {
    this.board = [];
    const symbols: Map<string, [Piece, PieceWorthiness]> = 
    new Map([
      ["p", [Piece.pawn, PieceWorthiness.pawn]],
      ["b", [Piece.bishop, PieceWorthiness.bishop]],
      ["n",[Piece.knight, PieceWorthiness.knight]],
      ["r", [Piece.rook, PieceWorthiness.rook]],
      ["q", [Piece.queen, PieceWorthiness.queen]],
      ["k", [Piece.king, PieceWorthiness.king]]
    ]);

    let row = 0;
    this.board.push([]);
    for (let i = 0; i < fen.length; i++) {
      if (fen[i] === '/') {
        //check if its a new line
        row++;
        this.board.push([]);
      } else if (fen[i] >= '0' && fen[i] <= '9') {
        //check if its an int (spaces)
        const spaces = parseInt(fen[i]);
        if (spaces === 0 || isNaN(spaces)) {
          return "Fen String cannot be parsed"
        } else {
          //no errors, insert spaces
          for (let j = 0; j < spaces; j++) {
            this.board[row].push(new Square({ colour: Colour.none, points: PieceWorthiness.none, pieceType: Piece.none }))
          }
        }

      } else {
        //its a character
        //decide the piece colour
        let pieceColour = 0
        if (fen[i].toUpperCase() === fen[i]) pieceColour = Colour.white;
        else pieceColour = Colour.black;

        //decide the piece type
        const pieceType = symbols.get(fen[i].toLowerCase());

        if (pieceType === undefined) {
          console.log(fen[i])
          return "Fen String cannot be parsed";
        }
        //push it into the array!
        this.board[row].push(new Square({ colour: pieceColour, points: pieceType[1], pieceType: pieceType[0] }));
      }
    }
    return "Fen String parsed successfully";
  }
}