import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faCreativeCommonsBy } from '@fortawesome/free-brands-svg-icons';



const Player = (props) => {
    //console.log(props.player);
    const {name, pic, salary, club} = props.player;
    const handlePickedPlayer = props.handlePickedPlayer;

    

    return (
        <div className="player col">
            <Card className="h-100 shadow bg-transparent rounded">
                <Card.Img variant="top" src={pic}></Card.Img>
                <Card.Body className="d-flex flex-column">
                    <div className="">
                        <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
                    </div>
                    <h6>Club : {club}</h6>
                    <p> <strong> Salary : {salary}</strong></p>
                    <button className="btn btn-outline-info" onClick={() => handlePickedPlayer(props.player)}><FontAwesomeIcon icon={faCreativeCommonsBy} /> Pick Player</button>
                </Card.Body>
                

            </Card>
        </div>
    );
};

export default Player;