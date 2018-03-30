import React from 'react';

const PeoplePageItem = ({ user }) => {

    const getDate = () => {
        const currentDate = new Date();
        const date = new Date(user.lastPostDate);
        const fullDate = `${date.getHours()}:${date.getMinutes()} on ${date.getDate()}.${date.getMonth() + 1}`

        if (currentDate.getDay() !== date.getDay()) {
            return fullDate
        }

        return `${date.getHours()}:${date.getMinutes()}`
    }

    const userPicture = user.avatarUrl ? user.avatarUrl : `https://assets.hotukdeals.com/assets/img/profile-placeholder_f56af.png`

    return (
        <div className="row">
            <ul className="collection">
                <li className="collection-item avatar ">
                    <img src={userPicture} alt="" className="circle" />
                    <span className="right">Last post <br />
                        at {getDate()}</span>
                    <span className="title">{user.name}</span>
                    <p> {user.aboutShort}</p>
                </li>
            </ul>
        </div>
    );
};

export { PeoplePageItem };