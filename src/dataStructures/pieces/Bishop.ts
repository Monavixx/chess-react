import { Piece } from "./Piece";
import bimg from '../../images/bishop-b.svg';
import wimg from '../../images/bishop-w.svg';
import { ColorOfPiece, Cords, PieceName } from "../types";


export class Bishop extends Piece {

    constructor(color: ColorOfPiece) {
        super(color === "b" ? bimg : wimg, color);
    }

    reduceAvailableMoves(board: (Piece|null)[][], [y, x]: Cords): Cords[] {
        let res: Cords[] = [];
        
        //left-up
        let i = y-1, j = x-1;
        while(i >= 0 && j >= 0) {
            if(board[i][j] === null) {
                res.push([i, j]);
            }
            else if (board[i][j]?.color === this.color) {
                break;
            }
            else {
                res.push([i, j]);
                break;
            }
            i--;
            j--;
        }
        //left-bottom
        i = y+1;
        j = x-1;
        while(i < 8 && j >= 0) {
            if(board[i][j] === null) {
                res.push([i, j]);
            }
            else if (board[i][j]?.color === this.color) {
                break;
            }
            else {
                res.push([i, j]);
                break;
            }
            i++;
            j--;
        }
        //right-bottom
        i = y+1;
        j = x+1;
        while(i < 8 && j < 8) {
            if(board[i][j] === null) {
                res.push([i, j]);
            }
            else if (board[i][j]?.color === this.color) {
                break;
            }
            else {
                res.push([i, j]);
                break;
            }
            i++;
            j++;
        }
        //right-top
        i = y-1;
        j = x+1;
        while(i >= 0 && j < 8) {
            if(board[i][j] === null) {
                res.push([i, j]);
            }
            else if (board[i][j]?.color === this.color) {
                break;
            }
            else {
                res.push([i, j]);
                break;
            }
            i--;
            j++;
        }

        return res;
    }

    get name() : PieceName{
        return "bishop";
    }
}