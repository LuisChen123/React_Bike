import React  from 'react';
import { HashRouter , Route ,Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Button from './pages/ui/button';

export default function IRouter(){
    return (
            <HashRouter>
            <App>
                <Route path="/login" component={Login}/>
            <Route path="/admin"  render={()=>
                <Admin>
                        <Route path="/admin/ui/button" component={Button} />
                </Admin>
            }/>
                <Route path="/order/detial" component={Login} />
            </App> 
            </HashRouter>     
    )
}