import React from 'react'
import { isAuthenticated } from '../../shared/utils';
import AuthenticationPage from '../components/authentication/AuthenticationPage';
import { Main } from '../Main';

const Authenticate = () => {

    return (isAuthenticated() ? <Main /> : <AuthenticationPage />)
}

export { Authenticate }