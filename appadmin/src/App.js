import React from 'react';
import './App.css';
import TopBar from './Components/topbar/TopBar';
import SideBar from './Components/sidebar/SideBar';
import Home from './pages/home/Home';

function App() {
  return (
   <div className="App">
      <TopBar />
      <div className="container">
        <SideBar/>
        <Home />
      </div>

   </div>
  );
}

export default App;
