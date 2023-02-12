import './Posto.css'

import {SOLD, UNSELECTED} from "./action";

function Posto({id, codice, stato, onChangeSeat}){
    let col = 12
    let cX =8 * (id%col)
    let cY = 10 * (Math.trunc(id / col))
    if((Math.trunc(id/col)%2) === 1)
        cX += 4

    const s = {
        fill: stato===SOLD?"red":(stato===UNSELECTED?"lightgrey":"orange")
    }

    return(
        <svg style={s} className="Posto" x={cX} y={cY} width="8" height="10" viewBox="0 0 100 140" onClick={() => onChangeSeat()}>
            <rect x="0" y="40" width="100" height="100" stroke="black" strokeWidth="1"/>
            <path d="M0,40 Q50,0 100,40" stroke="black" strokeWidth="1"/>
            <text x="50" y="95" textAnchor="middle" className="Text">{codice}</text>
        </svg>
    )
}

export default Posto