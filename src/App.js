import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NowPlaying from './pages/NowPlaying';
import Details from './pages/Details';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NowPlaying/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App