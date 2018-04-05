import React, { Component } from 'react';

class LoginItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }



    changeEmailHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    changePassHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    clickHandler = () => {
        const inputUser = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginHandler(inputUser)
    }

    render() {

        return (
            <div>
                <input onChange={this.changeEmailHandler} value={this.state.username} type="text" placeholder="Username" />
                <input onChange={this.changePassHandler} value={this.state.pass} type="password" placeholder="Password" />
                <button onClick={this.clickHandler} className="btn right blue white-text topM20px">Login</button>
            </div>
        );
    }
}

export { LoginItem };