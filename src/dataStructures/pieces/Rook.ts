import { Piece } from "./Piece";
import bimg from '../../images/rook-b.svg';
import wimg from '../../images/rook-w.svg';
import { ColorOfPiece, Cords, PieceName } from "../types";


export class Rook extends Piece {

    constructor(color: ColorOfPiece) {
        super(color === "b" ? bimg : wimg, color);
    }

    reduceAvailableMoves(board: (Piece|null)[][], [y, x]: Cords): Cords[] {
        let res: Cords[] = [];
        
        //left
        for(let i = x-1; i >=0; i--) {
            if(board[y][i] === null) {
                res.push([y, i]);
            }
            else if (board[y][i]?.color === this.color) {
                break;
            }
            else {
                res.push([y, i]);
                break;
            }
        }

        //right
        for(let i = x+1; i < 8; i++) {
            if(board[y][i] === null) {
                res.push([y, i]);
            }
            else if (board[y][i]?.color === this.color) {
                break;
            }
            else {
                res.push([y, i]);
                break;
            }
        }

        //up
        for(let i = y-1; i >=0; i--) {
            if(board[i][x] === null) {
                res.push([i, x]);
            }
            else if (board[i][x]?.color === this.color) {
                break;
            }
            else {
                res.push([i, x]);
                break;
            }
        }

        //down
        for(let i = y+1; i < 8; i++) {
            if(board[i][x] === null) {
                res.push([i, x]);
            }
            else if (board[i][x]?.color === this.color) {
                break;
            }
            else {
                res.push([i, x]);
                break;
            }
        }


        return res;
    }

    get name() : PieceName{
        return "rook";
    }
}