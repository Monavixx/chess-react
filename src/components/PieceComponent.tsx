import { Piece } from "../dataStructures/pieces/Piece";
import { Cords } from "../dataStructures/types";


export default function PieceComponent({piece, isHightlight, cords, onClick, isAvailableMove}
    :{piece:Piece|null, isHightlight:boolean, cords:Cords, isAvailableMove:boolean, onClick?:((arg0: Cords)=>void)}) {

    return (
        <div className={`piece ${isHightlight ? 'highlight': (isAvailableMove ? "available-move" : '')}`}>
            <button onClick={()=>onClick && onClick(cords)}>
                { piece !== null &&
                    <img src={piece.img} alt={piece.name} />
                }
            </button>
        </div>
    )
}