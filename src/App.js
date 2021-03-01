import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Player from './Components/Header/Player/Player';
import Cart from './Components/Player Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';


function App() {
  <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

  const [player, setPlayer] = useState([]);
  const [pickedPlayer, setPickedPlayer] = useState([]);

  const handlePickedPlayer = (singlePlayer) => {
    const newPlayer =[...pickedPlayer, singlePlayer ];
    setPickedPlayer(newPlayer);
  }

  useEffect(()=>{
    fetch('https://api.jsonbin.io/b/603c85409342196a6a6a63f0/1')
    .then(res => res.json())
    .then(data => setPlayer(data))
    .catch(error => console.log(error));
  }, [])

  const shuffled = player.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let shuffledPlayer = shuffled.slice(0, 15);


  return (
    <div className="App">
      <Header className="container"></Header>
      <h2 className="display-3">Choose Your Players</h2>
      <Container className="">
        <Cart cart={pickedPlayer}></Cart>
      </Container>
      

      <Container className="">
        <Row>
          <div className="player-container row row-cols-1 row-cols-md-3 row-cols-sm-2 shadow-lg p-2 ">
          {
            shuffledPlayer.map(singlePlayer => <Col className="mb-5"> <Player player={singlePlayer} key={singlePlayer.id} handlePickedPlayer={handlePickedPlayer} ></Player> </Col>)
          }
          </div>

        </Row>
      </Container>
      <Footer> 
        
      </Footer>
      
     </div>
  );
}

export default App;
