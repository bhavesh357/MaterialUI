import React from 'react';
import FooterSubMenu from './FooterSubMenu';

class Footer extends React.Component{
    
    render(){
        var footerMenu= this.props.footerMenu.map(menu => {
            return (
                <FooterSubMenu subFooterMenu={menu}/>
            );
        })

        return(
            <div class="footer">
                {footerMenu}
            </div>
        );
    }
}

export default Footer;