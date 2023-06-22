import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Second from './Components/SecondComponent/Second';
import Fourth from './Components/Fourth.jsx/Fourth';
import Footer from './Components/Footer/Footer';
import Third from './Components/Third/Third';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Second/>
     <Third/>
     <Fourth/>
     <Footer/>
    </div>
  );
}

export default App;
