import React, { Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";
import M from 'materialize-css';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const elem = document.querySelector('.sidenav');
        M.Sidenav.init(elem)
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

    // clickHandler(e) {
    //     e.target.parentElement.classList.add('active', "nonClickable")
    //     console.log(e.target.parentElement.parentElement.childNodes);
    //     console.log(e.target);
    //     // if (e.target.sibiling.classList === "activ") {
    //     //     classList.remove()
    //     // }
    // }

    render() {
        // console.log(this.props.history);
        return (
            <Fragment>
                <nav className="nav-extended #039be5 light-blue darken-1">
                    <div className="nav-wrapper container">
                        <Link to='/' className="brand-logo">BitBook</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {/* <li><Link onClick={this.clickHandler} to="/">Feed</Link></li>
                            <li><Link onClick={this.clickHandler} to="/people">People</Link></li>
                            <li><Link onClick={this.clickHandler} to="/profile">Profile</Link></li> */}
                            {this.OnFeedPage()}
                            {this.OnPeoplePage()}
                            {this.OnProfilePage()}
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </Fragment>

        )
    }
}
export default withRouter(Header);
