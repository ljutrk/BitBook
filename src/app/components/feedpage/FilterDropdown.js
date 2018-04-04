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
                <div className="filter-feed-holder">
                    <button id="dropdown" className='dropdown-trigger btn' data-target='filterDropdown'>Filter Posts</button>
                </div>
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
