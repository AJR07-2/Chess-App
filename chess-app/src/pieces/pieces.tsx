import './pieces.css'

export default function Pieces() {
    var pieces: {src: string, row: number, column: number}[][] = []
    for (var i = 0; i < 8; i++){
        pieces.push([]);
        for (var j = 0; j < 8; j++){
            

            pieces[i].push({
                src: "images/chess_set/white_pawn.png",
                row: i,
                column: j
            });
        }
    }
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

export enum Colour{
    none = 0,
    black = 8,
    white = 16
}

export enum PieceWorthiness{
    none = 0,
    pawn = 1,
    knight = 3,
    bishop = 3,
    rook = 5,
    queen = 9,
    king = Number.MAX_SAFE_INTEGER
}

export enum Piece{
    none = 0,
    pawn = 1,
    knight = 2,
    bishop = 3,
    rook = 4,
    queen = 5,
    king = 6
}
