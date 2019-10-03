import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Button from './pages/ui/button';
import Modals from './pages/ui/modals'

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
                                <Route exact path="/ui/buttons" component={Button} />
                                <Route exact path="/ui/modals" component={Modals} />
                            </Switch>
                          
                        </Admin>

                    } />

                    <Route path="/order/detial" component={Button} />
                </App>
            </Switch>
        </HashRouter>
    )
}