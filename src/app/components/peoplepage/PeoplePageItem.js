import React from 'react';

const PeoplePageItem = () => {

    return (
        <div className="row">
            <ul className="collection">
                <li className="collection-item avatar ">
                    <img src="https://assets.hotukdeals.com/assets/img/profile-placeholder_f56af.png" alt="" className="circle" />
                    <span className="right">Last post <br />
                        at 07:53</span>
                    <span className="title">Name Surname</span>
                    <p> Short user description bla bla</p>
                </li>
            </ul>
        </div>
    );
};

export { PeoplePageItem };