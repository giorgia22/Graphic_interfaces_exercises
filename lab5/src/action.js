export const SELECT = 'select'
export const UNSELECT = 'unselect'
export const ANNULLA = 'annulla'
export const CONFERMA = 'conferma'
export const TARIFFA = 'tariffa'

export function select(seatID, cod, price){
    return { type: SELECT, seatID, cod, price}
}
export function unselect(seatID){
    return { type: UNSELECT, seatID}
}
export function annulla(){
    return { type: ANNULLA}
}
export function conferma(){
    return { type: CONFERMA}
}
export function tariffa(seatID, price){
    return { type: TARIFFA, seatID, price}
}

export const SOLD = 0
export const SELECTED = 1
export const UNSELECTED = 2
