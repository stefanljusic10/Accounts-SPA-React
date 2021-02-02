import React from "react";
import { Link } from "react-router-dom";

function Account({ account, edit, deleteAccount }) {

    let buttons = null;
    if (edit) {
        buttons = (
            <>
                <td className="edit-delete-td"><Link to={"/edit/" + account.id}><button className="edit-btn">Edit</button></Link></td>
                <td className="edit-delete-td"><button className="delete-btn" onClick={() => {deleteAccount(account.id)}}>Delete</button></td>
            </>
        )
    }

    return (
        <tr>
            <td>{account.id}</td>
            <td>{account.firstName}</td>
            <td>{account.lastName}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
            {buttons}
        </tr>
    )
}

export default Account;