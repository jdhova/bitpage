import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="App">
      <section>
      <Nav/>
      <Body />
      <Footer />
      </section>
      
    </div>
  );
}

export default App;
