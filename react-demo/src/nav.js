import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar=()=>{
    <div>
        <div>
            <NavLink exact to="/">默认页面</NavLink>
            <NavLink to="/Page1">页面1</NavLink>
            <NavLink to="/Page2">页面2</NavLink>
        </div>
    </div>
}

export default NavBar;