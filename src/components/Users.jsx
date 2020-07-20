import React from 'react';

class Users extends React.Component{
    render(){
        return(
        <div id="list">
        <div id="user-list">
            <div id="user-number">
                <h2 id="user-count">Users(20)</h2>
                <button onclick="toggleNewUser()" id="add-user-button">+ ADD NEW</button>
            </div>
            <div id="user-search">
                <div id="user-search-placeholder">
                    <input oninput="search()" id="user-search-mini" class="user-search-placeholder-text" type="text" placeholder="Search UserName,Email,Status,Role"/>
                </div>
                <button onclick="search()" id="user-search-button"><i class="small-search-button flaticon-search"></i></button>
            </div>
            
            <div id="user-list-details">
                <div class="user-list-head">
                    <div class="name list-column">Name</div>
                    <div class="email list-column">Email</div>
                    <div class="status list-column">Status</div>
                    <div class="role list-column">Role</div>
                    <div class="last-login list-column">Last Login</div>
                    <div class="permission list-column">Permission</div>
                    <div class="option list-column"></div>
                </div>
                <div id="user-list-items">
                    
                </div>
            </div>
        </div>
    </div>
    );
    }
}

export default Users;