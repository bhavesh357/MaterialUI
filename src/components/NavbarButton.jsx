import React from 'react';

class NavbarButton extends React.Component{
    render() {
        return (
            <button className="navbar-button" >{this.props.value}</button>
        );
    }
}

export default NavbarButton;