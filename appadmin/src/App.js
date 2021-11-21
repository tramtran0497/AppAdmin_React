import React from 'react';
import './App.css';
import TopBar from './Components/topbar/TopBar';
import SideBar from './Components/sidebar/SideBar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="">
          <TopBar />
          <div className="container">
            <SideBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/users" element={<UserList/>}/>
                <Route exact path="/user/:userId" element={<User/>}/>

            </Routes>
          </div>
        </div>
      </Router>
    
  );
}

export default App;
