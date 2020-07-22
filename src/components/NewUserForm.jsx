import React from 'react';

class NewUserForm extends React.Component{

    handleClick(e){
        var name=document.getElementById("new-name").value;
        this.props.newUserForm(name);
    }

    render() {
        return (
            this.props.isToggled? <div id="new-user-div">
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
            <button id="new-user-form-button" onClick={() =>{this.handleClick()}}>Add</button>
            </div>
            </div>
            </div>
            : <div id="new-user-div">
            
            </div>
        )
    }
}

export default NewUserForm;