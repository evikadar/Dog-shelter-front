import React from 'react';
import {NavLink} from "react-router-dom";


const LandingPage = () => {
    return (
        <div>
            This is the LandingPage
            <button><NavLink exact activeClassName='active' to='/dog' >dog</NavLink></button>
        </div>
    );
}

export default LandingPage