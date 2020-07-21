import React from 'react';
import TilesGroup from './TilesGroup'

class Content extends React.Component{
    render(){
        return (
            <div div="content">
            <div id="center-content">
            <div className="content-header" >{this.props.title}</div>
            <div className="content-desc">{this.props.desc}</div>
            </div>
            <div className="tile-group">    
                <TilesGroup tiles={this.props.tiles} />
            </div>
            </div>
        );
    }
}
export default Content;