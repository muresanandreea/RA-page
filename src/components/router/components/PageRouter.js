import React, {memo} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import {Homepage} from "../../../Homepage/Homepage";
import {About} from "../../../About/About";
import {Portfolio} from "../../../Portofolio/Portofolio";
import {Services} from "../../../Services/Services";

export const PageRouter = memo(props => {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/portfolio">
                <Portfolio/>
            </Route>
            <Route path="/services">
                <Services/>
            </Route>
        </Switch>
    )
})