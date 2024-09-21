// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import RoomPage from './pages/Room';

const App = () => {
    return (
       <div className='App'>
        <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/room/:roomId' element={<RoomPage />} />
        </Routes>
        </Router>
       </div>
    );
};

export default App;
