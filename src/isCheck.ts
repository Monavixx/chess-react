import { Piece } from "./dataStructures/pieces/Piece";
import { ColorOfPiece, Cords } from "./dataStructures/types";
import { isOnBoard } from "./isOnBoard";


function isThereKingAround(board: (Piece|null)[][], forWhatColor: ColorOfPiece, y:number, x:number) {
    let cordsAround :Cords[] = [
        [1,1],
        [1,-1],
        [-1, 1],
        [-1,-1],
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    for(let c of cordsAround) {
        if(isOnBoard(y+c[0], x+c[1]) && board[y+c[0]][x+c[1]]?.name === 'king' && board[y+c[0]][x+c[1]]?.color === (forWhatColor==='w'?'b':'w')) {
            return true;
        }
    }
    return false;
}

export function isCheck(board: (Piece|null)[][], forWhatColor: ColorOfPiece) {
    for(let i = 0; i < 8; ++i) {
        for(let j = 0; j < 8; ++j) {
            if(board[i][j]?.color === forWhatColor && board[i][j]?.name==='king') {
                if(isThereKingAround(board, forWhatColor, i, j)) {
                    return true;
                }
            }
            if(board[i][j] === null ||
                (board[i][j]?.name === 'king'/* && board[i][j]?.color === forWhatColor*/) ||
                board[i][j]?.color === forWhatColor
            ) continue;
            let availableMoves: Cords[] = board[i][j]?.reduceAvailableMoves(board, [i, j])!;
            for(let c of availableMoves) {
                if(board[c[0]][c[1]]?.color === forWhatColor && board[c[0]][c[1]]?.name==='king') {
                    return true;
                }
            }
        }
    }
    return false;
}

export function isCheckAfterMoveKing(board: (Piece|null)[][], forWhatColor:ColorOfPiece, newCords: Cords) {
    let newBoard = [];
    for(let c of board) {
        newBoard.push([...c]);
    }

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if (newBoard[i][j]?.name==='king' && newBoard[i][j]?.color===forWhatColor) {
                newBoard[newCords[0]][newCords[1]] = newBoard[i][j];
                newBoard[i][j] = null;
                
                //break
                i=8;j=8;
            }
        }
    }
    return isCheck(newBoard, forWhatColor);

}