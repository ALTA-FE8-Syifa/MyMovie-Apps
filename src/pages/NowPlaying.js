import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavbarComp from '../components/NavbarComp';
import CardMovieComp from '../components/CardMovieComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const baseUrl = "https://api.themoviedb.org/3/";
const urlHeadline = baseUrl + "movie/" + "now_playing?" + `api_key=${process.env.REACT_APP_API_KEY}&` + "language=en-US&" + "page=1"


const NowPlaying = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [listplaying, setListplaying ] = useState([]);

  const getListplaying = async () => {
    await axios
    .get(urlHeadline)
    .then((response) => {
      setListplaying(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleClick = (item) => {
    console.log(item.original_title);
    navigate(`/details/${item.original_title}`, {
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
  };

  useEffect(() => {
    getListplaying();
  }, []);

  return (
    <div>
      <div>
        <NavbarComp/>
      </div>
      <div className = 'container-fluid'>
        <div className = "row justify-content-around p-3"> 
           {listplaying.map((item) => {
            return (
              <CardMovieComp src={"https://image.tmdb.org/t/p/original/" + [item.poster_path]} title={item.title} onClick={() => handleClick(item)}/>
            );
           })}
        </div>
      </div>
    </div>
  )
}

export default NowPlaying