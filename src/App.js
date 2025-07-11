import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <About />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
