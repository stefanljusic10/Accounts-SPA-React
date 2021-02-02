import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import "./AddAccount.css";

function AddAccount(props) {

    const obj = { id: "?", firstName: "", lastName: "", phone: "", email: "" };
    const [account, setAccount] = useState(obj);

    const changeAccountInput = e => {
        const newAccount = Object.assign(obj, { [e.target.id]: e.target.value })
        setAccount(prevAccount => prevAccount = newAccount);
    }

    const addAccount = () => {
        props.addNewAccount(account);
        props.history.push("/");
    }

    return (
        <div className="add-block">
            <div className="add-text">Add Account</div>
            <div className="inputs">
                <input type="text" id="firstName" placeholder="First Name" className="input-field" onChange={changeAccountInput} /><br /><br />
                <input type="text" id="lastName" placeholder="Last Name" className="input-field" onChange={changeAccountInput} /><br /><br />
                <input type="text" id="phone" placeholder="Phone" className="input-field" onChange={changeAccountInput} /><br /><br />
                <input type="text" id="email" placeholder="Email" className="input-field" onChange={changeAccountInput} /><br /><br />
                <button onClick={addAccount}>Add Account</button>
            </div>
        </div>
    )
}

export default withRouter(AddAccount);
