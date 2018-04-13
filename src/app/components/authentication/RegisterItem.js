import React, { Component } from 'react';

class RegisterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }

    }

    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    changePassHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    clickHandler = () => {
        const inputUser = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.username,
            email: this.state.email
        }
        this.props.registerHandler(inputUser)
        this.setState({ username: "", email: "", password: "" })
    }

    render() {
        return (
            <div>
                <input onChange={this.changeUsernameHandler} value={this.state.username} type="text" placeholder="Username" />
                <input onChange={this.changeEmailHandler} value={this.state.email} type="text" placeholder="Email" />
                <input onChange={this.changePassHandler} value={this.state.password} type="password" placeholder="Password" />
                <button onClick={this.clickHandler} className="btn right blue white-text topM20px">Register</button>
            </div>
        );
    }
}

export { RegisterItem };