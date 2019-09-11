import React from "react";
import "./App.css";
import CommonDetail from "./commonDetail";
import Nonesting from "./nonesting";
import ConfigurableComponent from "./configurablecomponent";
import faker from "faker";
import Main from './PropsChildren/main'

function App() {
  return (
    <div>
      {/*<Nonesting></Nonesting> */}
      {/* Nested components */}
      {/*<CommonDetail></CommonDetail>
      <CommonDetail></CommonDetail>
      <CommonDetail></CommonDetail> */}
      {/*Configurable components */}
      
      <ConfigurableComponent
        author="John"
        date="today at 6:00PM"
        comments="I had great time today"
        avatar={faker.image.avatar()}
      ></ConfigurableComponent>
      <ConfigurableComponent
        author="Sam"
        date="today at 7:00PM"
        comments="The weather is so cool "
        avatar={faker.image.avatar()}
      ></ConfigurableComponent>
      <ConfigurableComponent
        author="Kate"
        date="today at 10:00AM"
        comments="My first day to work"
        avatar={faker.image.avatar()}
      ></ConfigurableComponent>
      <Main></Main>
    </div>
  );
}

export default App;
