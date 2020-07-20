import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Users from './Users';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class Material extends React.Component{
    render() {
        return (
            <Router>
            <div id="container">
            <Header navbarButtons={this.props.navbarButtons}/>
            <Switch>
                <Route path="/" exact render={() => <Content 
                        title="Pricing" 
                        desc="Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."
                        tiles={this.props.tiles}
                    />}>
                </Route>
                <Route path="/users" exact render={() => <Users 
                        userList={this.props.userList}
                    />}>
                </Route>
            </Switch>
            
            <Footer footerMenu={this.props.footerMenu}/>
            </div>
            </Router>
            );
        }
    }
    
    export default Material;