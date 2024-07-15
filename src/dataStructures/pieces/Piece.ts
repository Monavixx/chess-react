import { ColorOfPiece, Cords, PieceName } from "../types";

export class Piece {
    img: string;
    color: ColorOfPiece;

    constructor (img:string, color: ColorOfPiece) {
        this.img = img;
        this.color = color;
    }
    
    reduceAvailableMoves(board: (Piece|null)[][], [y, x]:Cords): Cords[]{
        
        return [];
    }
    get name() : PieceName{
        throw Error("Abstract method");
    }
}