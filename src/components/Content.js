import React from 'react';

class Content extends React.Component{
    render(){
        return (
            <div id="center-content">
            <div className="content-header" >{this.props.title}</div>
            <div className="content-desc">{this.props.desc}</div>
            </div>
        );
    }
}
export default Content;