import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Navbar } from './components/Navbar';
import { useState } from 'react';

function App() {
  const [username, setUsername]= useState("Dikshak");
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element= {<Home username= {username} />} />
      <Route path='/profile' element= {<Profile username= {username} setUsername= {setUsername} />} />
      <Route path='*' element= {<h1>Page not found! </h1>} />
      </Routes>
     
      </BrowserRouter>
        
    </div>
  );
}

export default App;
