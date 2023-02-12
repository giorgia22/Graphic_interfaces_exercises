export const AGGIUNGI = 'aggiungi'
export const CAMBIA_PAGINA = 'cambiaPagina'
export const INFO_TASK = 'infoTask'
export const EDIT_TASK = 'editTask'
export const CONFERMA = 'conferma'
export const ANNULLA_EDIT = 'annullaEdit'
export const ORDINA = 'ordina'
export const COMPLETATO = 'completato'
export const ANNULLA_INFO = 'annullaInfo'
export const COLONNA_FORM = 'colonnaForm'
export const EXIT_COLONNA = 'exitColonna'

export function colonnaForm(show){
    return { type: COLONNA_FORM, show}
}
export function exitColonna(){
    return { type: EXIT_COLONNA}
}
export function aggiungi(colonna){
    return { type: AGGIUNGI, colonna}
}
export function cambiaPagina(){
    return {type: CAMBIA_PAGINA}
}
//se cliccato invia a modifyTask, deve riconoscere se è task da home o archivio
export function infoTask(colonna, titolo, pagina){
    return { type: INFO_TASK, colonna, titolo, pagina}
}
//pulsante edit, se già presente completa i campi, if new titolo=""
export function editTask(colonna, titolo, from){
    return { type: EDIT_TASK , colonna, titolo, from}
}
//controlla scadenza, controlla completamento,
export function conferma(colonna, titolo, descrizione, priorita, completato, scadenza){
    return { type: CONFERMA, titolo, descrizione, priorita, completato, scadenza, colonna}
}
export function annullaEdit(){
    return { type:ANNULLA_EDIT }
}
export function ordina(ordine){
    return { type: ORDINA, ordine}
}
export function completato(id){
    return { type: COMPLETATO, id}
}
export function annullaInfo(){
    return { type: ANNULLA_INFO}
}