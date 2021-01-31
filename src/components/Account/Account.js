import React from "react";

function Account ({account}){
    return(
        <tr>
                <td>{account.id}</td>
                <td>{account.firstName}</td>
                <td>{account.lastName}</td>
                <td>{account.phone}</td>
                <td>{account.email}</td>
            </tr>
    )
}

export default Account;