import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Navbar } from './components/Navbar';
import { useState , createContext } from 'react';

export const AppContext= createContext();

function App() {
  const [username, setUsername]= useState("Dikshak");
  return (
    <div className="App">
      <BrowserRouter>
      <AppContext.Provider value={{username, setUsername}}>
      <Navbar />
      <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/profile' element= {<Profile />} />
      <Route path='*' element= {<h1>Page not found! </h1>} />
      </Routes>
      </AppContext.Provider>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
