import React, { Component } from 'react';
import NavbarComp from './components/NavbarComp';
import NowPlaying from './components/NowPlaying';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Button, Card, Row, Col} from 'react-bootstrap';
// import './style/MyMovies.css';
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline = baseUrl + "movie/" + "now_playing?" + `api_key=${process.env.REACT_APP_API_KEY}&` + "language=en-US&" + "page=1"

// https://api.themoviedb.org/3/movie/now_playing?api_key=8b076cd17a5e7fc2d16c292d080e3ee9&language=en-US&page=1

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

  render() {
    const { listNowPlaying } = this.state;
    return (
      <div>
        <div>
        <NavbarComp/>
        </div>
        <div className = 'container-fluid'>
        {/* <div style={{ display: "flex", marginTop: 10, marginLeft: 10 }}> */}
        <div className = "row ml-5 mr-5 justify-content-around">
          {listNowPlaying.map((item) => {
            return (
              <NowPlaying src={"https://image.tmdb.org/t/p/original/" + [item.poster_path]} title={item.original_title} />
            );
          })}
        </div>
        </div>
      </div>
    )
  }
}

