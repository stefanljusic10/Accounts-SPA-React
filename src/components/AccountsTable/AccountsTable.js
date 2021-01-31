import React from "react";
import Account from "../Account/Account";
import "./AccountsTable.css";

function AccountsTable({ account }) {

    const listOfAccounts = account.map(acc => {
        return (
            <Account account={acc} key={acc.id} />
        )
    })

    return (
        <div className="table-block">
            <div className="table-header">Accounts Table</div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfAccounts}
                </tbody>
            </table>
        </div>
    )
}

export default AccountsTable;