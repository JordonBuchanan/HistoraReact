import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../../Services';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        const currentAdmin = authenticationService.currentAdminValue;
        if(!currentUser && !currentAdmin){
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }} />
)
export const AdminPrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentAdmin = authenticationService.currentAdminValue;
        if(!currentAdmin){
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }} />
)