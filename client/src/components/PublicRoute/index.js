import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const login = require('../utils');

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            login.isLogin() && restricted ?
                <Redirect to="/welltops" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;