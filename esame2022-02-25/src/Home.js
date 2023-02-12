import './Home.css'
import {useContext} from "react";
import {StateContext} from "./App";
import {colonnaForm, editTask, ordina} from "./actions";
import ColonnaForm from "./ColonnaForm";
import Tasks from "./Tasks";
import {Navbar, Nav, Button} from "react-bootstrap";
import EditForm from "./EditForm";
import InfoForm from "./InfoForm";
import {NavLink} from "react-router-dom";

function Home(){
    const [state, dispatch] = useContext(StateContext)

    let col = null
    if(state.colonnaForm === true) col = <ColonnaForm/>

    let edit = null
    if(state.editForm === true) edit = <EditForm/>

    let info = null
    if(state.infoForm === true) info = <InfoForm/>

    let tab = []
    for(let i= 0; i<state.colonne.length; i++){
        tab.push(
            <div key={i} className="column">
                <h2 className="header" onClick={() => dispatch(editTask(i, null))}>{state.colonne[i]}</h2>

                <Tasks col={i}/>
            </div>)
    }

    return(
        <div>
            <Navbar bg="light" variant="light">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/archivio">Archivio</Nav.Link>
                </Nav>
            </Navbar>

            <div className="toolbar">
                <Button onClick={() => dispatch(colonnaForm(true))}>Aggiungi colonna</Button>
                <select onChange={e => dispatch(ordina(e.target.value))}>
                    <option value="titolo">Titolo</option>
                    <option value="priorità">Priorità</option>
                    <option value="scadenza">Scadenza</option>
                </select>
            </div>

            <div className="row2">
                {tab}
            </div>

            {col}
            {edit}
            {info}
        </div>
    )
}

export default Home