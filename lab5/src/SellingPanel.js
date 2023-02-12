import './SellingPane.css'
import {useContext} from "react";
import {StateContext} from "./App";
import {annulla, conferma, tariffa} from "./action";

function SellingPanel(){
    const [state, dispatch] = useContext(StateContext)

    let o = []
    state.selectedSeats.forEach(s => {
        o.push(
            <div key={s.ID} className="row">
                <h6 className="col-4">{s.codice}</h6>
                <select className="col-4" onChange={(e) => dispatch(tariffa(s.ID, state.tariffe[e.target.value]))}>
                    <option value="intero">Intero</option>,
                    <option value="anziani">Anziani</option>,
                    <option value="giovani">Giovani</option>,
                    <option value="omaggio">Omaggio</option>,
                </select>
                <h6 className="col-4">{s.price.toFixed(2)+"€"}</h6>
            </div>
        )
    })
    let t = 0
    state.selectedSeats.forEach(e => {t += e.price})
    return(
        <div className='SellingPane Half col-6'>
            <h1 className="incassi">{"Incassi totali: "+state.tot.toFixed(2)+"€"}</h1>
            <h4>Emissione biglietti</h4>
            <div className="row">
                <h6 className="col-4">Posizione</h6>
                <h6 className="col-4">Tariffa</h6>
                <h6 className="col-4">Prezzo</h6>
            </div>
            {o}
            <h5 className="totParziale">{"Totale parziale: "+t.toFixed(2)+"€"}</h5>
            <div className="row">
                <button className="col-6" onClick={() => dispatch(annulla())}>Annulla</button>
                <button className="col-6" onClick={() => dispatch(conferma())}>Conferma</button>
            </div>
        </div>
    )
}

export default SellingPanel