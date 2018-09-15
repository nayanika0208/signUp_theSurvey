import React, { Component } from 'react';
import './App.css';
import Footer from '../Components/Footer/footer';
import RegistrationForm from '../Components/RegistrationForm/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegistrationForm />
        <Footer/>
      </div>
    );
  }
}

export default App;
