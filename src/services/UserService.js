import React from 'react';
import { url } from '../shared/constants';
import { myFetchGet } from './apiService';
import { Profile } from "../entities/Profile";
import { headers } from "../shared/constants";

class UserService extends React.Component {

    fetchUsers = () => {
        const usersURL = url.baseUrl + url.users
        const requestOptions = {
            method: 'GET',
            headers
        }

        return fetch(usersURL, requestOptions)
            .then(response => response.json())

    }

    fetchUser = (id) => {
        const api = url.baseUrl + url.users + id;
        return myFetchGet(api)
            .then(response => new Profile(response))
    }
}

export const userService = new UserService();