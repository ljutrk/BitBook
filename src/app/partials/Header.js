import React from 'react';
import { withRouter, Link } from "react-router-dom";
import M from 'materialize-css';
import { logout, isAuthenticated } from '../../shared/utils';
class Header extends React.Component {

    openSideNav = () => {

        const elem = document.querySelector('.sidenav');
        const sideNav = M.Sidenav.init(elem, {
            closeOnClick: true
        });

        sideNav.open();
    }

    loginCheck = () => {
        if (!isAuthenticated()) {
            return
        }

        return <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className={(this.props.history.location.pathname === "/") ? "active" : ""}><Link to="/">Feed</Link></li>
            <li className={(this.props.history.location.pathname === "/people") ? "active" : ""}><Link to="/people">People</Link></li>
            <li className={(this.props.history.location.pathname === "/profile") ? "active" : ""}><Link to="/profile">Profile</Link></li>
            <li onClick={logout}><Link to="/login">Logout</Link></li>
        </ul>

    }

    sidebarLoginCheck = () => {
        if (this.props.history.location.pathname === "/login") {
            return
        }
        return <a onClick={this.openSideNav} data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    }

    render() {

        return (
            <header>
                <nav className="nav-extended">
                    <div className="nav-wrapper container">
                        <Link to={(this.props.history.location.pathname === "/login") ? "/login" : "/"} className="brand-logo">BitBook</Link>
                        {this.sidebarLoginCheck()}
                        {this.loginCheck()}
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link className="sidenav-close" id="feed" to="/">Feed</Link></li>
                    <li><Link className="sidenav-close" id="people" to="/people">People</Link></li>
                    <li><Link className="sidenav-close" id="profile" to="/profile">Profile</Link></li>
                    {this.props.history.location.pathname === "/login" ? "" : <li onClick={logout}><Link className="sidenav-close" id="logout" to="/login">Logout</Link></li>}
                </ul>
            </header>
        );
    }
}

export default withRouter(Header);
