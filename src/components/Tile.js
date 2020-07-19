import React from 'react';

class Tile extends React.Component{
    render() {
        
        return(
            <div className="tile">
                <div className="tile-title">{this.props.tile.plan}</div>
                <div className="tile-tagline">{this.props.tile.tagLine? this.props.tile.tagLine : ""}</div>
                <div className="tile-price">
                    <div className="price">${this.props.tile.price}</div>/mo
                </div>
                <div className="tile-users">{this.props.tile.users}</div>
                <div className="tile-storage">{this.props.tile.storage}</div>
                <div className="tile-help">{this.props.tile.help}</div>
                <div className="tile-support">{this.props.tile.support}</div>
                <div className="tile-button">{this.props.tile.button}</div>
            </div>
        );
    }
}

export default Tile;