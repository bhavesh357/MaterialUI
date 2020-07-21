import React from 'react';

class FooterSubMenu extends React.Component{
    
    render(){

        var footerSubMenu= this.props.subFooterMenu.subMenu.map(Element => {
            return(
                <button key={Element} className="footer-menu-submenu-button">
                    {Element}
                </button>
            );
        })
        return(
            <div className="footer-menu">
                <div className="footer-menu-title">
                    {this.props.subFooterMenu.title}
                </div>
                <div className="footer-menu-submenu">
                    {footerSubMenu}
                </div>  
            </div>
        );
    }
}

export default FooterSubMenu;