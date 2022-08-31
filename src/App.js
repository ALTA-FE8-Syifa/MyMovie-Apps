import React, { Component } from 'react';
import NavbarComp from './components/NavbarComp';
import NowPlaying from './components/NowPlaying';
import './style/MyMovies.css'



export default class App extends Component {
  render() {
    const listMovie = [
      {
          image:"https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/25/281308499.jpg",
          title:"Mencuri Raden Saleh",
          inactive:"Movie",
          release:"Release 2022",
      },
      {
          image:"https://upload.wikimedia.org/wikipedia/id/e/e6/Nope_%28film%29_poster.jpg",
          title:"Nope",
          inactive:"Movie",
          release:"Release 2022",
      },
      {
          image:"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/08/21/771069366.jpg",
          title:"Orphan : First Kill",
          inactive:"Movie",
          release:"Release 2022",
      },
      
  ];

    return (
      <div className='App'>
          <div><NavbarComp/></div>
          <div style={{display: "flex", marginTop: 40, marginLeft: 50}}> {listMovie.map((item) => {
            return <NowPlaying src = {item.image} title = {item.title} inactive = {item.inactive} release = {item.release} />
          })}
          </div>
      </div>
    );
  }
}

