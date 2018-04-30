import React, { Component } from 'react';
import { isEmailValid } from '../../../shared/utils';

class RegisterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            showError: false
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
        this.setState({ showError: true })
        const inputUser = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.username,
            email: this.state.email
        }
        if (isEmailValid(this.state.email) && this.state.password.length > 5) {
        this.props.registerHandler(inputUser)            
        this.setState({ showError: false })
        }
        this.setState({ username: "", email: "", password: "" })
    }

    usernameError = () => {
        if (this.state.username.length < 4) { //4 instead of 5 because this.state.uswername has latency 
            return <p className="error">Username must be at least 4 characters long!</p>
        }
    }

    emailError = () => {
        if (!isEmailValid(this.state.email))
            return <p className="error">Not a valid email address! <br/> example: zzz@zzz.com</p>
    }

    passwordError = () => {
        if (this.state.password.length < 6) { //6 instead of 7 because this.state.password has latency 
            return <p className="error">Password must be at least 6 characters long!</p>
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.changeUsernameHandler} value={this.state.username} type="text" placeholder="Username" />
                {this.state.showError ? this.usernameError() : ""}
                <input onChange={this.changeEmailHandler} value={this.state.email} type="text" placeholder="Email" />
                {this.state.showError ? this.emailError() : ""}
                <input onChange={this.changePassHandler} value={this.state.password} type="password" placeholder="Password" />
                {this.state.showError ? this.passwordError() : ""}
                <button onClick={this.clickHandler} className="btn right blue white-text topM20px">Register</button>
            </div>
        );
    }
}

export { RegisterItem };