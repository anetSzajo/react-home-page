import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainContent from './Components/MainContent/MainContent';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
