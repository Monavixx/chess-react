import React, { useEffect, useRef, useState } from "react";
import { Chessboard } from "../dataStructures/Chessboard";
import PieceComponent from "./PieceComponent";
import './css/chess.css';
import { ColorOfPiece, Cords } from "../dataStructures/types";

export default function ChessboardComponent() {
    const chessboard = useRef(new Chessboard());
    const [chosenPieceCords, setChosenPieceCords] = useState<Cords|null>(null);
    const [availableMoves, setAvailableMoves] = useState<Cords[]>([]);
    const [whoIsMoving, setWhoIsMoving] = useState<ColorOfPiece>("w");

    useEffect(()=>{
        document.onkeydown = (e) => {
            if(e.key === 'Escape') {
                setChosenPieceCords(null);
                setAvailableMoves([]);
            }
        }
    },[]);

    function handleClick(cords: Cords) {
        let isInAvailableMoves = availableMoves.find((v)=>v[0] === cords[0] && v[1] === cords[1]) !== undefined;
        if(chessboard.current.pieces[cords[0]][cords[1]]===null && !isInAvailableMoves) {
            setChosenPieceCords(null);
            setAvailableMoves([]);
            return;
        }
        if(chosenPieceCords !== null && isInAvailableMoves) {
            chessboard.current.move(chosenPieceCords, cords);
            setChosenPieceCords(null);
            setAvailableMoves([]);
            setWhoIsMoving(prev => prev === 'w' ? 'b' : 'w');
        }
        else if(whoIsMoving === chessboard.current.pieces[cords[0]][cords[1]]?.color) {
            setChosenPieceCords(cords);
            const a = chessboard.current.availableMovesByCords(cords);
            setAvailableMoves(a);
        }
    }

    function reduceIsHightlight(y:number, x:number) {
        return chosenPieceCords!==null && (
            chosenPieceCords[1] === x && chosenPieceCords[0] === y)
    }
    function reduceIsAvailableMove(y:number, x:number) {
        return (availableMoves as any).reduce((isAv:boolean, cords:Cords) => {
            if(isAv) return true;
            return cords[1] === x && cords[0] === y;
        }, false);
    }
    

    return (
        <div className="chessboard">
            {
                chessboard.current.pieces.map((row, i) => {
                    return row.map((p, j) => {
                        return <PieceComponent piece={p} cords={[i, j]}
                         isHightlight={reduceIsHightlight(i, j)}
                         isAvailableMove={reduceIsAvailableMove(i, j)}
                          onClick={handleClick}/>
                    })
                })
            }
        </div>
    );
}