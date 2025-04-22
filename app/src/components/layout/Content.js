import React from 'react';
import {Sidebar} from "./Sidebar";

export const Content = ({children}) => (
    <section className="content">
        <Sidebar/>
        <main className="main">{children}</main>
    </section>
);
