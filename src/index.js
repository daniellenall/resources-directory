import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/layout/Header';
import Landing from './components/landing/Landing';
import Footer from './components/layout/Footer';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header/>
    
        <Landing/>

        <Footer/>
      </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));
