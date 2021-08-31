import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from '../features/layouts/MainLayout/Navigation'
import Calendar from './Calendar';
import Chat from './Chat';
import Achievements from "./Achievements";
import GeneralPage from "./GeneralPage";

const PagesSwitcher = () => {
    return (
        <Router>
            <Switch>
                <Route path="/general">
                    <GeneralPage/>
                </Route>
                <Route path="/calendar">
                    <Calendar/>
                </Route>
                <Route path="/chat">
                    <Chat/>
                </Route>
                <Route path="/achievements">
                    <Achievements/>
                </Route>
            </Switch>
            <div className="navigation-wrapper">
                <Navigation/>
            </div>
        </Router>
    )
}

export default PagesSwitcher