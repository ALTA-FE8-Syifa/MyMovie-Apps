import React, {Component} from "react";
import {Button, Card} from 'react-bootstrap';
// import { withRouter } from '../withRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/MyMovies.css';


export default class CardMovieComp extends Component {
    render() {
        return (
           
            // <Card style={{ width: '18rem' }} className= "containerCard">
            //     <Card.Img className='image mt-3' variant="top" src={this.props.src} />
            //     <Card.Body>
            //         <Card.Text className="title text-center">{this.props.title}</Card.Text>
            //         <Button variant="success" className="">Favorites</Button>
            //     </Card.Body>
            // </Card>

            <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" className="rounded shadow p-3 image" src={this.props.src}  />
            <Card.Body className="text-center">
            <Card.Text  className="title" onClick={this.props.onClick}>{this.props.title}</Card.Text>
            <Button variant="success"  >Favorites</Button>
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

//export default withRouter(CardMovieComp);
//export default(NowPlaying);

