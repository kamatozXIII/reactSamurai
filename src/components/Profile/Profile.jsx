import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import st from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__340.jpg'/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;