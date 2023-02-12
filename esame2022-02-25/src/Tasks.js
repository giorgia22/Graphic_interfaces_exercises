import './Tasks.css'
import {useContext} from "react";
import {StateContext} from "./App";
import Stelle from "./Stelle";
import {infoTask} from "./actions";

function Tasks({col}){
    const [state, dispatch] = useContext(StateContext)

    let ms = 1000*60*60*24 //millisecondi inn un giorno
    let today = new Date()
    let style, color

    let o = []
    state.tasks.forEach(e => {
        if(e.colonna === col) {
            if (e.scadenza.getTime() - today.getTime() <= ms)
                color = "#e64a19"
            else if(e.scadenza.getTime()-today.getTime()<=7*ms)
                color = "#ffea00"
            else
                color = "#8ac148"

            style = {
                backgroundColor: color
            }

            o.push(
                <div key={e.id} className="task" style={style} onClick={() => dispatch(infoTask(e.colonna, e.titolo, 1))}>
                    <div className="title">{e.titolo}</div>
                    Scadenza:
                    <div>{e.scadenza.toLocaleDateString()}</div>
                    Priorità:
                    <div className="st-tsk"><Stelle n={e.pri}/></div>
                </div>
            )
        }
    })
    return o
}

export default Tasks