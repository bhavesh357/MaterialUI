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
                <div className="tile-info-list">
                <div className="tile-info tile-users">{this.props.tile.users} users included</div>
                <div className="tile-info tile-storage">{this.props.tile.storage} GB of storage</div>
                <div className="tile-info tile-help">{this.props.tile.help}</div>
                <div className="tile-info tile-support">{this.props.tile.support}</div>
                </div>
                <button className="tile-button">{this.props.tile.button}</button>
            </div>
        );
    }
}

export default Tile;