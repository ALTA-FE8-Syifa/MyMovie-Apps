import React, {Component} from "react";
import {Button, Card, Row, Col} from 'react-bootstrap';

export default class NowPlaying extends Component {
    render() {
        return(
            // <Container>
                // <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {this.props.src} />
                        <Card.Body >
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.inactive}</Card.Text>
                            <Card.Text>{this.props.release}</Card.Text>
                            <Button variant="primary">Favorite</Button><br/>
                            <Button variant="success">Trailer</Button>
                        </Card.Body>
                        </Card> 
                    </Col>
                // </Row>
            // </Container>
        )
    }
}

