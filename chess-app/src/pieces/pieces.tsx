import './pieces.css'

function Pieces() {
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

export default Pieces;