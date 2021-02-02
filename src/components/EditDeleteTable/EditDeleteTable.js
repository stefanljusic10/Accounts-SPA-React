import React from 'react';
import Account from '../Account/Account';
import "./EditDeleteTable.css";

function EditDeleteTable({ account, deleteAccount }) {

    const listOfAccounts = account.map(acc => {
        return (
            <Account account={acc} key={acc.id} edit={true} deleteAccount={deleteAccount} />
        )
    })

    return (
        <div>
            <div className="table-block">
                <div className="table-header">Edit/Delete Account</div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfAccounts}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EditDeleteTable;
