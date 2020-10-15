import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import routes from '../config/routes';
import ViewCardsPage from './ViewCardsPage';
import AddCardPage from './AddCardPage';
import EditCardPage from './EditCardPage';

export const Content = () => {
    return (
        <Switch>
            <Route exact path={routes.DEFAULT_ROUTE}>
                <Redirect to={routes.VIEW_CARDS} />
            </Route>
            <Route exact path={routes.VIEW_CARDS}>
                <ViewCardsPage />
            </Route>
            <Route path={routes.ADD_CARD}>
                <AddCardPage />
            </Route>
            <Route path={routes.EDIT_CARD}>
                <EditCardPage />
            </Route>
            <Route>
                <NotFoundPage
                    message={'The page you are looking for does not exist...'}
                    showBackToHome={true}
                />
            </Route>
        </Switch>
    );
};

export default Content;
