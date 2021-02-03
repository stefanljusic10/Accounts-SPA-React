import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditAccount from "./components/EditDeleteTable/EditAccount/EditAccount";
import EditDeleteTable from "./components/EditDeleteTable/EditDeleteTable";
import Header from "./components/Header/Header";

function App() {

    const [account, setAccount] = useState([
        { id: 1, firstName: "Pera", lastName: "Peric", phone: "11-11-11-11", email: "pera123@pera.com" },
        { id: 2, firstName: "Laza", lastName: "Lazic", phone: "22-22-22-22", email: "laza123@laza.com" },
        { id: 3, firstName: "Kosta", lastName: "Kostic", phone: "33-33-33-33", email: "kosta123@kosta.com" }
    ]);

    const addNewAccount = acc => {
        acc.id = account.length + 1;
        setAccount(prevAccount => prevAccount.concat(acc));
    }

    const saveEditedAccount = acc => {
        const accountForEdit = account.filter(el => el.id == acc.id)[0];
        const index = account.indexOf(accountForEdit);
        const editedAccount = Object.assign(accountForEdit, acc);
        const accountCopy = account;
        accountCopy[index] = editedAccount;
    };

    const deleteAccount = idDeletedAccount => setAccount(prevAccount => prevAccount = prevAccount.filter(el => el.id !== idDeletedAccount));

    return (
        <>
            <BrowserRouter basename="/react">
                <Header />
                <Route path="/" exact>
                    <AccountsTable account={account} />
                </Route>
                <Route path="/add">
                    <AddAccount addNewAccount={addNewAccount} />
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditAccount listOfAccounts={account} saveEditedAccount={saveEditedAccount} />
                    </Route>
                    <Route path="/edit-delete">
                        <EditDeleteTable account={account} deleteAccount={deleteAccount} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;