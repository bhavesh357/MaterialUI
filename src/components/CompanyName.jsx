import React from 'react';
import { Link } from 'react-router-dom';

class CompanyName extends React.Component{
    render() {
        return (
            <Link className="navbar-title-link" to="/">
            <div id="navbar-title" >{this.props.name}</div>
            </Link>
        );
    }
}

export default CompanyName;