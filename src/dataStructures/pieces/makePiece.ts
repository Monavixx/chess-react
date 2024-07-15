import { ColorOfPiece, Cords, PieceName } from "../types";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Piece } from "./Piece";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

export function makePiece(name: PieceName, color:ColorOfPiece) : Piece {
    switch(name) {
        case "pawn":
            return new Pawn(color);
        case "rook":
            return new Rook(color);
        case "knight":
            return new Knight(color);
        case "bishop":
            return new Bishop(color);
        case "queen":
            return new Queen(color);
        case "king":
            return new King(color);
    }
}