import React from 'react';
import "./EditAccount.css";

function EditAccount({ account }) {
    console.log(account);
    return (
        <div>
            <div className="add-block">
                <div className="add-text">Edit Account</div>
                <div className="inputs">
                    <input type="text" id="firstName" placeholder="First Name" className="input-field" /><br /><br />
                    <input type="text" id="lastName" placeholder="Last Name" className="input-field" /><br /><br />
                    <input type="text" id="phone" placeholder="Phone" className="input-field" /><br /><br />
                    <input type="text" id="email" placeholder="Email" className="input-field" /><br /><br />
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditAccount;
