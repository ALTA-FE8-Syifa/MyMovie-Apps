import React, { Component } from 'react';
// import NavbarComp from './components/NavbarComp';
// import CardMovieComp from './components/CardMovieComp';
import NowPlaying from './pages/NowPlaying';
import Details from "./pages/Details"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return(
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<NowPlaying/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
      </BrowserRouter>
    )
  }
}

