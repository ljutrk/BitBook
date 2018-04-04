import React, { Fragment } from 'react';
import M from 'materialize-css';

class FilterDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const filterDropdown = document.querySelector('#dropdown');
        M.Dropdown.init(filterDropdown);
    }

    clickHandler = (event) => {
        if (event.target.id === "all") {
            this.props.fetchMeStuff()
            return
        }

        this.props.filterPosts(event.target.id)

    }

    render() {
        return (
            <Fragment>
                <button id="dropdown" className='dropdown-trigger btn dropdown-filter' data-target='filterDropdown'>Filter posts</button>

                <ul id='filterDropdown' className='dropdown-content'>
                    <li className="dropdown-items" id="text" onClick={this.clickHandler}>Text Posts</li>
                    <li className="dropdown-items" id="image" onClick={this.clickHandler}>Image Posts</li>
                    <li className="dropdown-items" id="video" onClick={this.clickHandler}>Video Posts</li>
                    <li className="dropdown-items" id="all" onClick={this.clickHandler}>All Posts</li>
                </ul>
            </Fragment>

        );
    }
}

export { FilterDropdown };
