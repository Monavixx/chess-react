import { Piece } from "./Piece";
import bpawn from '../../images/pawn-b.svg';
import wpawn from '../../images/pawn-w.svg';
import { ColorOfPiece, Cords, PieceName } from "../types";


export class Pawn extends Piece {

    constructor(color: ColorOfPiece) {
        super(color === "b" ? bpawn : wpawn, color);
    }

    reduceAvailableMoves(board: (Piece|null)[][], [y, x]: Cords): Cords[] {
        let res: Cords[] = [];
        
        if(this.color === "b") {
            
            if(board[y+1][x] === null) {
                res.push([y+1,x]);
                if(y === 1 && board[y+2][x] === null) 
                    res.push([y+2, x]);
            }
            if(x !== 0 && board[y+1][x-1] !== null && board[y+1][x-1]?.color!==this.color) {
                res.push([y+1,x-1]);
            }
            if(x !== 7 && board[y+1][x+1] !== null && board[y+1][x+1]?.color!==this.color) {
                res.push([y+1,x+1]);
            }
            
        }
        else if(this.color === "w") {
            if(board[y-1][x] === null) {
                res.push([y-1,x]);
            }
            if(x !== 0 && board[y-1][x-1] !== null && board[y-1][x-1]?.color!==this.color) {
                res.push([y-1,x-1]);
            }
            if(x !== 7 && board[y-1][x+1] !== null && board[y-1][x+1]?.color!==this.color) {
                res.push([y-1, x+1]);
            }
            if(y === 6) res.push([y-2, x]);
        }

        return res;
    }

    get name() : PieceName{
        return "pawn";
    }
}