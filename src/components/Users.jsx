import React from 'react';
import NewUserForm from './NewUserForm';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAddingUser: false,
            usersList: this.props.userList,
            updatedUsersList: this.props.userList,
        };
        this.addNewUser= this.addNewUser.bind(this);
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

    isSimilar(element,word){
        return element.name.toLowerCase().indexOf(word)>-1 || element.email.toLowerCase().indexOf(word)>-1 || element.status.toLowerCase().indexOf(word)===0 || element.role.toLowerCase().indexOf(word)>-1 
    }
    
    search(){
        var word=document.getElementById("user-search-mini").value.toLowerCase();
        console.log(word);
        if(word.trim()===""){
            this.setState({
                usersList:this.state.updatedUsersList,
            });
        }else{
            var searchUsers=this.state.usersList;
            var filteredList=searchUsers.filter(element => this.isSimilar(element,word));
            console.log(filteredList);
            this.setState({
                usersList:filteredList,
            });
        }
        
    }

    componentDidMount(){
        console.log("Userlist is shown");
    }
    

    toggleStatus(idNumber){
        var users = this.state.usersList;
        for(let i=0;users.length>i;i++){
            if(users[i].id===idNumber){
                console.log(users[i]);
                if(users[i].status.localeCompare("Active")===0){
                    users[i].status="Inactive";
                }else{
                    users[i].status="Active";
                }
                console.log(users[i]);
            }
        }
        this.setState({
            userList: users,
        });
    }
    
    addNewUser(name){
        console.log(name);
        if(this.validateForm()){
            var User={
                id:this.state.usersList.length+1,
                name: document.getElementById("new-name").value,
                email:document.getElementById("new-email").value,
                status:document.getElementById("new-status").value,
                role:document.getElementById("new-role").value,
                lastLogin:document.getElementById("last-login").value+"d ago",
                permission:document.getElementById("new-permission").value
            }
            var newList=this.state.usersList;
            newList.push(User);
            this.setState({
                usersList: newList,
                updatedUsersList: newList,
            });
            this.addNewUserToggle();
        }
    }
    
    render(){
        var userList= this.state.usersList.map(user => {
            var status=user.status===("Active") ? <button onClick={() => {console.log("toggleStatus");} } className="status-button status-active">{user.status}</button>:<button onClick={() => {console.log("toggleStatus(i)");}} className="status-button status-inactive">{user.status}</button>;
            return (
                <div key={user.id} className="user-list-item">
                <div className="name list-column"><i className="flaticon-user"></i>{user.name}</div>
                <div className="email list-column">{user.email}</div>
                <div onClick={() => this.toggleStatus(user.id)} className="status list-column">{status}</div>
                <div className="role list-column">{user.role}</div>
                <div className="last-login list-column">{user.lastLogin}</div>
                <div className="permission list-column">{user.permission}</div>
                <button className="option list-column">...</button>
                </div>);
            })

            userList= this.state.usersList.length===0? <div className="user-list-item"><div className="name list-column"><i className="flaticon-user"></i>No Users Found</div></div>: userList;
            

            console.log("rendering");
            
            return(
                <div id="list">
                <div id="user-list">
                <div id="user-number">
                <h2 id="user-count">Users({this.state.usersList.length})</h2>
                <button onClick={() => this.addNewUserToggle()} id="add-user-button">+ ADD NEW</button>
                </div>
                <NewUserForm isToggled={this.state.isAddingUser} newUserForm={this.addNewUser}/>
                <div id="user-search">
                <div id="user-search-placeholder">
                <input onInput={()=>{this.search()}} id="user-search-mini" className="user-search-placeholder-text" type="text" placeholder="Search UserName,Email,Status,Role"/>
                </div>
                <button onClick={() => {this.search()}} id="user-search-button"><i className="small-search-button flaticon-search"></i></button>
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