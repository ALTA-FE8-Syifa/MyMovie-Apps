import React from 'react'
import {Button, Card} from 'react-bootstrap';
// import playLogo from './image/PngItem_2087614.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/MyMovies.css';



const CardMovieComp = (props) => {

  return (
     <Card style={{ width: '18rem' }} className="card pt-5">
      {/* <img src={playLogo} className="playLogo img-fluid"></img> */}
       <Card.Img variant="top" className="rounded shadow p-2 image" src={props.src}  />
       <Card.Body className="text-center">
         <Card.Text  className="title" onClick={props.onClick}>{props.title}</Card.Text>
         <Button variant="success"  >Favorites</Button>
       </Card.Body>
      </Card>
    );
} ;

export default CardMovieComp
