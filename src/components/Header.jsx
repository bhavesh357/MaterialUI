import React from 'react';
import LoginButton from './LoginButton';
import NavbarButton from './NavbarButton';
import CompanyName from './CompanyName';

class Header extends React.Component{
    render() {
        return (
            <div className="navbar">
            <div className="navbar-left">
            <CompanyName name="Company Name"/>
            </div>
            <div className="navbar-right">
            <NavbarButton value="FEATURES"/>
            <NavbarButton value="ENTERPRISE"/>
            <NavbarButton value="SUPPORT"/>
            <LoginButton />
            </div>
            
            </div>
            );
        }
    }
    
    export default Header;