import React from 'react';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            isAddingUser: false,
            usersList: this.props.userList,
        });
    }
    
    addNewUserToggle(){
        this.setState({
            isAddingUser: !this.state.isAddingUser,
        });
    }

    validateForm(){
        var nameRegex = /([A-Z]{1}[a-z]{1,10} [A-Z]{1}[a-z]{1,10})\w+/;
        var emailRegex =/[\w\d]{1,}[.\-#!]?[\w\d]{1,}@[\w\d]{1,}.[a-z]{2,3}.?([a-z]{2})?/;
        var error="";
        if(document.getElementById("last-login").value<0){
            error="Enter positive last Login day";
        }else if(emailRegex.test(document.getElementById("new-email").value)===false){
            error="Enter proper email id";
        }else if(nameRegex.test(document.getElementById("new-name").value)===false){
            error="Enter proper name";
        }
        if(error.length===0){
            return true;
        }
        document.getElementById("new-error-message").innerHTML=error;
        return false;
    }
    
    addNewUser(){
        var validationFlag = () => {};
        console.log(this.validateForm());
        if(validationFlag){
            var User={
                id:this.state.usersList.length+1,
                name: document.getElementById("new-name").value,
                email:document.getElementById("new-email").value,
                status:document.getElementById("new-status").value,
                role:document.getElementById("new-role").value,
                lastLogin:document.getElementById("last-login").value+"d ago",
                permission:document.getElementById("new-permission").value
            }
            var newList=this.props.userList;
            console.log(newList);
            newList.push(User);
            console.log(newList);
            this.setState({
                usersList: newList
            });
        }
    }
    
    render(){
        var newUserToggle=this.state.isAddingUser? <div id="new-user-div">
        <div className="error-row new-user-row ">
        <div className="new-user-column">
        <label id="new-error-message"></label>
        </div>
        </div>
        <div className="new-user-row">
        <div className="new-user-column">
        <label className="new-user-label">Enter Name : </label>
        </div>
        <div className="new-user-input-column">
        <input id="new-name" type="text" />
        </div>
        </div>
        <div className="new-user-row">
        <div className="new-user-column">
        <label className="new-user-label">Enter Email : </label>
        </div>
        <div className="new-user-input-column">
        <input id="new-email" type="text"/>
        </div>
        </div>
        <div className="new-user-row">
        <div className="new-user-column">
        <label className="new-user-label">Enter Status : </label>
        </div>
        <div className="new-user-input-column">
        <select name="status" id="new-status">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        </select>
        <br/>
        </div>
        </div>
        <div className="new-user-row">
        <div className="new-user-column">
        <label className="new-user-label">Enter Role : </label>
        </div>
        <div className="new-user-input-column">
        <select name="status" id="new-role">
        <option value="User">User</option>
        <option value="Administrator">Administrator</option>
        </select>
        </div>
        </div>
        <div className="new-user-row">
        <div className="new-user-column">
        <label className="new-user-label">Enter Last Login : </label>
        </div>
        <div className="new-user-input-column">
        <input id="last-login" type="number" />
        </div>
        </div>
        <div className="new-user-row">
        <div className="new-user-column">
        <label className="new-user-label">Enter Permission : </label>
        </div>
        <div className="new-user-input-column">
        <select name="status" id="new-permission">
        <option value="Valid">Valid</option>
        <option value="Invalid">Invalid</option>
        </select>
        </div>
        </div>
        <div id="new-user-form-row" className="new-user-row">
        <div className="new-user-column">
        <button id="new-user-form-button" onClick={() => this.addNewUser()}>Add</button>
        </div>
        </div>
        </div>
        : <div id="new-user-div">
        
        </div>;
        var userList= this.props.userList.map(user => {
            var status=user.status===("Active") ? <button onClick={() => {console.log("toggleStatus");} } className="status-button status-active">{user.status}</button>:<button onClick={() => {console.log("toggleStatus(i)");}} className="status-button status-inactive">{user.status}</button>;
            return (
                <div key={user.id} className="user-list-item">
                <div className="name list-column"><i className="flaticon-user"></i>{user.name}</div>
                <div className="email list-column">{user.email}</div>
                <div className="status list-column">{status}</div>
                <div className="role list-column">{user.role}</div>
                <div className="last-login list-column">{user.lastLogin}</div>
                <div className="permission list-column">{user.permission}</div>
                <button className="option list-column">...</button>
                </div>);
            })
            
            return(
                <div id="list">
                <div id="user-list">
                <div id="user-number">
                <h2 id="user-count">Users({this.state.usersList.length})</h2>
                <button onClick={() => this.addNewUserToggle()} id="add-user-button">+ ADD NEW</button>
                </div>
                {newUserToggle}
                <div id="user-search">
                <div id="user-search-placeholder">
                <input onInput={()=>{console.log("search()")}} id="user-search-mini" className="user-search-placeholder-text" type="text" placeholder="Search UserName,Email,Status,Role"/>
                </div>
                <button onClick={() => {console.log("search");}} id="user-search-button"><i className="small-search-button flaticon-search"></i></button>
                </div>
                
                <div id="user-list-details">
                <div className="user-list-head">
                <div className="name list-column">Name</div>
                <div className="email list-column">Email</div>
                <div className="status list-column">Status</div>
                <div className="role list-column">Role</div>
                <div className="last-login list-column">Last Login</div>
                <div className="permission list-column">Permission</div>
                <div className="option list-column"></div>
                </div>
                <div id="user-list-items">
                {userList}
                </div>
                </div>
                </div>
                </div>
                );
            }
        }
        
        export default Users;