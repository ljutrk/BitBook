import React from "react";
import { myFetchGet } from "../../../services/apiService";
import { url } from "../../../shared/constants";
import DeleteButton from "../../partials/DeleteButton";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null
        }
    }

    fetchAvatar = () => {
        const userId = this.props.comment.props.authorId;
        const urlUser = url.baseUrl + url.users + userId;
        return myFetchGet(urlUser);
    }

    componentDidMount() {
        this.fetchAvatar()
            .then(response => this.setState({
                avatar: response.avatarUrl,
                name: response.name
            }));

    }

    render() {
        const { comment } = this.props;

        return (
            <ul className="collection">
                <li className="collection-item avatar">
                    <div>
                        <img src={this.state.avatar} alt="user" className="circle" />
                        <span>{this.state.name}</span>
                    </div>
                    <p>{comment.props.body}</p>
                </li>
            </ul>
        )
    }
}


export { Comment };