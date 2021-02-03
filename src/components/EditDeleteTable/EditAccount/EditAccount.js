import React, { useState, useEffect } from 'react';
import { withRouter, useParams, useHistory } from "react-router-dom";
import "./EditAccount.css";

function EditAccount({ listOfAccounts, saveEditedAccount }) {

    const [account, setAccount] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const accountForEdit = listOfAccounts.filter(el => el.id == id)[0];
        document.querySelector("#firstName").value = accountForEdit.firstName;
        document.querySelector("#lastName").value = accountForEdit.lastName;
        document.querySelector("#phone").value = accountForEdit.phone;
        document.querySelector("#email").value = accountForEdit.email;
    }, []);

    const editAccount = e => {
        const editedAcc = Object.assign(account, { id: Number(id), [e.target.id]: e.target.value });
        setAccount(prevAccount => prevAccount = prevAccount = editedAcc);
    };

    const history = useHistory();

    const saveAccount = () => {
        saveEditedAccount(account);
        history.push("/edit-delete");
    }

    return (
        <div>
            <div className="add-block">
                <div className="add-text">Edit Account</div>
                <div className="inputs">
                    <input type="text" id="firstName" placeholder="First Name" className="input-field" onChange={editAccount} /><br /><br />
                    <input type="text" id="lastName" placeholder="Last Name" className="input-field" onChange={editAccount} /><br /><br />
                    <input type="text" id="phone" placeholder="Phone" className="input-field" onChange={editAccount} /><br /><br />
                    <input type="text" id="email" placeholder="Email" className="input-field" onChange={editAccount} /><br /><br />
                    <button onClick={() => saveAccount()}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(EditAccount);
