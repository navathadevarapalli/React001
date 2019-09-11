import React from "react";
import faker from "faker";

const configurableComponent = props => {
  return (
    <div
      className="ui container comments"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.comments}</div>
        </div>
      </div>
    </div>
  );
};

export default configurableComponent;
