import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'

class Material extends React.Component{
    render() {
        return (
            <div id="container">
            <Header />
            <Content 
                title="Pricing" 
                desc="Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."
                tiles={this.props.tiles}
            />
            <Footer footerMenu={this.props.footerMenu}/>
            </div>
        );
    }
}

export default Material;