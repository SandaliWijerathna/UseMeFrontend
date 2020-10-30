import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import CustomerReg from './CutomerReg/CustomerReg';
import DeliveryPerson from "./DeliveryPerson/DeliveryPerson";
import FirstView from './FirstView/FirstView';
import history from './history';
import LogIn from "./LogIn/LogIn";
import Registration from "./Registration/Registration";
import shopReg from "./shopReg/shopReg";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={FirstView} />
                    <Route path="/LogIn" component={LogIn} />
                    <Route path="/Reg" component={Registration} />
                    <Route path="/Cust" component={CustomerReg} />
                    <Route path="/Delper" component={DeliveryPerson} />
                    <Route path="/Shop" component={shopReg} />
                    
                </Switch>
            </Router>
        );
    }
}
