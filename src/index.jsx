import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Material from './components/Material';
var users=[
    {
        id:1,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:2,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:3,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:4,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:5,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:6,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:7,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:8,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:9,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:10,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:11,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:12,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    },{
        id:13,
        name: "Bhavesh Kadam",
        email:"bkadam357@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permission:"Valid"
    },{
        id:14,
        name: "Bhavesh Kale",
        email:"bkadam357@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"3d ago",
        permission:"Valid"
    }];

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

var navbarButtons=["FEATURES","ENTERPRISE","SUPPORT"];
    
    // ========================================
    
    ReactDOM.render(
        <Material tiles={tiles} footerMenu={footer} navbarButtons={navbarButtons} userList={users}/>,
        document.getElementById('root')
        );
        