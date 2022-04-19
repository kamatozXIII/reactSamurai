import React from "react";
import st from "./Post.module.css"

const Post = (props) => {
  return(
      <div className={st.item}>
          <img src ='https://i.pinimg.com/564x/8e/a7/4a/8ea74a02c1492721c5c9a06331a0eedc.jpg' />
          {props.message}
          <div>
          <span>Like</span>
          </div>
      </div>
  );
}


export default Post;