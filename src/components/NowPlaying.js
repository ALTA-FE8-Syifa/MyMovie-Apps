import React, {Component} from "react";
import {Button, Card} from 'react-bootstrap';
import '../style/MyMovies.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NowPlaying extends Component {
    render() {
        return (
            // <div className="containerCard">
            // <img className="image" src={this.props.src} />
            // <p>{this.props.title}</p>
            // </div>

            <Card style={{ width: '18rem' }} className= "containerCard">
                <Card.Img className='image mt-3' variant="top" src={this.props.src} />
                <Card.Body>
                    <Card.Text>{this.props.title}</Card.Text>
                    <Button variant="success">Favorites</Button>
                </Card.Body>
            </Card>

            // <div className="card" style="width: 18rem;">
            //     <img src={this.props.src} className="card-img-top image" />
            //      <div className="card-body">
            //         {/* <h5 className="card-title">Card title</h5> */}
            //         <p className="card-text">{this.props.title}</p>
            //         <a href="#" className="btn btn-primary">Favorites</a>
            //      </div>
            // </div>
        );
        
    }
}

