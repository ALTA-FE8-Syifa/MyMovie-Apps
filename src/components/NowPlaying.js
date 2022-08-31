import React, {Component} from "react";
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import MencuriImage from "./image/Mencuri.jpg"
import NopeImage from "./image/Nope.jpg"
import OrphanImage from "./image/Orphan.jpg"


export default class NowPlaying extends Component {
    
    render() {
        // const listMovie = [
        //     {
        //         image:"https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/08/25/281308499.jpg",
        //         title:"Mencuri Raden Saleh",
        //         inactive:"Movie",
        //         release:"Release 2022",
        //     },
        //     {
        //         image:"",
        //         title:"",
        //         inactive:"",
        //         release:"",
        //     },
        //     {
        //         image:"",
        //         title:"",
        //         inactive:"",
        //         release:"",
        //     },
        // ]

        return(
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="MovieImage">
                        <Card.Img variant="top" src= {NopeImage} />
                        <Card.Body>
                            <Card.Title>Nope</Card.Title>
                            <Card.Text>
                            2022
                            </Card.Text>
                            <Button variant="primary">Favorite</Button>
                            <Button variant="primary">Trailer</Button>
                        </Card.Body>
                        </Card> 
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className="MovieImage">
                        <Card.Img variant="top" src={OrphanImage} />
                        <Card.Body>
                        <Card.Title>Orphan : First Kill</Card.Title>
                            <Card.Text>
                            2022
                            </Card.Text>
                            <Button variant="primary">Favorite</Button>
                            <Button variant="primary">Trailer</Button>
                        </Card.Body>
                        </Card> 
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className="MovieImage">
                        <Card.Img variant="top" src={MencuriImage} />
                        <Card.Body>
                        <Card.Title>Mencuri Raden Saleh</Card.Title>
                            <Card.Text>
                            2022
                            </Card.Text>
                            <Button variant="primary">Favorite</Button>
                            <Button variant="primary">Trailer</Button>
                        </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

