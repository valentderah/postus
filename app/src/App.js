import React, {useState} from 'react';
import './App.css';
import {Content} from "./components/layout/Content";
import {HashRouter, Route, Routes} from "react-router-dom";
import {NewPost} from "./routes/new-post";
import {LinkSocial} from "./routes/link-social";


const App = () => {
    return (
        <div>
            <header className="app-header">
                <title>Постус</title>
            </header>
            <HashRouter>
                <Content>
                    <Routes>
                        <Route path="/" element={<NewPost/>}/>
                        <Route path="/link-social" element={<LinkSocial/>}/>
                    </Routes>
                </Content>
            </HashRouter>
        </div>
    );
}

export default App;
