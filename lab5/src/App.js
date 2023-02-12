import './App.css';
import MappaPosti from "./MappaPosti";
import SellingPanel from "./SellingPanel";
import {createContext, useReducer} from "react";
import {initialState, reducer} from "./reducer";

export const StateContext = createContext();

function App() {

    return (
        //tutto quello contenuto nel contesto può accedere a state(soldSeats, selectedSeats, tot)
        //mediante "const [state, dispatch] = useContext(StateContext)", usato al di fuori di if e cicli
        <StateContext.Provider
            value={useReducer(reducer, initialState)}>
            <div className='App'>
                <div className='row MainRow'>
                    <MappaPosti/>
                    <SellingPanel/>
                </div>
            </div>
        </StateContext.Provider>
    )
}

export default App;
