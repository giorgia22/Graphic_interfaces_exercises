import './ColonnaForm.css'
import {useContext} from "react";
import {StateContext} from "./App";
import {aggiungi, colonnaForm} from "./actions";
import {Button, Modal} from "react-bootstrap"

function ColonnaForm(){
    const [state, dispatch] = useContext(StateContext)

    let c

    return(
        <Modal show={true} onHide={() => dispatch(colonnaForm(false))}>
            <Modal.Header closeButton>
                <Modal.Title>Edit form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label htmlFor="nome"><b>Inserire nome colonna</b></label><br/>
                <input type="text" id="nome" maxLength="20" onChange={e => c = e.target.value.trim()}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    if(!c)
                        alert("Nome colonna non può essere vuoto")
                    else if(state.colonne.filter(e => e === c).length !== 0)
                        alert("Colonna già presente")
                    else {
                        dispatch(aggiungi(c))
                        dispatch(colonnaForm(false))
                    }
                }}>Aggiungi</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default ColonnaForm