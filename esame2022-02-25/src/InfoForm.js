import './InfoForm.css'
import {useContext} from "react";
import {StateContext} from "./App";
import {annullaInfo, editTask} from "./actions";
import {Modal, Button} from 'react-bootstrap'

function InfoForm(){
    const [state, dispatch] = useContext(StateContext)

    let o = state.tasks.filter(e => e.id === state.clickedTask.id)[0]
    return (
        <Modal show={true} onHide={() => dispatch(annullaInfo())}>
            <Modal.Header closeButton>
                <Modal.Title>Info form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <b>Descrizione:</b>
                <div>{o.desc}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={e => {
                    e.stopPropagation()
                    dispatch(editTask(o.colonna, o.titolo, "info"))
                }}>Edit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InfoForm