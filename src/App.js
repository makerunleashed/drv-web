// App.js
import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="left-column">
          Left Column
        </div>
        <div className="center-column">
          Center Column
        </div>
        <div className="right-column">
          Right Column
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;