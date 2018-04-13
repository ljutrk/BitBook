import React, { Component } from 'react';

class RegisterItem extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button className="btn right blue white-text topM20px">Register</button>
            </div>
        );
    }
}

export { RegisterItem };