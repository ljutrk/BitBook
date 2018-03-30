import React, { Component } from 'react';
import { url } from '../shared/constants';

class UserService extends Component {

    fetchUsers = () => {
        const usersURL = url.baseUrl + url.users
        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            }
        }

        return fetch(usersURL, requestOptions)
            .then(response => response.json())

    }
}

export const userService = new UserService();