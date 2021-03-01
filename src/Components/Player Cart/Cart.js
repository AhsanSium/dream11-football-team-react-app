import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    let total = cart.reduce((total, player) => total + parseFloat(player.salary), 0);
    total = total.toFixed(2);
    
    return (
        <div className="container m-2 p-4 color-success">
             <div class="d-flex w-100 justify-content-center list-group-item list-group-item-primary">
                <h5 class="mb-1">Players:</h5>
            </div> 
                <ul className="list-group w-100 flex-md-row">
                {
                    cart.map(player => <li className="list-group-item list-group-item-success w-100 " id={player.id}><strong> {player.name} </strong>salary {player.salary}M</li> )
                }
                </ul>
            <div class="d-flex w-100 justify-content-center list-group-item list-group-item-primary">
                <h4>Total Salary:  {total}M</h4>
            </div>     
            
        </div>
    );
};

export default Cart;