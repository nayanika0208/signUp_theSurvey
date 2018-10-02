import React, { Component } from "react";
import "./Sidebar.css";
import logo from './svg/github.svg';

export class Sidebar extends Component {
    render() {
        return (

        		<div class="sidebar">
        			<span id="allSurveys">ALL SURVEYS</span>
        			<span id="mySurveys">MY SURVEYS</span>
        			<span id="myAccount">MY ACCOUNT</span>
        			<span id="projectRepo">
        				<img src={logo} alt="github repo"/>
        			</span>
        		</div>
        
        );
    }
}

export default Sidebar;
