import React from 'react';
import {Sidebar} from "./Sidebar";
import {Header} from "./Header";

export const Content = ({children}) => (
    <div className="container">
        <Sidebar/>
        <div className="main-container">
            <Header/>
            {children}
        </div>
    </div>
);
