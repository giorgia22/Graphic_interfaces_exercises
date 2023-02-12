import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createContext, useReducer} from "react";
import React from 'react';
import {initialState, reducer} from "./reducer";
import Home from "./Home";
import Archivio from "./Archivio";

export const StateContext = createContext();

function App() {
  return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        <BrowserRouter>
          <Routes>
              <Route path="/" index element={<Home/>}/>
              <Route path="/archivio" index element={<Archivio/>}/>
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
  );
}

export default App;
