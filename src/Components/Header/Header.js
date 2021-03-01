import React from 'react';
import './Header.css';
import Logo from '../../Logo/Football.jpg';

const Header = () => {

    return (
        <div className="header">
            <nav className="nav navbar navbar-expand-lg navbar-dark bg-light ">            
                <div className="menu container-fluid ">
                <img style={{width: "120px"}} src={Logo} alt="" className=" img-fluid img-thumbnail rounded shadow-lg "/>
                    <h3 className="h3 display-4"> Dream-11 Team</h3>
                    <div className="container-fluid justify-content-end">
                    <ul className="menu-ul navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item p-2 m-2"><a href="#">Home</a></li>
                        <li className="nav-item p-2 m-2"><a href="#">Data</a></li>
                        <li className="nav-item p-2 m-2"><a href="#">Contact</a></li>
                    </ul>
                    </div> 
                </div>
            </nav>
              
        </div>
    );
};

export default Header;