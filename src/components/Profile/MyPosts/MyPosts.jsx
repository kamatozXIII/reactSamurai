import st from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts =() => {
    return (
        <div className={st.item}>
            My posts
            <textarea></textarea>
            <button>Add text</button>
            <div>
                <Post message='Hi, bustard!'/>
                <Post message='It is a first post!'/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts
