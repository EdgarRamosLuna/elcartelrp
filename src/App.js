import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Menu from './components/Menu';
import Home from './components/Home';
import Test from './components/Test';
import Header from './components/Header';
import Whitelist from './components/Whitelist';

function App() {
  return (
    <div className="App">
      
      <video autoPlay muted loop id="video">
        <source src="assets/video/bg.mp4" type="video/mp4"/>
        </video>
        
      <div className="content">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="test" element={<Test />} />
          <Route path="whitelist" element={<Whitelist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
