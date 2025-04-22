import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {NewPost} from "../../routes/new-post";
import {LinkSocial} from "../../routes/link-social";


export const SidebarData = [
    {
        title: 'NewPost',
        path: '/',
        // element: <NewPost/>,
    },
    {
        title: 'LinkSocial',
        path: '/link-social',
        // element: <LinkSocial/>,
    },
];

export const Sidebar = () => {
    return (
        <div className="sidebar">
            {SidebarData.map((item, index) => {
                return (
                    <NavLink to={item.path} key={index}>
                        {item.title}
                    </NavLink>
                );
            })}
        </div>
    );
};
