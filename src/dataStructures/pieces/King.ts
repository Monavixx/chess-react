import { Piece } from "./Piece";
import bimg from '../../images/king-b.svg';
import wimg from '../../images/king-w.svg';
import { ColorOfPiece, Cords, PieceName } from "../types";
import { isCheckAfterMoveKing } from "../../isCheck";
import { isOnBoard } from "../../isOnBoard";


export class King extends Piece {

    constructor(color: ColorOfPiece) {
        super(color === "b" ? bimg : wimg, color);
    }

    reduceAvailableMoves(board: (Piece|null)[][], [y, x]: Cords): Cords[] {
        let res: Cords[] = [];
        let potentialRelCords : Cords[] = [
            [1,1],
            [1,-1],
            [-1, 1],
            [-1,-1],
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        for(let p of potentialRelCords) {
            if(isOnBoard(y+p[0], x+p[1]) && board[y+p[0]][x+p[1]]?.color !== this.color && !isCheckAfterMoveKing(board, this.color, [y+p[0], x+p[1]])) {
                res.push([y+p[0], x+p[1]]);
            }
        }

        return res;
    }

    get name() : PieceName{
        return "king";
    }
}