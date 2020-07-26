import React from 'react';
import { Link } from 'react-router-dom';

class NavbarButton extends React.Component{
    render() {
        return (
            <Link to={`/users`} className="navbar-right-button">
            <button className="navbar-button" >{this.props.value}</button>
            </Link>
        );
    }
}

export default NavbarButton;