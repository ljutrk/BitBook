import React, { Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    OnFeedPage() {
        if (this.props.history.location.pathname === "/") {
            return <li className="nonClickable active" >Feed</li>
        }
        return <li><Link to="/">Feed</Link></li>
    }
    OnPeoplePage() {
        if (this.props.history.location.pathname === "/people") {
            return <li className="nonClickable active" >People</li>
        }
        return <li><Link to="/people">People</Link></li>
    }
    OnProfilePage() {
        if (this.props.history.location.pathname === "/profile") {
            return <li className="nonClickable active" >Profile</li>
        }
        return <li><Link to="/profile">Profile</Link></li>
    }

    render() {
        console.log(this.props.history.location.pathname);

        return (
            <nav className="#039be5 light-blue darken-1" >
                <div className="nav-wrapper container">
                    <Link to='/' className="brand-logo">BitBook</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.OnFeedPage()}
                        {this.OnPeoplePage()}
                        {this.OnProfilePage()}
                    </ul>
                </div>
            </nav>
        )
    }
}
export default withRouter(Header);
