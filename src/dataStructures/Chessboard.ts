import { Piece } from "./pieces/Piece";
import defaultChessboard from '../settings/defaultChessboard.json';
import { makePiece } from "./pieces/makePiece";
import { ColorOfPiece, Cords, PieceName } from "./types";

export class Chessboard {
    pieces: (Piece|null)[][];

    constructor() {
        this.pieces = [];
        for(let i = 0; i < defaultChessboard.length; i++) {
            this.pieces.push([]);
            for(let j = 0; j < defaultChessboard[i].length; j++) {
                if(defaultChessboard[i][j])
                    this.pieces[i].push(makePiece(...this.fromFormatPiece(defaultChessboard[i][j]!)));
                else
                    this.pieces[i].push(null);
            }
        }
    }

    private fromFormatPiece(formatted:string) : [PieceName, ColorOfPiece]{
        const r = formatted.split(':');
        return [r[1] as PieceName, r[0] as ColorOfPiece];
    }

    availableMovesByCords(cords:Cords): Cords[] {
        if (this.pieces[cords[0]][cords[1]] === null) {
            return [];
        }
        else {
            return this.pieces[cords[0]][cords[1]]!.reduceAvailableMoves(this.pieces, cords);
        }
    }

    imgByCords(cords:Cords): string {
        return this.pieces[cords[0]][cords[1]]!.img;
    }

    move(from:Cords, to:Cords) {
        this.pieces[to[0]][to[1]] = this.pieces[from[0]][from[1]];
        this.pieces[from[0]][from[1]] = null;
    }

}