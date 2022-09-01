import React, { Component } from 'react';
import NavbarComp from './components/NavbarComp';
import NowPlaying from './components/NowPlaying';
import Details from "./components/Details"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline = baseUrl + "movie/"+ "now_playing?"+ `api_key=${process.env.REACT_APP_API_KEY}&`+ "language=en-US&"+ "page=1";



export default class App extends Component {
  state = {
    listNowPlaying: [],
  };

  componentDidMount() {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response) {
        console.log(response.data);
        self.setState({
          listNowPlaying: response.data.results,
        });
      })
      .catch(function(error) {
        alert(error);
      });
  }
  
 App() {
    return(
      <div>
      <button onClick={() =>this.props.navigate(-1)}>go back</button>
      <NavbarComp/>
          <Routes>
            <Route exact path="/" element={<NowPlaying/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
          </div>
    )
  } 

  render() {
    const { listNowPlaying } = this.state;
    return (
      // <BrowserRouter>
      <div>
        <div>
        <NavbarComp/>
        </div>
        <div className = 'container-fluid'>
        <div className = "row justify-content-around p-3"> 
          {listNowPlaying.map((item) => {
            return (
              <NowPlaying src={"https://image.tmdb.org/t/p/original/" + [item.poster_path]} title={item.original_title} />
            );
          })}
        </div>
        </div>
       
        {/* <div>
          <Routes>
            <Route exact path="/" element={<NowPlaying/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
          </div> */}
        
      </div>
      // {/* </BrowserRouter> */}
    )
  }
}

