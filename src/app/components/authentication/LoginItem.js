import React, { Component } from 'react';

class LoginItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }



    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    changePassHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    clickHandler = () => {
        const inputUser = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginHandler(inputUser)
    }

    render() {

        return (
            <div className="topM20px">
                <input onChange={this.changeEmailHandler} value={this.state.email} type="text" placeholder="Email" />
                <input onChange={this.changePassHandler} value={this.state.pass} type="password" placeholder="Password" />
                <button onClick={this.clickHandler} className="btn right blue white-text topM20px">Login</button>
            </div>
        );
    }
}

export { LoginItem };