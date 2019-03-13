import React from 'react';
import {NavLink} from "react-router-dom";
import './landingstyle.css';


const LandingPage = () => {
    return (
        <div id="background">
            <div>
                <h1 id="maintitle">Dog shelter Project</h1>
                <div id="subtitle">Find your dream dog, and be a happy family together!</div>
            </div>
            <div>
                <button id="all-dogs-main-page-button"><NavLink exact activeClassName='active' to='/dogs'>Looking for a
                    home</NavLink>
                </button>
                <button><NavLink exact activeClassName='active' to='/dog'>dog</NavLink></button>
            </div>
            <h2 id="example-dogs-text">Added recently:</h2>
        </div>
    );
};

export default LandingPage