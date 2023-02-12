import {
    AGGIUNGI,
    ANNULLA_EDIT,
    ANNULLA_INFO,
    CAMBIA_PAGINA, COLONNA_FORM, COMPLETATO, CONFERMA,
    EDIT_TASK, INFO_TASK,
    ORDINA
} from "./actions";

export const initialState = { tasks: [], archivio: [], colonne: [], pagina: 1, infoForm: false, editForm: false,
    clickedTask: {}, completato: {}, colonnaForm: false, order: "titolo", newTask: true}

export function reducer(state, action) {
    let newState = {...state}
    switch (action.type) {
        case (AGGIUNGI):
            newState.colonne = [...newState.colonne, action.colonna]
            return newState
        case (CAMBIA_PAGINA):
            newState.pagina = newState.pagina === 1?2:1
            return newState
        case (INFO_TASK):
            newState.infoForm = true
            newState.clickedTask = {id: action.colonna+action.titolo, pag: action.pagina}
            return newState
        case (ANNULLA_INFO):
            newState.infoForm = false
            return newState
        case (EDIT_TASK):
            newState.newTask = (action.from === 'info')
            newState.editForm = true
            newState.infoForm = false
            if(!action.titolo)
                newState.clickedTask = {id: -1, pag: action.colonna}
            return newState
        case (ANNULLA_EDIT):
            newState.editForm = false
            return newState
        case (CONFERMA):
            newState.editForm = false
            let id = action.colonna + action.titolo
            let oldId = newState.clickedTask.id
            console.log(action.colonna)
            newState.tasks = newState.tasks.filter(e => e.id !== oldId)
            newState.tasks.push({id: id, titolo: action.titolo, desc: action.descrizione, pri: action.priorita,
                completato: action.completato, colonna: action.colonna, scadenza: action.scadenza})
            newState.completato = {id: id, completato: action.completato}
            return newState
        case (ORDINA):
            let a
            if(newState.pagina === 1)
                a = newState.tasks
            else if (newState.pagina === 2)
                a = newState.archivio
            switch (action.ordine){
                case ('titolo'):
                    a.sort((a,b) => a.titolo.localeCompare(b.titolo))
                    break
                case ('priorità'):
                    a.sort((a,b) => b.pri-a.pri)
                    break
                case ('scadenza'):
                    a.sort((a,b) => a.scadenza.getTime()-b.scadenza.getTime())
                    break
                default:
                    a.sort(e => e.titolo)
            }
            newState.order = action.ordine
            return newState
        case (COMPLETATO):
            newState.archivio = [...newState.archivio, newState.tasks.filter(e => e.id === action.id)[0]]
            newState.tasks = newState.tasks.filter(e => e.id !== action.id)
            return newState
        case (COLONNA_FORM):
            newState.colonnaForm = action.show
            return newState
        default:
            return newState
    }
}
