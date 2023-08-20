import React from "react";
import cl from "./PostItem.module.css";

const PostItem = ({ name, title, description }) => {
  return (
    <div className={cl.post_item}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Author: {name}</p>
      <div className={cl.center_button}>
        <button onClick={null}>
          {false ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default PostItem;
