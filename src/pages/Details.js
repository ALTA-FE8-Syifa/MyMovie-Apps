import React, { Component } from 'react';
import NavbarComp from '../components/NavbarComp';
import {Table} from 'react-bootstrap';
// import CardMovieComp from '../components/CardMovieComp';
// import Details from "./pages/Details"
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/MyMovies.css'
import {withRouter} from "../withRouter";


const imageUrl = "https://image.tmdb.org/t/p/original/"

class Details extends Component {
 
  render() {

    return (
      <div>
        <div>
        <NavbarComp/>
        </div>
        <div className = 'container-fluid container-detail'>
          {/* <div className='layer-white'></div> */}
        <img src={imageUrl +  this.props.location.state.backdrop_path} className="img-fluid"/>
          <div className = "row d-flex justify-content-center" style={{ paddingTop: '4rem', paddingBottom:'4rem'}} >
          <div className = "col-xl-4 col-md-6 col-8"> 
              <img src ={imageUrl+  this.props.location.state.image} className="rounded mx-auto d-block image-detail" style={{ width: '18rem'}}/>
          </div>
          
        <div className = "col-xl-6 col-md-6 col-8"> 
                  <div className="row pt-4">
                    <h2>{this.props.location.state.title}</h2>
                  </div>
              <Table>
                  <tbody>
                  <tr>
                    <td>Release Date: {this.props.location.state.release_date}</td>
                  </tr>
                  <tr>
                    <td>Popularity: {this.props.location.state.popularity}</td>
                  </tr>
                  <tr>
                    <td>Rating: {this.props.location.state.vote_average}</td>
                  </tr>
                  <tr>
                    <td>Overview: {this.props.location.state.overview}</td>
                  </tr>
                </tbody>
              </Table>

        </div>
        </div>
        </div>
        
      </div>
    )
  }
}

export default withRouter(Details);