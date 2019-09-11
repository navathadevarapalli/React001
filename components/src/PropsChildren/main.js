import React, { Component } from "react";
import ConfigComponent from "./configcomponent";
import ApprovalCard from "./approvalcard";
import faker from "faker";

const Main = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <ConfigComponent
          author="John"
          date="today at 6:00PM"
          comments="I had great time today"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ConfigComponent
          author="Sam"
          date="today at 9:00PM"
          comments="Had a great evening today"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ConfigComponent
          author="Alex"
          date="today at 9:00AM"
          comments="First day at work"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
export default Main;
