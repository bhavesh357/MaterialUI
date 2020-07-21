import React from 'react';
import Tile from './Tile';

class TilesGroup extends React.Component{
    render() {
        var tileList=this.props.tiles.map(tile => {
            return(
                <Tile key={tile.plan} tile={tile} />
                ) 
            });
            return (tileList);
            }
        }
        
        export default TilesGroup;