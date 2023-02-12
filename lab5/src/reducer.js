import './action.js'
import {ANNULLA, CONFERMA, SELECT, TARIFFA, UNSELECT} from "./action";

export const initialState = { soldSeats: [], selectedSeats: [], tot: 0, tariffe: {intero: 8, anziani: 6.4, giovani: 5.6, omaggio: 0}}

export function reducer(state, action){
    let newState = {...state}
    switch (action.type){
        case(SELECT):
            newState.selectedSeats[action.seatID] ={ID: action.seatID, codice: action.cod, price: action.price}
            return newState
        case(UNSELECT):
            delete newState.selectedSeats[action.seatID]
            return newState
        case(ANNULLA):
            newState.selectedSeats = []
            return newState
        case(CONFERMA):
            console.log(newState)
            newState.soldSeats = {...newState.soldSeats, ...newState.selectedSeats}
            console.log(newState)
            newState.selectedSeats.forEach(i => {
                    newState.tot += i.price
                }
            )
            newState.selectedSeats = []
            return newState
        case(TARIFFA):
            newState.selectedSeats[action.seatID].price = action.price
            return newState
        default: return state
    }
}
