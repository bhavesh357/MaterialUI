import React from 'react';
import LoginButton from './LoginButton';
import NavbarButton from './NavbarButton';
import CompanyName from './CompanyName';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={
            navbarFlag:true,
        }
    }
    
    toggleNavBar(){
        if(this.state.navbarFlag){
            document.getElementById("navbar-right").style.right=  "0%";
        }else{
            document.getElementById("navbar-right").style.right=  "-200%";
        }
        this.setState({
            navbarFlag: !this.state.navbarFlag,
        });
        document.getElementById("hamburger").classList.toggle("make-x");
    }

    render() {
        var navbarMenu= this.props.navbarButtons.map(button => {
            return (
                <NavbarButton key={button} value={button}/>
                );
            })
            return (
                <div className="navbar" id="navbar">
                <div className="navbar-left">
                <CompanyName name="Company Name"/>
                </div>
                <div className="navbar-right" id="navbar-right">
                {navbarMenu}
                <a href="/" className="navbar-right-button">
                <LoginButton />
                </a>
                </div>
                <div id="navbar-toggle-button">
                <div onClick={() => this.toggleNavBar()} id="hamburger">
                    <div className="line line-one"></div>
                    <div className="line line-two"></div>
                    <div className="line line-three"></div>
                </div>
                </div>
                
                </div>
                );
            }
        }
        
        export default Header;