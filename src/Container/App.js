import React, { Component } from 'react';
import './App.css';
import Footer from '../Components/Footer/footer';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import RegistrationForm from '../Components/RegistrationForm/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div class="contentContainer">
        <Sidebar/>
        <RegistrationForm />
      </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
