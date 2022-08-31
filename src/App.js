import React, { Component } from 'react';
// import MyMovies from './components/NowPlaying';
import NavbarComp from './components/NavbarComp';
import NowPlaying from './components/NowPlaying';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <div><NavbarComp/></div>
          {/* <div><NowPlaying/></div> */}
      </div>
    );
  }
}

