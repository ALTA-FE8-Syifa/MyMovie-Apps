import React, { Component } from 'react';
import NavbarComp from '../components/NavbarComp';
import CardMovieComp from '../components/CardMovieComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from "../withRouter";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline = baseUrl + "movie/" + "now_playing?" + `api_key=${process.env.REACT_APP_API_KEY}&` + "language=en-US&" + "page=1"


class NowPlaying extends Component {
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

  handleDetail(item) {
    this.props.navigate("/details", {
      state: {
        image: item.poster_path,
        title: item.original_title,
        description: item.description,
        popularity: item.popularity,
        release_date: item.release_date,
        vote_average: item.vote_average,
        overview: item.overview,
        backdrop_path: item.backdrop_path,
      },
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
        <div className = "row justify-content-around p-3"> 
          {listNowPlaying.map((item) => {
            return (
              <CardMovieComp src={"https://image.tmdb.org/t/p/original/" + [item.poster_path]} title={item.title} onClick={() => this.handleDetail(item)}/>
            );
          })}
        </div>
        </div>
        
      </div>
    )
  }
}

export default withRouter(NowPlaying);