import './MappaPosti.css'
import Posto from "./Posto";
import {useContext} from "react";
import {StateContext} from "./App";
import {select, SELECTED, SOLD, unselect, UNSELECTED} from "./action";

function MappaPosti(){

    const [state, dispatch] = useContext(StateContext)

    let o = []
    let row = 10, col = 12
    for (let i = 0; i < row * col; i++) {
        let cod = String.fromCharCode("A".charCodeAt(0) + Math.trunc(i / col)) + String(i % col + 1)
        o.push(
            <Posto key={i} id={i}
                   codice={cod}
                   stato={state.selectedSeats[i]?SELECTED:(state.soldSeats[i]?SOLD:UNSELECTED)}
                   onChangeSeat={() => {
                       if(state.selectedSeats[i])
                           dispatch(unselect(i))
                       else if(state.soldSeats[i] === undefined)
                           dispatch(select(i, cod, state.tariffe["intero"]))
                   }}/>)
    }

    return(
        <svg className='MappaPosti Half col-6' viewBox="0 0 100 100">
            {o}
        </svg>
    )
}

export default MappaPosti