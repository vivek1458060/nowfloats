import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import HomePage from '../components/HomePage';

export const history = createHistory();

const AppRouter = () => ( 
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
