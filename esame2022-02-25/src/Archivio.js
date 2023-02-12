import './Archivio.css'
import {Nav, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {StateContext} from "./App";
import Stelle from "./Stelle";
import {NavLink} from "react-router-dom";

function Archivio(){
    const [state, dispatch] = useContext(StateContext)

    let o = []
    state.archivio.forEach(e => {
        o.push(
            <div key={e.id} className="oldTask">
                <div className="title">{e.titolo}</div>
                <b>Descrizione:</b>
                <div>{e.desc}</div>
                <b>Colonna:</b>
                <div>{state.colonne[e.colonna]}</div>
                <b>Scadenza:</b>
                <div>{e.scadenza.toLocaleDateString()}</div>
                <b>Priorità:</b>
                <div className="st-arc"><Stelle n={e.pri}/></div>
            </div>)
    })
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/archivio">Archivio</Nav.Link>
                </Nav>
            </Navbar>

            {o}
        </div>
    )
}

export default Archivio