import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Material from './components/Material';

var tiles=[{
    plan: "Free",
    tagLine: null,
    price: 0,
    users: 10,
    storage: 2,
    help: "Help center access",
    support: "Email support",
    button: "SIGN UP FOR FREE"
},{
    plan: "Pro",
    tagLine: "Most popular",
    price: 15,
    users: 20,
    storage: 10,
    help: "Help center access",
    support: "Priority Email support",
    button: "GET STARTED"
},{
    plan: "Enterprise",
    tagLine: null,
    price: 30,
    users: 50,
    storage: 30,
    help: "Help center access",
    support: "Phone & Email support",
    button: "CONTACT US"
}]

var footer=[{
    title: "Company",
    subMenu: ["Team","History","Contact Us","Location"]
},{
    title: "Features",
    subMenu: ["Cool stuff","Random feature","Team feature","Developer Stuff","Another One"]
},{
    title: "Resource",
    subMenu: ["Resource","Resource name","Another resource","Final Resource"]
},{
    title: "Legal",
    subMenu: ["Privacy policy","Terms of use"]
}];
    
    // ========================================
    
    ReactDOM.render(
        <Material tiles={tiles} footerMenu={footer}/>,
        document.getElementById('root')
        );
        