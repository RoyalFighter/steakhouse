import React from 'react';
import './App.css';
import Nav from './Nav';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seven from './Seven';
import Footer from './Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Reservation from './Pages/Reservation';
import Events from './Pages/Events';
import En from './Pages/En';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/en" element={<En />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seven />
      <Footer />
    </div>
  );
}

export default App;
