import React from 'react';

class FooterSubMenu extends React.Component{
    
    render(){

        var footerSubMenu= this.props.subFooterMenu.subMenu.map(Element => {
            return(
                <button className="footer-menu-submenu-button">
                    {Element}
                </button>
            );
        })
        return(
            <div class="footer-menu">
                <div class="footer-menu-title">
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