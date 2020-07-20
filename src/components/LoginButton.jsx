import React from 'react';

class LoginButton extends React.Component{
    constructor(props){
        super(props);
        this.state={ isLoggedIn: false};
    }

    handleClick(){
        this.setState({ isLoggedIn: !this.state.isLoggedIn});
    }
    
    render() {
        var logButton= this.state.isLoggedIn? 
        <div id="logout" >
        LOGOUT
        </div>:
        <div id="login" >
        LOGIN
        </div>
        return(
            <button onClick={() => this.handleClick()} className="navbar-button login-button" >
            {logButton}
            </button>
            );
        }
    }
    
    export default LoginButton;