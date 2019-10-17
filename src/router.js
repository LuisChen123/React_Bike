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
import BaseTable from './pages/basicTable';
import NoMatch from './pages/noMatch';

export default function IRouter() {
    return (
        <HashRouter>
            <Switch>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            {/* <Route path="/ui/button" component={Login} /> */}
                            <Switch>
                               
                                <Route path="/admin/home" component={Home} />
                                <Route path="/admin/ui/buttons" component={Button} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loading} />
                                <Route path="/admin/ui/notification" component={Notices} />
                                <Route path="/admin/ui/messages" component={Message} />
                                <Route path="/admin/ui/tabs" component={Tabs} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/carousel" component={Carousel} />
                                <Route path="/admin/form/reg" component={RegPage} />
                                <Route path="/admin/table/basic" component={BaseTable} />
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