import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import Header from "./components/Header/Header";

function App() {

    const [account, setAccount] = useState([
        { id: 1, firstName: "Pera", lastName: "Peric", phone: "11-11-11-11", email: "pera123@pera.com" },
        { id: 2, firstName: "Laza", lastName: "Lazic", phone: "22-22-22-22", email: "laza123@laza.com" },
        { id: 3, firstName: "Kosta", lastName: "Kostic", phone: "33-33-33-33", email: "kosta123@kosta.com" }
    ])

    return (
        <>
            <HashRouter>
                <Header />
                <Route to="/">
                    <AccountsTable account={account} />
                </Route>
            </HashRouter>
        </>
    )
}

export default App;