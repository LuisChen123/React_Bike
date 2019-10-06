import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Home from './pages/home';
import Admin from './admin';
import Button from './pages/ui/buttons.js';
import Modals from './pages/ui/modals.js';
import NoMatch from './pages/noMatch';

export default function IRouter() {
    return (
        <HashRouter>
            <Switch>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={() =>
                        <Admin>
                            {/* <Route path="/ui/button" component={Login} /> */}
                            <Switch>
                                <Route  path="/home" component={Home} />
                                <Route  path="/ui/buttons" component={Button} />
                                <Route  path="/ui/modals" component={Modals} />
                                <Route  component={NoMatch} />
                            </Switch>
                          
                        </Admin>

                    } />

                    <Route path="/order/detial" component={Button} />
                </App>
            </Switch>
        </HashRouter>
    )
}