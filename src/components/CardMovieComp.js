import React, {Component} from "react";
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/MyMovies.css';


export default class CardMovieComp extends Component {
    render() {
        return (
           
            <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" className="rounded shadow p-3 image" src={this.props.src}  />
            <Card.Body className="text-center">
            <Card.Text  className="title" onClick={this.props.onClick}>{this.props.title}</Card.Text>
            <Button variant="success"  >Favorites</Button>
            </Card.Body>
          </Card>
        );
        
    }
}


