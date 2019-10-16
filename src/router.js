import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Home from './pages/home';
import Admin from './admin';
import Button from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loading'
import Notices from './pages/ui/notices';
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel'
import RegPage from './pages/reg';
import NoMatch from './pages/noMatch';

export default function IRouter() {
    return (
        <HashRouter>
            <Switch>
                
                <App>
                    <Route path="/" render={() =>
                        <Admin>
                            {/* <Route path="/ui/button" component={Login} /> */}
                            <Switch>
                                <Route path="/login" component={Login} />
                                <Route path="/regPage" component={RegPage} />
                                <Route path="/home" component={Home} />
                                <Route path="/ui/buttons" component={Button} />
                                <Route path="/ui/modals" component={Modals} />
                                <Route path="/ui/loadings" component={Loading} />
                                <Route path="/ui/notification" component={Notices} />
                                <Route path="/ui/messages" component={Message} />
                                <Route path="/ui/tabs" component={Tabs} />
                                <Route path="/ui/gallery" component={Gallery} />
                                <Route path="/ui/carousel" component={Carousel} />
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