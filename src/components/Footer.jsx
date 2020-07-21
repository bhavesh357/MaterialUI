import React from 'react';
import FooterSubMenu from './FooterSubMenu';

class Footer extends React.Component{
    
    render(){
        var footerMenu= this.props.footerMenu.map(menu => {
            return (
                <FooterSubMenu key={menu.title} subFooterMenu={menu}/>
            );
        })

        return(
            <div className="footer">
                <div className="footer-options">
                    {footerMenu}
                </div>
                <div className="footer-info">
                    Copyright @ Your Website 2020.
                </div>
            </div>
        );
    }
}

export default Footer;