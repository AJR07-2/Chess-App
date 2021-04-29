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

export interface Details{
    colour: Colour,
    points: PieceWorthiness,
    pieceType: Piece
}

export class Square {
    public exists: Boolean = false;
    public details: Details = { colour: Colour.none, points: PieceWorthiness.none, pieceType: Piece.none };

    constructor(details: Details) {
        if (details.pieceType !== Piece.none) {
            this.exists = true;
            this.details = details;
        } else {
            this.exists = false;
        }
    }
}