import React, { Component } from "react";
import "./navbar.css";
import logo from './svg/logo.svg';

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logoWithText">
                    <div className="logo">
                        <img src={logo} alt="Logo of The Survey" />
                    </div>
                    <div className="text">
                        <span className="survey">The Survey</span>
                    </div>
                </div>
                <div className="signup">
                    <a href="assets/html/signup.html">Sign Up</a>
                </div>
            </div>
        );
    }
}

export default Navbar;
