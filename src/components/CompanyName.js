import React from 'react';

class CompanyName extends React.Component{
    render() {
        return (
            <div id="navbar-title" >{this.props.name}</div>
        );
    }
}

export default CompanyName;