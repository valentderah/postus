import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <NavLink to='/about'>About</NavLink>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>About</h1>
            <NavLink to='/'>Home</NavLink>
        </div>
    );
}
const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </HashRouter>
            </header>
        </div>
    );
}

export default App;
