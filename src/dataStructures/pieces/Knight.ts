import { Piece } from "./Piece";
import bimg from '../../images/knight-b.svg';
import wimg from '../../images/knight-w.svg';
import { ColorOfPiece, Cords, PieceName } from "../types";
import { isOnBoard } from "../../isOnBoard";


export class Knight extends Piece {

    constructor(color: ColorOfPiece) {
        super(color === "b" ? bimg : wimg, color);
    }

    reduceAvailableMoves(board: (Piece|null)[][], [y, x]: Cords): Cords[] {
        let res: Cords[] = [];
        let relCords: Cords[] = [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2]
        ];
        for(let r of relCords) {
            if(isOnBoard(y + r[0], x + r[1]) && board[y + r[0]][x + r[1]]?.color !== this.color) {
                res.push([y + r[0], x + r[1]]);
            }
        }        

        return res;
    }

    get name() : PieceName{
        return "knight";
    }
}