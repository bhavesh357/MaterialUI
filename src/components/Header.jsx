import React from 'react';
import LoginButton from './LoginButton';
import NavbarButton from './NavbarButton';
import CompanyName from './CompanyName';

class Header extends React.Component{
    
    
    render() {
        var navbarMenu= this.props.navbarButtons.map(button => {
            return (
                <NavbarButton key={button} value={button}/>
                );
            })
            return (
                <div className="navbar">
                <div className="navbar-left">
                <CompanyName name="Company Name"/>
                </div>
                <div className="navbar-right">
                {navbarMenu}
                <LoginButton />
                </div>
                
                </div>
                );
            }
        }
        
        export default Header;