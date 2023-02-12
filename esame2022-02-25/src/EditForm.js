import {useContext} from "react";
import {StateContext} from "./App";
import './EditForm.css'
import {Modal, Button} from "react-bootstrap";
import {annullaEdit, completato, conferma, ordina} from "./actions";


function EditForm(){
    const [state, dispatch] = useContext(StateContext)

    let task = null
    if(state.clickedTask.id !== -1) task = state.tasks.filter(e => e.id === state.clickedTask.id)[0]


    let titolo = task?task.titolo:"";
    let desc = task?task.desc:"";
    let data = task?task.scadenza : (new Date())
    let scad = formatoData(data)
    let pri = task ? task.pri :1;
    let check = task?task.completato:false;
    let col = task?task.colonna:state.clickedTask.pag;

    let opts = []

    state.colonne.forEach((name, i) => {
        opts.push(<option key={"opt"+i} value={i}>{name}</option>)
    })

    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Edit form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label>Titolo:</label><br/>
                <input type="text" maxLength="20" defaultValue={titolo} onChange={e => titolo = e.target.value.trim()}/><br/>
                <label>Descrizione:</label><br/>
                <input type="text" defaultValue={desc} onChange={e => desc = e.target.value}/><br/>
                <label>Priorità:</label><br/>
                <input type="number" id="pri" min="1" max="5" step="1" defaultValue={pri} onChange={(e) => pri = e.target.value}/><br/>
                <label>Scadenza:</label><br/>
                <input type="date" min={formatoData(new Date())} defaultValue={scad} onChange={e => scad = e.target.value} onKeyDown={(e) => e.preventDefault()}/><br/>
                <label>Completato:</label><br/>
                <input type="checkbox" defaultValue={check} onChange={e => check = e.target.value}/><br/>
                <label>Colonna:</label><br/>
                <select defaultValue={col} onChange={e => col = e.target.value}>{opts}</select><br/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => {dispatch(annullaEdit())}}>Annulla</Button>
                <Button variant="primary" onClick={() => {
                    if(pri > 5 || pri < 1) {
                        alert("Priorità deve essere compresa tra 1 e 5")
                    }
                    else if(!titolo)
                        alert("Titolo non può essere vuoto")
                    else if(state.tasks.filter(e => e.id === col+titolo).length > 0 && !state.newTask)
                        alert("Il titolo inserito è già presente")
                    else {
                        dispatch(conferma(parseInt(col), titolo, desc, pri, check, new Date(scad)))
                        if (check) dispatch(completato(col + titolo))
                        dispatch(ordina(state.order))
                    }
                }}>Conferma</Button>
            </Modal.Footer>
        </Modal>
    )
}

function formatoData(x){
    return x.toLocaleDateString('en-us', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')
}

export default EditForm